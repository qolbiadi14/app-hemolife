import Swal from 'sweetalert2';
import TheHemoLifeDbSource from '../../../data/thehemo-lifedb-source';

const register = {
  async render() {
    return `
      <div class="container pt-5 mt-5">
        <div class="row">
          <div class="col-md-6 pt-3">
            <img src="/images/login_regis/undraw-1.svg" class="card-img-bottom" style:"height: 500px; background-size: cover; background-position: center;">
          </div>
          <div class="col-md-6">
            <h1 class="fw-bold">Sign Up</h1>
            <form id="registerForm">
              <div class="row">
                <div class="col">
                  <label for="nama_lengkap" class="form-label">Nama Lengkap</label>
                  <input type="text" class="form-control" id="nama_lengkap" name="nama_lengkap" required />
                </div>

                <div class="col">
                  <label for="jenis_kelamin" class="form-label">Jenis Kelamin</label>
                  <select
                    name="jenis_kelamin"
                    id="jenis_kelamin"
                    class="form-control"
                    required
                  >

                    <option value="Laki-laki">Laki-laki</option>

                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" name="email" required />
                </div>
                <div class="col">
                  <label for="tgl_lahir" class="form-label">Tanggal Lahir</label>
                  <input type="date" class="form-control" id="tgl_lahir" name="tgl_lahir" required />
                </div>
              </div>
              <div class="row pt-3">
                <div class="col">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" name="password" required />
                </div>
                <div class="col">

              <label for="golongan_darah" class="form-label">Golongan Darah</label>
              <select class="form-select" id="golongan_darah" name="golongan_darah" required>
                <option value="" selected disabled>Pilih Golongan Darah</option>
                <option value="Bsik9">A+</option>
                <option value="GZFAw">B+</option>
                <option value=mloku">AB+</option>
                <option value="RY4t7">O+</option>
                <option value="HOhrZ">B-</option>
                <option value="k_xT6">A-</option>
                <option value="WkfYz">AB-</option>
                <option value="tZT6u">O-</option>
              </select>
            </div>
              </div>
              <div class="row pt-3">
                <div class="col">
                  <label for="kota_kab" class="form-label">Kota/Kab</label>
                  <input type="text" class="form-control" id="kota_kab" name="kota_kab" required />
                </div>
                <div class="col">
                  <label for="no_hp" class="form-label">No Hp</label>
                  <input type="number" class="form-control" id="no_hp" name="no_hp" required />
              </div>


              </div>
              <div class="mt-3">
                <button type="submit" class="btn btn-primary">Daftar</button>
              </div>
            </form>
            <div class="mt-5">
              <h6>Mempunyai Akun? <a href="/#/login">Login Sekarang</a></h6>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const registerForm = document.querySelector('#registerForm');

    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(registerForm);
      const user = {
        nama: formData.get('nama_lengkap'),
        jenis_kelamin: formData.get('jenis_kelamin'),
        email: formData.get('email'),
        tanggal_lahir: formData.get('tgl_lahir'),
        password: formData.get('password'),
        id_gol_darah: formData.get('golongan_darah'),
        alamat: formData.get('kota_kab'),
        no_hp: formData.get('no_hp'),
      };
      try {
        const registerResponse = await TheHemoLifeDbSource.register(user);

        // Handle successful registration
        if (registerResponse.user) {
          Swal.fire(
            'Gagal Dafatar',
            'Anda telah berhasil terdaftar.',
            'error',
          );
        } else {
          // Handle specific error message from server
          Swal.fire(
            'Registrasi Gagal',
            registerResponse.message, // Tampilkan pesan kesalahan dari server
            'error',
          );
        }
      } catch (error) {
        // Handle other errors
        Swal.fire(
          'Registrasi Berhasil',
          'Berhasil Daftar.',
          'success',
        );
        window.location.hash = '#/login';
        console.error('Error during registration:', error);
      }
    });
  },
};

export default register;
