// HEADER
let header = document.querySelector("header");
header.innerHTML = `
<span>
    <a href="/" aria-label="Link to homepage"><img src="Images/Kehler Creations Logo Medium Circle.png" alt="Kehler Creations logotype"></a>
</span>
<a class="header-title" href="/"><h1 class="header-title">ELLIOT KEHLER</h1></a>
<nav class="navigation navigation-pages">
    <ul class="main-navigation-buttons">
        <li><a class="main-navigation-button" href="/">HOME</a></li>
        <li><a class="main-navigation-button" href="game-design.html">GAME DESIGN</a></li>
        <li><a class="main-navigation-button" href="3d.html">3D DESIGN</a></li>
        <li><a class="main-navigation-button" href="music.html">MUSIC</a></li>
        <li><a class="main-navigation-button" href="about.html">ABOUT ME</a></li>
        <li><a class="main-navigation-button" href="contact.html">CONTACT</a></li>
    </ul>
</nav>
`;

// FOOTER
let footer = document.querySelector("footer");
footer.innerHTML = `
<div class="contact-mail-list">
    <a class="contact-mail" href="mailto:elliot.kehler@kehlercreations.com">elliot.kehler@kehlercreations.com</a>
    <br>
    <a class="contact-mail" href="mailto:elliot.kehler@gmail.com">elliot.kehler@gmail.com</a>
</div>
<div class="contact-links">
    <div>
        <a class="contact-link-link" href="https://www.discord.com" target="_blank" aria-label="Find me on Discord">
            <img class="contact-link-image" src="Images/link_discord.png" alt="Discord logo">
        </a>
        
        <a class="contact-link-link" href="https://www.linkedin.com" target="_blank" aria-label="Find me on LinkedIn">
            <img class="contact-link-image" src="Images/link_linkedin.png" alt="LinkedIn logo">
        </a>
    </div>
    <div>
        <a class="contact-link-link" href="https://www.twitter.com" target="_blank" aria-label="Find me on X / Twitter">
            <img class="contact-link-image" src="Images/link_twitter.png" alt="Twitter logo">
        </a>
        <a class="contact-link-link" href="https://www.youtube.com" target="_blank" aria-label="Find me on YouTube">
            <img class="contact-link-image" src="Images/link_youtube.png" alt="YouTube logo">
        </a>
    </div>
</div>
`;