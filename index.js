

let confirmPasswordInput = document.getElementById("confirm-password");
let passwordMatchError = document.getElementById("password-match-error");


confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value !== document.getElementById("password").value) {
        passwordMatchError.textContent = "passwords don't match";
        passwordMatchError.style.color = "red";
  } else {
    passwordMatchError.textContent = "Match"
    passwordMatchError.style.color = "green"
    passwordMatchError.style.fontSize = "25px"
  }
})