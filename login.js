
function validateForm() {
    var email = document.getElementById("Uname").value;
    var password = document.getElementById("pwd").value;
    if (email == "") {
      alert("Please enter your username...");
      return false;
    }else if (password == "") {
      alert("Please enter your password.");
      return false;
    }else{
      login();
    }
  }

async function login(){

    var email = document.getElementById("Uname").value;
    
    var password = document.getElementById("pwd").value;
    
    let formData = {
    "email": `${email}`,
    "password": `${password}`
  };
  
  document.getElementById("body-container").innerHTML=`<div class="loader" id="loader">
                      <div class="log-img" style="background-color: rgba(217, 217, 217, 0.666); border-radius: 24px;">
                      <img src="./Screenshot from 2023-05-08 18-46-14.png" alt="" sizes="" width="300px" srcset="" class=""><br>
                      <img src="https://i.gifer.com/YCZH.gif" alt="" sizes="" width="300px" srcset="" class="">
                      <!-- <h2 class="" style="text-align: center; color: #000000;" >loading...</h2> -->
                      </div>
                    </div>`;
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(formData)
  };

 await fetch("https://image-generator-api-render.onrender.com/login", configObj)

 .then(async function (response) {
   console.log(formData);
 
  return await response.json();
})
.then(async function (object)
 {   console.log(object.body);
    if(object.body==="Invalid Credentials"){
  document.getElementById("body-container").innerHTML=`
  <form >
  <div class="login">
  <div class="logo"><img src="./Screenshot from 2023-05-08 18-46-14.png" alt="" sizes="" width="150px" srcset=""></div>
  
  <h2>Invalid register</h2>
  <h2>Go back to register</h2>


  
  <div class="button-container">
    <a href="reg.html" type="button" class="button">Register</a>
  </div>`;
  }
  else{
    console.log(object.body);
    let data = JSON.parse(object.body);
    console.log(data[0]);
    sessionStorage.setItem("user",data[0].username);
   console.log(sessionStorage.getItem("user"));
  window.location="./uvpage.html";
  }
})




 };