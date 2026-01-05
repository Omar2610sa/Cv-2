
/*
Click to Hamburger
*/
const navbar = document.querySelector("#navv");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-x");
const hum = document.querySelector(".humburger");

hum.addEventListener("click", () => {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
});

document.querySelectorAll("#navv li a").forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        bars.classList.add("active");
        xmark.classList.remove("active");
    })
})
// Scroll to top function 
let scrollTop = document.querySelector(".scroll-to-top")
// Add class show for visibility
window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        scrollTop.classList.add("show")
    } else {
        scrollTop.classList.remove("show")
    }
})
// Add action click to top
scrollTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// Contact Validation

const form = document.querySelector("#contact-form")
const username = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")

// Show Error
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const span = formControl.querySelector("span");
    span.innerText = message
}

// Show Success
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = "form-control"

}

form.addEventListener("submit", (e) => {

    let isValid = true
    // User Name
    if (username.value.trim() === "") {
        showError(username, "Username is required")
        isValid = false
    } else {
        showSuccess(username)
    }
    // Email Validatiom
    function validateEmail() {
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {
            showError(email, "Email is required")
            isValid = false

        } else if (!emailRegex.test(emailValue)) {
            showError(email, "Enter a valid Email")
            isValid = false
        }
        else {
            showSuccess(email)
        }
    } validateEmail()
    // Phone Validation
    if (phone.value.trim() === "") {
        showError(phone, "Phone is required")
        isValid = false
    } else if (phone.value.trim().length !== 11) {
        showError(phone, "Enter a valid phone number with 11 numbers")
        isValid = false
    }
    else {
        showSuccess(phone)
    }
    // message Validatiom
    if (message.value.trim() === "") {
        showError(message, "Message is required")
        isValid = false
    } else {
        showSuccess(message)
    }


    if (isValid === false) {
        e.preventDefault()
    }
})

// Dark bottom toggle

function darkToggle() {
    const body = document.querySelector("body")
    const darkBtn = document.querySelector(".dark-btn i")

    body.classList.toggle("dark")
    // Change dark icon
    if (body.classList.contains("dark")) {
        darkBtn.classList.remove("fa-moon")
        darkBtn.classList.add("fa-sun")
        // Save changes of color
        localStorage.setItem('darkMode', 'enable')
    } else {
        // Change icon of dark mode
        darkBtn.classList.add("fa-moon")
        darkBtn.classList.remove("fa-sun")
        // Save changes of color
        localStorage.setItem('darkMode', 'disable')
    }
}

// Local storage of dark mode
window.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem('darkMode')
    const body = document.body
    const darkBtn = document.querySelector(".dark-btn i")

    if (darkMode === "enable") {
        body.classList.add("dark")
        darkBtn.classList.remove("fa-moon")
        darkBtn.classList.add("fa-sun")
    }
})


// Testmonial Functions
let currentIndex = 0
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
// Show slide function to add active class
function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active")
        dots[i].classList.remove("active")
    })
    slides[index].classList.add("active")
    dots[index].classList.add("active")
}
// Prev btn function
function prevSlide() {
    currentIndex--
    if(currentIndex < 0){
        currentIndex = slides.length -1
    }
    showSlides(currentIndex)
}
// Next btn function
function nextSlide() {
    currentIndex++

    if (currentIndex > slides.length - 1) {
        currentIndex = 0
    }
    showSlides(currentIndex)
}

// Dots click
dots.forEach((dot, index)=>{
    dot.addEventListener("click", ()=>{
        currentIndex = index
        showSlides(currentIndex)
    })
})
// Callback function
prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

// Update Year Right auto in footer section

const yearRight = document.querySelector(".p span")

let year = new Date()
yearRight.innerText = year.getFullYear()