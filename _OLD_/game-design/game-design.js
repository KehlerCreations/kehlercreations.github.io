/// Function to change images in Game Design
const GameDesign_BrowseImages = function(category, direction) {
  let imageList = category.getElementsByClassName("gamedesign-category-image");
  visibleImageIndex = 0;

  let imageListSize = imageList.length;
  let i = 0;
  while(i < imageListSize) {
    if(!imageList[i].classList.contains("no-display")) {
      visibleImageIndex = i;
      break;
    } else i ++;
  }
  
  imageList[visibleImageIndex].classList.add("no-display");

  visibleImageIndex += direction;
  visibleImageIndex = (visibleImageIndex === imageListSize)
    ? 0 : visibleImageIndex = (visibleImageIndex === -1)
      ? imageListSize - 1 : visibleImageIndex;

  imageList[visibleImageIndex].classList.remove("no-display");
}

/// Add Event Listeners to all image browse buttons
let allButtonGroups = document.querySelectorAll(".image-browse");
let buttonGroupCount = allButtonGroups.length;
for(let i=0; i<buttonGroupCount; i++) {

  // Left
  allButtonGroups[i].querySelector(".left").addEventListener("click", function() {
    let category = this.closest(".gamedesign-category");
    GameDesign_BrowseImages(category, -1);
  });

  // Right
  allButtonGroups[i].querySelector(".right").addEventListener("click", function() {
    let category = this.closest(".gamedesign-category");
    GameDesign_BrowseImages(category, 1);
  });

}