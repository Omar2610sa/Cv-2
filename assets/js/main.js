
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
    scrollTop.classList.toggle("toggle")
}