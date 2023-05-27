<<<<<<< HEAD
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
asyc function register(){

=======
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
asyc function register(){

>>>>>>> 34bf9153c063ff3f702310c8d8d232bad389f376
};