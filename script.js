function Validation () {
    let userName = document.querySelector("#name");
    let name = userName.value;
    let userEmail = document.querySelector("#email");
    let email = userEmail.value;
    let userPassword = document.querySelector("#pass");
    let password = userPassword.value;

    if(name.length < 6) {
        document.querySelector(".usernameError").style.display = "block";
        setTimeout(() => {
            document.querySelector(".usernameError").style.display = "none";
          }, 3000)
    }
    else {
        console.log(name);
    }
    if(email.includes('@')) {
        console.log (email);
      
    }else {
        document.querySelector(".emailError").style.display = "block";
        setTimeout(() => {
            document.querySelector(".emailError").style.display = "none";
          }, 3000)
    }
    if (name == password) {
        document.querySelector(".passwordError").style.display = "block";
        setTimeout(() => {
            document.querySelector(".passwordError").style.display = "none";
          }, 3000)
    } else if (password.length <6)
    {
        document.querySelector(".passwordError1").style.display = "block";
        setTimeout(() => {
            document.querySelector(".passwordError1").style.display = "none";
          }, 3000)
    }
    else {
        console.log(password);
    }
    
}