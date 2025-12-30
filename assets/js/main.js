
/*
CLick to Humburger
*/
const navbar  = document.querySelector("#navv");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-x");
const hum = document.querySelector(".humburger");

hum.addEventListener("click", () => {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
});

document.querySelectorAll("#navv li a").forEach((link) =>{
    link.addEventListener("click", ()=>{
        navbar.classList.remove("active");
    bars.classList.add("active");
    xmark.classList.remove("active");
    })
})
// Scroll to top function 
let scrollTop = document.querySelector(".scroll-to-top")
// Add clss show for visability
window.addEventListener("scroll",()=>{
if (window.scrollY >=200){
    scrollTop.classList.add("show")
}else
{
    scrollTop.classList.remove("show")
}
})
// Add action click to top
scrollTop.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

// Contact Validation

const form = document.querySelector("#contact-form")
const username = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")

// Show Error
function showError(input, message){
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const span = formControl.querySelector("span");
    span.innerText = message
}

// Show Sucsses
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = "form-control"

}

form.addEventListener("submit", (e)=>{

    let isValid = true
    // User Name
    if(username.value.trim() === ""){
        showError(username, "Username is requried")
        isValid = false
    } else {
        showSuccess(username)
    }
    // Email Validatiom
    if(email.value.trim() === ""){
        showError(email, "Email is requried")
        isValid = false

    } else {
        showSuccess(email)
    }
    // Phone Validation
    if(phone.value.trim() === ""){
        showError(phone, "Phone is requried")
        isValid = false
    } else if (phone.value.trim().length !== 11){
        showError(phone, "Enter a valid phone number with 11 numbers")
        isValid = false
    } 
    else {
        showSuccess(phone)
    }
    // message Validatiom
    if(message.value.trim() === ""){
        showError(message, "Message is requried")
        isValid = false
    } else {
        showSuccess(message)
    }


    if(isValid === false){
        e.preventDefault()
    }
})
