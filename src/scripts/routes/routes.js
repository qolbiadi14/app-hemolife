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
import faq from '../views/pages/faq';

const routes = {
  '/': landing,
  '/dashboard-user': DashboarUser,
  '/profile': ProfileUser,
  '/jadwal': JadwalDaftarDonorPMI,
  '/detail-jadwal-daftar/:id': JadwalDaftarDetail,
  '/cari-sukarelawan': CariSukarelawan,
  '/login': login,
  '/register': register,
  '/landing': landing,
  '/faq': faq,
  '/adminprofile': ProfileAdmin,
  '404': NotFoundPage,
  '/kelola-bank-darah': KelolaBankDarah,
  '/kelola-donor-darah': KelolaDonorDarah,
  '/dashboard-admin': DasboardAdmin,
};

export default routes;
