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
            <img src="/images/login_regis/HEMOLIFE 3.png" class="img-fluid rounded-start" alt="...">
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
      `;
  },
  async afterRender() {},
};

export default landing;
