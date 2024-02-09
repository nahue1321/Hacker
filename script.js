function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "tu_contraseña_secreta") {
        window.location.href = "acceso_concedido.html";
    } else {
        document.getElementById("message").innerHTML = "Contraseña incorrecta. Inténtalo de nuevo.";
    }
}
