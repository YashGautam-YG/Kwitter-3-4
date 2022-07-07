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
       user_name=localStorage.getItem("user_name");
       room_name=localStorage.getItem("room_name");
       function send(){                             
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
          });
          document.getElementById("msg").value = "";

       }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
message_with_tag="<h4 class='message_h4' >"+Message+"</h4>";
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";

like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)' >";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_width_tag;
document.getElementById("output").innerHTML +=row;
    } });  }); }

    getData();
function updateLike(message_id){
console.log("Clicked on the like button"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_Likes=Number(likes)+1;

console.log(update_Likes);
firebase.database().ref(room_name).child(message_id).update({
    like:update_Likes
});
}
function logout(){


    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location.replace("index.html");
}