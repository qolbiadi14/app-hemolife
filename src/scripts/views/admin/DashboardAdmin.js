import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createDashboardAdmin } from '../templates/template-creator';
import Chart from 'chart.js/auto';

const DashboardAdmin = {
  async render() {
    return `
      <div class="content">
        ${createDashboardAdmin()}
        <div class="chart-container">
          <canvas id="bloodStockChart"></canvas>
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const dashboardData = await TheHemoLifeDbSource.dasboardAdmin();
      const chartData = dashboardData.map(data => ({
        label: data.nama_lokasi_pmi.trim() || 'Unknown Location',
        value: data.jumlah_kantong_darah,
      }));

      const canvas = document.getElementById('bloodStockChart');
      const ctx = canvas.getContext('2d');

      // Destroy the existing chart if it exists
      if (canvas.chart) {
        canvas.chart.destroy();
      }

      // Create the chart
      canvas.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartData.map(item => item.label),
          datasets: [{
            label: 'Jumlah Kantong Darah',
            data: chartData.map(item => item.value),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } catch (error) {
      console.error('Error fetching admin dashboard data:', error);
    }
  },
};

export default DashboardAdmin;
