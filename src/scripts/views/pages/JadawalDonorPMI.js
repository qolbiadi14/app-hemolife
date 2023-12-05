import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createJadwalTemplate } from '../templates/template-creator';

const JadwalDaftarDonorPMI = {
  async render() {
    return `
      <div class="content pt-sm-5">
        <h2 class="display-6 text-center mb-4 mt-5 fw-bold">Jadwal Daftar Donor PMI</h2>
        <div id="jadwals" class="jadwals row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-3"></div>
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
