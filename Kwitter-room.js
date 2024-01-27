const firebaseConfig = {
  apiKey: "AIzaSyCCJ1TeCGB_aK8Qst6HR1manvfarbZpCGc",
  authDomain: "face-e-book.firebaseapp.com",
  databaseURL: "https://face-e-book-default-rtdb.firebaseio.com",
  projectId: "face-e-book",
  storageBucket: "face-e-book.appspot.com",
  messagingSenderId: "927983710388",
  appId: "1:927983710388:web:ed9ca91da57218685c67e1",
  measurementId: "G-KP85VZ88K2"
};

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
    });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}



