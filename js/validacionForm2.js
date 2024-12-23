const expresiones = {
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    //nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    //password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


fvalida.addEventListener('submit', e => {
    e.preventDefault();
})

function validarEnviar() {
    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0
    }

    //valido el apellido
    if (document.fvalida.apellido.value.length == 0) {
        alert("Tiene que escribir su apellido")
        document.fvalida.apellido.focus()
        return 0
    }

    //valido el correo
    correo = document.fvalida.email.value
    correo = esMail(correo)


    if (document.fvalida.email.value == "") {
        alert("Tiene que escribir su correo electronico")
        document.fvalida.email.focus()
        return 0
    } else {
        if (correo == false) {
            alert("Formato de correo no Valido")
            document.fvalida.email.focus()
            return 0
        }
    }
    //Validar Telefono
    telefono = document.fvalida.telefono.value
    telefono = esTelefono(telefono)

    if (document.fvalida.telefono.value == "") {
        alert("Tiene que introducir un número entero entre 7 a 14 digitos.")
        document.fvalida.telefono.focus()
        return 0
    } else {
        if (telefono == false) {
            alert("Tiene que introducir un número entero entre 7 a 14 digitos.")
            document.fvalida.telefono.focus()
            return 0
        }
    }


    //Validar Ciudad
    if (document.fvalida.ciudad.value.length == 0) {
        alert("Tiene que escribir su ciudad")
        document.fvalida.ciudad.focus()
        return 0
    }

    //valido la Residencia
    if (document.fvalida.residencia.selectedIndex == 0) {
        alert("Debe seleccionar una Opción de Residencia.")
        document.fvalida.residencia.focus()
        return 0
    }


if (document.fvalida.comentarios.value.length == 0) {
    alert("Escriba su consulta Porfavor")
    document.fvalida.comentarios.focus()
    return 0
}

    if (document.fvalida.terminos.checked == false) {
        alert("Acepta los términos y condiciones")
        document.fvalida.terminos.focus()
        return 0
    }

    alert("Muchas gracias por enviar el formulario")
    document.fvalida.submit()
    return 0

}
function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
    }
}
function esMail(dato) {
    return expresiones.correo.test(dato)
}
function esTelefono(dato) {
    return expresiones.telefono.test(dato)
}
