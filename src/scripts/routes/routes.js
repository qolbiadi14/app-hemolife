import ProfileAdmin from '../views/admin/ProfileAdmin';
import DashboarUser from '../views/pages/DashboarUser';
import JadwalDaftarDonorPMI from '../views/pages/JadawalDonorPMI';
import JadwalDaftarDetail from '../views/pages/JadwalDaftarDetail';
import NotFoundPage from '../views/pages/NotFoundPage';
import ProfileUser from '../views/pages/ProfileUser';

import CariSukarelawan from '../views/pages/CariSukarelawan';
import KelolaDonorDarah from '../views/admin/KelolaDonorDarah';
import Sidebar from '../views/pages/components/sidebar';
import KelolaBankDarah from '../views/admin/KelolaBankDarah';

const routes = {
  '/': DashboarUser,
  '/dashboard-user': DashboarUser,
  '/profile': ProfileUser,
  '/jadwal': JadwalDaftarDonorPMI,
  '/detail-jadwal-daftar/:id': JadwalDaftarDetail,
  '/cari-sukarelawan': CariSukarelawan,
  '/adminprofile': ProfileAdmin,
  '/kelola-donor-darah': KelolaDonorDarah,
  '/sidebar': Sidebar,
  '/kelola-bank-darah': KelolaBankDarah,
};

export default routes;
