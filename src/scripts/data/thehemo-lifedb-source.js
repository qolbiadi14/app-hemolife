import API_ENDPOINT from '../globals/api-endpoint';

class TheHemoLifeDbSource {

  static async dasboardUser() {
    const response = await fetch(API_ENDPOINT.DASHBOARD_USER);
    const responseJson = await response.json();
    console.log('GET dashboard User Rensponse:', responseJson);
    return responseJson;
  }
  static async acceptRequest(idUserVolunteer) {
    const requestBody = {
      id_user_volunteer: idUserVolunteer,
    };
  
    try {
      const response = await fetch(API_ENDPOINT.ACCEPT_REQUEST, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      const responseJson = await response.json();
      console.log('API Response POST acceptRequest Vlonter:', responseJson);
      return responseJson.volunteer;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  static async rejectRequest(idUserVolunteer) {
    const requestBody = {
      id_user_volunteer: idUserVolunteer,
    };
  
    try {
      const response = await fetch(API_ENDPOINT.REJECT_REQUEST, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      const responseJson = await response.json();
      console.log('API Response POST RejcttReques Fluntet:', responseJson);
      return responseJson.volunteer;
    } catch (error) {
      console.error('Error POST Data:', error);
    }
  }
  
  
  static async jadwalDonorHemoLife() {
    const response = await fetch(API_ENDPOINT.JADWAL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseJson = await response.json();
    console.log('API GET Response Jadwal Donor Darah:', responseJson);
    return responseJson.jadwal;
  }
  static async jadwalDetailDonorDarah(idPmi) {
    try {
      const response = await fetch(API_ENDPOINT.JADWAL_DETAIL(idPmi));

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();
      console.log('API Response GET Jadwal Donor Darah:', responseJson);
      return responseJson.pmi;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
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
    try {
      const response = await fetch(API_ENDPOINT.USER_PROFILE(idUser));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseJson = await response.json();
      console.log('API Response GET Profile User:', responseJson);
      return responseJson.user;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  static async updateProfileUser(updatedData) {
    try {
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

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseJson = await response.json();
      console.log('API PUT Response Update Profile', responseJson);
      return responseJson;
    } catch (error) {
      console.error('Error Update Profile:', error);
      throw error;
    }
  }
}

export default TheHemoLifeDbSource;
