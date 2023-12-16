class SidebarComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid">
  <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                  <span class="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
            <i class='bx bxs-dashboard'></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
            <i class='bx bxs-institution'></i> <span class="ms-1 d-none d-sm-inline">Bank Darah</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
            <i class='bx bxs-user-check'></i> <span class="ms-1 d-none d-sm-inline">Kelola Darah</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
            <i class='bx bx-id-card' ></i> <span class="ms-1 d-none d-sm-inline">Profil</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark align-middle px-0 fs-5">
            <i class='bx bx-log-out-circle' ></i> <span class="ms-1 d-none d-sm-inline">Keluar</span>
          </a>
        </li>
      </ul>
          </div>
      </div>
  </div>
        `;
    }
  }
  
  customElements.define('sidebar-component', SidebarComponent);
  