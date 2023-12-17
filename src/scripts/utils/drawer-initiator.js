const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    this._adjustNavbarBasedOnLoginStatus(drawer);
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _adjustNavbarBasedOnLoginStatus(drawer) {
    if (localStorage.getItem('userToken')) {
      drawer.innerHTML += `
     <navbar-component></navbar-component>
      `;
    } else if (localStorage.getItem('adminToken')) {
      // menu navbar admin
    } else {
      drawer.innerHTML += `
      <custom-navbar></custom-navbar>
    `;
    }
  },
};

export default DrawerInitiator;