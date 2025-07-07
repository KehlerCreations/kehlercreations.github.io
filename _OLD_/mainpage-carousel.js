/// Define images and their links
let ListOfImages = [
    ["/Images/A_Star_Theft_Game_Logo.png", "/projects/", "a-star theft game logo"],
    ["/Images/Kitchen Render.jpg", "/3d-design/", "kitchen render"],
    ["/Images/Knife Render.jpg", "/3d-design/", "knife render"],
    ["/Images/Bottles Render.jpg", "/3d-design/", "bottles render"],
    ["/Images/Snowman Render.jpg", "/3d-design/", "snowman render"],
    ["/Images/Guitar Render.jpg", "/3d-design/", "guitar render"],
    ["/Images/Furniture Render.jpg", "/3d-design/", "furniture render"],
    ["/Images/Game_Design/GameDesign_Graphics_1.png", "/projects/", "game design graphics"],
    ["/Images/Game_Design/GameDesign_Combat_1.png", "/game-design/", "game design combat"],
    ["/Images/Game_Design/GameDesign_Combat_2.png", "/game-design/", "game design combat"],
    ["/Images/Game_Design/GameDesign_Combat_3.png", "/game-design/", "game design combat"],
]

/// Adds image to the html code
const ShowreelGrid = document.querySelector(".mainpage-carousel");
const NumberOfImages = ListOfImages.length;
let i = 0;
while(i < NumberOfImages) {
    var imageIndex = Math.floor(Math.random()*ListOfImages.length);
    let image = ListOfImages[imageIndex];
    let element = document.createElement("div");
    element.classList.add("mainpage-carousel-image");
    element.innerHTML = `<a href=${image[1]}><img src="${image[0]}"><a>`;
    ShowreelGrid.append(element);

    ListOfImages.splice(imageIndex, 1);

    i++;
}

/// Defines variables for the carousel
let CurrentIndex = 0;
let PreviousIndex;
const Images = document.querySelectorAll(".mainpage-carousel-image");
const TotalImages = Object.keys(Images).length;

const ImageWidth = 420; // image width + flex gap

/// Moves the carousel every 5 seconds

const MoveCarousel = function() {
    if(!ShowreelGrid.classList.contains("sliding-transition")) {
        PreviousIndex = CurrentIndex;
        CurrentIndex = (CurrentIndex + 1) % TotalImages;
        
        ShowreelGrid.classList.add("sliding-transition");
        let distance = ImageWidth;
        ShowreelGrid.style.transform = `translateX(-${distance}px)`;
        
        setTimeout(() => {
            ShowreelGrid.appendChild(Images[PreviousIndex]);
            ShowreelGrid.classList.remove("sliding-transition");
            ShowreelGrid.style.transform = ``;
        }, 1000);
    }
}

let CarouselTimer = setInterval(() => {
    MoveCarousel();
}, 5000);

let LeftArrow = document.querySelector(".mainpage-carousel-arrow-left");
LeftArrow.addEventListener("click", () => {    
    if(!ShowreelGrid.classList.contains("sliding-transition")) {
        PreviousIndex = CurrentIndex;
        CurrentIndex = (CurrentIndex - 1 + TotalImages) % TotalImages;
        
        let distance = ImageWidth;
        ShowreelGrid.style.transform = `translateX(-${distance}px)`;
        ShowreelGrid.insertBefore(Images[CurrentIndex], ShowreelGrid.firstChild);
        
        setTimeout(() => {
            ShowreelGrid.style.transform = ``;
            ShowreelGrid.classList.add("sliding-transition");
        }, 1);

        setTimeout(() => {
            ShowreelGrid.style.transform = ``;
            ShowreelGrid.classList.remove("sliding-transition");
        }, 1000);
    }
    
    CarouselTimer.clearInterval();
});
let RightArrow = document.querySelector(".mainpage-carousel-arrow-right");
RightArrow.addEventListener("click", () => {
    MoveCarousel();
    CarouselTimer.clearInterval();
});

/*-- CONTENT CAROUSELS --*/