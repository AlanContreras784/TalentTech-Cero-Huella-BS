
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
 const letrasRegEx=/^[a-zA-ZÀ-ÿ\s]{1,40}$/// Letras y espacios, pueden llevar acentos.
    //password: /^.{4,12}$/, // 4 a 12 digitos.
 const emailRegEx=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
 const numerosRegEx=/^\d{7,14}$/// 7 a 14 numeros.



const formulario = document.getElementById("contenedorFormulario");

formulario.addEventListener("submit",evento => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const provincia = document.getElementById("provincia").value.trim();
    const comentarios = document.getElementById("comentarios").value.trim();
    const terminos = document.getElementById("terminos").checked;


    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido");
    const errorEmail = document.getElementById("errorEmail");
    const errorTelefono = document.getElementById("errorTelefono");
    const errorCiudad = document.getElementById("errorCiudad");
    const errorProvincia = document.getElementById("errorProvincia");
    const errorComentarios = document.getElementById("errorComentarios");
    const errorTerminos = document.getElementById("errorTerminos");

    let formularioValido = true;
    
    if (!letrasRegEx.test(nombre)){
        errorNombre.classList.remove("d-none");
        contenedorFormulario.nombre.focus();
        formularioValido = false;
    }else{
        errorNombre.classList.add("d-none");
    }

    if(!letrasRegEx.test(apellido)){
        errorApellido.classList.remove("d-none");
        contenedorFormulario.apellido.focus();
        formularioValido = false;
    }else{
        errorApellido.classList.add( "d-none")
    }

    if(!emailRegEx.test(email)){
        errorEmail.classList.remove("d-none");
        contenedorFormulario.email.focus();
        formularioValido = false;
    }else{
        errorEmail.classList.add("d-none");
    }

    if(!numerosRegEx.test(telefono)){
        errorTelefono.classList.remove("d-none");
        contenedorFormulario.telefono.focus();
        formularioValido = false;
    }else{
        errorTelefono.classList.add("d-none");
    }

    if(!letrasRegEx.test(ciudad)){
        errorCiudad.classList.remove("d-none");
        contenedorFormulario.ciudad.focus();
        formularioValido = false;
    }else{
        errorCiudad.classList.add("d-none");
    }

    if(provincia == 0){
        errorProvincia.classList.remove("d-none");
        contenedorFormulario.provincia.focus();
        formularioValido = false;
    }else{
        errorProvincia.classList.add("d-none");
    }

    if(!letrasRegEx.test(comentarios)){
        errorComentarios.classList.remove("d-none");
        contenedorFormulario.comentarios.focus();
        formularioValido = false;
    }else{
        errorComentarios.classList.add("d-none");
    }

    if(terminos == false){
        errorTerminos.classList.remove("d-none");
        contenedorFormulario.terminos.focus();
        formularioValido = false;
    }else{
        errorTerminos.classList.add("d-none");
    }

    if(formularioValido){
        alert("Formulario enviado correctamente")
        return;
    }


    

})

