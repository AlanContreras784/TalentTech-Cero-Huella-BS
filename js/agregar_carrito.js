document.addEventListener("DOMContentLoaded", () => {
    // guardo en una constante, un array de etiquetas 
    // es un nodeList del tipo element, adentro guarda todas las anclas que encuentra que tengan la clase btn-agregar
    const botonesAgregar = document.querySelectorAll(".btn-primary");
    console.log(botonesAgregar);

    
    
    // recorrreme la lista de nodos (array)
    // y para cada boton (ancla)
    botonesAgregar.forEach(boton => {
        // quedate escuchando si alguien hace click en ese boton
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");
            const subtotal= parseFloat(precio)
            const cantidad= 1
            console.log(nombre);
            console.log(precio);
            console.log(cantidad)
            console.log(subtotal)

            // Obtener el carrito actual de localStorage
            // dame el item carrito de la memoria local del navegador y sino dame un array vacio
            const carrito = JSON.parse(localStorage.getItem("carrito"))|| [] ;
            console.log(carrito);


            if(carrito.length===0){
                // Agregar el producto al carrito
                carrito.push({ nombre, precio, subtotal, cantidad });
            
                 // Guardar el carrito actualizado en localStorage
                 localStorage.setItem("carrito", JSON.stringify(carrito));
            }else{
                //Guardar el indice o posicion del objeto en el array  Carrito que se encuentra en el  Local Storage
                const indiceCarrito= carrito.findIndex(carrito=>carrito.nombre===nombre);
                console.log(indiceCarrito);
                    //El metodo findIndex devuelve -1 sino lo encuentra
                    if(indiceCarrito===-1){

                        carrito.push({ nombre, precio,subtotal, cantidad });
                        localStorage.setItem("carrito", JSON.stringify(carrito));

                    }
                    // Si lo encuentra, suma uno a la cantidad y lo actualiza
                    else{
                        carrito[indiceCarrito].cantidad++;
                        const sumaSubTotal = parseFloat(precio)*carrito[indiceCarrito].cantidad
                        carrito[indiceCarrito].subtotal= sumaSubTotal
                         
                        localStorage.setItem("carrito", JSON.stringify(carrito))
                    }
            }

            alert(`${nombre} agregado al carrito.`);
        });
    });

    const cuentaCarritoElement=document.getElementById("cuenta-carrito");
    actualizarNumeroCarrito();
});




function actualizarNumeroCarrito(){
    const memoria= JSON.parse(localStorage.getItem("carrito"));
    const cuenta= memoria.reduce((acum,current)=> acum + current.cantidad, 0);
    cuentaCarritoElement.innerText=cuenta;
}

