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
      const userProfile = await TheHemoLifeDbSource.profileUser(url.id);
      const profileContainer = document.getElementById('profile-container');
      const editProfileContainer = document.getElementById(
        'edit-profile-container',
      );

      if (userProfile && userProfile.length > 0) {
        console.log('After Render User Profile:', userProfile);
        profileContainer.innerHTML = createProfileUserTemplate(userProfile[0]);
        editProfileContainer.innerHTML = createUpdateProfileTemplate(
          userProfile[0],
        );

        // Add event listener for saving changes
        document
          .getElementById('save-changes-btn')
          .addEventListener('click', async () => {
            await this.saveChanges(url.id);
          });
        document.getElementById('logout-btn').addEventListener('click', () => {
          // Tampilkan alert konfirmasi
          if (confirm('Apakah Anda yakin ingin logout?')) {
            // Jika pengguna yakin, lakukan logout dan redirect ke halaman "/landing"
            this.logout();
            window.location.href = '#/landing';
            location.reload();
          }
        });
      } else {
        console.log(
          'User tidak ditemukan atau terjadi kesalahan saat mengambil data profil.',
        );
        profileContainer.innerHTML =
          'Terjadi kesalahan saat mengambil data profil.';
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

  async saveChanges(id) {
    const updatedData = {
      // id_user: id,
      nama_lengkap: document.getElementById('nama-lengkap-input').value,
      alamat: document.getElementById('alamat-input').value,
      jenis_kelamin: document.getElementById('jenis-kelamin-input').value,
      tanggal_lahir: document.getElementById('tanggal-lahir-input').value,
      status_volunteer: document.getElementById('flexSwitchCheckDefault')
        .checked
        ? 1
        : 0,
    };

    try {
      const updateResult =
        await TheHemoLifeDbSource.updateProfileUser(updatedData);
      console.log('Update Response:', updateResult);

      if (
        updateResult &&
        updateResult.message === 'Data profil berhasil diperbarui'
      ) {
        console.log('Profil berhasil diperbarui:', updateResult.user[0]);
        this.showBootstrapAlert('success-alert');
      } else {
        console.log('Gagal memperbarui profil:', updateResult);
        this.showBootstrapAlert('error-alert');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      this.showBootstrapAlert('error-alert');
    }
  },
  showBootstrapAlert(alertId) {
    const alertElement = document.getElementById(alertId);
    alertElement.classList.remove('d-none');
    setTimeout(() => {
      alertElement.classList.add('d-none');
    }, 3000);
  },
};

export default ProfileUser;
