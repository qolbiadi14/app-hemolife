/* eslint-disable class-methods-use-this */
class NotFoundPage {
  async render() {
    return `
        <div class="not-found-container">
            <div class="not-found">
                <h2 class="not-found-title">404 Not Found</h2>
                <p class="not-found-desc">Oops! The page you're looking for doesn't exist.</p>
            </div>
        </div>
      `;
  }
}

export default new NotFoundPage();
