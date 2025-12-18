const header = document.getElementById("main-header");
fetch("/header.html")
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/html"))
  .then((dom) => dom.getElementById("header-main-bar"))
  .then((content) => {
    header.append(content);
});

fetch("/header.html")
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/html"))
  .then((dom) => dom.getElementById("mobile-reveal-header"))
  .then((content) => {
    header.append(content);
});
fetch("/header.html")
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/html"))
  .then((dom) => dom.getElementById("mobile-body-cover"))
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

// Interactive mobile button
setTimeout(() => {

  let button = document.getElementById("mobile-reveal-header");
  button.activated = false;
  
  let bodyCover = document.getElementById("mobile-body-cover");

  let headerMainBar = document.getElementById("header-main-bar");
  
  let revealHeader = function() {
    button.activated = true;
    headerMainBar.classList.remove("mobile-hidden");
    bodyCover.classList.remove("mobile-hidden");
  }
  let hideHeader = function() {
    button.activated = false;
    headerMainBar.classList.add("mobile-hidden");
    bodyCover.classList.add("mobile-hidden");
  }

  button.addEventListener("click", () => {
    
    if(button.activated) {
      hideHeader();
    } else {
      revealHeader();
    }
  })
  
  button.addEventListener("change", () => {
    hideHeader();
  })

  bodyCover.addEventListener("click", () => {
    hideHeader();
  })
  
}, 100)