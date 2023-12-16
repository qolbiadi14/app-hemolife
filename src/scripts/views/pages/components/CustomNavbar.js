class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav class="navbar navbar-expand-lg" id="menuDrawer">
                <div class="container-fluid">
                    
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
