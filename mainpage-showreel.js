/// Define images and their links
let Images = [
    ["/Images/Kitchen Render.jpg", "/3d-design/", "kitchen render"],
    ["/Images/Game_Design/GameDesign_Graphics_1.png", "/projects/", "game design graphics"],
    ["/Images/Game_Design/GameDesign_Combat_1.png", "/game-design/", "game design combat"],
    ["/Images/Game_Design/GameDesign_Combat_2.png", "/game-design/", "game design combat"],
    ["/Images/Game_Design/GameDesign_Combat_3.png", "/game-design/", "game design combat"],
]

/// Increase all images by 1
CurrentImageIncrease = function() {
    let maxImages = Images.length;

    Current_Image_Large++;
    Current_Image_Small_Top++;
    Current_Image_Small_Bottom++;

    if(Current_Image_Large > maxImages - 1) Current_Image_Large -= maxImages;
    if(Current_Image_Small_Top > maxImages - 1) Current_Image_Small_Top -= maxImages;
    if(Current_Image_Small_Bottom > maxImages - 1) Current_Image_Small_Bottom -= maxImages;
}

let Random_Image = Math.floor((Math.random() * 3));
Current_Image_Large = Random_Image;
Current_Image_Small_Top = Current_Image_Large + 1;
Current_Image_Small_Bottom = Current_Image_Small_Top + 1;
CurrentImageIncrease();

let Element_MainPage_Showreel_Large = document.querySelector(".mainpage-showreel-large-image-container");
let Element_MainPage_Showreel_Small_Top = document.getElementsByClassName("mainpage-showreel-small-image-container")[0];
let Element_MainPage_Showreel_Small_Bottom = document.getElementsByClassName("mainpage-showreel-small-image-container")[1];

AddImagesToGrid = function() {
    Element_MainPage_Showreel_Large.innerHTML = `
        <a href=${Images[Current_Image_Large][1]}><img src="${Images[Current_Image_Large][0]}"><a>
    `;

    Element_MainPage_Showreel_Small_Top.innerHTML = `
        <a href=${Images[Current_Image_Small_Top][1]}><img src="${Images[Current_Image_Small_Top][0]}"><a>
    `;
    Element_MainPage_Showreel_Small_Bottom.innerHTML = `
        <a href=${Images[Current_Image_Small_Bottom][1]}><img src="${Images[Current_Image_Small_Bottom][0]}"><a>
    `;
}

/// Place initial images in the grid
AddImagesToGrid();

/// Cycle through images
setInterval(() => {
    CurrentImageIncrease();
    AddImagesToGrid();
}, 5000);