class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <div class="collapse navbar-collapse" id="navbarNav">
          <div class="d-lg-flex col-lg-6 justify-content-lg-end ms-auto">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="btn btn-danger m-2" href="/#/login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="btn btn-danger m-2" href="/#/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
          `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
