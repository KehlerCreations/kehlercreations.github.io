const header = document.getElementById("main-header");
fetch("/header.html")
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/html"))
  .then((dom) => dom.getElementById("header-main-bar"))
  .then((content) => {
    header.append(content);
});

const footer = document.getElementById("main-footer");
fetch("/footer.html")
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/html"))
  .then((dom) => dom.getElementById("footer-main-bar"))
  .then((content) => {
    footer.append(content);
});

setTimeout(()=>{
  let waitingElements = document.querySelectorAll(".wait-for-header");
  waitingElements.forEach(element => {
    element.classList.remove("wait-for-header");
  });
}, 20)