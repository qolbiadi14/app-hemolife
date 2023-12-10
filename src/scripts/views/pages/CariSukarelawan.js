import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createCariSukarelawanTemplate } from '../templates/template-creator';

const CariSukarelawan = {
  async render() {
    return `
      <div class="content">
        <h2 class="text-center fw-bolder mb-4">Cari Sukarelawan</h2>
        ${createCariSukarelawanTemplate()}
      </div>
    `;
  },
  async afterRender() {
    const buttonCari = document.querySelector('#buttonCari'); // Replace with the actual ID or class of your button
    const hasilPencarianContainer = document.querySelector('#hasilPencarian');

    if (buttonCari && hasilPencarianContainer) {
      buttonCari.addEventListener('click', async () => {
        const data = await TheHemoLifeDbSource.CariSukarelawan();
        console.log('Data:', data);
        hasilPencarianContainer.innerHTML = createCariSukarelawanTemplate(data);
      });
    }
  },
};

export default CariSukarelawan;
