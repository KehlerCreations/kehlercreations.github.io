/*-- PROJECTS --*/
const Categories_Projects = document.querySelector("#category-selector-projects");
const Button_AStarTheft = Categories_Projects.querySelector(".section-title.a-star-theft");
const Button_SunsetTrail = Categories_Projects.querySelector(".section-title.sunset-trail");
const Button_BankNoir = Categories_Projects.querySelector(".section-title.bank-noir");

Button_AStarTheft.addEventListener("click", function() {
    ShowContent(".content.a-star-theft", this);
    ShiftContent(".content.a-star-theft");
});
Button_SunsetTrail.addEventListener("click", function() {
    ShowContent(".content.sunset-trail", this);
    ShiftContent(".content.sunset-trail");
});
Button_BankNoir.addEventListener("click", function() {
    ShowContent(".content.bank-noir", this);
    ShiftContent(".content.bank-noir");
});

const ShowContent = function(contentClasses, categoryButton) {
    let allContent = document.getElementsByClassName("content");
    let length = allContent.length;
    for(let i=0; i<length; i++) {
        allContent[i].classList.add("no-display");
    }

    let displayContent = document.querySelector(contentClasses);
    displayContent.classList.remove("no-display");

    let allButtons = document.querySelectorAll("#category-selector-projects h2");
    length = allButtons.length;
    for(i=0; i<length; i++) {
        allButtons[i].classList.remove("selected");
    }
    categoryButton.classList.add("selected");

}

const ShiftContent = function(contentClasses) {
    let content = document.querySelector(contentClasses);
    content = content.querySelectorAll(".card-showcase");
    let length = content.length;
    
    let baseDistance = 50;
    let initialShift = -(baseDistance * (length - 1)) / 2;
    let actualShift = initialShift;

    for(let i=0; i<length; i++) {
        content[i].style.transform = `translateX(${actualShift}px)`;
        actualShift += baseDistance;
    }
}

ShiftContent(".content.a-star-theft");