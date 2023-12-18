class NavbarAdmin extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg" id="menuDrawer">
                <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active fw-bolder" aria-current="page" href="#/dashboard-admin"><i
                                        class="bi bi-home"></i>Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bolder" href="#/kelola-bank-darah" style="white-space: nowrap;">Bank Darah</a>
                            </li>
                            <li class="nav-item">
                             <li class="nav-item">
                                <a class="nav-link fw-bolder" href="#/kelola-donor-darah">Pendonor</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/adminprofile" title="Profile"><i
                                        class="fa-solid fa-circle-user fa-xl" style="color: #e02424;"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
        `;
  }
}

customElements.define('navbar-admin', NavbarAdmin);
