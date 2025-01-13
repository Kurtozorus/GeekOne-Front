const pwdInput = document.getElementById("PasswordInput");
const inputNewPassword = document.getElementById("NewPasswordInput");
const inputConfirmPassword = document.getElementById("ConfirmNewPasswordInput");
const btnValidationNewPassword = document.getElementById("btn-validation-new-password");

pwdInput.addEventListener("keyup", validateNewPasswordForm);
inputNewPassword.addEventListener("keyup", validateNewPasswordForm);
inputConfirmPassword.addEventListener("keyup", validateNewPasswordForm);
btnValidationNewPassword.disabled = true;

btnValidationNewPassword.addEventListener("click", ModifPassword);

function validateNewPasswordForm() {
    const newPasswordOk = validateNewPassword(inputNewPassword);
    const confirmPasswordOk = validateConfirmNewPassword (inputNewPassword, inputConfirmPassword);
    const confirmOldPassword = checkPassword(pwdInput);
    if (newPasswordOk && confirmPasswordOk && confirmOldPassword) {
      btnValidationNewPassword.disabled = false;
    } else {
      btnValidationNewPassword.disabled = true;
    }
}
function validateNewPassword(input) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W]{8,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      return true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
    }
  }
  function validateConfirmNewPassword(inputPwd, inputConfirmPwd) {
    if (inputPwd.value == inputConfirmPwd.value) {
      inputConfirmPwd.classList.add("is-valid");
      inputConfirmPwd.classList.remove("is-invalid");
      return true;
    } else {
      inputConfirmPwd.classList.remove("is-valid");
      inputConfirmPwd.classList.add("is-invalid");
      return false;
    }
  }
  
  function checkPassword() {
    //Ici il faudrat appeler l'API pour verifier les credentials en BDD
    if (pwdInput.value == "123") {
      //il faudrat récupérer le vrai token
      const token = "klmjazerkljmazerjklazmrkzelamjrklza";
      setToken(token);
      //placer ce token en cookie
      setCookie(RoleCookieName, "admin", 7);
      return true;
    } else {
      pwdInput.classList.add("is-invalid");
    }
  }