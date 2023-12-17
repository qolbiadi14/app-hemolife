// DashboardAdmin.js
import { createDashboardAdmin } from '../templates/template-creator';
import Chart from 'chart.js/auto';

const DashboardAdmin = {
  async render() {
    return `
      <div class="content">
        ${createDashboardAdmin()}
        <!-- Tambahkan elemen canvas untuk chart stok darah -->
        <div class="chart-container">
          <canvas id="bloodStockChart"></canvas>
        </div>
        <!-- Tambahkan elemen canvas untuk chart jumlah pendonor -->
        <div class="chart-container">
          <canvas id="pendonorChart" max-width="400" max-height="400"></canvas>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Inisialisasi chart stok darah setelah halaman selesai dirender
    var ctxBloodStock = document.getElementById('bloodStockChart').getContext('2d');
    var bloodStockChart = new Chart(ctxBloodStock, {
      type: 'bar',
      data: {
        labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        datasets: [
          {
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
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Inisialisasi chart jumlah pendonor setelah halaman selesai dirender
    // var ctxPendonor = document.getElementById('pendonorChart').getContext('2d');
    // var pendonorChart = new Chart(ctxPendonor, {
    //   type: 'pie',
    //   data: {
    //     labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
    //     datasets: [{
    //       label: 'Jumlah Pendonor',
    //       data: [20, 15, 25, 10, 18, 8, 30],
    //       backgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56',
    //         '#4CAF50',
    //         '#9966FF',
    //         '#FF99CC',
    //         '#FFD700',
    //       ],
    //       hoverBackgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56',
    //         '#4CAF50',
    //         '#9966FF',
    //         '#FF99CC',
    //         '#FFD700',
    //       ],
    //     }],
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });
  },
};

export default DashboardAdmin;
