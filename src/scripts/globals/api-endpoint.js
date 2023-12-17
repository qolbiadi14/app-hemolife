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
  JADWAL_DETAIL: (idPmi) => `${CONFIG.HEMO_LIFE_URL}/v1/user/jadwal/detail/${idPmi}`,

  // POST
  DAFTAR_JADWAL: `${CONFIG.HEMO_LIFE_URL}/v1/user/jadwal/daftar`,
  // GET
  USER_PROFILE: `${CONFIG.HEMO_LIFE_URL}/v1/user/userProfile`,
  // PUT
  UPDATE_PROFILE: `${CONFIG.HEMO_LIFE_URL}/v1/user/userUpdateProfile/Update`,
  ADMIN_PROFILE: `${CONFIG.HEMO_LIFE_URL}/v1/admin/adminProfile`,
  // PUT
  UPDATE_PROFILE_ADMIN: `${CONFIG.HEMO_LIFE_URL}/v1/admin/adminProfile/update`,

  // POST
  LOGIN: `${CONFIG.HEMO_LIFE_URL}/v1/auth/login`,

  // POST
  REGISTER: `${CONFIG.HEMO_LIFE_URL}/v1/auth/register`,
};

export default API_ENDPOINT;
