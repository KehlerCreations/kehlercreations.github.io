const portfolioContentContainer = document.querySelector("#portfolio-container");

function LoadContent(parent_id, target_file) {
  const parentElement = document.getElementById(parent_id);
  fetch(target_file)
    .then((response) => response.text())
    .then((text) => new DOMParser().parseFromString(text, "text/html"))
    .then((dom) => dom.getElementById("portfolio-content"))
    .then((content) => {
      parentElement.append(content);
  });
}



// Button functionality
let portfolioButtons = document.querySelectorAll(".btn-portfolio-category");
portfolioButtons.forEach(element => {
  element.addEventListener("click", ()=>{
    ExitPortfolioCategory();
    let filename = element.getAttribute("category") + "/overview.html";
    LoadContent("portfolio-container", filename);
    portfolioContentContainer.classList.remove("hidden");
    document.querySelector("body").classList.add("body-no-scroll");

    // element.parentElement.parentElement.classList.add("category-is-open");
  });
});

let btnExitPortfolio = document.querySelector("#btn-exit-portfolio");
btnExitPortfolio.addEventListener("click", ()=>{
  ExitPortfolioCategory();
});

function ExitPortfolioCategory() {
  let element = document.querySelector("#portfolio-content");
  if(element != null) element.remove();
  portfolioContentContainer.classList.add("hidden");
  document.querySelector("body").classList.remove("body-no-scroll");
}