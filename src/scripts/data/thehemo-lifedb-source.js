import API_ENDPOINT from '../globals/api-endpoint';

class TheHemoLifeDbSource {

  static async dasboardUser() {
    const response = await fetch(API_ENDPOINT.DASHBOARD_USER);
    const responseJson = await response.json();
    return responseJson;
  }
  static async acceptOrRejectRequest(idUserVolunteer, isAccept) {
    const endpoint = isAccept ? API_ENDPOINT.ACCEPT_REQUEST : API_ENDPOINT.REJECT_REQUEST;

    const requestBody = {
      id_user_volunteer: idUserVolunteer,
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const responseJson = await response.json();

    return responseJson.volunteer;
  }
  
  static async jadwalDonorHemoLife() {
    const response = await fetch(API_ENDPOINT.JADWAL);
    return response.ok ? (await response.json()).jadwal : [];
  }
  static async jadwalDetailDonorDarah(idPmi) {
    const response = await fetch(API_ENDPOINT.JADWAL_DETAIL(idPmi));
    return response.ok ? (await response.json()).pmi : [];
  }
  static async CariSukarelawan() {
  try {
    const response = await fetch(API_ENDPOINT.CARI_SUKARELAWAN);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseJson = await response.json();
    console.log('API Response GET Cari Sukarelawan:', responseJson);
    return responseJson; // Sesuaikan dengan format respons API Anda
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

  static async profileUser(idUser) {
    const response = await fetch(API_ENDPOINT.USER_PROFILE(idUser));
    return response.ok ? (await response.json()).user : [];
  }
  static async updateProfileUser(updatedData) {
    const response = await fetch(
      API_ENDPOINT.UPDATE_PROFILE(updatedData.id_user),
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      },
    );

    return response.ok ? await response.json() : {};
  }

  static async profilAdmin(idAdmin) {
    const response = await fetch(API_ENDPOINT.ADMIN_PROFILE(idAdmin));

    return response.ok ? (await response.json()).admin : {};
  }

  static async updateProfileAdmin(updatedData) {
    const response = await fetch(
      API_ENDPOINT.UPDATE_PROFILE_ADMIN(updatedData.id_admin),
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      },
    );

    return response.ok ? await response.json() : {};
  }
}

export default TheHemoLifeDbSource;
