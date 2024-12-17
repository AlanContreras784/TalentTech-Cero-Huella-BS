const contenido = document.querySelector('#contenido')


const visibleSmall=document.getElementById("visibleSmall");

visibleSmall.addEventListener("click", e=>{
    e.preventDefault();

    const mensaje=document.getElementById("mensaje")
    
    mensaje.classList.remove("d-none")
})

//ESTA FUNCION TRAE SOLO UN USUARIO USANDO FETCH , THEN Y CATCH

function traerUsuario() {
       fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(res => {
          console.log(res)
          console.log(res.results[0].email)
          contenido.innerHTML = `
                <img src="${res.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
                 <p>Nombre: ${res.results[0].name.first}</p>
                 <p>País: ${res.results[0].location.country}</p>
                 `
         })
        .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch
   }

  

   //ESTA FUNCION TRAE MULTIPLES USUARIOS USANDO ASYNC , AWAIT Y CATCH
   async function traerUsuarios() {
       try {
           const response = await fetch('https://randomuser.me/api?results=4'); // Solicitar 4 usuarios
           const data = await response.json();
   
           // Verificar si los resultados existen
           if (data.results && data.results.length > 0) {
               contenido.innerHTML = ''; // Limpiar el contenido antes de agregar los usuarios
               data.results.forEach(usuario => {
                   contenido.innerHTML += `
                       <div class="usuario col-4 col-md-6 w-auto">
                           <img class="p-3"src="${usuario.picture.large}" >
                           <p>Nombre: ${usuario.name.first} ${usuario.name.last}</p>
                           <p>País: ${usuario.location.country}</p>
                           <p class="px-3"> ${usuario.email}</p>
                       </div>
                   `;
               });
           } else {
               console.log("No se encontraron usuarios.");
           }
       } catch (error) {
           console.log("Ocurrió un error:", error);
       }
   }








        // const random = Math.floor(Math.random()*(5-0))+0
        // console.log(random)
        // fetch('https://grupo2com23532.pythonanywhere.com/clientes')
        //     .then(res => res.json())
        //     .then(res => {
        //       console.log(res)
        //       console.log(res.clientes[random].codigo)
        //       contenido.innerHTML = `
        //           <img src="${res.clientes[random].imagen_url}" width="100px" class="img-fluid rounded-circle">
        //           <p>Nombre: ${res.clientes[random].nombre}</p>
        //           <p>Apellido: ${res.clientes[random].apellido}</p>
        //           `
        //     })
        //     .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch
        // }
