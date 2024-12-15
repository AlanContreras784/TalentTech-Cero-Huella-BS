const expresiones = {
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    //nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    //password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numeroTelefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contenedorFormulario');
    const errorMenssage = document.querySelector('#error-menssage');


    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nombre = form.nombre.value;
        const apellido = form.apellido.value;
        const email= form.email.value;
        const numeroTelefonico = form.numeroTelefonico.value;
        const ciudad = form.ciudad.value;
        const residencia = form.residencia.value;
        const comentarios = form.comentarios.value;
        const terminos = form.terminos.checked;


        // VALIDAR Nombre
        if (nombre === "") {
            errorMenssage.textContent = "Escriba su Nombre";
            document.fRegistro.nombre.focus()
            return;
        } 
        //VALIDAR APELLIDO
        if (apellido === "") {
            errorMenssage.textContent = "Escriba su Apellido";
            document.fRegistro.apellido.focus()
            return;
        }

        // VALIDAR CORREO
        correo = email
        correo = esMail(correo)

        if (email == "") {
            errorMenssage.textContent = "Escriba su Email";
            document.fRegistro.email.focus()
            return ;
        } else {
            if (correo == false) {
                errorMenssage.textContent = "El formato no coincide: ejemplo@email.com";
                document.fRegistro.email.focus()
                return ;
            }
        }

        //VALIDAR TELEFONO
        telefono = numeroTelefonico;
        telefono = esTelefono(telefono)

        if (numeroTelefonico =="") {
            errorMenssage.textContent = "Escriba su Telefono";
            document.fRegistro.telefono.focus()
            return ;
        } else{
            if (telefono == false) {
            errorMenssage.textContent = "El Telefono tiene que tener entre 7 a 14 números";
            document.fRegistro.telefono.focus()
            return ;
            }
        }

        //VALIDAR CIUDAD
        if (ciudad === "") {
            errorMenssage.textContent = "Escriba su Ciudad";
            document.fRegistro.ciudad.focus()
            return;
        }

        //VALIDAR PROVINCIA

        if (residencia == 0) {
            errorMenssage.textContent = "Eliga una Provincia";
            document.fRegistro.residencia.focus()
            return;
        }

        if (comentarios === "") {
            errorMenssage.textContent = "Escriba su Comentario";
            document.fRegistro.comentarios.focus()
            return;
        } 


        if(terminos === false) {
            errorMenssage.textContent = "Acepte terminos y Condiciones";
            document.fRegistro.terminos.focus()
            return;
        }

        
        /*
        //Guardar el usuario en el Localstorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find((user) => user.username === username)
        if (existingUser) {
            errorMenssage.textContent = "El usuario ya existe";
            return;
        }
        const newUser = {
            username,
            password
        }
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'inicioSesion.html';
        console.log(localStorage);

        */
        
        alert("Muchas gracias por enviar el formulario")
        document.fRegistro.submit()
        return 0
    }) 
})

function volverInicio() {
    window.location.href = '/index.html'

}

function esMail(dato) {
    return expresiones.correo.test(dato)
}
function esTelefono(dato) {
    return expresiones.numeroTelefono.test(dato)
}