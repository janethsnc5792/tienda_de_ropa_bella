function validar() {

    // Obtener los datos escritos en el formulario
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Comprobar usuario y contraseña
    if (usuario == "janetnoide" && contrasena == "22233") {

        alert("Bienvenido al sistema");
        window.location.href = "bienvenido.html";
        return false;

    } else {

        alert("Usuario o contraseña incorrectos");
        return false;

    }

}