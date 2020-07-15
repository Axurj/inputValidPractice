let nameRecieved = document.getElementById("nameTag");
let passRecieved = document.getElementById("passTag");
let emailRecieved = document.getElementById("emailTag");

nameRecieved.addEventListener("keyup", validName);
passRecieved.addEventListener("keyup", validPass);