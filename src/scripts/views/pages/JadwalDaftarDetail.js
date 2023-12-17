import UrlParser from '../../routes/url-parser';
import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import {
  createJadwalDetailPMITemplate,
  initializeLeafletMaps,
} from '../templates/template-creator';

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

    // Jika pmi tidak terdefinisi atau null, tampilkan pesan error
    if (!pmi) {
      console.log('Tidak ada data atau data kosong.');
      return;
    }

    // Tambahkan template ke container
    pmiContainer.innerHTML += createJadwalDetailPMITemplate(pmi);

    // Inisialisasi peta Leaflet
    initializeLeafletMaps([pmi]);
  },
};

export default JadwalDaftarDetail;
