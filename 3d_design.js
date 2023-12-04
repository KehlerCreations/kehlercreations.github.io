const SelectWindow = function(_class) {
    let parentContainer = document.querySelector(".showcase-container");
    let allContainers = parentContainer.querySelectorAll("div");
    for(var i=0; i<allContainers.length; i++) {
        allContainers[i].classList.add("hidden-3d");
    }
    parentContainer.querySelector(_class).classList.remove("hidden-3d");
}