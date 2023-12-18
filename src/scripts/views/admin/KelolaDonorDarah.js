import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createKelolaDonorDarah } from '../templates/template-creator';

const KelolaDonorDarah = {
  async render() {
    try {
      const bloodDonorData = await TheHemoLifeDbSource.kelolaDonorDarah();
      return `
        <div class="content">
          ${createKelolaDonorDarah(bloodDonorData)}
        </div>
      `;
    } catch (error) {
      console.error('Error fetching blood donor data:', error);
      // Handle error, show a message, or redirect as needed
      return `
        <div class="content">
          <p>Error fetching blood donor data. Please try again later.</p>
        </div>
      `;
    }
  },
};

export default KelolaDonorDarah;
