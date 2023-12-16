const faq = {
  async render() {
    return `
  
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
      `;
  },
  async afterRender() {},
};

export default faq;