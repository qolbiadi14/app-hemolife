const createPemohonTemplate = (pemohon) => /* html */ {
  return `
  <div class="card shadow">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
    <div class="card-body">      
      <h5 class="card-title">Pemohon</h5>
      <p class="card-text">${pemohon.nama_pemohon && `Nama : ${pemohon.nama_pemohon}`}</p>
      <p class="card-text">${pemohon.gol_darah && `Pemohom : ${pemohon.gol_darah}`}</p>
      <p class="card-text">${pemohon.alamat && `Alamat : ${pemohon.alamat}`}</p>
      <div class="row">
    <div class="col-md-6 col-sm-12 mb-2">
      <button type="button" id="rejectBtn" class="btn btn-danger reject-btn w-100" data-id_user="1">Tolak</button>
    </div>

    <div class="col-md-6 col-sm-12 mb-2">
      <button type="button" id="acceptBtn" class="btn btn-success accept-btn w-100" data-id_user="1">Terima</button>
    </div>
   </div>
  </div>
`;
};

const createSukarelawanTemplate = (sukarelawan_menerima) => /* html */ `
  <div class="card shadow">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
    <div class="card-body">
      <h5 class="card-title">Sukarelawan</h5>
      <p class="card-text">${sukarelawan_menerima.nama_volunteer}</p>
      <p class="card-text">${sukarelawan_menerima.status}</p>
      <p class="card-text">${sukarelawan_menerima.alamat_volunteer}</p>
      <p class="card-text">${sukarelawan_menerima.gol_darah}</p>
      <a href="https://wa.me/${getFormattedWhatsAppNumber(
        sukarelawan_menerima.no_hp,
      )}" target="_blank" class="btn btn-success w-100">Hubungi Via WhatsApp</a>
     </div>
  </div>
`;

function getFormattedWhatsAppNumber(number) {
  const cleanedNumber = number.replace(/\D/g, '');
  return cleanedNumber.startsWith('62') ? cleanedNumber : `62${cleanedNumber}`;
}

const createPendonoremplate = (pendonor) => /* html */ `
  <div class="card shadow">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
      <div class="card-body">
        <h5 class="card-title">Pendonor</h5>
        <p class="card-text" id="golDarah_${pendonor.id_donor}">${pendonor.gol_darah}</p>
        <p class="card-text" id="lokasiPmi_${pendonor.id_donor}">${pendonor.lokasi_pmi}</p>
        <p class="card-text" id="tanggalDonor_${pendonor.id_donor}">${pendonor.tanggal_donor}</p>
        <button type="button" title="Cetak Bukti Pendaftaran" class="btn btn-primary w-100"><i class="fa-solid fa-file-pdf fa-xl" style="color: #e02424;"></i> Unduh PDF</button>
      </div>
  </div>
`;

const createDasboardTemplate = (data) => /* html */ `
  <div class="movie-item">
    <h1 class="fw-bold">Selamat Datang <span class="text-danger"> ${ data.nama || data.id_user || 'Pengguna'
    } </span></h1>
  </div>
`;
const createJadwalTemplate = (jadwal) => /* html */ `
<div class="row">
  <div class="card shadow">
    <div class="card-body">
      <h3><a href="/#/detail-jadwal-daftar/${jadwal.id_lok_pmi}">${jadwal.nama_lok_pmi}</a></h3>
      <p class="card-text">${jadwal.alamat_pmi}</p>
      <p class="card-text">Start Time: ${jadwal.jadwal_jam_mulai}</p>
      <p class="card-text">End Time: ${jadwal.jadwal_jam_selesai}</p>
      <p class="card-text">Contact: ${jadwal.no_telpon_pmi}</p>
      <p class="card-text">Email: ${jadwal.email}</p>
      <p class="card-text">Latitude: ${jadwal.latitude}</p>
      <p class="card-text">Longitude: ${jadwal.longitude}</p>
      <button type="button" class="btn btn-success w-100" data-id="${jadwal.id_lok_pmi}">Daftar</button>
    </div>
  </div>
</div>
`;
const createJadwalDetailPMITemplate = (pmi) => /* html */ `
 <h2 class="display-6 text-center mb-4 mt-3 fw-bold">Detail<span class="text-danger"> ${pmi.nama_lok_pmi}</span></h2>
  <div class="card shadow">
    <div class="card-body">
      <p class="card-text">${pmi.jumlah_kantong_darah}</p>
      <p class="card-text">${pmi.nama_lok_pmi}</p>
      <p class="card-text">${pmi.alamat_pmi}</p>
      <p class="card-text">${pmi.no_telpon_pmi}</p>
      <p class="card-text">${pmi.email}</p>
      <p class="card-text">${pmi.latitude}</p>
      <p class="card-text">${pmi.longitude}</p>
      <button type="button" class="btn btn-success" data-id="${pmi.id_lok_pmi}">Hubung</button>
    </div>
  </div>
`;

// Template rendering yang diperbarui
const createProfileUserTemplate = (userProfile) => /* html */ `
  <div class="d-flex flex-column align-items-center text-center">
    <img class="rounded-circle" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item"></li>
      <li class="list-group-item">Alamat: ${userProfile.alamat}</li>
      <li class="list-group-item">Jenis Kelamin: ${userProfile.jenis_kelamin}</li>
      <li class="list-group-item pb-5">Tanggal Lahir: ${userProfile.tanggal_lahir}</li>
      <!-- <a href="#/edit-profile/${userProfile.id_user}">Update Profile</a> -->
    </ul>
    <div class="form-check form-switch switch-lg pb-5 pt-3 ">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault">Sukarelawan</label>
  </div>
  </div>
`;

const createUpdateProfileTemplate = (userProfile) => /* html */ `
        <form class="form-horizontal ps-md-5" role="form">
            <div class="form-group">
                <label class="col-lg-12 control-label">Nama Lengkap:</label>
                <div class="col-lg-8">
                    <input id="nama-lengkap-input" class="form-control" type="text" value="${
                      userProfile.nama_lengkap
                    }">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-12 control-label">No. Telp:</label>
                <div class="col-lg-8">
                    <input id="no-telp-input" class="form-control" type="text" value="${
                      userProfile.no_telp
                    }">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-12 control-label">Alamat:</label>
                <div class="col-lg-8">
                    <input id="alamat-input" class="form-control" type="text" value="${
                      userProfile.alamat
                    }">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-12 control-label">Jenis Kelamin:</label>
                <div class="col-lg-8">
                    <input id="jenis-kelamin-input" class="form-control" type="text" value="${
                      userProfile.jenis_kelamin
                    }">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-12 control-label">Tanggal Lahir:</label>
                <div class="col-lg-8">
                    <input id="tanggal-lahir-input" class="form-control" type="date" value="${
                      userProfile.tanggal_lahir
                    }">
                </div>
            </div>
            <!-- Email and Jenis Kelamin sections are commented out -->
            <!-- Uncomment them if needed -->
            <!-- <div class="form-group">
                <label class="col-lg-3 control-label">Email:</label>
                <div class="col-lg-8">
                    <input id="email-input" class="form-control" type="text" value="${
                      userProfile.email
                    }">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-3 control-label">Jenis Kelamin:</label>
                <div class="col-lg-8">
                    <div class="ui-select">
                        <select id="jenis-kelamin-input" class="form-control">
                            <option value="Laki-Laki" ${
                              userProfile.jenis_kelamin === 'Laki-Laki'
                                ? 'selected'
                                : ''
                            }>Laki-Laki</option>
                            <option value="Perempuan" ${
                              userProfile.jenis_kelamin === 'Perempuan'
                                ? 'selected'
                                : ''
                            }>Perempuan</option>
                            <option value="LGBT" ${
                              userProfile.jenis_kelamin === 'LGBT'
                                ? 'selected'
                                : ''
                            }>LGBT</option>
                        </select>
                    </div>
                </div>
            </div> -->
            <div class="form-group">
                <label class="col-md-3 control-label"></label>
                <div class="col-md-8">
                    <button id="save-changes-btn" type="submit" class="btn btn-primary">Save Change</button>
                </div>
            </div>
        </form>
`;

// Template rendering yang diperbarui
const createProfileAdminTemplate = (adminProfile) => /* html */ `
  <div class="d-flex flex-column align-items-center text-center">
    <img class="rounded-circle" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item"></li>
      <li class="list-group-item">Nama Lengkap ${adminProfile.nama_lengkap}</li>
    </ul>
  </div>
`;

const createUpdateProfileAdminTemplate = (adminProfile) => /* html */ `
  <form class="form-horizontal ps-md-5" role="form">
    <div class="form-group">
      <label class="col-lg-12 control-label">Nama Lengkap:</label>
      <div class="col-lg-8">
        <input id="nama-lengkap-input-admin" class="form-control" type="text" value="${adminProfile.nama_lengkap}">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-3 control-label"></label>
      <div class="col-md-8">
        <button id="save-changes-admin-btn" type="submit" class="btn btn-primary">Save Change</button>
      </div>
    </div>
  </form>
`;

// TODO Add tamplaet update notifikasi
const notifikasiTamplateMerima = (notifikasi) => /* html */ `
  <div class="modal-body">
    <h2 class="fs-5">"${Stasus && notifikasi.name} "</h2>
    <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a></p>
  </div>
`;
const notifikasiTamplateMenolak = (notifikasi) => /* html */ `
  <div class="modal-body">
    <h2 class="fs-5">"${Stasus && notifikasi.name} "</h2>
    <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a></p>
  </div>
`;


export {
  createProfileAdminTemplate,
  createUpdateProfileAdminTemplate,
  createSukarelawanTemplate,
  createPemohonTemplate,
  createJadwalTemplate,
  createDasboardTemplate,
  createJadwalDetailPMITemplate,
  createProfileUserTemplate,
  createUpdateProfileTemplate,
  createPendonoremplate,
  notifikasiTamplateMerima,
};
