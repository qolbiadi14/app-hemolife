class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <img src="/images/heros/logo.png" alt="Website" class="mt-1 img-fluid" style="max-width: 150px;">
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 HemoLife, Inc</span>
          </div>
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex ms-auto me-2">
            <li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com/diawan.diawan.9212?mibextid=ZbWKwL" target="_blank"><i class="fa-brands fa-square-facebook fa-2xl"></i></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="https://twitter.com/dicoding?t=D4abQFFxCkLMhYKLEynHpA&s=09" target="_blank"><i class="fa-brands fa-twitter fa-2xl"></i></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="https://instagram.com/anggraenideaaa" target="_blank"><i class="fa-brands fa-square-instagram fa-2xl icon-ig"></i></a></li>
          </ul>
        </footer>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);


