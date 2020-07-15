let nameRecieved = document.getElementById("nameTag");
let passRecieved = document.getElementById("passTag");
let emailRecieved = document.getElementById("emailTag");
let returnRecieved = document.getElementById("returnMsg");
let returnRecieved2 = document.getElementById("returnMsg2");
let returnEmail = document.getElementById("emailPrint");
let circleRecieved = document.getElementById("circleGreen");
let circleRecieved2 = document.getElementById("circleGreen2");

nameRecieved.addEventListener("keyup", validName);
passRecieved.addEventListener("keyup", validPass);
emailRecieved.addEventListener("keyup", printEmail);

function validName() {
    if(nameRecieved.value.includes(" ") == true && nameRecieved.value.length > 1) {
        circleRecieved.innerHTML = "o";
    } // else {
    //    returnRecieved.innerHTML = "This input requires a first and last name.";
    // }
}


function validPass() {
    if(passRecieved.value.length >= 8 && passRecieved.value.length <= 12) {
        circleRecieved2.innerHTML = "o"
    }// else {
    //     returnRecieved2.innerHTML = "This password needs to be 8 characters long."
    // }
}

function printEmail(event) {
    event.preventDefault();
    returnEmail.innerHTML = "Email: " + emailRecieved.value;
}