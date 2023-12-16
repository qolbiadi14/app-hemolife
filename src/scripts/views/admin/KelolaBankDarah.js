import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { KelolaBankDarah } from '../templates/template-creator';

const KelolaBankDarah = {
  async render() {
    return `
      <div class="content">
        ${KelolaBankDarah()}
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

export default KelolaBankDarah;
