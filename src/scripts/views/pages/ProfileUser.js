import Swal from 'sweetalert2';
import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import UrlParser from '../../routes/url-parser';
import {
  createProfileUserTemplate,
  createUpdateProfileTemplate,
} from '../templates/template-creator';

const ProfileUser = {
  async render() {
    return `
     <div class="rounded pt-sm-5">
       <h2 class="display-6 text-center mb-4 mt-5 fw-bold">Profile User</h2>
         <!-- Tambahkan alert di sini -->
      <div id="success-alert" class="alert alert-success d-none" role="alert">
        Profil berhasil diperbarui.
      </div>
      <div id="error-alert" class="alert alert-danger d-none" role="alert">
        Gagal memperbarui profil. Silakan coba lagi.
      </div>
       <div class="card shadow p-5">
         <div class="row">
           <div class="col-md-6 border-md-end">
             <div id="profile-container"></div>
           </div>
           <div class="col-md-6">
             <div class="col-sm-12 personal-info" id="edit-profile-container"></div>
           </div>
         </div>
       </div>
     </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log('Parsed URL:', url);

    try {
      // Ambil data user profile dari API
      const userProfile = await TheHemoLifeDbSource.profileUser();

      console.log('Fetched User Profile:', userProfile);

      // Elemen DOM untuk menampilkan data profile dan form edit
      const profileContainer = document.getElementById('profile-container');
      const editProfileContainer = document.getElementById(
        'edit-profile-container',
      );
      if (userProfile) {
        profileContainer.innerHTML = createProfileUserTemplate(userProfile);

        // Tampilkan form edit profile dengan data awal dari user profile
        editProfileContainer.innerHTML = createUpdateProfileTemplate(userProfile);

        // Tambahkan event listener untuk tombol simpan perubahan
        document.getElementById('save-changes-btn').addEventListener('click', async () => {
          console.log('Save Changes Button Clicked');
          await this.saveChanges();
        });
        // Tambahkan event listener untuk tombol logout dengan konfirmasi
        document.getElementById('logout-btn').addEventListener('click', () => {
          Swal.fire({
            title: 'Apakah Anda yakin ingin logout?',
            showDenyButton: true,
            confirmButtonText: 'Ya',
            denyButtonText: 'Tidak',
          }).then((result) => {
            if (result.isConfirmed) {
              // Lakukan logout dan redirect ke halaman landing
              this.logout();
              window.location.href = '#/landing';
              location.reload();
            }
          });
        });

        document.getElementById('logout-btn').addEventListener('click', () => {
          // Tampilkan alert konfirmasi
          Swal.fire({
            title: 'Apakah Anda yakin ingin logout?',
            showDenyButton: true,
            confirmButtonText: 'Ya',
            denyButtonText: 'Tidak',
          }).then((result) => {
            if (result.isConfirmed) {
              this.logout();
              window.location.href = '#/landing';
              location.reload();
            }
          });
        });
      } else {
        // Tampilkan pesan error jika data user profile tidak ditemukan
        console.error(
          'User tidak ditemukan atau terjadi kesalahan saat mengambil data profil.',
        );
        profileContainer.innerHTML = 'Terjadi kesalahan saat mengambil data profil.';
      }
    } catch (error) {
      console.error('Error rendering profile:', error);
    }
  },
  async logout() {
    console.log('Logging out...');
    // Hapus token dari localStorage atau lakukan operasi logout sesuai kebutuhan
    localStorage.removeItem('userToken');
    console.log('Token removed.');
  },
  showSweetAlert(type, message) {
    Swal.fire({
      icon: type,
      text: message,
      showConfirmButton: false,
      timer: 3000,
    });
  },
  async saveChanges() {
    const updatedData = {
      nama_lengkap: document.getElementById('nama-lengkap-input').value,
      alamat: document.getElementById('alamat-input').value,
      jenis_kelamin: document.getElementById('jenis-kelamin-input').value,
      tanggal_lahir: document.getElementById('tanggal-lahir-input').value,
      sts_volunteer: document.getElementById('flexSwitchCheckDefault').checked
        ? 1
        : 0,
    };

    try {
      const updateResult = await TheHemoLifeDbSource.updateProfileUser(updatedData);
      console.log('Update Response:', updateResult);

      if (
        updateResult
        && updateResult.message === 'User profile updated successfully'
        && updateResult.user !== null
      ) {
        console.log('Profil berhasil diperbarui:', updateResult);
        this.showSweetAlert('success', 'Profil berhasil diperbarui');
      } else {
        console.log('Gagal memperbarui profil:', updateResult);
        this.showSweetAlert('error', 'Gagal memperbarui profil. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      this.showSweetAlert('error', 'Gagal memperbarui profil. Silakan coba lagi.');
    }
  },
};
export default ProfileUser;
