import ProfileAdmin from '../views/admin/ProfileAdmin';
import DashboarUser from '../views/pages/DashboarUser';
import JadwalDaftarDonorPMI from '../views/pages/JadawalDonorPMI';
import JadwalDaftarDetail from '../views/pages/JadwalDaftarDetail';
import ProfileUser from '../views/pages/ProfileUser';
import UpdateProfileUser from '../views/pages/UpdateProfileUser';
import CariSukarelawan from '../views/pages/CariSukarelawan';
import KelolaDonorDarah from '../views/admin/KelolaDonorDarah';
import Sidebar from '../views/pages/components/sidebar';

const routes = {
  '/': DashboarUser,
  '/dashboard-user': DashboarUser,
  '/profile': ProfileUser,
  '/jadwal': JadwalDaftarDonorPMI,
  '/detail-jadwal-daftar/:id': JadwalDaftarDetail,
  '/cari-sukarelawan': CariSukarelawan,
  '/edit-profile/:id': UpdateProfileUser, 
  '/adminprofile': ProfileAdmin,
  '/kelola-donor-darah': KelolaDonorDarah,
  '/sidebar': Sidebar,
};

export default routes;
