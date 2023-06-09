const firstInput = document.getElementById("firstname");
const displayFirstName = document.getElementById("display-firstname");
const secondInput = document.getElementById("age");
const hardTruht = document.getElementById("a-hard-truth");
const password = document.getElementById("pwd");
const passwordConfirm = document.getElementById("pwd-confirm");
const theme = document.getElementById("toggle-darkmode");
firstInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  displayFirstName.textContent = e.target.value;
});

secondInput.addEventListener("keydown", (e) => {
  secondInput.addEventListener("focusout", () => {
    if (e.target.value >= 18) {
      hardTruht.style.visibility = "visible";
    } else {
      hardTruht.style.visibility = "hidden";
    }
  });
});

let returnEdPassword;
let returnedConfirmPassword;

password.addEventListener("keyup", (e) => {
  returnEdPassword = e.target.valuel;
  console.log(e.target.value.length);
  password.addEventListener("focusout", () => {
    if (e.target.value.length < 6) {
      password.style.backgroundColor = "red";
    }
  });
});

passwordConfirm.addEventListener("keyup", (e) => {
  returnedConfirmPassword = e.target.value;
  passwordConfirm.addEventListener("focusout", () => {
    if (passwordConfirm.value === password.value) {
      console.log("passwords match");
    } else {
      passwordConfirm.style.backgroundColor = "red";
      password.style.backgroundColor = "red";
    }
  });
});
let darkMode = false;
theme.addEventListener("change", () => {
  if (darkMode) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    darkMode = false;
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    darkMode = true;
  }
});
