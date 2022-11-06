/* const form = document.getElementById("form");

form.addEventListener('submit', function (e) {

    e.preventDefault();
    let mail = document.getElementById('emailform').value
    console.log(mail);
    let pw = document.getElementById("Password").value
    console.log(pw);
}); */
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const form = document.getElementById("form");   
const parrafo = document.getElementById("warnings");   



form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 6) {
        warnings += "El nombre no es valido <br>"
        entrar = true
    }
    if (!regexEmail.test (email.value)) {
        warnings += "El Email no es valido <br>"
        entrar = true 
    }
    if (pass.value.length < 8) {
      warnings += "La contraseña no es valida <br>"
      entrar = true;
    }
    if (entrar) {
      parrafo.innerHTML = warnings;
    } else {
      parrafo.innerHTML = "Enviado";
    }
})




/* Funcion para extraer todos los datos del formulario y convertirlos en formato JSON */

/* const newInfo = document.createElement("div");
console.log(newInfo);
const procesar = (event) => {
    event.preventDefault();


    const datos = new FormData(event.target);

    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(datosCompletos);
} */