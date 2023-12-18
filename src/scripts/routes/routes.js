import ProfileAdmin from '../views/admin/ProfileAdmin';
import DashboarUser from '../views/pages/DashboarUser';
import JadwalDaftarDonorPMI from '../views/pages/JadawalDonorPMI';
import JadwalDaftarDetail from '../views/pages/JadwalDaftarDetail';
import NotFoundPage from '../views/pages/NotFoundPage';
import ProfileUser from '../views/pages/ProfileUser';
import CariSukarelawan from '../views/pages/CariSukarelawan';
import KelolaBankDarah from '../views/admin/KelolaBankDarah';
import KelolaDonorDarah from '../views/admin/KelolaDonorDarah';
import DasboardAdmin from '../views/admin/DashboardAdmin';
import landing from '../views/pages/landingpage';
import login from '../views/pages/auth/login';
import register from '../views/pages/auth/register';

function isLoggedIn() {
  return localStorage.getItem('userToken') !== null || localStorage.getItem('adminToken') !== null;
}
function isAdminLoggedIn() {
  return localStorage.getItem('adminToken') !== null;
}

const routes = {
  '/': isLoggedIn() ? (isAdminLoggedIn() ? ProfileAdmin : DashboarUser) : landing,
  '/landing': landing,
  '/login': isLoggedIn() ? (isAdminLoggedIn() ? ProfileAdmin : DashboarUser) : login,
  '/register': isLoggedIn() ? (isAdminLoggedIn() ? ProfileAdmin : DashboarUser) : register,
  '/dashboard-user': isLoggedIn() ? (isAdminLoggedIn() ? ProfileAdmin : DashboarUser) : landing,
  '/profile': isLoggedIn() ? (isAdminLoggedIn() ? ProfileAdmin : ProfileUser) : landing,
  '/jadwal': isLoggedIn() ? (isAdminLoggedIn() ? ProfileAdmin : JadwalDaftarDonorPMI) : landing,
  '/detail-jadwal-daftar/:id': isLoggedIn() ? (isAdminLoggedIn() ? ProfileAdmin : JadwalDaftarDetail) : landing,
  '/cari-sukarelawan': isLoggedIn() ? (isAdminLoggedIn() ? ProfileAdmin : CariSukarelawan) : landing,
  '/adminprofile': isLoggedIn() && isAdminLoggedIn() ? ProfileAdmin : landing,
  '/kelola-bank-darah': isLoggedIn() && isAdminLoggedIn() ? KelolaBankDarah : landing,
  '/kelola-donor-darah': isLoggedIn() && isAdminLoggedIn() ? KelolaDonorDarah : landing,
  '/dashboard-admin': isLoggedIn() && isAdminLoggedIn() ? DasboardAdmin : landing,
  '*': NotFoundPage,
};
export default routes;
