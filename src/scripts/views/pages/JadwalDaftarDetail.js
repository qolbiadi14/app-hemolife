import UrlParser from '../../routes/url-parser';
import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createJadwalDetailPMITemplate } from '../templates/template-creator';

const JadwalDaftarDetail = {
  async render() {
    return `
      <div id="pmi" class="pmi"></div>
    `;
  },


    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      try {
        const pmi = await TheHemoLifeDbSource.jadwalDetailDonorDarah(url.id);
        const pmiContainer = document.querySelector('#pmi');
  
        // Cek Data Response Render
        console.log('Render Response:', pmi);
  
        if (pmi && pmi.length > 0) {
          pmi.forEach((jadwal) => {
            pmiContainer.innerHTML += createJadwalDetailPMITemplate(jadwal);
          });
        } else {
          console.log('Tidak ada data atau data kosong.');
        }
      } catch (err) {
        console.error(`Error saat mengambil data ${err}`);
      }
    },
};


export default JadwalDaftarDetail;
