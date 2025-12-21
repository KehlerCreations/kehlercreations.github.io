let images = document.getElementsByClassName("background-image");
document.getElementsByTagName("body")[0].onscroll = function parallaxBackground() {
    let scrolltotop = document.scrollingElement.scrollTop;
    for(let i=0; i<images.length; i++) {
        var factor = lerp(1, .2, i / images.length);
        images[i].style.top = (scrolltotop * factor) + "px";
    }
}

const lerp = (x, y, a) => x * (1 - a) + y * a;