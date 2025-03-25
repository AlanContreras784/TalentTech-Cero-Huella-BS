document.addEventListener("DOMContentLoaded", () => {
    const cuentaCarritoElement = document.getElementById("cuenta-carrito");
    const memoria = JSON.parse(localStorage.getItem("carrito"));
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad,0);
    cuentaCarritoElement.innerText = cuenta;
  
});



