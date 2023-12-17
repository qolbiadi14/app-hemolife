const landing = {
  async render() {
    if (localStorage.getItem('userToken')) {
      window.location.hash = '#/dashboard-user';
      return '';
    }
    return `
  <div class="container" data-aos="fade-up">
        <div class="row">
        <div class="col-md-6 d-flex" data-aos="fade-up">
            <div class="judul-apk pt-5">
            <div class="sejuta">
                <h1 class="fw-bold ledig-titel" style="color: #ff8989;">
                Satu <span style="color: #ff0000">Tetes</span>
                </h1>
            </div>
            <div class="sejuta">
                <h1 class="fw-bold ledig-titel">
                <span style="color: #ff0000"> Sejuta</span>
                <span style="color: #ff8989">Harapan</span>
                </h1>
            </div>
            <div class="pt-4">
                <p style="color: #ff0000" class="fs-5">
                Mari bergabung untuk harapan yang lebih baik
                </p>
            </div>
            <div class="pt-3">
                <a class="btn btn-danger mr-2" href="/#/login">Donor</a>
            </div>
            </div>
        </div>
        <div class="col-md-6 pt-3" data-aos="fade-up">
            <img src="/images/login_regis/undraw-1.svg" class="card-img-bottom" style:"height: 500px; background-size: cover; background-position: center;">
        </div>
        </div>
        
        <div class="row pt-5 mt-5" data-aos="fade-up">
        <div class="row g-0">
            <div class="col-lg-6">
            <img src="/images/heros/logo.png" class="img-fluid rounded-start" alt="logo">
            </div>
            <div class="col-lg-6">
            <div class="card-body">
                <p class="card-title fs-5 py-5 px-4">
                Melalui website ini, kami berharap dapat meningkatkan jumlah
                pendonor darah, memudahkan akses kepada informasi dan layanan
                donor darah.
                </p>
            </div>
            </div>
        </div>
        </div>
    <!-- end main content -->


    
    <!-- faq -->
    <div class="container faq pt-4 mt-4" data-aos="fade-up">
        <div class="judul-faq">
            <h1 class="text-center">FAQ</h1>
        </div>
        <div class="cardd d-flex justify-content-center mt-5">
            <div class="card" style="width: 40rem">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a data-bs-toggle="collapse" href="#collapseExamplee" role="button" aria-expanded="false"
                            aria-controls="collapseExamplee" style="text-decoration: none; color: #000;">
                            Siapa yang bisa mendonorkan darah?
                        </a>
                        <div class="collapse" id="collapseExamplee">
                            <div class="card card-body">
                                Donor darah memberikan banyak manfaat, baik bagi diri sendiri maupun orang lain. Bagi diri
                                sendiri, donor darah dapat:
                                <ul>
                                    <li>Berusia 17-60 tahun (pendonor rutin bisa sampai 65 tahun)</li>
                                    <li>Berat badan minimal 45 kg</li>
                                    <li>Sehat jasmani dan rohani</li>
                                    <li>Tekanan darah normal (Sistole 100-180 dan Diastole 70-100)</li>
                                    <li>Kadar hemoglobin minimal 12,5 gr/dL</li>
                                    <li>Tidak memiliki penyakit tertentu seperti HIV/AIDS, hepatitis, sifilis, dan lainnya</li>
                                    <li>Telah melewati interval waktu minimal 2 bulan sejak donor darah terakhir</li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item">
                        <a data-bs-toggle="collapse" href="#collapseExampleee6" role="button" aria-expanded="false"
                            aria-controls="collapseExampleee6" style="text-decoration: none; color: #000;">
                            Apa manfaat donor darah?
                        </a>
                        <div class="collapse" id="collapseExampleee6">
                            <div class="card card-body">
                                Donor darah memberikan banyak manfaat, baik bagi diri sendiri maupun orang lain. Bagi diri
                                sendiri, donor darah dapat:
                                <ul>
                                    <li>Menyehatkan jantung dengan memperlancar aliran darah</li>
                                    <li>Merangsang produksi sel darah merah baru</li>
                                    <li>Membantu menurunkan kadar kolesterol jahat</li>
                                    <li>Mendeteksi penyakit tertentu sejak dini</li>
                                </ul>

                                Bagi orang lain, donor darah dapat:
                                <ul>
                                    <li>Menyelamatkan nyawa orang yang membutuhkan transfusi darah, seperti korban kecelakaan,
                                        operasi, dan penderita penyakit tertentu</li>
                                    <li>Memenuhi kebutuhan darah di rumah sakit</li>
                                    <li>Membantu meningkatkan kualitas hidup penderita penyakit tertentu</li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item">
                        <a data-bs-toggle="collapse" href="#collapseExampleee2" role="button" aria-expanded="false"
                            aria-controls="collapseExampleee2" style="text-decoration: none; color: #000;">
                            Berapa banyak darah yang diambil saat donor?
                        </a>
                        <div class="collapse" id="collapseExampleee2">
                            <div class="card card-body">
                                Pada setiap kali donor, akan diambil darah sebanyak 350 ml. Jumlah ini tidak akan
                                mempengaruhi kesehatan Anda karena tubuh akan segera memproduksi sel darah baru untuk
                                menggantikannya.
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item">
                        <a data-bs-toggle="collapse" href="#collapseExampleee3" role="button" aria-expanded="false"
                            aria-controls="collapseExampleee3" style="text-decoration: none; color: #000;">
                            Bagaimana cara menemukan pendonor darah untuk kita?
                        </a>
                        <div class="collapse" id="collapseExampleee3">
                            <div class="card card-body">
                                Dengan cara login pada website ini dengan klik button login yang ada di navbar atas.
                                Kemudian melakukan pendaftaran pada jadwal, tunggu volunteer pendonor melakukan accept
                                pada request anda.
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item">
                        <a data-bs-toggle="collapse" href="#collapseExampleee4" role="button" aria-expanded="false"
                            aria-controls="collapseExampleee4" style="text-decoration: none; color: #000;">
                            Bagaimana cara mendonorkan darah?
                        </a>
                        <div class="collapse" id="collapseExampleee4">
                            <div class="card card-body">
                                <ul>
                                    <li>Login pada website ini dengan cara klik button login pada navbar diatas</li>
                                    <li>Setting profile sebagai volunteer agar dapat menerima request dari pemohon darah</li>
                                    <li>Accept request pemohon darah</li>
                                    <li>Unduh formulir donor darah yang tersedia</li>
                                    <li>Hubungi pemohon dan jadwalkan waktu dan tempat untuk mendonorkan darah</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- end faq -->

    <!-- creator -->
    <div class="container created-by pt-5 mt-5" data-aos="fade-up">
        <h2 class="text-center">Dibuat Oleh</h2>
        <div class="row d-flex justify-content-center pt-4 mt-4" data-aos="fade-up">

        <!-- Card for Ariel -->
        <div class="col-md-3 col-sm-6 mb-3" data-aos="fade-up">
            <div class="card text-center" style="height: 400px;">
                <img src="/images/login_regis/ariel.jpeg" class="card-img-top img-fluid" style="height: 60%; object-fit: cover;" alt="Ariel">
                <div class="card-body">
                    <div>
                        <h5 class="card-title" style="font-size: 1rem;">Muhammad Ariel Ariadi</h5>
                        <p class="card-text text-break" style="font-size: 0.8rem;">Team Leader & Back-End Developer</p>
                    </div>
                    <div class="social-media-mt-3">
                        <a href="https://www.linkedin.com/in/muhammad-ariel-ariadi-a7a2901b2/" target="_blank" class="btn btn-sm"><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/ariell_ard29/?next=%2F" target="_blank" class="btn btn-sm"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card for Dea -->
        <div class="col-md-3 col-sm-6 mb-3" data-aos="fade-up">
            <div class="card text-center" style="height: 400px;">
                <img src="/images/login_regis/dea.jpg" class="card-img-top img-fluid" style="height: 60%; object-fit: cover;" alt="Dea">
                <div class="card-body">
                    <div>
                        <h5 class="card-title" style="font-size: 1rem;">Dea Puspita Anggraeni</h5>
                        <p class="card-text text-break" style="font-size: 0.8rem;">UI/UX & Front-End Developer</p>
                    </div>
                    <div class="social-media-mt-3">
                        <a href="https://www.linkedin.com/in/dea-puspita-/" target="_blank" class="btn"><i class="fab fa-linkedin"></i></a>
                        <a href="https://instagram.com/anggraenideaaa" target="_blank" class="btn"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card for sukrisnaa -->
        <div class="col-md-3 col-sm-6 mb-3" data-aos="fade-up">
            <div class="card text-center" style="height: 400px;">
                <img src="/images/login_regis/sukrisnaa.jpg" class="card-img-top img-fluid" style="height: 60%; object-fit: cover;" alt="sukrisnaa">
                <div class="card-body">
                    <div>
                        <h5 class="card-title" style="font-size: 1rem;">Sukrisna</h5>
                        <p class="card-text text-break" style="font-size: 0.8rem;">UI/UX & Front-End Developer</p>
                    </div>
                    <div class="social-media-mt-3">
                        <a href="http://linkedin.com/in/sukrisna-46a718182" target="_blank" class="btn"><i class="fab fa-linkedin"></i></a>
                        <a href="https://instagram.com/krizero_?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr" target="_blank" class="btn"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card for diyawan -->
        <div class="col-md-3 col-sm-6 mb-3" data-aos="fade-up">
            <div class="card text-center" style="height: 400px;">
                <img src="./images/login_regis/diyawan.jpg" class="card-img-top img-fluid" style="height: 60%; object-fit: cover;" alt="diyawan">
                <div class="card-body">
                    <div>
                        <h5 class="card-title" style="font-size: 1rem;">Diyawan</h5>
                        <p class="card-text text-break" style="font-size: 0.8rem;">Front-End Developer</p>
                    </div>
                    <div class="social-media-mt-3">
                        <a href="https://www.linkedin.com/in/diyawan-diyawan-a22394215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="btn"><i class="fab fa-linkedin"></i></a>
                        <a href="https://instagram.com/diyaw.an?igshid=NGVhN2U2NjQ0Yg==" target="_blank" class="btn"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card for qolbi -->
        <div class="col-md-3 col-sm-6 mb-3" data-aos="fade-up">
            <div class="card text-center" style="height: 400px;">
                <img src="/images/login_regis/qolbi.jpg" class="card-img-top img-fluid" style="height: 60%; object-fit: cover;" alt="qolbi">
                <div class="card-body">
                    <div>
                        <h5 class="card-title" style="font-size: 1rem;">Qolbi Adi Lumintang</h5>
                        <p class="card-text text-break" style="font-size: 0.8rem;">Back-End Developer & DevOps</p>
                    </div>
                    <div class="social-media-mt-3">
                        <a href="https://id.linkedin.com/in/qolbi-adi-lumintang-34332115a" target="_blank" class="btn"><i class="fab fa-linkedin"></i></a>
                        <a href="https://instagram.com/beee.chan?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" class="btn"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
</div>
      `;
  },
  async afterRender() {},
};

export default landing;
