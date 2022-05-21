/* export function barraUsuario( nameClase, urlBarraUsuario ){
    const $barraUsuario = document.querySelector(nameClase);

    fetch( urlBarraUsuario, { })
    .then( response => response.text())
    .then( data => {    
    const {nombre, apellido} = JSON.parse(data);   
     console.log($barraUsuario);

     $barraUsuario.innerHTML = `${nombre} ${apellido}`;
     console.log(JSON.parse(data));      
    });
    console.log("Estoy en barra usuario")
} */