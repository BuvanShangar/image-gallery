
function validateForm() {
  console.log("hello");
    //var email = document.forms["loginForm"]["username"].value;
    //var password = document.forms["loginForm"]["password"].value;
    var email = document.getElementById("Uname").value;
    var password = document.getElementById("pwd").value;
    if (email == "") {
      alert("Please enter your username.");
      return false;
    }else if (password == "") {
      alert("Please enter your password.");
      return false;
    }else{
      login();
    }
  }
async function login(){
  console.log("hello");
 
  //var email = document.forms["loginForm"]["username"].value;
  //var password = document.forms["loginForm"]["password"].value;
    var email = document.getElementById("Uname").value;
    var password = document.getElementById("pwd").value;
  let formData = {
    "email": `${email}`,
    "password": `${password}`
  };
  // document.getElementById("body-container").innerHTML=`<div class="loader" id="loader">
  //                     <div class="log-img" style="background-color: rgba(217, 217, 217, 0.666); border-radius: 24px;">
  //                     <img src="./Screenshot from 2023-05-08 18-46-14.png" alt="" sizes="" width="300px" srcset="" class=""><br>
  //                     <img src="https://i.gifer.com/YCZH.gif" alt="" sizes="" width="300px" srcset="" class="">
  //                     <!-- <h2 class="" style="text-align: center; color: #000000;" >loading...</h2> -->
  //                     </div>
  //                   </div>`;
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  };

 await fetch("http://localhost:3000/login", configObj)

 .then(async function (response) {
   console.log(formData);
 
  return await response.json();
})
.then(async function (object)
{    console.log(object);
    //let json=object;
    //console.log(json);
})




 }