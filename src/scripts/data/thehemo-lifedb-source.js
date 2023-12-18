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
      }
      if (response.status === 409) {
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
      method: 'PUT',
      headers: {
        Authorization: `${globalUserToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    return response.ok ? await response.json() : {};
  }

  static async profileUser() {
    const response = await fetch(API_ENDPOINT.USER_PROFILE, {
      headers: {
        Authorization: `${globalUserToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response.ok ? (await response.json()).user : [];
  }

  static async profilAdmin() {
    try {
      const response = await fetch(API_ENDPOINT.ADMIN_PROFILE, {
        method: 'GET',
        headers: {
          Authorization: `${globalAdminToken}`,
          'Content-Type': 'application/json',
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
      method: 'PUT',
      headers: {
        Authorization: `${globalAdminToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    return response.ok ? await response.json() : {};
  }

  static async acceptOrRejectRequest(idUserVolunteer, isAccept) {
    const endpoint = isAccept
      ? API_ENDPOINT.ACCEPT_REQUEST
      : API_ENDPOINT.REJECT_REQUEST;
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
        Authorization: `${userToken}`,
        Accept: 'application/json',
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
        Authorization: `${globalUserToken}`,
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    // console.log('GET dashboard User Rensponse:', responseJson);
    return responseJson;
  }

  static async jadwalDonorHemoLife() {
    const response = await fetch(API_ENDPOINT.JADWAL, {
      mode: 'cors',
      headers: {
        Authorization: `${globalUserToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.ok ? (await response.json()).data : [];
  }

  static async daftarJadwalDonorHemoLife(data) {
    const response = await fetch(API_ENDPOINT.DAFTAR_JADWAL, {
      method: 'POST',
      headers: {
        Authorization: `${globalUserToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  }

  static async jadwalDetailDonorDarah(id_lokasi_pmi) {
    const userToken = globalUserToken || globalAdminToken;
    const response = await fetch(API_ENDPOINT.JADWAL_DETAIL(id_lokasi_pmi), {
      headers: {
        Authorization: `${userToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.ok ? (await response.json()).data : [];
  }

  static async CariSukarelawan(golonganDarah, lokasi) {
    try {
      const response = await fetch(API_ENDPOINT.CARI_SUKARELAWAN, {
        method: 'POST',
        headers: {
          Authorization: `${globalUserToken}`, // Sesuaikan dengan token yang diperlukan
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gol_darah: golonganDarah,
          lokasi,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.message === 'Volunteer berhasil ditemukan') {
          return responseData.volunteer; // Sesuaikan dengan struktur data yang diharapkan
        }
        return []; // Tidak ada sukarelawan yang ditemukan
      }
      console.error('Failed to fetch volunteers:', response.status);
      throw new Error('Failed to fetch volunteers');
    } catch (error) {
      console.error('Error during volunteer search:', error);
      throw error;
    }
  }

  static async dasboardAdmin() {
    try {
      const response = await fetch(API_ENDPOINT.DASHBOARD_ADMIN, {
        headers: {
          Authorization: `${globalAdminToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch admin dashboard data');
      }
  
      const responseData = await response.json();
  
      // Adjust the data structure based on the actual response
      const formattedData = responseData.data.map((item) => ({
        nama_lokasi_pmi: item.LokasiPmi.nama, // Access the nested property
        jumlah_kantong_darah: item.jumlah_kantong_darah,
      }));
  
      return formattedData;
    } catch (error) {
      console.error('Error fetching admin dashboard data:', error);
      throw error;
    }
  }
  

  static async kelolaDonorDarah() {
    try {
        const response = await fetch(API_ENDPOINT.KELOLA_PENDONOR_DARAH, {
            headers: {
                Authorization: `${globalAdminToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch blood donor data');
        }

        const responseData = await response.json();

        const formattedData = responseData.pendonor.map((item) => ({
            nama: item.User.nama,
            tgl_donor: item.tgl_donor,
            gol_darah: item.GolDarah.gol_darah,
        }));

        return formattedData;
    } catch (error) {
        console.error('Error fetching blood donor data:', error);
        throw error;
    }
}


  // static async kelolaBankDarah() {
  //   try {
  //     const response = await fetch(API_ENDPOINT.KELOLA_BANK_DARAH, {
  //       headers: {
  //         Authorization: `${globalAdminToken}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch blood donor data');
  //     }
  
  //     const responseData = await response.json();
  
  //     const formattedData = responseData.pendonor.map((item) => ({
  //       id_tra_donor: item.id_tra_donor,
  //       id_user: item.id_user,
  //       id_gol_darah: item.id_gol_darah,
  //       id_lokasi_pmi: item.id_lokasi_pmi,
  //       tgl_donor: item.tgl_donor,
  //       status: item.status,
  //       user: {
  //         id_user: item.User.id_user,
  //         nama: item.User.nama,
  //         email: item.User.email,
  //         no_hp: item.User.no_hp,
  //         jenis_kelamin: item.User.jenis_kelamin,
  //         tanggal_lahir: item.User.tanggal_lahir,
  //         alamat: item.User.alamat,
  //       },
  //       golDarah: {
  //         gol_darah: item.GolDarah.gol_darah,
  //       },
  //       lokasiPmi: {
  //         id_lokasi_pmi: item.LokasiPmi.id_lokasi_pmi,
  //         nama: item.LokasiPmi.nama,  // Tambahkan properti nama atau sesuai kebutuhan
  //         alamat: item.LokasiPmi.alamat,  // Tambahkan properti alamat atau sesuai kebutuhan
  //         // Tambahkan properti lainnya jika diperlukan
  //       },
  //     }));
  
  //     return formattedData;
  //   } catch (error) {
  //     console.error('Error fetching blood donor data:', error);
  //     throw error;
  //   }
  // }
  
}

export default TheHemoLifeDbSource;
