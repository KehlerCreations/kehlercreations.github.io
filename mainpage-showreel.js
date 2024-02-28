/// Define images and their links
let Images = [
    ["/Images/Kitchen Render.jpg", "/3d-design/", "kitchen render"],
    ["/Images/Game_Design/GameDesign_Graphics_1.png", "/projects/", "game design graphics"],
    ["/Images/Game_Design/GameDesign_Combat_1.png", "/game-design/", "game design combat"]
]

/// Place initial images in the grid
let Element_MainPage_Showreel_Large = document.querySelector(".mainpage-showreel-large-image-container");
let Element_MainPage_Showreel_Small_Top = document.getElementsByClassName("mainpage-showreel-small-image-container")[0];
let Element_MainPage_Showreel_Small_Bottom = document.getElementsByClassName("mainpage-showreel-small-image-container")[1];


Element_MainPage_Showreel_Large.innerHTML = `
    <a href=${Images[0][1]}><img src="${Images[0][0]}"><a>
`;

Element_MainPage_Showreel_Small_Top.innerHTML = `
    <a href=${Images[1][1]}><img src="${Images[1][0]}"><a>
`;
Element_MainPage_Showreel_Small_Bottom.innerHTML = `
    <a href=${Images[2][1]}><img src="${Images[2][0]}"><a>
`;