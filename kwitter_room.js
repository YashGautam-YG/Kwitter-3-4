const firebaseConfig = {
    apiKey: "AIzaSyByf00A1KbDGPeV59gvCDfuJYNGccitivU",
    authDomain: "kwitter-f36bb.firebaseapp.com",
    databaseURL: "https://kwitter-f36bb-default-rtdb.firebaseio.com",
    projectId: "kwitter-f36bb",
    storageBucket: "kwitter-f36bb.appspot.com",
    messagingSenderId: "88565635606",
    appId: "1:88565635606:web:6b087033cfe6b8e2bd3337"
  };
  
      firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("username");
      document.getElementById("username").innerHTML="Welcome "+user_name+"!";
      function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_room.html";
      }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("roomname ="+Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
        document.getElementById("output").innerHTML+=row;
        });});}
  getData() ;

  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
  }


  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomname",name);
    window.location="kwitter_page.html";
    
  }
