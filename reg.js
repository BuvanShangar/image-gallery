
 function validateForm() {
    var username = document.getElementById("Uname").value;
    var password = document.getElementById("pwd").value;
    var confirmPassword = document.getElementById("cpwd").value;
    var email = document.getElementById("em").value;

    if (username == "" || password == "" || confirmPassword == "" || email == "") {
        alert("All fields are required!");
        return false;
      }else if (password !== confirmPassword) {
        alert("Password and confirm password do not match!");
        return false;
      }else{
        register();
      }
};
async function register(){
  var username = document.getElementById("Uname").value;
    var password = document.getElementById("pwd").value;
    var confirmPassword = document.getElementById("cpwd").value;
    var email = document.getElementById("em").value;
 // let button = document.getElementById("button").value;
  let formData = {
    "username":`${username}`,
    "password":`${password}`,
    "email":`${email}`,
    "date":`${new Date()}`
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData) 
  };
  document.getElementById("body-container").innerHTML=`<div class="loader" id="loader">
                      <div class="log-img" style="background-color: rgba(217, 217, 217, 0.666); border-radius: 24px;">
                      <img src="./Screenshot from 2023-05-08 18-46-14.png" alt="" sizes="" width="300px" srcset="" class=""><br>
                      <img src="https://i.gifer.com/YCZH.gif" alt="" sizes="" width="300px" srcset="" class="">
                      <!-- <h2 class="" style="text-align: center; color: #000000;" >loading...</h2> -->
                      </div>
                    </div>`;

    await fetch("https://image-generator-api-render.onrender.com/register", configObj)
    .then(async function (response) {
      console.log(response);
      return await response.json();
    })
    .then(async function (object)
    {   
        if(object.body==="valid Credentials"){
          sessionStorage.setItem("user",username);
   console.log(sessionStorage.getItem("user"));
  window.location="./uvpage.html";
      }
      else{
        document.getElementById("body-container").innerHTML=`
        <form >
        <div class="login">
        <div class="logo"><img src="./Screenshot from 2023-05-08 18-46-14.png" alt="" sizes="" width="150px" srcset=""></div>
        
        <h2>Registered successfully</h2>
        <h2>Go back to Login</h2>
    
      
        
        <div class="button-container">
          <a href="login.html" type="button" class="button">Login</a>
        </div>`;
      }
    })};
    