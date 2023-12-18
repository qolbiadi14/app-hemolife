import L from 'leaflet';
import 'leaflet.control.layers.tree';
import 'leaflet.awesome-markers';

const createPemohonTemplate = (pemohon) => /* html */ `
  <div class="card shadow">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
    <div class="card-body">      
      <h5 class="card-title">Pemohon</h5>
      <p class="card-text">Pemohon : ${pemohon.nama_pemohon}</p>
      <p class="card-text">Darah : ${pemohon.gol_darah}</p>
      <p class="card-text">Alamat : ${pemohon.alamat}</p>
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
      <p class="card-text">Voluonter : ${sukarelawan_menerima.nama_volunteer}</p>
      <p class="card-text">Status : ${sukarelawan_menerima.status}</p>
      <p class="card-text">Alamat : ${sukarelawan_menerima.alamat_volunteer}</p>
      <p class="card-text">Darah : ${sukarelawan_menerima.gol_darah}</p>
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
        <p class="card-text">Nama ${pendonor.gol_darah}</p>
        <p class="card-text">Lokasi ${pendonor.lokasi_pmi}</p>
        <p class="card-text">Darah${pendonor.tanggal_donor}</p>
        <button type="button" class="btn btn-success w-100">Cetak pdf Bukti Pendaftran</button>
      </div>
    </div>
`;

const createDasboardTemplate = (data) => /* html */ `
  <div class="movie-item">
    <h1 class="fw-bold">Selamat Datang <span class="text-danger"> ${
  data && data.nama ? data.nama : data && data.id_user ? data.id_user : 'Pengguna'
} </span></h1>
  </div>
`;

const createJadwalTemplate = (data) => /* html */ `
<div class="col">
  <div class="card shadow">
    <div class="card-body">
    <div id="map-${
  data.id_lok_pmi
}-container" style="height: 200px; width: 100%;"></div>
     <h3 class="mt-5 fs-2 fw-bold text-danger text-center"><a class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="/#/detail-jadwal-daftar/${
  data.id_lok_pmi
}">${data.nama_lok_pmi}</a></h3>
     <p class="card-text">${
  data.alamat_pmi && `Alamat : ${data.alamat_pmi}`
}</p>
    <p class="card-text">${
  data.jadwal_jam_mulai
      && data.jadwal_jam_selesai
      && `Waktu : ${data.jadwal_jam_mulai} - ${data.jadwal_jam_selesai}`
}</p>
   
      <button type="button" title="Daftar Donor" class="btn btn-outline-danger btn-lg" data-id="${
  data.id_lok_pmi
}">Daftar</button>
    </div>
  </div>
</div>
`;

const createJadwalDetailPMITemplate = (data) => /* html */ `
 <h2 class="display-6 text-center mb-4 mt-3 fs-2 fw-bold">Detail<span class="text-danger"> ${
  data.nama
}</span></h2>
  <div class="card shadow">
    <div class="card-body">
      <div id="map-${
  data.id_lok_pmi
}-container" style="height: 400px; width: 100%;"></div>
      <p class="card-text mt-5 fs-2 fw-bold text-danger">${data.nama}</p>
      <p class="card-text">${
  data.stok_darah
        && `Jumlah Kantong Darah: ${data.stok_darah
          .map((stok) => `${stok.gol_darah}: ${stok.jumlah_kantong_darah}`)
          .join(', ')}`
}</p>
      <p class="card-text">${data.alamat && `Alamat: ${data.alamat}`}</p>
      <p class="card-text">${
  data.no_telpon && `Nomor Telepon: ${data.no_telpon}`
}</p>
      <a href="mailto:${data.email}" class="btn btn-success" data-id="${
  data.id_lokasi_pmi
}">Hubung</a>
    </div>
  </div>
`;

const initializeLeafletMaps = (jadwals) => {
  jadwals.forEach(({
    id_lok_pmi, latitude, longitude, nama_lok_pmi,
  }) => {
    const mapContainer = document.getElementById(`map-${id_lok_pmi}-container`);
    if (!mapContainer || mapContainer.dataset.leafletInitialized) return;
    const map = L.map(mapContainer, {
      center: [latitude, longitude],
      zoom: 16,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }),
      ],
    });
    L.marker([latitude, longitude]).addTo(map).bindPopup(nama_lok_pmi);
    mapContainer.dataset.leafletInitialized = true;
  });
};

const createProfileUserTemplate = (userProfile) => /* html */ `
  <div class="d-flex flex-column align-items-center text-center">
    <img class="rounded-circle" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${userProfile.nama}</li>
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
  userProfile.nama
}">
                </div>
            </div>
            <div class="form-group">
                <label class="col-lg-12 control-label">No. Telp:</label>
                <div class="col-lg-8">
                    <input id="no-telp-input" class="form-control" type="number" value="${
  userProfile.no_hp
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
                <select id="jenis-kelamin-input" class="form-control">
                  <option value="Laki - laki" ${
  userProfile.jenis_kelamin === 'Laki - laki' ? 'selected' : ''
}>Laki - laki</option>
                  <option value="Perempuan" ${
  userProfile.jenis_kelamin === 'Perempuan' ? 'selected' : ''
}>Perempuan</option>
                </select>
              </div>
            </div>
            <div class="form-group">
                <label class="col-lg-12 control-label">Tanggal Lahir:</label>
                <div class="col-lg-8">
                <input id="tanggal-lahir-input" class="form-control" type="date" value="${formatDate(
    userProfile.tanggal_lahir,
  )}">
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
    <div class="logout">
    <button type="button" id="logout-admin" title="LogOut" class="btn mb-3 p-3 me-2" data-donor-id="">
    <i class="fa-solid fa-right-from-bracket fa-2xl" style="color: #db3939;"></i>
      </button>
    </div>
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
  initializeLeafletMaps,
};
