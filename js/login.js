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