import L from 'leaflet';
import 'leaflet.control.layers.tree';
import 'leaflet.awesome-markers';

const createPemohonTemplate = (pemohon) => /* html */ 
   `
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

const createSukarelawanTemplate = (sukarelawan_menerima) => /* html */ `
  <div class="card shadow">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
    <div class="card-body">
      <h5 class="card-title">Sukarelawan</h5>
      <p class="card-text">${sukarelawan_menerima.nama_volunteer && `Nama : ${sukarelawan_menerima.nama_volunteer}`}</p>
      <p class="card-text">${sukarelawan_menerima.status && `Status : ${sukarelawan_menerima.status}`}</p>
      <p class="card-text">${sukarelawan_menerima.alamat_volunteer && `Alamat : ${sukarelawan_menerima.alamat_volunteer}`}</p>
      <p class="card-text">${sukarelawan_menerima.gol_darah && `Golongan Darah : ${sukarelawan_menerima.gol_darah}`}</p>
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
  <div class="card shadow" style="position: relative;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
      <div class="card-body">
        <h5 class="card-title">Pendonor</h5>
        <p class="card-text" id="golDarah_${pendonor.id_donor}">${pendonor.gol_darah && `Gol Darah: ${pendonor.gol_darah}`}</p>
        <p class="card-text" id="lokasiPmi_${pendonor.id_donor}">${pendonor.lokasi_pmi && `Lokasi PMI: ${pendonor.lokasi_pmi}`}</p>
        <p class="card-text" id="tanggalDonor_${pendonor.id_donor}">${pendonor.tanggal_donor && `Tanggal Donor: ${pendonor.tanggal_donor}`}</p>
        <button type="button" title="Cetak Bukti Pendaftaran" class="download-pdf-btn btn mb-3 p-3 me-2" data-donor-id="${pendonor.id_donor}" style="position: absolute; bottom: 0; right: 0;">
        <i class="fa-solid fa-circle-arrow-down fa-2xl" style="color: #db3939;"></i>
      </button>
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
<div class="col">
  <div class="card shadow">
    <div class="card-body">
    <div id="map-${jadwal.id_lok_pmi}-container" style="height: 200px; width: 100%;"></div>
     <h3 class="mt-5 fs-2 fw-bold text-danger text-center"><a class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="/#/detail-jadwal-daftar/${jadwal.id_lok_pmi}">${jadwal.nama_lok_pmi}</a></h3>
     <p class="card-text">${jadwal.alamat_pmi && `Alamat : ${jadwal.alamat_pmi}`}</p>
    <p class="card-text">${jadwal.jadwal_jam_mulai && jadwal.jadwal_jam_selesai && `Waktu : ${jadwal.jadwal_jam_mulai} - ${jadwal.jadwal_jam_selesai}`}</p>
    <p class="card-text">${jadwal.no_telpon_pmi && `Kontak : ${jadwal.no_telpon_pmi}`}</p>
    <p class="card-text">${jadwal.email && `Email : ${jadwal.email}`}</p>
      <button type="button" title="Daftar Donor" class="btn btn-outline-danger btn-lg" data-id="${jadwal.id_lok_pmi}">Daftar</button>
    </div>
  </div>
</div>
`;
const createJadwalDetailPMITemplate = (pmi) => /* html */ `
 <h2 class="display-6 text-center mb-4 mt-3 fs-2 fw-bold">Detail<span class="text-danger"> ${pmi.nama_lok_pmi}</span></h2>
  <div class="card shadow">
    <div class="card-body">
      <div id="map-${pmi.id_lok_pmi}-container" style="height: 400px; width: 100%;"></div>
      <p class="card-text mt-5 fs-2 fw-bold text-danger">${pmi.nama_lok_pmi}</p>
      <p class="card-text">${pmi.jumlah_kantong_darah && `Jumlah Kantong Darah: ${pmi.jumlah_kantong_darah}`}</p>
      <p class="card-text">${pmi.alamat_pmi && `Alamat: ${pmi.alamat_pmi}`}</p>
      <p class="card-text">${pmi.no_telpon_pmi && `Nomor Telepon: ${pmi.no_telpon_pmi}`}</p>
      <p class="card-text">${pmi.email && `Email: ${pmi.email}`}</p>
      <a href="mailto:${pmi.email}" class="btn btn-success" data-id="${pmi.id_lok_pmi}">Hubung</a>
    </div>
  </div>
`;
 const initializeLeafletMaps = (jadwals) => {
  jadwals.forEach(({ id_lok_pmi, latitude, longitude, nama_lok_pmi }) => {
    const mapContainer = document.getElementById(`map-${id_lok_pmi}-container`);    
    if (!mapContainer || mapContainer.dataset.leafletInitialized) return;
    const map = L.map(mapContainer, {
      center: [latitude, longitude],
      zoom: 16,
      layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' })]
    });
    L.marker([latitude, longitude]).addTo(map).bindPopup(nama_lok_pmi);
    mapContainer.dataset.leafletInitialized = true;
  });
};

const createCariSukarelawanTemplate = (userProfile) => /* html */`
      <div class="container mt-5">
      <div class="row">
        <!-- Box Pertama: Form Pencarian -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Form Pencarian</h5>
              <form>
                <div class="mb-3">
                  <label for="golonganDarah" class="form-label">Golongan Darah</label>
                  <select class="form-select" id="golonganDarah">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="lokasi" class="form-label">Lokasi</label>
                  <select class="form-select" id="lokasi">
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Jogja">Jogja</option>
                  </select>
                </div>
                <button type="button" id="buttonCari" class="btn btn-primary">Cari</button>
              </form>
            </div>
          </div>
        </div>
        <!-- Box Kedua: Hasil Pencarian -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Hasil Pencarian</h5>
              <div id="hasilPencarian">
                <!-- Hasil pencarian akan ditampilkan di sini -->
              </div>
            </div>
          </div>
        </div>
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
    </ul>
    <div class="logout">
    <button type="button" id="logout-btn" title="LogOut" class="btn mb-3 p-3 me-2" data-donor-id="">
    <i class="fa-solid fa-right-from-bracket fa-2xl" style="color: #db3939;"></i>
      </button>
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
                <input id="tanggal-lahir-input" class="form-control" type="date" value="${formatDate(userProfile.tanggal_lahir)}">
                </div>
            </div>
            <div class="form-check form-switch switch-lg pt-3 ">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Sukarelawan</label>
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
                    <button id="save-changes-btn" type="button" class="btn btn-primary">Save Change</button>
                </div>
            </div>
        </form>
`;
function formatDate(dateString) {
  const date = new Date(dateString);
  return isNaN(date) ? '' : date.toISOString().split('T')[0];
}



const createProfileAdminTemplate = (adminProfile) => /* html */ `
  <div class="d-flex flex-column align-items-center text-center">
    <img class="rounded-circle" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${adminProfile.nama}</li>
      <li class="list-group-item">${adminProfile.email}</li>
      <li class="list-group-item"></li>
    </ul>
  </div>
`;

const createUpdateProfileAdminTemplate = (adminProfile) => /* html */ `
  <form class="form-horizontal ps-md-5" role="form">
    <div class="form-group mb-3">
      <label class="col-lg-12 control-label">Nama :</label>
      <div class="col-lg-8">
        <input id="input-nama-admin" class="form-control" type="text" value="${adminProfile.nama}">
      </div>
    </div>
    <div class="form-group mb-3">
      <label class="col-lg-12 control-label">Email :</label>
      <div class="col-lg-8">
        <input id="input-email-admin" class="form-control" type="email" value="${adminProfile.email}">
      </div>
    </div>
    <div class="form-group">
      <div class="col-md-8">
        <button id="save-changes-admin-btn" type="submit" class="btn btn-primary">Save Change</button>
      </div>
    </div>
  </form>
`;
const Sidebar = (adminProfile) => /* html */ `
<div class="container-fluid">
<div class="row flex-nowrap">
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
      <li class="nav-item">
        <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
          <i class='bx bxs-dashboard'></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
          <i class='bx bxs-institution'></i> <span class="ms-1 d-none d-sm-inline">Bank Darah</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
          <i class='bx bxs-user-check'></i> <span class="ms-1 d-none d-sm-inline">Kelola Darah</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
          <i class='bx bx-id-card' ></i> <span class="ms-1 d-none d-sm-inline">Profil</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
          <i class='bx bx-log-out-circle' ></i> <span class="ms-1 d-none d-sm-inline">Keluar</span>
        </a>
      </li>
    </ul>
        </div>
    </div>
</div>
`;
const KelolaDonorDarah = (adminProfile) => /* html */ `
<div class="col py-3">
            <div class="container py-3">
				<h2>Kelola Donor Darah</h2>
				<form class="form-inline mb-4">
					<label class="sr-only" for="searchInput">Cari Pendonor:</label>
					<input type="text" class="form-control mb-2 mr-sm-2" id="searchInput"
						   placeholder="Masukkan Nama Pendonor">
					<button type="submit" class="btn btn-primary mb-2">Cari</button>
				</form>
				<div class="table-responsive">
					<table class="table table-striped table-sm">
						<thead>
						<tr>
							<th class="col">No</th>
							<th class="col-6">Nama Pendonor</th>
							<th class="col">Jadwal</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="col">1</td>
							<td class="col-6">ARIEL</td>
							<td class="col">SELASA - 12/10/2021</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
</div>
`;
const KelolaBankDarah = (adminProfile) => /* html */ `
<div class="col py-3">
				<div class="container py-3">
					<h2>Kelola Donor Darah</h2>
					<div class="col-md-6">
						<div class="card h-100">
							<div class="card-body">
								<div class="row g-3">
									<div class="col-md-6">
										<div
											class="bg-light rounded-3 p-3 d-flex justify-content-between align-items-center">
											<p class="mb-0">A (+)</p>
											<p class="mb-0">50</p>
											<button type="button" class="btn btn-secondary ms-2">Edit</button>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="bg-light rounded-3 p-3 d-flex justify-content-between align-items-center">
											<p class="mb-0">A (-)</p>
											<p class="mb-0">50</p>
											<button type="button" class="btn btn-secondary ms-2">Edit</button>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="bg-light rounded-3 p-3 d-flex justify-content-between align-items-center">
											<p class="mb-0">B (+)</p>
											<p class="mb-0">50</p>
											<button type="button" class="btn btn-secondary ms-2">Edit</button>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="bg-light rounded-3 p-3 d-flex justify-content-between align-items-center">
											<p class="mb-0">B (+)</p>
											<p class="mb-0">50</p>
											<button type="button" class="btn btn-secondary ms-2">Edit</button>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="bg-light rounded-3 p-3 d-flex justify-content-between align-items-center">
											<p class="mb-0">AB (-)</p>
											<p class="mb-0">50</p>
											<button type="button" class="btn btn-secondary ms-2">Edit</button>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="bg-light rounded-3 p-3 d-flex justify-content-between align-items-center">
											<p class="mb-0">AB (+)</p>
											<p class="mb-0">50</p>
											<button type="button" class="btn btn-secondary ms-2">Edit</button>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="bg-light rounded-3 p-3 d-flex justify-content-between align-items-center">
											<p class="mb-0">0 (-)</p>
											<p class="mb-0">50</p>
											<button type="button" class="btn btn-secondary ms-2">Edit</button>
										</div>
									</div>
									<div class="col-md-6">
										<div
											class="bg-light rounded-3 p-3 d-flex justify-content-between align-items-center">
											<p class="mb-0">0 (+)</p>
											<p class="mb-0">50</p>
											<button type="button" class="btn btn-secondary ms-2">Edit</button>
										</div>
									</div>
									<div class="mt-auto p-3 d-flex justify-content-end">
										<button type="button" class="btn btn-secondary">Edit</button>
										<button type="button" class="btn btn-primary ms-2">Simpan</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
  createCariSukarelawanTemplate,
  initializeLeafletMaps,
  notifikasiTamplateMerima,
  Sidebar,
  KelolaDonorDarah,
  KelolaBankDarah,
};
