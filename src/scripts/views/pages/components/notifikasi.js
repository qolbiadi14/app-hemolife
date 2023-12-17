/* eslint-disable class-methods-use-this */
import API_ENDPOINT from '../../../globals/api-endpoint';

class NotifikasiModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async fetchDataAndDisplay() {
    const response = await fetch(API_ENDPOINT.DASHBOARD_USER);
    const data = await response.json();
    // .catch(error => {
    //     console.error('Error fetching data:', error);
    //     alert('Error fetching data');
    // });

    const modalContent = this.generateModalContent(data);
    this.querySelector('.modal-body').innerHTML = modalContent;
  }

  generateModalContent(data) {
    return `
            <div class="dropdown-list dropdown-menu-right animated--grow-in show" aria-labelledby="alertsDropdown">
                ${this.generateAlertItem('Sukarelawan Menerima', data.sukarelawan_menerima)}
                ${this.generateAlertItem('Sukarelawan Menolak', data.sukarelawan_menolak, true)}
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div>
        `;
  }

  generateAlertItem(title, alertData, addMargin = false) {
    let alertItems = '';

    if (Array.isArray(alertData)) {
      alertItems = alertData.map((data) => this.generateSingleAlertItem(title, data)).join('');
    }

    return `
            <a class="dropdown-item align-items-center ${addMargin ? 'mt-3' : ''}" href="#">
                <div>
                    <h2 class="fs-5">${title}:</h2>
                    ${alertItems}
                    ${title === 'Sukarelawan Menerima' ? `
                        <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                    ` : ''}
                </div>
            </a>
        `;
  }

  generateSingleAlertItem(title, alertData) {
    return `
            <div>
                <div class="small text-gray-500">Status: ${alertData.status}</div>
                <div class="small text-gray-500">Nama : ${alertData.nama_volunteer}</div>
                ${title === 'Sukarelawan Menerima' ? `
                    <div class="small text-gray-500">Alamat : ${alertData.alamat_volunteer}</div>
                    <div class="small text-gray-500">Golongan Darah : ${alertData.gol_darah}</div>
                    <a href="https://wa.me/${alertData.no_hp}" target="_blank" class="btn btn-success w-100">Hubungi Via WhatsApp</a>
                ` : ''}
            </div>
        `;
  }

  render() {
    this.innerHTML = `
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Notifikasi</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`;

    this.fetchDataAndDisplay();
  }
}

customElements.define('notifikasi-modal', NotifikasiModal);
