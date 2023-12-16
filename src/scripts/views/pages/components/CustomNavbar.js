class CustomNavbar extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `
            <nav class="navbar navbar-expand-lg" id="menuDrawer">
                <div class="container-fluid">
                    <a href="/" class="navbar-brand d-flex align-items-center link-body-emphasis text-decoration-none">
                        <img src="/images/heros/logo.png" alt="Logo" class="d-inline-block align-text-top logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    id="hamburgerButton" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <div class="d-lg-flex col-lg-6 justify-content-lg-end ms-auto">
                        <ul class="navbar-nav">
                          <li class="nav-item">
                            <a class="btn btn-danger m-2" href="/#/login">Login</a>
                          </li>
                          <li class="nav-item">
                            <a class="btn btn-danger m-2" href="/#/register">Register</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>
            </nav>
        `;
        }
      }

      customElements.define('custom-navbar', CustomNavbar);