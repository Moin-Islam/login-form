function nameValidation() {
  let userName = document.querySelector("#name").value;

  if (userName.length < 6) {
    document.querySelector(".usernameError").style.display = "block";
  } else {
    document.querySelector(".usernameError").style.display = "none";
    console.log(userName);
  }
}

function emailValidation() {
  let userEmail = document.querySelector("#email").value;

  if (!userEmail.includes("@")) {
    document.querySelector(".emailError").style.display = "block";
    console.log(userEmail);
  } else {
    document.querySelector(".emailError").style.display = "none";
  }
}

function passwordValidation() {
  let userPassword = document.querySelector("#pass").value;
  let name = document.querySelector("#name").value;
  console.log(userPassword);

  if (userPassword == "") {
    document.querySelector(".passwordError2").style.display = "block";
  } else if (userPassword.length < 6) {
    document.querySelector(".passwordError1").style.display = "block";
  } else if (userPassword == name)
  {
    document.querySelector(".passwordError").style.display = "block";
  } else {
    console.log(userPassword);
    document.querySelector(".passwordError").style.display = "none";
    document.querySelector(".passwordError1").style.display = "none";
    document.querySelector(".passwordError2").style.display = "none";
  }
  
}

function confirmPassValidation() {
    let password = document.querySelector("#pass").value;
    let confirmPassword = document.querySelector("#confirm-pass").value;

    if (confirmPassword != password) {
        document.querySelector(".confirmPasswordError").style.display = "block";
    }else 
    {
        document.querySelector(".confirmPasswordError").style.display = "none";
        console.log(confirmPassword);
        console.log(password);
    }

}
