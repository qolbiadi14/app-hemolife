import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../views/pages/components/notifikasi';
import '../views/pages/components/CustomNavbar';
import '../views/pages/components/CustomFooter';

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
    const page = routes[url];

    if (page) {
      this._content.innerHTML = await page.render();
      if (page.afterRender) {
        await page.afterRender();
      }
    } else {
      console.error('Page not found:', url);
      // You might want to handle this case, for example, redirect to a 404 page
    }
  }
}

export default App;
