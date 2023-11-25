import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';
import UrlParser from '../../routes/url-parser';
import { createProfileUserTemplate } from '../templates/template-creator';

const ProfileUser = {
  async render() {
    return `
            <h2>Profile User</h2>
            <div id="profile-container">
          <!-- Data profil pengguna akan ditampilkan di sini -->
        </div>

          `;
  },

 
// TODO Pada fungsi afterRender di dalam ProfileUser
async afterRender() {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  
  try {
    const userProfile = await TheHemoLifeDbSource.profileUser(url.id);
    const profileContainer = document.getElementById('profile-container');
    if (userProfile && userProfile.length > 0) {
      console.log('After Render User Profile:',userProfile);
      profileContainer.innerHTML = createProfileUserTemplate(userProfile[0]);
    } else {
      console.log('User tidak ditemukan atau terjadi kesalahan saat mengambil data profil.');
      profileContainer.innerHTML = 'Terjadi kesalahan saat mengambil data profil.';
    }
  } catch (error) {
    console.error('Error rendering profile:', error);
  }
}
};

export default ProfileUser;
