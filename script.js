let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addTxt = document.getElementById("note-text");
let addOption = document.getElementById("categories");
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();






addBtn.addEventListener("click", (e)=>{
    if(addTitle.value =="" || addTxt.value == ""){
        return alert("Please fiil all");
    }

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title:addTitle.value,
        text:addTxt.value,
        category:addOption.value,
        archived:"",
        created:date
        
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value = "";
    addTxt.value = "";


    showNotes();
});
 
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html +=`
        <div id="note">   
        <p class="note-counter">Note ${index + 1}</p>
        <p class="category">Category:${element.category}</p>
        <h3 class="note-title">${element.title}</h3>
        <p class="note-text">${element.text}</p>
        <p class="note-text">${element.created}</p>
        <button id="${index}" onClick="deleteNote(this.id)" class="note-btn">Delete Note</button>
        <button id="${index}" class="note-btn edit-btn" onClick="editNote(this.id)" >Edite Note</button>
        <button id="${index}" class="note-btn edit-btn" onClick="archiveNote(this.id)">Archive</button>
       
    </div>
        `;
    });

    let noteElm = document.getElementById("notes");
    if(notesObj.length != 0){
        noteElm.innerHTML = html;
    }else{
        noteElm.innerHTML = "Add notes here";
    }
    
}

function deleteNote(index){
    let confirmDel = confirm("Delete It?");


    
    if(confirmDel == true){
        let notes = localStorage.getItem("notes");
        if (notes == null){
            notesObj = [];
        }else{
            notesObj = JSON.parse(notes);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}


function editNote(index){
    let notes = localStorage.getItem("notes");
    if(addTitle.value !=="" || addTxt.value !==""){
        return alert ("Clear form before");
    }
    if (notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.findIndex((element, index) => {
        addTitle.value = element.title;
        addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

function archiveNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.findIndex((element, index) =>{
       
        element.archived = "archived";
    })
    
    localStorage.setItem("arc", JSON.stringify(notesObj));
    
    localStorage.setItem("notes", JSON.stringify(notesObj));
   
    showNotes();
}




    
    




showNotes();

