import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createKelolaDonorDarah} from '../templates/template-creator';

const KelolaDonorDarah = {
  async render() {
    return `
      <div class="content">
        ${createKelolaDonorDarah()}
      </div>
    `;
  },
    // async afterRender() {
    //     const buttonCari = document.querySelector('#buttonCari'); // Replace with the actual ID or class of your button
    //     const hasilPencarianContainer = document.querySelector('#hasilPencarian');

    //     if (buttonCari && hasilPencarianContainer) {
    //     buttonCari.addEventListener('click', async () => {
    //         const data = await TheHemoLifeDbSource.CariSukarelawan();
    //         console.log('Data:', data);
    //         hasilPencarianContainer.innerHTML = createCariSukarelawanTemplate(data);
    //     });
    //     }
    // },
};

export default KelolaDonorDarah;
