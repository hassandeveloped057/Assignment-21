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


function register(){
    var Name = document.getElementById("Name");
    var FatherName = document.getElementById("FatherName");
    var Email = document.getElementById("Email");
    var Password = document.getElementById("Password");
    var Age = document.getElementById("Age");
    var selectCourse = document.getElementById("selectCourse");
    var selectGender = document.getElementById("selectGender");
    var PhoneNumber = document.getElementById("selectGender");
  
    var obj = {
        Name: Name.value,
        FatherName: FatherName.value,
        Email: Email.value,
        Password: Password.value,
        Age: Age.value,
        selectCourse: selectCourse.value,
        selectGender: selectGender.value,
        PhoneNumber: PhoneNumber,
    }
    frb.database().ref('student').push(obj);
}
function getDataFromFirebase() {
    frb.database().ref('student').on("child_added", (data) => {

        console.log(data.val());
    })
}
getDataFromFirebase();




document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
   
    window.location.href = 'todo.html';
});
