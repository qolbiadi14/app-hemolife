const faq = {
  async render() {
    return `
  
  <!-- faq -->
  <div class="container faq mb-5">
    <div class="judul-faq"><h1 class="text-center">FAQ</h1></div>
    <div class="cardd d-flex justify-content-center mt-5">
      <div class="card" style="width: 40rem">
        <div class="card-header" style="background-color: white;">
          <a
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Question 1
          </a>
          <li class="list-group-item">
            <p class="d-inline-flex gap-1"></p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                Some placeholder content for the collapse component. This
                panel is hidden by default but revealed when the user
                activates the relevant trigger.
              </div>
            </div>
          </li>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a
              data-bs-toggle="collapse"
              href="#collapseExamplee"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Question 2
            </a>
            <div class="collapse" id="collapseExamplee">
              <div class="card card-body">
                Some placeholder content for the collapse component. This
                panel is hidden by default but revealed when the user
                activates the relevant trigger.
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <a
              data-bs-toggle="collapse"
              href="#collapseExampleee"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Question 3
            </a>
            <div class="collapse" id="collapseExampleee">
              <div class="card card-body">
                Some placeholder content for the collapse component. This
                panel is hidden by default but revealed when the user
                activates the relevant trigger.
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <a
              data-bs-toggle="collapse"
              href="#collapseExampleee1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Question 4
            </a>
            <div class="collapse" id="collapseExampleee1">
              <div class="card card-body">
                Some placeholder content for the collapse component. This
                panel is hidden by default but revealed when the user
                activates the relevant trigger.
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <a
              data-bs-toggle="collapse"
              href="#collapseExampleee4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Question 5
            </a>
            <div class="collapse" id="collapseExampleee4">
              <div class="card card-body">
                Some placeholder content for the collapse component. This
                panel is hidden by default but revealed when the user
                activates the relevant trigger.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
      `;
  },
  async afterRender() {},
};

export default faq;