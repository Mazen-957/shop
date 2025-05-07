const loginIcon = document.querySelector(".login i");

// <----Sign In--->
loginIcon.addEventListener("mouseenter", () => {
    setTimeout(() => {
        loginIcon.classList.remove("fa-right-to-bracket");
        loginIcon.classList.add("fa-person-running");
    }, 100);
});

loginIcon.addEventListener("mouseleave", () => {
    setTimeout(() => {
        loginIcon.classList.remove("fa-person-running");
        loginIcon.classList.add("fa-right-to-bracket");
    }, 100);
});