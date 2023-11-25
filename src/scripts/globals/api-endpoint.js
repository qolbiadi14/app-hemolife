import CONFIG from './config';

const API_ENDPOINT = {
 DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,

  // GET
  DASHBOARD_USER: `${CONFIG.HEMO_LIFE_URL}/v1/user/dashboardUser`,

  // POST
  ACCEPT_REQUEST: `${CONFIG.HEMO_LIFE_URL}/v1/user/dashboardUser/acceptRequest`,

  // POST
  REJECT_REQUEST: `${CONFIG.HEMO_LIFE_URL}/v1/user/dashboardUser/rejectRequest`,

  // GET
  JADWAL: `${CONFIG.HEMO_LIFE_URL}/v1/user/jadwal`,

  // GET
  JADWAL_DETAIL: (idPmi) => `${CONFIG.HEMO_LIFE_URL}/v1/user/jadwal/detail/${idPmi}`,

  // POST
  DAFTAR_JADWAL: `${CONFIG.HEMO_LIFE_URL}/v1/user/jadwal/daftar`,
  // GET
  USER_PROFILE: (idUser) => `${CONFIG.HEMO_LIFE_URL}/v1/user/userProfile/${idUser}`,
  // PUT
  UPDATE_PROFILE: (idUser) => `${CONFIG.HEMO_LIFE_URL}/v1/user/userUpdateProfile/${idUser}`,
};

export default API_ENDPOINT;
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
