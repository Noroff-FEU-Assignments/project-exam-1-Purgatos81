//script to contact page

const contForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const address = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let nameValidator = 0;
let messageValidator = 0;
let emailValidator = 0;
let subjectValidator = 0;

function validateContactForm() {
    event.preventDefault();

    if (nameInput.value.trim().length > 5) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (subject.value.trim().length > 15) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    
    if (address.value.trim().length > 25) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }


    //console.log("Hello");
}

contForm.addEventListener("submit", validateContactForm);

function checkEmail(email) {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const inputMatch = regEx.test(email);
    return inputMatch;
}

