import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';

const KelolaBankDarah = {
  async render() {
    return `
      <div class="col py-3">
        <div class="container py-3">
          <h2>Data Bank Darah</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th class="col">No</th>
                  <th class="col-6">Lokasi PMI</th>
                  <th class="text-center col">Jumlah Kantong</th>
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
      const dashboardData = await TheHemoLifeDbSource.dasboardAdmin();
      console.log('Bank Darah Data', dashboardData);

      const tableBody = document.getElementById('tableBody');

      // Clear existing table rows
      tableBody.innerHTML = '';

      // Populate the table with API data
      dashboardData.forEach((item, index) => {
        const row = document.createElement('tr');

        // Create and append table cells
        const nomerCell = document.createElement('td');
        nomerCell.textContent = index + 1; // Assuming you want to display a serial number
        row.appendChild(nomerCell);

        const namaCell = document.createElement('td');
        namaCell.textContent = item.nama_lokasi_pmi;
        row.appendChild(namaCell);

        const kantongCell = document.createElement('td');
        kantongCell.textContent = item.jumlah_kantong_darah;
        row.appendChild(kantongCell);
        kantongCell.classList.add('text-center');

        // Append the row to the table body
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error rendering KelolaBankDarah:', error);
      // Handle the error or display an error message as needed
      return '<p>Error loading data. Please try again later.</p>';
    }
  },
};

export default KelolaBankDarah;
