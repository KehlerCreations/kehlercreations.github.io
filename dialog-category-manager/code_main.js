/* DEFINE SYSTEM VARIABLES */

var File_Object = {
    Project_Name: "",
    Dialog_Count: 0,
};

let Selected_Dialog = undefined;

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

    let element = document.getElementsByClassName("content-newProject")[0];
    element.classList.remove("hidden");
    
});

document.getElementById("content-newProject-buttonCreate").addEventListener("click", function() {
    let newProjectName = document.getElementsByClassName("content-newProject-ProjectName")[0];
    if(true /* TEMPORARY */ || newProjectName.value !== "") {
        Project_ClearSystemButtons();
        Project_AddProjectButtons();
        
        File_Object.Project_Name = newProjectName.value;
        document.title = newProjectName.value;
    } else {
        alert("Project requires a name");
    }
})

const Project_DialogList_Update = function() {
    const DialogList = document.querySelector("#dialog-list");

    let _length = Object.keys(File_Object.Dialogs).length;
    for(let i=0; i<_length; i++) {
        //console.log(File_Object.Dialogs[i]);
    }
    console.log(File_Object.Dialogs[i]);
}

const Project_ClearSystemButtons = function() {
    let system_segments = document.getElementsByClassName("system-segment");
    let size = system_segments.length;
    for(let i=0; i<size; i++) {
        system_segments[0].remove();
    }
    
    let new_project_window = document.getElementsByClassName("content-newProject")[0];
    new_project_window.classList.add("hidden");

}

const Project_AddProjectButtons = function() {
    // Add buttons for dialogs and system
    let system = document.getElementsByClassName("system")[0];
    system.innerHTML += `
    <div class="system-segment">
        <button class="button" id="system-button-add-dialog">Add dialog</button>
    </div>
    <div class="system-segment">
        <button class="button" id="system-button-save-file">Save</button>
        <button class="button" id="system-button-exit">Close project</button>
    </div>
    `;

    document.getElementById("system-button-add-dialog").addEventListener("click", function() {
        let dialog = document.getElementById("dialog-list");
        dialog.innerHTML += `
            <li class="dialog-list-index">
            </li>
        `;
        let dialog_name = document.getElementById("dialog-script-name");
        dialog_name.value = "new dialog";

        Selected_Dialog = dialog.lastElementChild;
        Selected_Dialog.innerHTML = document.getElementById("dialog-script-name").value;
        
        File_Object[File_Object.Dialog_Count] = {
            Topic: "new dialog",
            Content: ""
        }
        
        File_Object.Dialog_Count ++;

        // Enables switching between dialogs in the list
        let dialog_list_indices = dialog.getElementsByClassName("dialog-list-index");
        let size = dialog_list_indices.length;
        for(let i = 0; i < size; i++) {
            dialog_list_indices[i].addEventListener("click", function() {
                Selected_Dialog = this;
                document.getElementById("dialog-script-name").value = this.innerHTML;
            });
        }

    });

    let hidden_content = document.getElementsByClassName("content-main");
    hidden_content[0].classList.remove("hidden");
}


/* HANDLE DIALOGS */

document.getElementById("dialog-script-name").addEventListener("input", function() {

    Selected_Dialog.innerHTML = document.getElementById("dialog-script-name").value;

});