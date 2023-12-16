// MainContent.js
class MainContentComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <main id="mainContent">
                <!-- Your existing content -->
            </main>
        `;
    }
}

customElements.define('main-content-component', MainContentComponent);
