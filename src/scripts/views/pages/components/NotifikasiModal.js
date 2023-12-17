class NotifikasiModalComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <li class="nav-item">
                <a class="nav-link" title="Notifikasi" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    data-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-bell"></i>
                </a>
            </li>
    
            <notifikasi-modal></notifikasi-modal>
        `;
  }
}

customElements.define('notifikasi-modal-component', NotifikasiModalComponent);
