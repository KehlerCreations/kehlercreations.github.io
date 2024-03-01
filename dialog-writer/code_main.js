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
const EditorUpdateLayer = function(layer) {
    
    let parentElement = document.getElementsByClassName("content-main")[0];

    
    if(document.body.contains(layer)) layer.remove(); // Remove layer to then rebuild it

    layer = document.createElement("div");
    layer.classList.add("editor-layer");
    parentElement.appendChild(layer);
    
    /// Add the list of nodes
    let listOfNodes = document.createElement("ul");
    listOfNodes.classList.add("list-of-nodes");
    layer.appendChild(listOfNodes);
    
    /// Add new nodes
    var keys = Object.keys(File_Object);
    var length = keys.length;

    for(var i=0; i<length; i++) {

        /// Add new node to the layer
        let node = document.createElement("li");
        node.classList.add("editor-node");
        node.innerHTML = `<div>${keys[i]}</div>`;
        listOfNodes.appendChild(node);

        node.addEventListener("click", function() {
           /// Add new layer or open existing one
           let layerName = this.innerText;

           let grandParent = this.parentElement.parentElement;

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

           EditorUpdateLayer(layerName);
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

    EditorAddNodeButton(layer);

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
}

const EditorAddNodeButton = function(layer) {
    let button = document.createElement("button");
    button.classList.add("button", "editor-button", "editor-add-parent");
    button.innerText = "add new";
    button.layer = layer;
    layer.appendChild(button);
    
    button.addEventListener("click", function() {
        ObjectAddNode(this.layer);
    });
}

/* INTERFACE FOR JSON EDITING */
const ObjectAddNode = function(layer) {
    File_Object[""] = {};
    
    EditorUpdateLayer(layer);

    let layerNodes = layer.querySelector(".list-of-nodes");
    let newestElement = layerNodes.lastChild.querySelector("div");
    EditorEditNodeName(newestElement);
}

let root = document.querySelector(".editor-layer");
EditorAddNodeButton(root);