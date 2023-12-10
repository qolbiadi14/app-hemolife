import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createJadwalTemplate } from '../templates/template-creator';

const JadwalDaftarDonorPMI = {
  async render() {
    return `
      <div class="content pt-sm-5">
        <h2 class="display-6 text-center mb-4 mt-5 fw-bold">Jadwal Daftar Donor PMI</h2>
        <div id="jadwals" class="jadwals row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 m-3"></div>
      </div>
    `;
  },

  async afterRender() {
    const jadwals = await TheHemoLifeDbSource.jadwalDonorHemoLife();
    const jadwalsContainer = document.querySelector('#jadwals');

    jadwals.forEach((jadwal) => {
      jadwalsContainer.innerHTML += createJadwalTemplate(jadwal);
    });
  },
};

export default JadwalDaftarDonorPMI;
