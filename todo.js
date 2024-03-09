const firebaseConfig = {
    apiKey: "AIzaSyCVS15WDCYHzRc9I3j3xE5j_VWDa_-ekTk",
    authDomain: "assignment-21-3fa6d.firebaseapp.com",
    databaseURL: "https://assignment-21-3fa6d-default-rtdb.firebaseio.com",
    projectId: "assignment-21-3fa6d",
    storageBucket: "assignment-21-3fa6d.appspot.com",
    messagingSenderId: "844515258060",
    appId: "1:844515258060:web:aea8b5139ca6f688575c69"
};

const frb = firebase.initializeApp(firebaseConfig);
console.log(frb.database);

firebase.database().ref("todos").on("child_added", (data) => {

    var list = document.getElementById("listItems");
    var listElement = document.createElement("li");
    listElement.classList.add("list");

    var listText = document.createTextNode(data.val().value);
    listElement.appendChild(listText);

    // ******************Deletebtn*************************************
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtn.classList.add("deletestyle");

    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("id", data.val().key)
    delBtn.setAttribute("onclick", "delTodo(this)");
    listElement.appendChild(delBtn);


    // ******************Editbtn*************************************
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.classList.add("editstyle");
    editBtn.appendChild(editBtnText);
    listElement.appendChild(editBtn);
    list.appendChild(listElement);

    editBtn.setAttribute("onclick", "editTodo(this)");
    editBtn.setAttribute("id", data.val().key);

    console.log(listElement);
    data.val().value = "";
})


function addtodo() {
    var input = document.getElementById("todo-input");
  

    var key = firebase.database().ref("todos").push().key;

    let obj = {
        value: input.value,
        key: key
    };
    firebase.database().ref("todos").child(key).set(obj);


}
function deletetodo() {
    var list = document.getElementById("listItems");
    firebase.database().ref("todos").remove();

    list.remove();
}

function delTodo(e) {
    firebase.database().ref("todos").child(e.id).remove();
    console.log(e.parentNode.remove());
}

function editTodo(a) {
    var currentLi = a.parentNode.firstChild.nodeValue;
    var inputField = prompt("Enter updated value", currentLi);

    var editTodo = {
        value: inputField,
        key: a.id
    }

    firebase.database().ref("todos").child(a.id).set(editTodo);

    a.parentNode.firstChild.nodeValue = inputField
}


