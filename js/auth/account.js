const inputAccountNom = document.getElementById("NomAccountInput");
const inputAccountPrenom = document.getElementById("PrenomAccountInput");
const inputAccountAge = document.getElementById("AgeAccountInput");
const btnModifAccount = document.getElementById("btn-modif-account");

inputAccountNom.addEventListener("keyup", validateModifForm);
inputAccountPrenom.addEventListener("keyup", validateModifForm);
inputAccountAge.addEventListener("keyup", validateModifForm);
btnModifAccount.disabled = true;

btnModifAccount.addEventListener("click", ModifUtilisateur);
function validateModifForm() {
    const nomModifOk = validateRequired(inputAccountNom);
    const prenomModifOk = validateRequired(inputAccountPrenom);
    const ageModifOk = validateAge(inputAccountAge);

    if (nomModifOk && prenomModifOk && ageModifOk) {
        btnModifAccount.disabled = false;
    } else {
        btnModifAccount.disabled = true;
    }
}

function validateRequired(input) {
    if (input.value.trim() != "") {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      return true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
    }
  }
function validateAge(number) {
    const age = inputAccountAge.value;
    if ( !( age > 1 && age<100 ) ){
        alert("L'age doit être un nombre entre 1 et 100");
        return false;
}

return true;
}