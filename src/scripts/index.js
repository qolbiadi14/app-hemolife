/* eslint-disable no-unused-vars */

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import * as bootstrap from 'bootstrap';
import App from './views/app';
// Import all of Bootstrap's JS
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#menuDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
