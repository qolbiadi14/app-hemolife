import Swal from 'sweetalert2';
import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import UrlParser from '../../routes/url-parser';
import {
  createProfileAdminTemplate,
  createUpdateProfileAdminTemplate,
} from '../templates/template-creator';

const ProfileAdmin = {
  async render() {
    return `
      <div class="rounded pt-sm-5">
        <h2 class="display-6 text-center mb-4 mt-5 fw-bold">Profile Admin</h2>
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

    try {
      const userProfile = await TheHemoLifeDbSource.profilAdmin(url.id);
      console.log('User Profile:', userProfile);
      const profileContainer = document.getElementById('profile-container');
      const editProfileContainer = document.getElementById(
        'edit-profile-container',
      );

      if (userProfile && userProfile.length > 0) {
        console.log('After Render Admin Profile:', userProfile);
        profileContainer.innerHTML = createProfileAdminTemplate(userProfile[0]);
        editProfileContainer.innerHTML = createUpdateProfileAdminTemplate(
          userProfile[0],
        );

        document
          .getElementById('save-changes-admin-btn')
          .addEventListener('click', async () => {
            await this.saveChanges(userProfile[0].id_admin);
          });

        document
          .getElementById('logout-admin')
          .addEventListener('click', () => {
            // Tampilkan alert konfirmasi
            Swal.fire({
              title: 'Apakah Anda yakin ingin logout?',
              showDenyButton: true,
              confirmButtonText: 'Ya',
              denyButtonText: 'Tidak',
            }).then((result) => {
              if (result.isConfirmed) {
                // Jika pengguna yakin, lakukan logout dan redirect ke halaman "/landing"
                this.logout();
                window.location.href = '#/landing';
                location.reload();
              }
            });
          });
      } else {
        console.log(
          'Admin tidak ditemukan atau terjadi kesalahan saat mengambil data profil.',
        );
        profileContainer.innerHTML = 'Terjadi kesalahan saat mengambil data profil.';
      }
    } catch (error) {
      console.error('Error rendering profile Admin:', error);
    }
  },
  async saveChanges(id) {
    const updatedData = {
      id_admin: id,
      nama: document.getElementById('input-nama-admin').value,
      email: document.getElementById('input-email-admin').value,
      // Add other fields as needed
    };

    try {
      const updateResult =
        await TheHemoLifeDbSource.updateProfileAdmin(updatedData);
      console.log('Update Response:', updateResult);
      if (
        updateResult
        && updateResult.message === 'Admin profile updated successfully'
      ) {
        console.log('Profil Admin berhasil diperbarui:', updateResult.admin[0]);
        this.showBootstrapAlert('success-alert');
      } else {
        console.log('Gagal memperbarui profil Admin:', updateResult);
        this.showBootstrapAlert('error-alert');
      }
    } catch (error) {
      console.error('Error updating profile Admin:', error);
      // console.error('Update Result:', updateResult);
      // Tambahkan baris ini untuk melihat respons yang diterima
      this.showBootstrapAlert('error-alert');
    }
  },
  logout() {
    // Hapus token atau lakukan operasi logout sesuai kebutuhan
    localStorage.removeItem('adminToken');
  },

  showBootstrapAlert(alertId) {
    const alertElement = document.getElementById(alertId);
    alertElement.classList.remove('d-none');

    setTimeout(() => {
      alertElement.classList.add('d-none');
    }, 3000);
  },
};

export default ProfileAdmin;