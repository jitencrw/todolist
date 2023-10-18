let todoItems = '';
let todolist = [];
let newHtml = '';
let containerItems = document.querySelector('.big');




function addTodo() {
  displayarray () ;
let displayItems = document.querySelector('#inputBox');
let displayDate = document.querySelector('#dueDate');
todoItems = displayItems.value;
dueDate = displayDate.value;
if (dueDate == '' ) {
  alert("Please Select date ")
  return ;
}

todolist.push({items: todoItems , date: dueDate});


displayItems.value='';
displayDate.value='';
displayarray()
;
}


function displayarray () {
 
  
  
 newHtml = '';
  for(let i=0; i<todolist.length ; i++) 
  {
    
    let items = todolist[i].items ;
    let Date = todolist[i].date ;

    newHtml += ` <span class="big" >${items}</span> <span class="big">${Date}</span> <button class="button" onclick=" todolist.splice(${i} , 1) ; 
    displayarray();  ">Delete</button> `
    ;

    containerItems.innerHTML = newHtml;
  }

}

function addSaveButton() {
  let savebutton = document.querySelector('.savebutton');
  savebutton.innerHTML = `<button class="button" id="buttonid" onclick="saveData();">Save</button>`
}
