/* eslint-disable no-unused-vars */
import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import { createCariSukarelawanTemplate } from '../templates/template-creator';

const CariSukarelawan = {
  async render() {
    return `
      <div class="content">
        <h2 class="text-center fw-bolder mb-4">Cari Sukarelawan</h2>
        ${createCariSukarelawanTemplate()}
      </div>
    `;
  },
  async afterRender() {
    const buttonCari = document.querySelector('#buttonCari');
    const hasilPencarianContainer = document.querySelector('#hasilPencarianContainer');

    if (buttonCari && hasilPencarianContainer) {
      buttonCari.addEventListener('click', async () => {
        const golonganDarah = document.querySelector('#golonganDarah').value;
        const lokasi = document.querySelector('#lokasi').value;

        const data = await TheHemoLifeDbSource.CariSukarelawan({ golonganDarah, lokasi });
        console.log('Data:', data);

        // Menampilkan hasil pencarian
        hasilPencarianContainer.innerHTML = createHasilPencarianTemplate(data);
      });
    }
  },
};

const createHasilPencarianTemplate = (users) => {
  let html = '<ul>';
  users.forEach((user, index) => {
    html += `
      <li>
        <strong>Nama:</strong> ${user.nama_volunteer || ''}<br>
        <strong>Golongan Darah:</strong> ${user.gol_darah || ''}<br>
        <strong>Alamat:</strong> ${user.alamat || ''}<br>
        <button onclick="hubungiVolunteer(${index})">Hubungi</button>
      </li>
    `;
  });
  html += '</ul>';
  return html;
};

// Fungsi untuk menangani aksi tombol "Hubungi"
function hubungiVolunteer(index) {
  // Lakukan tindakan yang sesuai, misalnya tampilkan modal atau lakukan pengiriman pesan, dll.
  console.log(`Hubungi sukarelawan ke-${index + 1}`);
}
export default CariSukarelawan;
