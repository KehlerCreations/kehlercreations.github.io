let header = document.querySelector("header");
header.innerHTML = `
<span>
    <a href="/"><img src="Images/Kehler Creations Logo Medium Circle.png"></a>
</span>
<a class="header-title" href="/"><h1 class="header-title">ELLIOT KEHLER</h1></a>
<nav class="navigation navigation-pages">
    <ul class="main-navigation-buttons">
        <li><a class="main-navigation-button" href="/">GAME DESIGN</a></li>
        <li><a class="main-navigation-button" href="3d.html">3D DESIGN</a></li>
        <li><a class="main-navigation-button" href="about.html">ABOUT ME</a></li>
        <li><a class="main-navigation-button" href="contact.html">CONTACT</a></li>
    </ul>
</nav>
`

const showreelDescriptionToggle = function(index) {
    let Showreel = document.querySelectorAll(".showreel")[1];
    let Container = Showreel.querySelectorAll(".showreel-image")[index];
    let Paragraph = Container.parentElement.querySelector("p");
    if(Paragraph.classList.contains("hidden")) Paragraph.classList.remove("hidden");
        else Paragraph.classList.add("hidden");
}
