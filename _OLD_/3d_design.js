const SelectWindow = function(_class) {
    let parentContainer = document.querySelector(".showcase-container");
    let allContainers = parentContainer.querySelectorAll("div");
    for(var i=0; i<allContainers.length; i++) {
        allContainers[i].classList.add("hidden-3d");
    }
    parentContainer.querySelector(_class).classList.remove("hidden-3d");
}


// Currently unused
const showreelDescriptionToggle = function(index) {
    let Showreel = document.querySelectorAll(".showreel")[1];
    let Container = Showreel.querySelectorAll(".showreel-image")[index];
    let Paragraph = Container.parentElement.querySelector("p");
    if(Paragraph.classList.contains("hidden")) Paragraph.classList.remove("hidden");
        else Paragraph.classList.add("hidden");
}
