class NavbarComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg" id="menuDrawer">
                <div class="container-fluid">
                <a href="/" class="navbar-brand d-flex align-items-center link-body-emphasis text-decoration-none">
                        <img src="/images/heros/logo.png" alt="Logo" class="d-inline-block align-text-top logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        id="hamburgerButton">
                        <span class="navbar-toggler-icon"></span>
                    </button>
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
                                <a class="nav-link fw-bolder" href="#/cari-sukarelawan">Cari Sukarelawan</a>
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
