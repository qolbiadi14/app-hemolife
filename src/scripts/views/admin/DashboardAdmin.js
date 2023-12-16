import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createDashboardAdmin } from '../templates/template-creator';


const DashboardAdmin = {
  async render() {
    return `
      <div class="content">
        ${createDashboardAdmin()}
      </div>

    `;
  },
};

export default DashboardAdmin;
