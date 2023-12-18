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
                                <a class="nav-link fw-bolder" href="#/kelola-bank-darah">Bank Darah</a>
                            </li>
                            <li class="nav-item">
                             <li class="nav-item">
                                <a class="nav-link fw-bolder" href="#/kelola-donor-darah">Pendonor</a>
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

customElements.define('navbar-admin', NavbarAdmin);
