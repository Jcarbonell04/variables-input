// Variables & Input
"use strict";

//Event Listener
document.getElementById('submit-btn').addEventListener('click', displayMessage);

// Event Function
function displayMessage() {
    //Input
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let fullName = firstName + ' ' + lastName;
    
    //Build Message
    let message = 'Hello' + fullName + ". Your surname is " + lastName + ' and your first name is ' + firstName + ".";
    
    //Output the Message
    document.getElementById('output').innerHTML = message;
}
