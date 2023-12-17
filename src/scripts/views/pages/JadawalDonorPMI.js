import 'leaflet.control.layers.tree';
import 'leaflet.awesome-markers';
import Swal from 'sweetalert2';

import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import {
  createJadwalTemplate,
  initializeLeafletMaps,
} from '../templates/template-creator';

const JadwalDaftarDonorPMI = {
  jadwals: [],

  async render() {
    return `
      <div class="content">
        <h2 class="display-6 text-center mb-4 mt-5 fw-bold">Jadwal Daftar Donor PMI</h2>
        <div id="alert-container"></div>
        <div id="jadwals" class="jadwals row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 m-3"></div>
      </div>
    `;
  },

  // async afterRender() {
  //   this.jadwals = await TheHemoLifeDbSource.jadwalDonorHemoLife();
  //   console.log('Jadwal Data:', this.jadwals);
  //   const jadwalsContainer = document.querySelector('#jadwals');

  //   jadwalsContainer.innerHTML = '';
  //   this.jadwals.forEach((jadwal) => {
  //     console.log('Current Jadwal:', jadwal);
  //     jadwalsContainer.innerHTML += createJadwalTemplate(jadwal);
  //   });
  //   initializeLeafletMaps(this.jadwals);
  //   jadwalsContainer.removeEventListener('click', this.handleButtonClick);
  //   jadwalsContainer.addEventListener(
  //     'click',
  //     this.handleButtonClick.bind(this),
  //   );
  // },

  async afterRender() {
    try {
      this.jadwals = await TheHemoLifeDbSource.jadwalDonorHemoLife();
      console.log('Jadwal Data:', this.jadwals); // Check if it's defined and contains data

      const jadwalsContainer = document.querySelector('#jadwals');

      jadwalsContainer.innerHTML = '';

      // Use optional chaining if available
      this.jadwals?.forEach((jadwal) => {
        console.log('Current Jadwal:', jadwal);
        jadwalsContainer.innerHTML += createJadwalTemplate(jadwal);
      });

      initializeLeafletMaps(this.jadwals);

      jadwalsContainer.removeEventListener('click', this.handleButtonClick);
      jadwalsContainer.addEventListener(
        'click',
        this.handleButtonClick.bind(this),
      );
    } catch (error) {
      console.error(error); // Handle any errors during promise resolution
    }
  },

  async handleButtonClick(event) {
    if (event.target.dataset.processed) {
      return;
    }

    const targetButton = event.target.closest('.btn-outline-danger');
    if (targetButton) {
      const idLokPmi = targetButton.dataset.id;
      console.log('Clicked Button ID:', idLokPmi);
      const selectedJadwal = this.jadwals.find(
        (jadwal) => jadwal.id_lok_pmi === idLokPmi,
      );
      console.log('Selected Jadwal:', selectedJadwal);

      if (selectedJadwal) {
        const userIdOrOtherIdentifier = selectedJadwal.id_lok_pmi;

        const postData = {
          id_user: userIdOrOtherIdentifier,
          gol_darah: 'A+',
          nama_lok_pmi: selectedJadwal.nama_lok_pmi,
          jadwal_jam_selesai: selectedJadwal.jadwal_jam_selesai,
          jadwal_jam_mulai: selectedJadwal.jadwal_jam_mulai,
          tanggal_donor: '2023-12-10',
          alamat_pmi: selectedJadwal.alamat_pmi,
          no_telpon_pmi: selectedJadwal.no_telpon_pmi,
          email: selectedJadwal.email,
          latitude: selectedJadwal.latitude,
          longitude: selectedJadwal.longitude,
        };

        event.target.dataset.processed = true;

        try {
          const response = await TheHemoLifeDbSource.daftarJadwalDonorHemoLife(postData);
          console.log('Full Response:', response);
          const success = response && response.pendonor && response.pendonor.length > 0;
          const message = success
            ? 'Berhasil mendaftar!'
            : 'Gagal mendaftar. Silakan coba lagi.';
          const type = success ? 'success' : 'danger';
          Swal.fire({
            title: message,
            icon: type,
            showConfirmButton: 'cool',
          });
        } catch (error) {
          console.error('Error during data submission:', error);
          Swal.fire({
            title: 'Terjadi kesalahan. Silakan coba lagi.',
            icon: 'error',
            showConfirmButton: 'cool',
          });
        }
      }
    }
  },
};

export default JadwalDaftarDonorPMI;
