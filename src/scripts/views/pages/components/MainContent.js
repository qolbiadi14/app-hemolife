// MainContent.js
class MainContentComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <main id="mainContent">
            </main>
            
        `;
  }
}

customElements.define('main-content', MainContentComponent);
