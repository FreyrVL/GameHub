const formEl = document.querySelector("#form");
let loginBtn = document.getElementById("login");
let registerBtn = document.getElementById("register");

console.log("hi there");

const user = "admin";
const pswd = "123";

formEl.addEventListener("submit", function (event) {
  if (event.target[0].value === user && event.target[1].value === pswd) {
    document.querySelector("#errormsg").classList.add("hidden");

    // REPLACE THIS LINK TO THE HOME PAGE!!!!!!!!!!
    window.location.href = "https://stackoverflow.com";

  } else {
    if (document.querySelector("#errormsg").classList.contains("hidden")) {
      document.querySelector("#errormsg").classList.remove("hidden");
    }
  }
  event.preventDefault();
});
let toggle = document.getElementById("toggle-register-login");
let forgotPassword = document.getElementById("forgot-password");
let submit = document.getElementById("submit");

toggle.addEventListener("click", (e) => {
    console.log("test");

    if(toggle.checked){
        submit.innerHTML = "Registreren";
        forgotPassword.style.visibility="hidden";
    }
    else{
        submit.innerHTML = "Inloggen";
        forgotPassword.style.visibility="visible";
    }
});
