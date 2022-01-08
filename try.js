let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addTxt = document.getElementById("note-text");
let addOption = document.getElementById("categories");


notesObj = [
   
   
  ];
let myObj = {
    name:addTitle.value,
    created: date,
    category:addOption.value,
    text:addTxt.value,
    mdate:"",
    archive: false
    
};

notesObj.push(myObj);
notesObj.push(myObj);
notesObj.push(myObj);
console.log(notesObj);





arr = [
  {
    "title": "Happy",
    "text": "Us",
    "category": "Idea",
    "archived": "archived",
    "created": "2022-1-8"
  },
  {
    "title": "Happy",
    "text": "Love",
    "category": "Idea",
    "archived": "archived",
    "created": "2022-1-8"
  },
  {
    "title": "Happy",
    "text": "ss",
    "category": "Task",
    "archived": "archived",
    "created": "2022-1-8"
  },
  {
    "title": "Titul",
    "text": "ddd",
    "category": "Task",
    "archived": "archived",
    "created": "2022-1-8"
  },
  {
    "title": "Happy",
    "text": "вывв",
    "category": "Task",
    "archived": "",
    "created": "2022-1-8"
  },
  {
    "title": "ввв",
    "text": "вввв",
    "category": "Task",
    "archived": "",
    "created": "2022-1-8"
  },
  {
    "title": "йййй",
    "text": "дддд",
    "category": "Random Thought",
    "archived": "",
    "created": "2022-1-8"
  }
]


const taskCategory = arr.filter(function(e){
  return e.category =="Task" && e.archived =="archived";
});

console.log(taskCategory.length);