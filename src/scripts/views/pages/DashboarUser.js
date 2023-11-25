/* eslint-disable no-use-before-define */
import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createDasboardTemplate, createPemohonTemplate } from '../templates/template-creator';

const DashboarUser = {
  async render() {
    return `
      <div class="content">
        <div id="dashboards" class="dashboards">
        </div>
        <h2 class="display-6 text-center mb-4">Compare plans</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div class="col" id="volunteers-container">
            <div class="card">
              <img src="" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Pemohon</h5>
                <button type="button" id="rejectBtn" class="btn btn-danger reject-btn" data-id="">Tolak</button>
                <button type="button" id="acceptBtn" class="btn btn-success accept-btn" data-id="">Terima</button>
              </div>
            </div>
          </div>
          <div class="col">
          </div>
        </div>
        <div class="col">
        </div>
      </div>
    `;
  },
  async afterRender() {
    const data = await TheHemoLifeDbSource.dasboardUser();
    console.log('Data:', data);
    const dataContainer = document.querySelector('#dashboards');
    dataContainer.innerHTML = createDasboardTemplate(data);

    document.getElementById('acceptBtn').addEventListener('click', acceptRequest);
    document.getElementById('rejectBtn').addEventListener('click', rejectRequest);
  },
};


async function acceptRequest() {
  try {
    const response = await TheHemoLifeDbSource.acceptRequest();
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function rejectRequest() {
  try {
    const response = await TheHemoLifeDbSource.rejectRequest();
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default DashboarUser;
