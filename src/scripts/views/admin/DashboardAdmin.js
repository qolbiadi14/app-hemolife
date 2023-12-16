import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createDashboardAdmin } from '../templates/template-creator';
import Chart from 'chart.js/auto';


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


    document.addEventListener("DOMContentLoaded", function () {
 
      var ctx = document.getElementById('bloodStockChart').getContext('2d');
      var bloodStockChart = new Chart(ctx, {
          type: 'bar', 
          data: {
              labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], 
              datasets: [{
                  label: 'Stok Darah',
                  data: [150, 50, 120, 30, 80, 20, 200, 50], 
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
    });
