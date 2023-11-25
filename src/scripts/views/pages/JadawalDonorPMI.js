import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createJadwalTemplate } from '../templates/template-creator';

const JadwalDaftarDonorPMI = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Jadwal Daftar Donor PMI</h2>
        <div id="jadwals" class="jadwals">
        </div>
      </div>
    `;
  },
  async afterRender() {
    try {
      const jadwals = await TheHemoLifeDbSource.jadwalDonorHemoLife();
      const jadwalsContainer = document.querySelector('#jadwals');

      console.log('afterRender Response Jawal Donor:', jadwals);

      if (jadwals && jadwals.length > 0) {
        jadwals.forEach((jadwal) => {
          jadwalsContainer.innerHTML += createJadwalTemplate(jadwal);
        });
      } else {
        console.log('Tidak ada data atau data kosong.');
      }
    } catch (err) {
      console.error(`Error saat mengambil data ${err}`);
    }
  },
};


export default JadwalDaftarDonorPMI;
