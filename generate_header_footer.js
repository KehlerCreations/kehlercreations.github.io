const header = document.getElementById("main-header");
fetch("header.html")
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/html"))
  .then((dom) => dom.getElementById("header-main-bar"))
  .then((content) => {
    header.append(content);
});