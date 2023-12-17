import '../views/pages/components/NotifikasiModal';
import '../views/pages/components/Navbar';
import '../views/pages/components/MainContent';
import '../views/pages/components/notifikasi'
// import '../views/pages/components/Footer'
import NotFoundPage from '../views/pages/NotFoundPage';

import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../views/pages/components/CustomNavbar';
import '../views/pages/components/CustomFooter';
import '../views/admin/components/NavbarAdmin';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
    this.renderPage();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url] || NotFoundPage;

   
    this._content.innerHTML = await page.render();

    if (page.afterRender) {
      await page.afterRender();
    }
  }
}

export default App;
