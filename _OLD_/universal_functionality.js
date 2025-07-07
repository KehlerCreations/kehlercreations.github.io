/* -- HEADER -- */
let header = document.querySelector("header");
header.innerHTML = `
<span>
    <a href="/" aria-label="Link to homepage"><img src="/Images/Kehler Creations Logo Medium Circle.png" alt="Kehler Creations logotype"></a>
</span>
<a class="header-title" href="/"><h1 class="header-title">ELLIOT KEHLER</h1></a>
<nav class="navigation navigation-pages desktop">
    <ul class="main-navigation-buttons desktop">
        <li><a class="main-navigation-button desktop" href="/">HOME</a></li>
        <li><a class="main-navigation-button desktop" href="/projects/">PROJECTS</a></li>
        <li><a class="main-navigation-button desktop" href="/game-design/">GAME DESIGN</a></li>
        <li><a class="main-navigation-button desktop" href="/3d-design/">3D DESIGN</a></li>
        <li><a class="main-navigation-button desktop" href="/music/">MUSIC</a></li>
        <li><a class="main-navigation-button desktop" href="/about/">ABOUT ME</a></li>
    </ul>
</nav>
<nav class="navigation navigation-pages mobile">
    <ul class="main-navigation-buttons mobile">
        <li><a class="main-navigation-button mobile" href="/">HOME</a></li>
        <li><a class="main-navigation-button mobile" href="/projects/">PROJECTS</a></li>
        <li><a class="main-navigation-button mobile" href="/game-design/">GAME DESIGN</a></li>
        <li><a class="main-navigation-button mobile" href="/3d-design/">3D DESIGN</a></li>
        <li><a class="main-navigation-button mobile" href="/music/">MUSIC</a></li>
        <li><a class="main-navigation-button mobile" href="/about/">ABOUT ME</a></li>
    </ul>
    <div id="navigation-folderButton-mobile">
        <div class="navigation-folderButton-mobile-component"></div>
        <div class="navigation-folderButton-mobile-component"></div>
        <div class="navigation-folderButton-mobile-component"></div>
    </div>
</nav>
`;

document.querySelector("#navigation-folderButton-mobile").addEventListener("click", function() {
    let ID = document.getElementsByClassName("main-navigation-buttons mobile")[0];
    let navDisplay = ID.style.display;
    if(navDisplay == "block") {
        ID.style.display = "none";

        /// Change folder symbol
        let folderID = document.getElementById("navigation-folderButton-mobile");
        folderID.style.top = "8px";

        let folderList = document.getElementsByClassName("navigation-folderButton-mobile-component");
        folderList[0].style.transform = "";
        folderList[0].style.position = "";
        folderList[0].style.transform = "";
        folderList[1].style.display = "";
        folderList[2].style.transform = "";
        folderList[2].style.position = "";

    } else {
        /// Reveal list
        ID.style.display = "block";
        ID.classList.add("animate-reveal");
        
        /// Change folder symbol
        let folderID = document.getElementById("navigation-folderButton-mobile");
        folderID.style.top = "16px";

        let folderComponentList = document.getElementsByClassName("navigation-folderButton-mobile-component");
        folderComponentList[0].style.transform = "rotate(45deg)";
        folderComponentList[0].style.position = "absolute";
        folderComponentList[1].style.display = "none";
        folderComponentList[2].style.transform = "rotate(315deg)";
        folderComponentList[2].style.position = "absolute";

    }
    
});

/* -- FOOTER -- */
let footer = document.querySelector("footer");
footer.innerHTML = `
<div class="contact-mail-list">
    <a class="contact-mail" href="mailto:elliot.kehler@kehlercreations.com">elliot.kehler@kehlercreations.com</a>
    <br>
    <a class="contact-mail" href="mailto:elliot.kehler@gmail.com">elliot.kehler@gmail.com</a>
</div>
<div class="contact-links">
    <a class="contact-link-link" href="https://discord.com/users/284414383638183938" target="_blank" aria-label="Find me on Discord">
        <img class="contact-link-image" src="/Images/link_discord.png" alt="Discord logo">
    </a>
    <a class="contact-link-link" href="https://linkedin.com/in/elliot-kehler" target="_blank" aria-label="Find me on LinkedIn">
        <img class="contact-link-image" src="/Images/link_linkedin.png" alt="LinkedIn logo">
    </a>
    <a class="contact-link-link" href="https://twitter.com/elliotkehler" target="_blank" aria-label="Find me on X / Twitter">
        <img class="contact-link-image" src="/Images/link_twitter.png" alt="Twitter logo">
    </a>
    <a class="contact-link-link" href="https://youtube.com/@kehlercreations" target="_blank" aria-label="Find me on YouTube">
        <img class="contact-link-image" src="/Images/link_youtube.png" alt="YouTube logo">
    </a>
</div>
<div class="content">
    <p>&copy Elliot Kehler 2024</p>
</div>
`;