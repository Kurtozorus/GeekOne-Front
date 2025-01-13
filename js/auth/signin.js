const mailInput = document.getElementById("EmailInput");
const pwdInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
  //Ici il faudrat appeler l'API pour verifier les credentials en BDD
  if (mailInput.value == "test@mail.com" && pwdInput.value == "123") {
    //il faudrat récupérer le vrai token
    const token = "klmjazerkljmazerjklazmrkzelamjrklza";
    setToken(token);
    //placer ce token en cookie
    setCookie(RoleCookieName, "admin", 7);
    window.location.replace("/");
  } else {
    mailInput.classList.add("is-invalid");
    pwdInput.classList.add("is-invalid");
  }
}
