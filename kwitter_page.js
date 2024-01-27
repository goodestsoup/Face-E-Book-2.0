//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("msg").value ="";
}

