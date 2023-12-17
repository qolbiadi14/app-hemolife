import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Swal from 'sweetalert2';

import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import {
  createDasboardTemplate,
  createPemohonTemplate,
  createSukarelawanTemplate,
  createPendonoremplate,
} from '../templates/template-creator';

const DashboardUser = {
  globalUserToken: localStorage.getItem('userToken'), // Include this line
  async render() {
    return `
        <div class="dashboards pt-sm-5">
        <h2 class="display-6 text-center mb-4 mt-5 fw-bold" id="dashboards"></h2>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3" id="main-container"></div>
    `;
  },

  async afterRender() {
    TheHemoLifeDbSource.setGlobalUserToken(this.globalUserToken);
    const dataContainer = document.querySelector('#dashboards');
    const mainContainer = document.querySelector('#main-container');
    const response = await TheHemoLifeDbSource.dasboardUser();
    displayData(response);
    function displayData(data) {
      dataContainer.innerHTML = createDasboardTemplate(data.user);

      data.sukarelawan_menerima?.forEach((sukarelawan) =>
        createCardContainer(sukarelawan, createSukarelawanTemplate));

      data.pemohon?.forEach((pemohon) =>
        createCardContainer(pemohon, createPemohonTemplate));

      data.pendonor
        && createCardContainer(data.pendonor, createPendonoremplate);

      mainContainer.addEventListener('click', async (event) => {
        const targetButton = event.target.closest('.download-pdf-btn');

        if (targetButton) {
          const { donorId } = targetButton.dataset;

          try {
            const pmiDetails = await TheHemoLifeDbSource.jadwalDetailDonorDarah(donorId);

            // Check if pmiDetails is available
            if (pmiDetails && pmiDetails.length > 0) {
              generatePDF({ pendonor: data.pendonor, pmi: pmiDetails });
            }
          } catch (error) {
            console.error('Error generating PDF:', error);
          }
        }
        if (
          event.target.id === 'acceptBtn'
          || event.target.id === 'rejectBtn'
        ) {
          // Periksa apakah event.target.dataset.id_user_volunteer atau event.target.dataset.id_user
          const id = event.target.dataset.id_user_volunteer
            || event.target.dataset.id_user;
          try {
            if (event.target.id === 'acceptBtn') {
              const response = await TheHemoLifeDbSource.acceptOrRejectRequest(
                id,
                true,
              );
              handleResponse(response);
              Swal.fire({
                title: 'Berhasil menerima permintaan.',
                icon: 'success',
                showConfirmButton: 'Cool',
              });
            } else if (event.target.id === 'rejectBtn') {
              const response = await TheHemoLifeDbSource.acceptOrRejectRequest(
                id,
                false,
              );
              handleResponse(response);
              Swal.fire({
                title: 'Berhasil menolak permintaan',
                icon: 'success',
                showConfirmButton: 'Cool',
              });
            }
          } catch (error) {
            Swal.fire({
              title: 'Error!',
              text: 'Gagal Menanggapi Permintaan',
              icon: 'error',
              confirmButtonText: 'Cool',
            });
          }
        }
      });
    }

    function createCardContainer(dataObject, templateFunction) {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('col');
      cardContainer.innerHTML = templateFunction(dataObject);
      ['acceptBtn', 'rejectBtn'].forEach((button) => {
        const btnElement = cardContainer.querySelector(`#${button}`);
        const datasetKey = button.includes('accept')
          ? 'id_user_volunteer'
          : 'id_user';

        if (btnElement && dataObject[datasetKey]) {
          btnElement.dataset[datasetKey] = dataObject[datasetKey];
        }
      });
      mainContainer.appendChild(cardContainer);
      return cardContainer;
    }

    function handleResponse(response) {
      if (
        Array.isArray(response)
        && response.length > 0
        && response[0].id_user_volunteer
      ) {
        console.log(
          'ID User Volunteer Pemohon (handleResponse):',
          response[0].id_user_volunteer,
        );
      } else {
        console.error('Error:', 'Response is empty or undefined');
      }
    }
  },
};

// ...

function generatePDF(data) {
  // console.log('Data for PDF generation:', data);

  if (!data || !data.pendonor || !data.pmi) {
    // console.error('Invalid data for PDF generation.');
    return;
  }
  console.log('Creating PDF...');
  const golDarah = data.pendonor.gol_darah;
  const lokasiPmi = data.pendonor.lokasi_pmi;
  const tanggalDonor = data.pendonor.tanggal_donor;

  const pmiDetails = data.pmi[0];

  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
    floatPrecision: 16,
  });

  doc.setFont('times', 'normal');
  doc.setFontSize(12);
  doc.setFillColor(255, 255, 255);
  doc.rect(
    0,
    0,
    doc.internal.pageSize.width,
    doc.internal.pageSize.height,
    'F',
  );

  doc.setTextColor(33, 33, 33); // Dark gray text color

  // Add title
  doc.setFontSize(18);
  doc.text('Donation Report', doc.internal.pageSize.width / 2, 20, {
    align: 'center',
  });
  doc.setFontSize(12);

  // Add header
  doc.text(
    `PMI Name: ${pmiDetails.nama_lok_pmi}`,
    doc.internal.pageSize.width / 2,
    25,
    { align: 'center' },
  );
  doc.text(
    `PMI Address: ${pmiDetails.alamat_pmi}`,
    doc.internal.pageSize.width / 2,
    30,
    { align: 'center' },
  );
  doc.text(
    `PMI Email: ${pmiDetails.email}`,
    doc.internal.pageSize.width / 2,
    35,
    { align: 'center' },
  );
  doc.text(
    `PMI Phone: ${pmiDetails.no_telpon_pmi}`,
    doc.internal.pageSize.width / 2,
    40,
    { align: 'center' },
  );

  // Add a line to separate header from content
  const lineY = 42;
  doc.line(20, lineY, doc.internal.pageSize.width - 20, lineY);

  doc.text('Donor Information', doc.internal.pageSize.width / 2, lineY + 10, {
    align: 'center',
  });

  // Add donor details
  const donorData = [
    ['Blood Type', golDarah],
    ['Location PMI', lokasiPmi],
    ['Donation Date', tanggalDonor],
  ];

  // Set position for donor details
  const donorDetailsStartY = lineY + 20;
  const donorDetailsStartX = 20;

  // Add donor details as a table
  doc.autoTable({
    startY: donorDetailsStartY,
    startX: donorDetailsStartX,
    head: [['Attribute', 'Value']],
    body: donorData,
    margin: { top: 5 },
  });

  // Add PMI details
  const pmiData = [
    ['PMI Name', pmiDetails.nama_lok_pmi],
    ['PMI Address', pmiDetails.alamat_pmi],
    ['PMI Email', pmiDetails.email],
    ['PMI Phone', pmiDetails.no_telpon_pmi],
    ['PMI Blood Bags', pmiDetails.jumlah_kantong_darah],
    [
      'PMI Location',
      `Latitude ${pmiDetails.latitude}, Longitude ${pmiDetails.longitude}`,
    ],
  ];

  // Set position for PMI details
  const pmiDetailsStartY = doc.autoTable.previous.finalY + 10;

  // Add PMI details as a table
  doc.autoTable({
    startY: pmiDetailsStartY,
    startX: donorDetailsStartX,
    head: [['Attribute', 'Value']],
    body: pmiData,
    margin: { top: 5 },
  });

  // Set file name
  const fileName = `DONORO_${pmiDetails.nama_lok_pmi}_${tanggalDonor.replace(
    /[^a-zA-Z0-9]/g,
    '',
  )}.pdf`;

  // Save the PDF
  doc.save(fileName);
}

// ...

export default DashboardUser;
