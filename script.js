//Show Overlay
const blurOverlay = document.querySelector(".blur-bg-overlay");

//Show Login Form
const loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", () => {
    document.querySelector("#loginForm").style.opacity = "100%";
    document.querySelector("#loginForm").style.pointerEvents = "auto";

    blurOverlay.style.opacity = "1";  //Show Overlay
});

//Hide Login Form
const closeLogin = document.querySelector("#closeLogin");
closeLogin.addEventListener("click", () => {
    document.querySelector("#loginForm").style.opacity = "0";
    document.querySelector("#loginForm").style.pointerEvents = "none";

    blurOverlay.style.opacity = "0";  //Hide Overlay
});

//Show Signup Form
const signupLink = document.querySelector("#signupLink");
signupLink.addEventListener("click", () => {
    document.querySelector("#loginForm").style.opacity = "0";
    document.querySelector("#loginForm").style.pointerEvents = "none";

    document.querySelector("#signupForm").style.opacity = "100%";
    document.querySelector("#signupForm").style.pointerEvents = "auto";
});

//Hide Signup Form
const closeSignup = document.querySelector("#closeSignup");
closeSignup.addEventListener("click", () => {
    document.querySelector("#signupForm").style.opacity = "0";
    document.querySelector("#signupForm").style.pointerEvents = "none";

    blurOverlay.style.opacity = "0";  //Hide Overlay
});

const loginLink = document.querySelector("#loginLink");
loginLink.addEventListener("click", () => {
    document.querySelector("#signupForm").style.opacity = "0";
    document.querySelector("#signupForm").style.pointerEvents = "none";

    document.querySelector("#loginForm").style.opacity = "100%";
    document.querySelector("#loginForm").style.pointerEvents = "auto";
});


