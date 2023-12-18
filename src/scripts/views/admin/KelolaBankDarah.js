import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createKelolaBankDarah } from '../templates/template-creator';

const KelolaBankDarah = {
  async render() {
    try {
      const bankDarahData = await TheHemoLifeDbSource.kelolaBankDarah();
      return `
        <div class="content">
          ${createKelolaBankDarah(null, bankDarahData)}
        </div>
      `;
    } catch (error) {
      console.error('Error rendering KelolaBankDarah:', error);
      // Handle the error or display an error message as needed
      return '<p>Error loading data. Please try again later.</p>';
    }
  },
};

export default KelolaBankDarah;
