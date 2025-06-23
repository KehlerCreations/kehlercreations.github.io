//#region Generate header and footer

const header = document.getElementById("main-header");
fetch("header.html")
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/html"))
  .then((dom) => dom.getElementById("main-title"))
  .then((content) => {
    header.append(content); 
});

//#endregion

//#region Load content

const mainGrid = document.getElementById("main-content-grid");
const urls = ["experience.html", "skills.html", "samples.html"];

// Make content load one by one with slight animation

const LoadContent = function() {
  const url = urls[currentContent];
  fetch(url)
    .then((response) => response.text())
    .then((text) => new DOMParser().parseFromString(text, "text/html"))
    .then((dom) => dom.getElementsByClassName("grid-content")[0])
    .then((content) => {
      mainGrid.append(content);
      content.style.position = "relative";
      content.style.top = "-100px";
      content.style.opacity = "0";

      content.style.transition = "top 1s, opacity 1s";
      setTimeout(()=>{
        content.style.top = "0px";
        content.style.opacity = "1";
      }, 5);
  });

  currentContent++;

  // When all content is loaded
  if(currentContent >= urls.length) {
    clearInterval(contentTimer);
    InteractiveImages();
  }
}

let currentContent = 0;
let contentTimer = setInterval(LoadContent, 100);



//#endregion

const InteractiveImages = function() {
  const images = document.querySelectorAll("img");
  images.forEach(element => {
    element.addEventListener("click", () => {
      alert("success");
    });
  });
}