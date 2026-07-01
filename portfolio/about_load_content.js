function LoadContent(parent_id, target_file, target_id) {
  const parentElement = document.getElementById(parent_id);
  fetch(target_file)
    .then((response) => response.text())
    .then((text) => new DOMParser().parseFromString(text, "text/html"))
    .then((dom) => dom.getElementById("about-content"))
    .then((content) => {
      parentElement.append(content);
  });
}

LoadContent("portfolio-content-container", "game_design.html");

const portfolioContentContainer = document.querySelector("#portfolio-content-container");

let aboutMain = document.getElementById("about-main");
let aboutMe = document.getElementById("about-me");
let history = document.getElementById("history");
let portfolio = document.getElementById("portfolio");

/// Button functionality
let portfolioButtons = document.querySelectorAll(".btn-portfolio-category");
portfolioButtons.forEach(element => {
  element.addEventListener("click", ()=>{
    portfolioContentContainer.innerHTML = ``;
    let filename = element.getAttribute("category") + ".html";
    LoadContent("portfolio-content-container", filename);
  });
});