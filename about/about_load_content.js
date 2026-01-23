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

LoadContent("about-me", "about_me.html");
LoadContent("history", "history.html");
LoadContent("portfolio", "portfolio.html");

let aboutMain = document.getElementById("about-main");
let aboutMe = document.getElementById("about-me");
let history = document.getElementById("history");
let portfolio = document.getElementById("portfolio");

/// Button functionality
let buttonAboutMe = document.getElementById("btn-about-me");
buttonAboutMe.addEventListener("click", ()=>{
  aboutMain.style.left = "0vw";
  aboutMe.style.opacity = "1";
  history.style.opacity = "0";
  portfolio.style.opacity = "0";
});

let buttonHistory = document.getElementById("btn-history");
buttonHistory.addEventListener("click", ()=>{
  aboutMain.style.left = "-100vw";
  history.style.opacity = "1";
  aboutMe.style.opacity = "0";
  portfolio.style.opacity = "0";
});

let buttonPortfolio = document.getElementById("btn-portfolio");
buttonPortfolio.addEventListener("click", ()=>{
  aboutMain.style.left = "-200vw";
  portfolio.style.opacity = "1";
  aboutMe.style.opacity = "0";
  history.style.opacity = "0";
});

