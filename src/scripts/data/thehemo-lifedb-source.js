import API_ENDPOINT from '../globals/api-endpoint';

let globalUserToken = localStorage.getItem('userToken');
let globalAdminToken = localStorage.getItem('adminToken');

class TheHemoLifeDbSource {
  static setGlobalUserToken(token) {
    globalUserToken = token;
    localStorage.setItem('userToken', token);
  }

  static setGlobalAdminToken(token) {
    globalAdminToken = token;
    localStorage.setItem('adminToken', token);
  }

  // TODO login Fect
  static async login(email, password) {
    const requestBody = {
      email,
      password,
    };

    try {
      const response = await fetch(API_ENDPOINT.LOGIN, {
        mode: 'cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseJson = await response.json();
        console.log('API Response POST Login:', responseJson);
        return responseJson;
      }
      // Handle unsuccessful login
      console.error('Login failed:', response.status);
      throw new Error('Login failed');
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  static async register(user) {
    try {
      const response = await fetch(API_ENDPOINT.REGISTER, {
        // mode: 'cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.status === 201) {
        const responseJson = await response.json();
        console.log('API Response POST Register:', responseJson);
        return responseJson;
      } if (response.status === 409) {
        const responseJson = await response.json();
        console.error('Registration failed:', responseJson.message);
        throw new Error('Registration failed');
      } else {
        console.error('Unexpected error during registration:', response.status);
        throw new Error('Unexpected error during registration');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }

  static async updateProfileUser(updatedData) {
    const response = await fetch(API_ENDPOINT.UPDATE_PROFILE, {
      // mode: 'cors',
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(updatedData),
    });

    return response.ok ? await response.json() : {};
  }

  static async profileUser() {
    const response = await fetch(API_ENDPOINT.USER_PROFILE, {
      // mode: 'cors',
      headers: {
        Authorization: `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response.ok ? (await response.json()).user : [];
  }

  static async profilAdmin() {
    try {
      const response = await fetch(API_ENDPOINT.ADMIN_PROFILE, {
        // mode: 'cors',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${globalAdminToken}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch admin profile');
      }

      const responseData = await response.json();

      if (responseData.message === 'Admin profile retrieved successfully') {
        return [responseData.admin]; // Wrap admin data in an array
      }
      throw new Error('Admin not found');
    } catch (error) {
      console.error('Error fetching admin profile:', error);
      throw error;
    }
  }

  static async updateProfileAdmin(updatedData) {
    const response = await fetch(API_ENDPOINT.UPDATE_PROFILE_ADMIN, {
      // mode: 'cors',
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${globalAdminToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
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
      // mode: 'cors',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
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
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async jadwalDonorHemoLife() {
    const response = await fetch(API_ENDPOINT.JADWAL, {
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
      },
    });
    return response.ok ? (await response.json()).jadwal : [];
  }

  static async daftarJadwalDonorHemoLife(data) {
    const response = await fetch(API_ENDPOINT.DAFTAR_JADWAL, {
      // mode: 'cors',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${globalUserToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  }

  static async jadwalDetailDonorDarah(idPmi) {
    const userToken = globalUserToken || globalAdminToken;
    const response = await fetch(API_ENDPOINT.JADWAL_DETAIL(idPmi), {
      // mode: 'cors',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response.ok ? (await response.json()).pmi : [];
  }
}

export default TheHemoLifeDbSource;
