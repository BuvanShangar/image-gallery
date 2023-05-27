function validateForm() {
    var email = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

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
 
  var email = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;
  let formData = {
    "email": `${email}`,
    "password": `${password}`
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  };

 await fetch("https://image-gallery-api-git.netlify.app/login", configObj)

    .then(async function (response) {
      return await response.json();
    })
    .then(async function (object) {
      
      element0.style.visibility = "hidden" ;
      element1.style.visibility = "visible" ;
    let aa= await document.getElementById("forms").reset();
      // await alert("uploaded");
     await console.log(object);
    })
    .catch(async function (error) {
      element0.style.opacity = "hidden";
      element1.style.visibility = "visible" ;
      let aa= await document.getElementById("forms").reset();
     await alert("Bad things! Ragnarők!");
    await  console.log(error.message);
    });




 }