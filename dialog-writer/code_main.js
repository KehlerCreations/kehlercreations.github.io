/* DEFINE SYSTEM VARIABLES */

let File_Object = {
};

/* CREATE AND LOAD PROJECTS */

document.getElementById('system-button-load-project').addEventListener('change', function() {
    const file = document.getElementById('system-button-load-project').files[0];

    (async () => {
        const fileContent = await file.text();
        File_Object = JSON.parse(fileContent);
        Project_DialogList_Update();
    })();
});

document.getElementById("system-button-new-project").addEventListener("click", function() {
    Project_ClearSystemButtons();
    Project_AddProjectButtons();
});

const Project_ClearSystemButtons = function() {
    let system_segments = document.getElementsByClassName("system-segment");
    let size = system_segments.length;
    for(let i=0; i<size; i++) {
        system_segments[0].remove();
    }
}

const Project_AddProjectButtons = function() {
    // Add buttons for dialogs and system
    let system = document.getElementsByClassName("system")[0];
    system.innerHTML += `
    <div class="system-segment">
        <button class="button" id="system-button-save-file">Save</button>
        <button class="button" id="system-button-exit">Close project</button>
    </div>
    `;

    let hidden_content = document.getElementsByClassName("content-main");
    hidden_content[0].classList.remove("hidden");
}

/* MODIFY EDITOR DISPLAY */
const EditorUpdateLayer = function(layer, layerName = "") {

    let parentElement = document.getElementsByClassName("content-main")[0];

    layer.remove(); // Remove layer to then rebuild it
    // Note: Removing the layer puts it at the bottom
    
    let newLayer = document.createElement("div");
    newLayer.classList.add("editor-layer");
    parentElement.append(newLayer);
    
    /// Add the list of nodes
    let listOfNodes = document.createElement("ul");
    listOfNodes.classList.add("list-of-nodes");
    newLayer.append(listOfNodes);
    
    /// Add new nodes

    let keys;
    if(layerName == "") {
        keys = Object.keys(File_Object);
    } else {
        keys = Object.keys(File_Object[layerName]);
    }
    let length = keys.length;
    console.log(length);
    for(let i=0; i<length; i++) {

        /// Add new node to the layer
        let node = document.createElement("li");
        node.classList.add("node");
        node.innerHTML = `<div>${keys[i]}</div>`;
        listOfNodes.appendChild(node);

        /// Add click to open the next layer
        node.querySelector("div").addEventListener("click", function() {

            let grandParent = this.parentElement.parentElement.parentElement;
            
            /// Remove excessive visible layers
            let editorLayers = document.getElementsByClassName("editor-layer");
            let editorLayersLength = editorLayers.length;
            let thisLayerIndex = -1;
            for(let i=0; i<editorLayersLength; i++) {
                if(editorLayers[i] == grandParent) {
                    thisLayerIndex = i;
                    break;
                }
            }

            for(let i=thisLayerIndex+1; i<editorLayersLength; i++) {
                editorLayers[i].remove();
            }

            let clickedLayerName = this.innerText;
            EditorUpdateLayer(layer, clickedLayerName);
        });

        /// Add edit name button
        let editName = document.createElement("div");
        editName.classList.add("button-edit-name");
        editName.innerText = "✎";
        node.appendChild(editName);
        
        editName.addEventListener("click", function() {
            let editableElement = this.parentElement.querySelector("div");
            EditorEditNodeName(editableElement);
        });
    }

    EditorAddNodeButton(newLayer, layerName);

    return newLayer;
}

const EditorEditNodeName = function(element) {
    if(element.contentEditable == "inherit" || element.contentEditable == "false") {
        element.contentEditable = true;
        element.focus();
        let range = document.createRange();
        range.selectNodeContents(element);
        let selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        let originalName = element.innerText;

        element.addEventListener("keydown", (e) => {
            if(e.key == "Enter") {
                EditorEditNodeNameFinalize(element, originalName);
            }
        });
    }
}

const EditorEditNodeNameFinalize = function(element, originalName) {
    let newName = element.innerText;
    element.contentEditable = false;
    // Update File Object
    File_Object[newName] = File_Object[originalName];
    delete File_Object[originalName];
    // Keep in mind that this code currently always places a renamed node at the bottom of the list
}

const EditorAddNodeButton = function(layer, layerName) {
    let button = document.createElement("button");
    button.classList.add("button", "editor-button", "editor-add-parent");
    button.innerText = "add new";
    layer.appendChild(button);
    
    button.addEventListener("click", function() {
        ObjectAddNode(layer, layerName);
    });
}

/* INTERFACE FOR JSON EDITING */
const ObjectAddNode = function(layer, layerName) {
    File_Object[""] = {};
    
    let newLayer = EditorUpdateLayer(layer, layerName);
    let layerNodes = newLayer.querySelector(".list-of-nodes");
    let newestElement = layerNodes.lastChild.querySelector("div");
    EditorEditNodeName(newestElement);
}

let root = document.querySelector(".editor-layer");
EditorAddNodeButton(root, "");