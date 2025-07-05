//#region Generate header and footer

const header = document.getElementById("main-header");
fetch("header.html")
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/html"))
  .then((dom) => dom.getElementById("main-title"))
  .then((content) => {
    header.append(content); 
});

//#endregion

//#region Load content

const mainGrid = document.getElementById("main-content-grid");
const urls = ["experience.html", "skills.html", "samples.html"];

// Make content load one by one with slight animation

const LoadContent = function() {
  const url = urls[currentContent];
  fetch(url)
    .then((response) => response.text())
    .then((text) => new DOMParser().parseFromString(text, "text/html"))
    .then((dom) => dom.getElementsByClassName("grid-content")[0])
    .then((content) => {
      mainGrid.append(content);
      content.style.position = "relative";
      content.style.top = "-100px";
      content.style.opacity = "0";

      content.style.transition = "top 1s, opacity 1s";
      setTimeout(()=>{
        content.style.top = "0px";
        content.style.opacity = "1";
      }, 5);
  });

  currentContent++;

  // When all content is loaded
  if(currentContent >= urls.length) {
    clearInterval(contentTimer);

    setTimeout(() => {
      LoadSamples(Samples.design);
      LoadSamples(Samples.graphics_3d);
      LoadSamples(Samples.music);
      LoadSamples(Samples.logotypes);
      CreateInteractiveImages();
    }, 30);
  }
}

let currentContent = 0;
let contentTimer = setInterval(LoadContent, 100);

//#endregion



//#region Generate Samples

const Samples = {
  design: {
    title: "Design",
    type: "img",
    content: [
      {
        src: "Images/Samples/Design/Height reference.png",
        text: "Height reference for a landscape sculpt. Both the background image and height lines are self-created.",
      },
      {
        src: "Images/Samples/Design/Casino Level Design.png",
        text: "Casino map layout for Two Dollar Suits.",
      },
      {
        src: "Images/Samples/Design/Sunset Trail world map.png",
        text: "World map sketch for an ambitious story-first heist game.",
      },
      {
        src: "Images/Samples/Design/New Store Mockup.png",
        text: "Item shop concept for Two Dollar Suits.",
      },
    ],
  },

  graphics_3d: {
    title: "3D Graphics",
    type: "img",
    content: [
      {
        src: "Images/Samples/3D Graphics/Kitchen Render.jpg",
        text: "Replica of my old apartment kitchen. I mainly focused on creating a natural lighting environment that I would see in the room myself.",
      },
      {
        src: "Images/Samples/3D Graphics/Guitar Render.jpg",
        text: "Guitar modelled in Maya and rendered with Arnold. (It's missing a stand though 😣)",
      },
      {
        src: "Images/Samples/3D Graphics/Tire in Mud Render.jpg",
        text: "Close-up shot of a worn down tire in a muddy wasteland.",
      },
      {
        src: "Images/Samples/3D Graphics/Knife Render.jpg",
        text: "Close-up render of kitchen equipment placed upon a multilayered displaced marble countertop.",
      },
      {
        src: "Images/Samples/3D Graphics/CPU and GPU Render.jpg",
        text: "Unofficial design for an AMD processor and graphics card, connected through a Ryzen-themed wire.",
      },
      {
        src: "Images/Samples/3D Graphics/Die Render.jpg",
        text: "Macro photography styled render of a standard six-sided die.",
      },
      {
        src: "Images/Samples/3D Graphics/Snowman Render.jpg",
        text: "One of my older creations, depicting a snowman in a peaceful evening environment. Used to practice displacement, subdivision and high frequency noise.",
      },
      {
        src: "Images/Samples/3D Graphics/Bottles Render.jpg",
        text: "Bottles with logos rendered for a friend's university project. Full resolution image shows how I replicated the satisfying characteristics of a real photograph.",
      },
      {
        src: "Images/Samples/3D Graphics/Furniture Render.jpg",
        text: "Low-poly furniture for a bedroom and living room.",
      },
      {
        src: "Images/Samples/3D Graphics/Water Bottle.png",
        text: "A water bottle spilling its water captured in action.",
      },
    ],
  },

  music: {
    title: "Music",
    type: "iframe",
    content: [
      {
        src: "https://www.youtube-nocookie.com/embed/TDM8_UMMeuE?si=CPivc_pBcCjWbb1X",
        text: "The centerpiece music track of the upcoming remaster of A-Star Theft.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/t6VSaVu7Yro?si=tn-Ld9CcLKZ7xhyF",
        text: "An experimental orchestral track to round off development of A-Star Theft, and a toast to the beginning of Two Dollar Suits.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/9iwLJSKieas?si=0Y-IR4ZS7AC9kBs-",
        text: "Created in 2021, this track holds a special place in my heart. It is sort of the unofficial theme song of A-Star Theft.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/bVb1y06uUko?si=hNvN3H3rpUWWAz2t",
        text: "Drum-and-base track for A-Star Theft.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/zuEt5wgDtkw?si=JAWDZZjEMBJlGYNv",
        text: "An electronic rock track. Simple but exciting.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/QX6RcSmK4_Y?si=Uw-ZVmkEKKKlIefv",
        text: "A 2020 song, the heaviest track in A-Star Theft.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/lnQ5tXo_cIA?si=ZL3x1kUzCDsvtwKY",
        text: "A funky electronic track, remastered in 2023.",
      },
      {
        src: "https://www.youtube-nocookie.com/embed/zIHVyyKTa7Q?si=usQKwx-rAxfkap1G",
        text: "My first track, 2023 remaster of inital version from 2019.",
      },
    ],
  },

  logotypes: {
    title: "Logotypes",
    type: "img",
    content: [
      {
        src: "Images/Samples/Logotypes/A_Star_Theft_Game_Logo.png",
        text: "Current official game logo for A-Star Theft as seen on Steam.",
      },
      {
        src: "Images/Samples/Logotypes/Kehler Creations Logo Medium Circle.png",
        text: "Current logo for Kehler Creations. Color scheme is aligned with the original style for A-Star Theft.",
      },
      {
        src: "Images/Samples/Logotypes/Two Dollar Suits.png",
        text: "Two Dollar Suits, for work-in-progress remaster of A-Star Theft.",
      },
      {
        src: "Images/Samples/Logotypes/Unpublished Game Logo.png",
        text: "Developement logotype for an upcoming adventure-horror game.",
      },
    ],
  },
}

const LoadSamples = function(category) {
  let baseElement = document.getElementById("samples");

  //#region Create category

  // Create category parent element
  let newCategory = CreateElement("div", baseElement);
  newCategory.classList.add("subject", "samples", "folded");

  // Create category title
  let categoryTitleGroup = CreateElement("div", newCategory);
  categoryTitleGroup.classList.add("title");
  categoryTitleGroup.style.userSelect = "none";
  let categoryTitle = CreateElement("span", categoryTitleGroup);
  categoryTitle.innerText = category.title;

  let sampleList = CreateElement("ul", newCategory);
  sampleList.classList.add("sample-list");
  
  //#endregion
  
  //#region Create individual samples

  let size = category.content.length;
  for(let i=0; i<size; i++) {
    let content = category.content[i];

    // Create container for image and description
    let sampleGroup = CreateElement("li", sampleList);
    sampleGroup.classList.add("sample-group");

    // Create image
    let image = CreateElement(category.type, sampleGroup);
    image.classList.add("sample-image");
    image.src = content.src;
    if(category.type === "iframe") {
      image.title = "YouTube video player";
      image.frameborder = "0";
      image.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    }

    // Create description
    let text = CreateElement("div", sampleGroup);
    text.classList.add("sample-description");
    text.innerText = content.text;
  }

  //#endregion

  //#region Make categories foldable

  let heightWhenFolded = "300px";

  let foldSymbol = CreateElement("span", categoryTitleGroup);
  foldSymbol.classList.add("fold-symbol");
  foldSymbol.innerText = "➤";
  foldSymbol.style.scale = ".5";
  foldSymbol.style.display = "inline-block";
  foldSymbol.style.position = "relative";
  // foldSymbol.style.left = "3px";
  foldSymbol.style.top = "3px";
  foldSymbol.style.transition = "rotate .3s";
  
  sampleList.addEventListener("click", () => {
    if(newCategory.classList.contains("folded")) {
      unfoldSamples();
    }
  });

  categoryTitleGroup.addEventListener("click", () => {
    if(newCategory.classList.contains("folded")) {
      unfoldSamples();
    } else {
      foldSamples();
    }
    
  });

  let foldSamples = function() {
    newCategory.classList.add("folded");
    foldSymbol.style.rotate = "0turn";
    newCategory.style.maxHeight = heightWhenFolded;
  }
  let unfoldSamples = function() {
    newCategory.classList.remove("folded");
    foldSymbol.style.rotate = ".25turn";
    newCategory.style.maxHeight = newCategory.scrollHeight.toString() + "px";
  }

  foldSamples();

  //#endregion

}

//#endregion

const CreateInteractiveImages = function() {
  const images = document.querySelectorAll("img");
  images.forEach(element => {
    AddInteractiveImage(element);
  });
}

const AddInteractiveImage = function(element) {
  element.style.cursor = "pointer";
  element.addEventListener("click", () => {
    ExpandImage(element);
  });
}

const ExpandImage = function(original_image) {

  // Wrapper style
  let wrapper = CreateElement("div", document.body);
  wrapper.style.width = "100vw";
  wrapper.style.height = "100vh";
  wrapper.style.position = "fixed";
  wrapper.style.left = "0";
  wrapper.style.top = "0";
  wrapper.style.display = "flex";
  wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  
  // Image style
  let image = CreateElement("img", wrapper);
  image.src = original_image.src;
  image.style.display = "block";
  image.style.maxWidth = "80vw";
  image.style.maxHeight = "80vh";
  image.style.margin = "auto";
  image.style.userSelect = "none";
  
  // Close image
  let closeImage = CreateElement("div", wrapper);
  closeImage.style.position = "absolute";
  closeImage.style.width = "100%";
  closeImage.style.height = "100%";
  closeImage.style.zIndex = "-10";
  closeImage.addEventListener("click", () => {
    wrapper.remove();
  });
}

//#region Helper functions

const CreateElement = function(element_type, parent) {
  let newElement = document.createElement(element_type);
  parent.append(newElement);
  return newElement;
}

//#endregion