window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav-bar");

    if (window.scrollY > 150) { // لما تنزل أكتر من 100px
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});
