
function addItems() {
    var inputText = document.getElementById('todo-input');

    var list = document.getElementById('listItems');
    
    var listEle = document.createElement('li');

    var listText = document.createTextNode(inputText.value);

    listEle.appendChild(listText);

    
    
    // **********************Creating Edit Button********************************
    var editBtn = document.createElement('button');

    var editBtnText = document.createTextNode('Edit'); 

    editBtn.appendChild(editBtnText);

    editBtn.setAttribute("onClick", 'editTodo(this)');
    
    listEle.appendChild(editBtn);


    // **********************Creating Del Button********************************
    var delBtn = document.createElement('button');
    
    var delBtnText = document.createTextNode('Delete'); 
    
    delBtn.appendChild(delBtnText);
    
    delBtn.setAttribute("onClick", 'delTodo(this)');

    listEle.appendChild(delBtn);
    


    list.appendChild(listEle);

    inputText.value = "";
    
    console.log(listEle);
}


function deleteItems() {
    var deleteList = document.getElementById('listItems');

    deleteList.innerHTML = "";

}


function delTodo(e) {
    console.log(e.parentNode.remove());
}

function editTodo(e) { 
    
    var currentLi = e.parentNode.firstChild.textContent.trim();

    
    var inputField = prompt("Enter updated value", currentLi);

    
    if (inputField !== null && inputField.trim() !== "") {
        e.parentNode.firstChild.textContent = inputField;
    }

    console.log(inputField);
}