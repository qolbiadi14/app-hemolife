import API_ENDPOINT from '../globals/api-endpoint';
let globalUserToken = localStorage.getItem('userToken');
let globalAdminToken = localStorage.getItem('adminToken');

class TheHemoLifeDbSource {

  static setGlobalUserToken(token) {
    globalUserToken = token || 'ururururjrjrj';
    localStorage.setItem('userToken', token || 'ururururjrjrj');
  }

  static setGlobalAdminToken(token) {
    globalAdminToken = token || 'ururururjrjrj';
    localStorage.setItem('adminToken', token || 'ururururjrjrj');
  }

  static async updateProfileUser(updatedData) {
    const response = await fetch(API_ENDPOINT.UPDATE_PROFILE, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    return response.ok ? await response.json() : {};
  }

  static async profileUser(idUser) {
    const response = await fetch(API_ENDPOINT.USER_PROFILE(idUser), {
      headers: {
        'Authorization': `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.ok ? (await response.json()).user : [];
  }

  static async profilAdmin() {
    try {
      const response = await fetch(API_ENDPOINT.ADMIN_PROFILE, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${globalAdminToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch admin profile');
      }

      const responseData = await response.json();

      if (responseData.message === 'Admin profile retrieved successfully') {
        return [responseData.admin]; // Wrap admin data in an array
      } else {
        throw new Error('Admin not found');
      }
    } catch (error) {
      console.error('Error fetching admin profile:', error);
      throw error;
    }
  }

  static async updateProfileAdmin(updatedData) {
    const response = await fetch(API_ENDPOINT.UPDATE_PROFILE_ADMIN, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${globalAdminToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    return response.ok ? await response.json() : {};
  }

  static async acceptOrRejectRequest(idUserVolunteer, isAccept) {
    const endpoint = isAccept ? API_ENDPOINT.ACCEPT_REQUEST : API_ENDPOINT.REJECT_REQUEST;
    const userToken = globalUserToken || globalAdminToken;

    if (!userToken) {
      throw new Error('User/Admin token not available');
    }

    const requestBody = {
      id_user_volunteer: idUserVolunteer,
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Failed to process request: ${response.status}`);
    }

    const responseJson = await response.json();

    return responseJson.volunteer;
  }

  static async dasboardUser() {
    const response = await fetch(API_ENDPOINT.DASHBOARD_USER, {
      headers: {
        'Authorization': `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async jadwalDonorHemoLife() {
    const response = await fetch(API_ENDPOINT.JADWAL, {
      headers: {
        'Authorization': `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.ok ? (await response.json()).jadwal : [];
  }

  static async daftarJadwalDonorHemoLife(data) {
    const response = await fetch(API_ENDPOINT.DAFTAR_JADWAL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  }


  static async jadwalDetailDonorDarah(idPmi) {
    const userToken = globalUserToken || globalAdminToken;
    const response = await fetch(API_ENDPOINT.JADWAL_DETAIL(idPmi), {
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.ok ? (await response.json()).pmi : [];
  }

}

export default TheHemoLifeDbSource;
