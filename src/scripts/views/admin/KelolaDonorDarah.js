import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createKelolaDonorDarah } from '../templates/template-creator';

const KelolaDonorDarah = {
    async render() {
        return `
        <div class="col py-3">
        <div class="container py-3">
    <h2>Data Donor Darah</h2>
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
        <tr>
          <th class="col">No</th>
          <th class="col-6">Nama Pendonor</th>
          <th class="col">Tanggal</th>
          <th class=" text-center col">Gol Darah</th>
        </tr>
        </thead>
        <tbody id="tableBody">
    <!-- Table content will be dynamically added here -->
</tbody>
      </table>
    </div>
  </div>
</div>
        `;
    },

    async afterRender() {
      try {
        const donorDarahData = await TheHemoLifeDbSource.kelolaDonorDarah();
        console.log('Donor Darah Data:', donorDarahData);
  
        const tableBody = document.getElementById('tableBody');
  
        // Clear existing table rows
        tableBody.innerHTML = '';
  
        // Populate the table with API data
        donorDarahData.forEach((item, index) => {
          const row = document.createElement('tr');
  
          // Create and append table cells
          const nomerCell = document.createElement('td');
          nomerCell.textContent = index + 1; // Assuming you want to display a serial number
          row.appendChild(nomerCell);
  
          const namaCell = document.createElement('td');
          namaCell.textContent = item.nama;
          row.appendChild(namaCell);
  
          const tanggalDonorCell = document.createElement('td');
  
          // Ubah string tanggal menjadi objek Date
          const tanggalDonor = new Date(item.tgl_donor);
  
          // Format tanggal sesuai yang diinginkan (YYYY-MM-DD)
          const formattedTanggalDonor = `${tanggalDonor.getFullYear()}-${(tanggalDonor.getMonth() + 1).toString().padStart(2, '0')}-${tanggalDonor.getDate().toString().padStart(2, '0')}`;
  
          tanggalDonorCell.textContent = formattedTanggalDonor;
          row.appendChild(tanggalDonorCell);
  
          const golDarahCell = document.createElement('td');
          golDarahCell.textContent = item.gol_darah;
          row.appendChild(golDarahCell);
          golDarahCell.classList.add('text-center');

  
          // Append the row to the table body
          tableBody.appendChild(row);
        });
      } catch (error) {
        console.error('Error rendering KelolaDonorDarah:', error);
        // Handle the error or display an error message as needed
        return '<p>Error loading data. Please try again later.</p>';
      }
    }
};

export default KelolaDonorDarah;
