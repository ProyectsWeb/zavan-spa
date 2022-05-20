const $btncarrito = document.querySelector(".fa-cart-arrow-down");
const $contenedorCarrito = document.querySelector("#lista-carrito");

$contenedorCarrito.classList.add("vercarrito"); 


$btncarrito.addEventListener("click", ()=>{
    $contenedorCarrito.classList.toggle("vercarrito");  
     console.log("ESTOY EN EL CLICK")
    
  })

  

  