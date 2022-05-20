import { ROUTER } from "../../js/index.js";

const vistasDePagina = {
    home: "Home", 
    quees: "¿Qué es?", 
    comofunciona: "¿Cómo Funciona?", 
    precios: "Precios", 
    articulos: "Articulos", 
    contratar: "Contratar"
 };

 export function Menu(){
    const $navegacionFooter = document.querySelector(".navegacion-footer");    
    const $navegacion = document.querySelector(".navegacion");   
    const $fragment = document.createDocumentFragment();

    const vistas = Object.entries(vistasDePagina).forEach( ([vista, texto])=> { 

        const $a = document.createElement("a");
        $a.setAttribute('href', vista);
        $a.classList.add('navegacion__link');       
        $a.textContent = texto;
        $fragment.appendChild($a);

        $a.addEventListener('click', e =>{
            e.preventDefault()
        let atributo = e.target.getAttribute('href');        
            console.log(e.target.getAttribute('href'));
                
            ROUTER.load(atributo);       
        });    
    });       
  
   $navegacion.appendChild($fragment); 

   const $navFooter = $navegacion.cloneNode(true);  
   $navFooter.addEventListener('click', e =>{
    e.preventDefault()
    let atributo = e.target.getAttribute('href');        
    console.log(e.target.getAttribute('href'));

    ROUTER.load(atributo);       
});       
    
   $navegacionFooter.appendChild($navFooter);    
}