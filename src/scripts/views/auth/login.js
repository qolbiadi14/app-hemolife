// login.js
import TheHemoLifeDbSource from '../../data/thehemo-lifedb-source';

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

      try {
        const loginResponse = await TheHemoLifeDbSource.login(email, password);

        // Handle successful login, e.g., store the token in localStorage
        console.log('Login successful:', loginResponse);

        // Redirect to the landing page
        window.location.hash = '#/landing';
      } catch (error) {
        // Handle unsuccessful login or error
        console.error('Login failed:', error);
      }
    });
  },
};

export default login;
