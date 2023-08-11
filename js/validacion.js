function validatePassword() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    if (password1.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }
    if (password1 !== password2) {
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        return false;
    }
    return true;
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validate() {
    var name = document.getElementById("nombre").value;
    var surename = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var terminos = document.getElementById("terminos").checked;
    
    if (name && surename && email && validatePassword() && terminos) {
         showAlertSuccess()
    } else { showAlertError()}
}

var boton = document.getElementById("regBtn");

boton.addEventListener("click", validate);  


