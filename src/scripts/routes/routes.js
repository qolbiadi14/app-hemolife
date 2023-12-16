import ProfileAdmin from '../views/admin/ProfileAdmin';
import DashboarUser from '../views/pages/DashboarUser';
import JadwalDaftarDonorPMI from '../views/pages/JadawalDonorPMI';
import JadwalDaftarDetail from '../views/pages/JadwalDaftarDetail';
import NotFoundPage from '../views/pages/NotFoundPage';
import ProfileUser from '../views/pages/ProfileUser';
import CariSukarelawan from '../views/pages/CariSukarelawan';
import KelolaBankDarah from '../views/admin/KelolaBankDarah';
import KelolaDonorDarah from '../views/admin/KelolaDonorDarah';

const routes = {
  '/': DashboarUser,
  '/dashboard-user': DashboarUser,
  '/profile': ProfileUser,
  '/jadwal': JadwalDaftarDonorPMI,
  '/detail-jadwal-daftar/:id': JadwalDaftarDetail,
  '/cari-sukarelawan': CariSukarelawan,
  '/adminprofile': ProfileAdmin,
  '404': NotFoundPage,
  '/kelola-bank-darah': KelolaBankDarah,
  '/kelola-donor-darah': KelolaDonorDarah,
};

export default routes;
