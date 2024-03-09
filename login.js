
const firebaseConfig = {
  apiKey: "AIzaSyCVS15WDCYHzRc9I3j3xE5j_VWDa_-ekTk",
  authDomain: "assignment-21-3fa6d.firebaseapp.com",
  projectId: "assignment-21-3fa6d",
  storageBucket: "assignment-21-3fa6d.appspot.com",
  messagingSenderId: "844515258060",
  appId: "1:844515258060:web:aea8b5139ca6f688575c69"
};

var frb = firebase.initializeApp(firebaseConfig);

console.log(frb.auth);

function submit(){
  var email = document.getElementById("Email");
  var password = document.getElementById("Password")

firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
  
    var user = userCredential.user;
    console.log(user);
  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage,errorCode);  
    
  });
}






document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
 
  window.location.href = 'todo.html';
});


