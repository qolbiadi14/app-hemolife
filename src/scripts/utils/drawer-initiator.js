const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    this.
    
    
    (drawer);
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
  async _adjustNavbarBasedOnLoginStatus(drawer) {
    const userToken = localStorage.getItem('userToken');
    const adminToken = localStorage.getItem('adminToken');
    if (userToken) {
      drawer.innerHTML += `
        <navbar-component></navbar-component>
      `;

    } else if (adminToken) {
      drawer.innerHTML += `
      <custom-navadmin></custom-navadmin>
      `;
    } else {
      drawer.innerHTML += `       
      <custom-navbar></custom-navbar>
      `;
    }
  },
};

export default DrawerInitiator;
