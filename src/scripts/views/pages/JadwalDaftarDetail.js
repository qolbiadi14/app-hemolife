import UrlParser from '../../routes/url-parser';
import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createJadwalDetailPMITemplate, initializeLeafletMaps } from '../templates/template-creator';

const JadwalDaftarDetail = {
  async render() {
    return `
      <div id="pmi" class="pmi"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const pmiContainer = document.querySelector('#pmi');

    const pmi = await TheHemoLifeDbSource.jadwalDetailDonorDarah(url.id);

    // Cek Data Response Render
    console.log('Render Response:', pmi);
    pmi.forEach((jadwal) => {
      pmiContainer.innerHTML += createJadwalDetailPMITemplate(jadwal);
      initializeLeafletMaps([jadwal]);
    });
    // Initialize Leaflet maps

    // Note: If pmi is an empty array or undefined, the forEach loop will simply do nothing.
    console.log('Tidak ada data atau data kosong.');
  },

};

export default JadwalDaftarDetail;
