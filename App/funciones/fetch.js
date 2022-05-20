import { API } from "../helpers/wp_api.js";

export function elemArticulos(){    
    fetch(API)
    .then( resp => resp.json())
    .then(elemento =>{

    const barraDireccion = new URLPattern(document.URL);

    if(`${barraDireccion.pathname}` === '/articulos'){

        const $articulosCard = document.querySelector(".articulos"); 
        const $contenedorCarrito = document.querySelector("#lista-carrito tbody");       
        let articulosCarrito = [];      
       
        $articulosCard.style.display = 'grid';       
        $articulosCard.innerHTML= "";       

        elemento.forEach( (item, index, arr) =>{ 
          
            $articulosCard.innerHTML += `
                                        <div class="recuadro"> 
                                         <div class="contenedor">

                                         <span class="btn-id">${item._id}</span>                                         
                                         <img src="${item.img}" class="imagen"></img>
                                         <div class="card">${item.categoria}</div> 

                                         <p class="precio">$${item.precio}<i class="fa fa-cart-arrow-down" aria-hidden="true"></i> 

                                          <span class="seccion-cantidades">
                                          <a><i class="fa fa-minus-square" aria-hidden="true"></i></a>
                                          <a class="cantidad-articulos">0</a>
                                          <a><i class="fa fa-plus-square" aria-hidden="true"></i></a>
                                          </span>

                                         </p>  

                                         </div> 
                                         </div>                                         
                                         `;
        });   
        

        $articulosCard.addEventListener("click", (e)=>{
          
          if(e.target.matches(".fa-cart-arrow-down")){
          
            const articuloSeleccionado = e.target.parentElement.parentElement;
                  leerDatosTarjeta(articuloSeleccionado);

         }else{
           console.log("AUN NO AGREGAS AL CARRITO")
         }


         function leerDatosTarjeta( artSelecto){
          console.log(artSelecto)

            const infoArticulo = {
              id : artSelecto.querySelector(".btn-id").textContent,
              imagen: artSelecto.querySelector(".imagen").src,
              tarjeta: artSelecto.querySelector(".card").textContent,
              precio: artSelecto.querySelector(".precio").textContent,
              cantidad: 1
              
            }

            console.log(infoArticulo.id);
            console.log(infoArticulo.imagen);
            console.log(infoArticulo.tarjeta);
            console.log(infoArticulo.precio);
            console.log(infoArticulo.cantidad);

           
            const existeArticulo = articulosCarrito.some( articulo => articulo.id === infoArticulo.id );            
            console.log(existeArticulo)
              if(existeArticulo){                
                const articulos = articulosCarrito.map( articulo => {
                  if(articulo.id === infoArticulo.id){
                    articulo.cantidad++;
                    return articulo;  //retorna el articulo actualizado

                  }else{
                    return articulo;  //retorna los articulos que no estan duplicados
                  }
                });

                articulosCarrito = [...articulos];

              }else{      

            articulosCarrito = [...articulosCarrito, infoArticulo];
            console.log(articulosCarrito)
              }

            carritoHTML();
        }  

        
        function carritoHTML(){
          limpiarHTMLcarrito()
          console.log(articulosCarrito)          

          articulosCarrito.forEach( ( articulo )=>{

            const row = document.createElement('tr');
            row.innerHTML = `<td class="hidden">${articulo.id}</td>
                             <td><img src="${articulo.imagen}"></td>
                             <td>${articulo.tarjeta}</td>
                             <td>${articulo.precio}</td>
                             <td>${articulo.cantidad}</td>
                             <td class="eliminar" id="${articulo.id}">X</td>                                               
            `;
            console.log(articulo);
            console.log(row);
            $contenedorCarrito.appendChild(row)
          });          
        }
        
        
         function limpiarHTMLcarrito(){
            while($contenedorCarrito.firstChild){
              $contenedorCarrito.removeChild($contenedorCarrito.firstChild)
             }
        }
         

        console.log($contenedorCarrito)        
        console.log(articulosCarrito)     




$contenedorCarrito.addEventListener("click", eliminarArticulo)
/*  ELIMINAR ARTICULO DEL CARRITO */
function eliminarArticulo(e){
  console.log(e.target.classList);
  if(e.target.classList.contains('eliminar')){
    console.log(e.target.getAttribute('id'));
    const articuloID = e.target.getAttribute('id');
    /* ELIMINA DEL ARREGLO DEL CARRITO POR EL ID DEL ARTICULO*/
    articulosCarrito = articulosCarrito.filter( artic => artic.id !== articuloID);
    console.log(articulosCarrito)
    carritoHTML();
 }         
} 
}); 

        console.log($contenedorCarrito);
        console.log(articulosCarrito);        
        
        function sumarCantidades(){          
         return cantidadSelecArticulos++;
        }

      }     
    });
} 

export function removerArticulos(){
    const $articulosCard = document.querySelector(".articulos");
    $articulosCard.style.display = 'none';   
}