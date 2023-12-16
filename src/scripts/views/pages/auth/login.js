// login.js
import TheHemoLifeDbSource from '../../../data/thehemo-lifedb-source';
// login.js
import routes from '../../../routes/routes';

const login = {
  async render() {
    return `
        <div class="container login pt-5 mt-5">
          <div class="row">
            <div class="col-md-6 pt-3">
              <img src="/images/login_regis/undraw-1.svg" class="card-img-bottom" style:"height: 500px; background-size: cover; background-position: center;">
            </div>
            <div class="col-md-6">
              <h1 class="fw-bold">Sign In</h1>
              <form id="loginForm">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="password"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
              </form>
              <div class="mt-5">
                <h6>
                  Tidak Mempunyai Akun? <a href="/#/register">Daftar Sekarang</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      `;
  },

  async afterRender() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(loginForm);
      const email = formData.get('email');
      const password = formData.get('password');

      // Jika username dan password adalah "admin", arahkan ke halaman profil admin
      // if (email === 'admin@gmail.com' && password === 'admin') {
      //   TheHemoLifeDbSource.setGlobalAdminToken();
      //   window.location.hash = '/adminProfile';
      //   window.location.reload();
      //   return;
      // }

      try {
        const loginResponse = await TheHemoLifeDbSource.login(email, password);

        if (loginResponse && loginResponse.access_token) {
          localStorage.setItem('userToken', loginResponse.access_token);
          await renderDashboardPage();
        } else {
          console.error('Login failed:', loginResponse);
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    });
  },
};

async function renderDashboardPage() {
  const page = routes['/dashboard-user'];
  if (page) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = await page.render();
    await page.afterRender();
    // window.location.reload();

    window.location.hash = '#/dashboard-user';
    window.location.reload();
  }
}

export default login;
