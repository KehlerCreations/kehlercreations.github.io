const portfolioContentContainer = document.querySelector("#portfolio-container");

function LoadContent(parent_id, target_file) {
  const parentElement = document.getElementById(parent_id);
  fetch(target_file)
    .then((response) => response.text())
    .then((text) => new DOMParser().parseFromString(text, "text/html"))
    .then((dom) => dom.getElementById("portfolio-content"))
    .then((content) => {
      parentElement.append(content);
      ScanAndAddSlideshows();
    });
}

// Button functionality
let portfolioButtons = document.querySelectorAll(".btn-portfolio-category");
portfolioButtons.forEach(element => {
  element.addEventListener("click", () => {
    ExitPortfolioCategory();
    let filename = element.getAttribute("category") + "/overview.html";
    LoadContent("portfolio-container", filename);
    portfolioContentContainer.classList.remove("hidden");
    document.querySelector("body").classList.add("body-no-scroll");
    window.scrollTo(0, 0);
  });
});

let btnExitPortfolio = document.querySelector("#btn-exit-portfolio");
btnExitPortfolio.addEventListener("click", ExitPortfolioCategory);
let backgroundExitPortfolio = document.querySelector("#background-exit-portfolio");
backgroundExitPortfolio.addEventListener("click", ExitPortfolioCategory);

function ExitPortfolioCategory() {
  let element = document.querySelector("#portfolio-content");
  if (element != null) element.remove();
  portfolioContentContainer.classList.add("hidden");
  document.querySelector("body").classList.remove("body-no-scroll");
}

function ScanAndAddSlideshows() {
  let artifacts = document.querySelectorAll(".portfolio-artifact");
  artifacts.forEach(artifact => {
    let slideshow = artifact.querySelector(".image-slideshow");
    if (slideshow != null) {
      // Hide content
      let slideshowImages = slideshow.querySelector(".slideshow-images");
      let slideshowTexts = artifact.querySelector(".information-texts");
      let images = slideshowImages.children;
      let texts = slideshowTexts.children;
      let slideCount = images.length;

      images[0].setAttribute("active", "true");
      for (let i = 1; i < images.length; i++) {
        images[i].classList.add("hidden");
      }
      texts[0].setAttribute("active", "true");
      for (let i = 1; i < texts.length; i++) {
        texts[i].classList.add("hidden");
      }

      // Add buttons
      let leftButton = document.createElement("button");
      let rightButton = document.createElement("button");
      leftButton.innerText = "❮";
      rightButton.innerText = "❯";
      leftButton.classList.add("slideshow-button", "left");
      rightButton.classList.add("slideshow-button", "right");
      slideshow.appendChild(leftButton);
      slideshow.appendChild(rightButton);

      leftButton.addEventListener("click", () => {
        SwitchSlide(-1);
      });

      rightButton.addEventListener("click", () => {
        SwitchSlide(1);
      });

      function SwitchSlide(direction) {
        let currentSlide = slideshowImages.querySelector("[active]");
        let nextSlide = (direction === 1) ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;

        if (nextSlide == null) {
          // Wrap around
          nextSlide = (direction === 1) ? slideshowImages.firstElementChild : slideshowImages.lastElementChild;
        }

        currentSlide.removeAttribute("active");
        currentSlide.classList.add("hidden");
        nextSlide.setAttribute("active", "true");
        nextSlide.classList.remove("hidden");

        // Set the proper text
        let currentIndex = [...images].indexOf(currentSlide);
        let nextIndex = [...images].indexOf(nextSlide);
        texts[currentIndex].removeAttribute("active");
        texts[currentIndex].classList.add("hidden");
        texts[nextIndex].setAttribute("active", "true");
        texts[nextIndex].classList.remove("hidden");
      }
    }
  });
}

