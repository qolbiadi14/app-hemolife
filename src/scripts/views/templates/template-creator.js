
const createSukarelawanTemplate = () => /* html */`
  <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
`;

const createDasboardTemplate = (data) => /* html */`
  <div class="movie-item">
    <h1>Selamat Datang ${data.data.nama || data.data.id_user || 'Pengguna'}</h1>
  </div>
`;

const createPemohonTemplate = (volunteer) => /* html */`
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Pemohon</h5>
      <p class="card-text">${volunteer.volunteer.nama_volunteer}</p>
      <p class="card-text">${volunteer.volunteer.gol_darah}</p>
      <p class="card-text">${volunteer.volunteer.alamat_volunteer}</p>
      <button type="button" class="btn btn-success n" data-id="${volunteer.id_user_volunteer}">Hubung</button>
    </div>
  </div>
`;
const createJadwalTemplate = (jadwal) => /* html */`
  <div class="card">
    <div class="card-body">
      <h3><a href="/#/detail-jadwal-daftar/${jadwal.id_lok_pmi}">${jadwal.nama_lok_pmi}</a></h3>
      <p class="card-text">${jadwal.alamat_pmi}</p>
      <p class="card-text">${jadwal.jadwal_jam_mulai}</p>
      <p class="card-text">${jadwal.jadwal_jam_selesai}</p>
      <p class="card-text">${jadwal.latitude}</p>
      <p class="card-text">${jadwal.longitude}</p>
      <button type="button" class="btn btn-success n" data-id="${jadwal.id_lok_pmi}">Hubung</button>
    </div>
  </div>
`;


const createJadwalDetailPMITemplate = (pmi) => /* html */`
  <div class="card">
    <div class="card-body">
      <p class="card-text">${pmi.jumlah_kantong_darah}</p>
      <p class="card-text">${pmi.nama_lok_pmi}</p>
      <p class="card-text">${pmi.alamat_pmi}</p>
      <p class="card-text">${pmi.no_telpon_pmi}</p>
      <p class="card-text">${pmi.email}</p>
      <p class="card-text">${pmi.latitude}</p>
      <p class="card-text">${pmi.longitude}</p>
      <button type="button" class="btn btn-success n" data-id="${pmi.id_lok_pmi}">Hubung</button>
    </div>
  </div>
`;

// Template rendering yang diperbarui
const createProfileUserTemplate = (userProfile) => /* html */ `
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Nama Lengkap: ${userProfile.nama_lengkap}</li>
    <li class="list-group-item">Alamat: ${userProfile.alamat}</li>
    <li class="list-group-item">Jenis Kelamin: ${userProfile.jenis_kelamin}</li>
    <li class="list-group-item">Tanggal Lahir: ${userProfile.tanggal_lahir}</li>
     <a href="#/edit-profile/${userProfile.id_user}">Update Profile</a>
  </ul>
`;

const createUpdateProfileTemplate = (userProfile) => /* html */ `
    <div class="col-md-9 personal-info">
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label class="col-lg-3 control-label">Nama Lengkap:</label>
                <div class="col-lg-8">
                    <input id="nama-lengkap-input" class="form-control" type="text" value="${userProfile.nama_lengkap}">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">No. Telp:</label>
                <div class="col-lg-8">
                    <input id="no-telp-input" class="form-control" type="text" value="${userProfile.no_telp}">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">Alamat:</label>
                <div class="col-lg-8">
                    <input id="alamat-input" class="form-control" type="text" value="${userProfile.alamat}">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">Jenis Kelamin:</label>
                <div class="col-lg-8">
                    <input id="jenis-kelamin-input" class="form-control" type="text" value="${userProfile.jenis_kelamin}">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">Tanggal Lahir:</label>
                <div class="col-lg-8">
                    <input id="tanggal-lahir-input" class="form-control" type="date" value="${userProfile.tanggal_lahir}">
                </div>
            </div>
            <!-- Email and Jenis Kelamin sections are commented out -->
            <!-- Uncomment them if needed -->
            <!-- <div class="form-group">
                <label class="col-lg-3 control-label">Email:</label>
                <div class="col-lg-8">
                    <input id="email-input" class="form-control" type="text" value="${userProfile.email}">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">Jenis Kelamin:</label>
                <div class="col-lg-8">
                    <div class="ui-select">
                        <select id="jenis-kelamin-input" class="form-control">
                            <option value="Laki-Laki" ${userProfile.jenis_kelamin === 'Laki-Laki' ? 'selected' : ''}>Laki-Laki</option>
                            <option value="Perempuan" ${userProfile.jenis_kelamin === 'Perempuan' ? 'selected' : ''}>Perempuan</option>
                            <option value="LGBT" ${userProfile.jenis_kelamin === 'LGBT' ? 'selected' : ''}>LGBT</option>
                        </select>
                    </div>
                </div>
            </div> -->
            <div class="form-group">
                <label class="col-md-3 control-label"></label>
                <div class="col-md-8">
                    <button id="save-changes-btn" type="submit" class="btn btn-primary">Save Change</button>
                    <span></span>
                    <input type="reset" class="btn btn-default" value="Cancel">
                </div>
            </div>
        </form>
    </div>
`;


export {
  createSukarelawanTemplate,
  createPemohonTemplate,
  createJadwalTemplate,
  createDasboardTemplate,
  createJadwalDetailPMITemplate,
  createProfileUserTemplate,
  createUpdateProfileTemplate,
};
