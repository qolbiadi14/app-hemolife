import './pages/components/Navbar';
import './pages/components/MainContent';
import './pages/components/CustomFooter';
import './pages/components/NavBarLending';
import './admin/components/NavbarAdmin';
import NotFoundPage from './pages/NotFoundPage';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

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
