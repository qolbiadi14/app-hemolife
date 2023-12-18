class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg" id="menuDrawer">
                <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active fw-bolder" aria-current="page" href="#/dashboard-user"><i
                                        class="bi bi-home"></i>Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bolder" href="#/jadwal">Jadwal</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link fw-bolder" href="#/cari-sukarelawan" style="white-space: nowrap;">Cari Sukarelawan</a>
                        </li>
                        
                            <li class="nav-item">
                                <a class="nav-link" href="#/profile" title="Profile"><i
                                        class="fa-solid fa-circle-user fa-xl" style="color: #e02424;"></i></a>
                            </li>
                            
                        <notifikasi-modal-component></notifikasi-modal-component>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
        `;
  }
}

customElements.define('navbar-component', NavbarComponent);
