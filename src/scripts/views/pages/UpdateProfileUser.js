import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import UrlParser from '../../routes/url-parser';
import { createUpdateProfileTemplate } from '../templates/template-creator';

const UpdateProfileUser = {
  render() {
    return `
      <h1>Edit Profile</h1>
      <hr>
      <div class="row" id="edit-profile-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const userProfile = await TheHemoLifeDbSource.profileUser(url.id);
      const dataContainer = document.getElementById('edit-profile-container');
      dataContainer.innerHTML = createUpdateProfileTemplate(userProfile);
      console.log('After render Update Profile :', userProfile);
      document.getElementById('save-changes-btn').addEventListener('click', async () => {
        await this.saveChanges(url.id);
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  },

  async saveChanges(id) {
    const updatedData = {
      id_user: id,
      nama_lengkap: document.getElementById('nama-lengkap-input').value,
      alamat: document.getElementById('alamat-input').value,
      jenis_kelamin: document.getElementById('jenis-kelamin-input').value,
      tanggal_lahir: document.getElementById('tanggal-lahir-input').value,
    };

    try {
      const updateResult = await TheHemoLifeDbSource.updateProfileUser(updatedData);
      console.log('Update Response:', updateResult);

      if (updateResult && updateResult.message === "Data profil berhasil diperbarui") {
        console.log('Profil berhasil diperbarui:', updateResult.data[0]);
        alert('Berhasil')
      } else {
        console.log('Gagal memperbarui profil:', updateResult);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  },
};

export default UpdateProfileUser;
