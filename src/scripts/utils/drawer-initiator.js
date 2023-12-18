const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
<<<<<<< HEAD

    this._adjustNavbarBasedOnLoginStatus(drawer); // Fixed this line
=======
    this._adjustNavbarBasedOnLoginStatus(drawer);
>>>>>>> d50537e601291f338172758a7718d26a4f07d87f
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
<<<<<<< HEAD
        <custom-navadmin></custom-navadmin>
=======
      <custom-navadmin></custom-navadmin>
>>>>>>> d50537e601291f338172758a7718d26a4f07d87f
      `;
    } else {
      drawer.innerHTML += `       
        <custom-navbar></custom-navbar>
      `;
    }
  },
};

export default DrawerInitiator;
