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

// #region Load content

const mainGrid = document.getElementById("main-content-grid");
const urls = ["experience.html", "skills.html", "samples.html"];
// Make content load one by one with slight animation
urls.forEach(element => {
  const url = element;
  fetch(url)
    .then((response) => response.text())
    .then((text) => new DOMParser().parseFromString(text, "text/html"))
    .then((dom) => dom.getElementsByClassName("grid-content")[0])
    .then((content) => {
      mainGrid.append(content);
  });
});

// #endregion