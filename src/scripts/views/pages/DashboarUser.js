
import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import {
  createDasboardTemplate,
  createPemohonTemplate,
  createSukarelawanTemplate,
  createPendonoremplate
} from '../templates/template-creator';

const DashboardUser = {
  async render() {
    return `
        <div  class="dashboards pt-sm-5">
        <h2 class="display-6 text-center mb-4 mt-5 fw-bold" id="dashboards"></h2>
        </div>
        <div class="alert alert-warning" role="alert" id="pending-alert" style="display: none;">
        Permintaan dalam proses.
      </div>
        <div class="alert alert-danger" role="alert" id="error-alert" style="display: none;">
        Berhasil Menolak Permintaan
      </div>
      <div class="alert alert-success" role="alert" id="success-alert" style="display: none;">
        Success: Data loaded successfully
      </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" id="main-container"></div>
    `;
  },

  async afterRender() {
    const dataContainer = document.querySelector('#dashboards');
    const mainContainer = document.querySelector('#main-container');
    

    try {
      const response = await TheHemoLifeDbSource.dasboardUser();
      if (response && response.message === 'Success' && response.user) {
        displayData(response);
      } else {
        dataContainer.innerHTML = '<p>Data not available</p>';
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      dataContainer.innerHTML = '<p>Error fetching data</p>';
    }

    function displayData(data) {
      console.log('Data user:', data.user);
      dataContainer.innerHTML = createDasboardTemplate(data.user);

      if (data.sukarelawan_menerima && typeof data.sukarelawan_menerima === 'object') {
        createCardContainer(data.sukarelawan_menerima, createSukarelawanTemplate);
      }

      if (data.pemohon && typeof data.pemohon === 'object') {
        console.log('Data pemohon:', data.pemohon);
        console.log('ID User Volunteer Pemohon:', data.pemohon.id_user);
        createCardContainer(data.pemohon, createPemohonTemplate);
      }

      if (data.pendonor && typeof data.pendonor === 'object') {
        createCardContainer(data.pendonor, createPendonoremplate);
      }

      mainContainer.addEventListener('click', async (event) => {
        if (event.target.id === 'acceptBtn' || event.target.id === 'rejectBtn') {
          // Periksa apakah event.target.dataset.id_user_volunteer atau event.target.dataset.id_user
          const id = event.target.dataset.id_user_volunteer || event.target.dataset.id_user;
          const errorAlert = document.querySelector('#error-alert');
          const successAlert = document.querySelector('#success-alert');
          const pendingAlert = document.querySelector('#pending-alert');
          try {
            if (event.target.id === 'acceptBtn') {
              const response = await TheHemoLifeDbSource.acceptRequest(id);
              handleResponse(response);
              successAlert.textContent = 'Berhasil menerima permintaan.';
              successAlert.style.display = 'block';
              errorAlert.style.display = 'none';
              setTimeout(() => {
                successAlert.style.display = 'none';
              }, 3000);
            } else if (event.target.id === 'rejectBtn') {
              const response = await TheHemoLifeDbSource.rejectRequest(id);
              handleResponse(response);
              pendingAlert.textContent = 'Berhasil menolak permintaan ';
              pendingAlert.style.display = 'block';
              successAlert.style.display = 'none';
              setTimeout(() => {
                pendingAlert.style.display = 'none';
              }, 3000);
              errorAlert.style.display = 'none';
            }
          } catch (error) {
            console.error('Error sending request:', error);
            successAlert.style.display = 'none';
            errorAlert.textContent = 'Gagal menanggapi permintaan.';
            errorAlert.style.display = 'block';
            pendingAlert.style.display = 'none';
          }
        }
      });
    }

    function createCardContainer(dataObject, templateFunction) {
      console.log('Data Object:', dataObject);
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('col');
      cardContainer.innerHTML = templateFunction(dataObject);

      const acceptBtn = cardContainer.querySelector('#acceptBtn');
      const rejectBtn = cardContainer.querySelector('#rejectBtn');

       if (acceptBtn && dataObject.id_user_volunteer) {
        console.log('Dataset acceptBtn:', acceptBtn.dataset.id_user_volunteer);
        acceptBtn.dataset.id_user_volunteer = dataObject.id_user_volunteer;
      }

      if (rejectBtn && dataObject.id_user_volunteer) {
        console.log('Dataset rejectBtn:', rejectBtn.dataset.id_user_volunteer);
        rejectBtn.dataset.id_user_volunteer = dataObject.id_user_volunteer;
      }

      if (acceptBtn && dataObject.id_user) {
        console.log('Dataset acceptBtn:', acceptBtn.dataset.id_user);
        acceptBtn.dataset.id_user = dataObject.id_user;
      }

      if (rejectBtn && dataObject.id_user) {
        console.log('Dataset rejectBtn:', rejectBtn.dataset.id_user);
        rejectBtn.dataset.id_user = dataObject.id_user;
      }

      mainContainer.appendChild(cardContainer);
      return cardContainer;
    }

    function handleResponse(response) {
      console.log('API Response:', response);
    
      if (Array.isArray(response) && response.length > 0 && response[0].id_user_volunteer) {
        console.log('ID User Volunteer Pemohon (handleResponse):', response[0].id_user_volunteer);
      } else {
        console.error('Error:', 'Response is empty or undefined');
      }
    }    
    
  }
};

export default DashboardUser;
