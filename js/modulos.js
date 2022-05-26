import { barraUsuario } from "../App/componentes/Barra-usuario.js";
import { Menu } from "../App/componentes/Menu.js"; 
import { DOMAIN } from "../App/helpers/wp_api.js";

barraUsuario(".barra-usuario", `${DOMAIN}`);  /* Esta funciona aun estando fuera del "DOMContentLoaded */
    Menu();  

window.addEventListener("DOMContentLoaded", e=>{ 
   /*  ROUTER.load(e.state); */
     
    document.URL;
    console.log(e)
    
    console.log(document.URL)
     
    
});
