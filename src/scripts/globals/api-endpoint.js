import CONFIG from './config';

const API_ENDPOINT = {
  // GET
  DASHBOARD_USER: `${CONFIG.HEMO_LIFE_URL}/v1/user/dashboardUser`,

  // POST
  ACCEPT_REQUEST: `${CONFIG.HEMO_LIFE_URL}/v1/user/dashboardUser/acceptRequest`,

  // POST
  REJECT_REQUEST: `${CONFIG.HEMO_LIFE_URL}/v1/user/dashboardUser/rejectRequest`,

  // GET
  JADWAL: `${CONFIG.HEMO_LIFE_URL}/v1/user/jadwal`,

  // GET
  JADWAL_DETAIL: (idPmi) =>
    `${CONFIG.HEMO_LIFE_URL}/v1/user/jadwal/detail/${idPmi}`,

  // POST
  DAFTAR_JADWAL: `${CONFIG.HEMO_LIFE_URL}/v1/user/jadwal/daftar`,
  // GET
  // USER_PROFILE: (idUser) => `${CONFIG.HEMO_LIFE_URL}/v1/user/userProfile/${idUser}`,
  USER_PROFILE: `${CONFIG.HEMO_LIFE_URL}/v1/user/userProfile`,
  // PUT
  UPDATE_PROFILE: `${CONFIG.HEMO_LIFE_URL}/v1/user/userProfile/Update`,
  ADMIN_PROFILE: `${CONFIG.HEMO_LIFE_URL}/v1/admin/adminProfile`,
  // PUT
  UPDATE_PROFILE_ADMIN: `${CONFIG.HEMO_LIFE_URL}/v1/admin/adminProfile/update`,

  // POST
  LOGIN: `${CONFIG.HEMO_LIFE_URL}/v1/auth/login`,
  // post cari sukarelawan
  CARI_SUKARELAWAN: `${CONFIG.HEMO_LIFE_URL}/v1/user/volunteer/search`,

  // POST
  REGISTER: `${CONFIG.HEMO_LIFE_URL}/v1/auth/register`,

  // admindashboard
  DASHBOARD_ADMIN: `${CONFIG.HEMO_LIFE_URL}/v1/admin/dashboardAdmin`,
  // keloladonor darah
  // GET
  KELOLA_PENDONOR_DARAH: `${CONFIG.HEMO_LIFE_URL}/v1/admin/pendonorDarah`,
  // GET
  KELOLA_BANK_DARAH: `${CONFIG.HEMO_LIFE_URL}/v1/admin/kelolaBankDarah`,

};

export default API_ENDPOINT;
// GET
// /v1/admin/adminProfile/{idAdmin}
// Profile admin

// PUT
// /v1/admin/adminUpdateProfile/{idAdmin}

// TODO end point
// GET
// /v1/user/dashboardUser
// Dashboard User

// POST
// /v1/user/dashboardUser/acceptRequest
// Ketika tombol terima di dashboard diklik

// POST
// /v1/user/dashboardUser/rejectRequest
// Ketika tombol tolak di dashboard diklik

// GET
// /v1/user/jadwal
// Jadwal Donor Darah

// GET
// /v1/user/jadwal/detail/{idPmi}
// Detail Jadwal Donor Darah

// POST
// /v1/user/jadwal/daftar
// Daftar Jadwal Donor

// GET
// /v1/user/userProfile/{idUser}
// Profile User

// PUT
// /v1/user/userUpdateProfile/{idUser}
// Update Profile User
