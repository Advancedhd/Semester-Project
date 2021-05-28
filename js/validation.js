const form = document.querySelector(".carditem1");
const namefield = document.querySelector(".nameField");
const email = document.querySelector(".emailField");
const number = document.querySelector(".phonenumberField")
const submitbutton = document.querySelector(".bookbutton");
const msgbox = document.querySelector(".msg");
const validated = document.querySelector(".validated");
let msg = "";

function verifyEmail(email) {
 if (/\S+@\S+\.\S+/.test(email)){
    return (true) 
}
    return (false)
}

function checklength(string, len) {
    if (string.length > len) {
        return true;
    } else {
        return false;
    }
}

const validateForm = () => {
    msgbox.innerHTML = ""
    msg = ""
    validated.innerHTML = ""
    validationFlag = true
    event.preventDefault();

    // checks for name
    if(namefield.value === "" ) {
        msg += "Name is required! <br>"
        validationFlag = false
    } else if (namefield.value.length <= 4) {
        msg += "Name is too short! <br>"
        validationFlag = false
    } 

    // checks for email
    if(!email.value) {
        msg += "Email is required! <br>"
        validationFlag = false
    } else if (!verifyEmail(email.value)) {
        msg += "Please enter a valid email! <br>"
        validationFlag = false
    }


    //checks for number
    if(!checklength(number.value, 7)) {
        msg += "Number must be minimum 8 in length! <br>"
        validationFlag = false
    }

    //display whatever errors occured
    msgbox.innerHTML = msg

    //clear errors after 5 seconds
    setTimeout(() => {
        msgbox.innerHTML = ""
        msg = ""
    }, 5000);

    //final check if the validation went through successfully
    if (validationFlag === true) {
        validated.innerHTML = "Success, form has been sent"
    }
}

//add eventlistener to the button
form.addEventListener("submit", validateForm)