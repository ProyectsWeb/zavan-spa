import { barraUsuario } from "../App/componentes/Barra-usuario.js";
import { Menu } from "../App/componentes/Menu.js"; 
import { DOMAIN } from "../App/helpers/wp_api.js";

document.addEventListener("DOMContentLoaded", e=>{    
    barraUsuario(".barra-usuario", `${DOMAIN}`);  /* Esta funciona aun estando fuera del "DOMContentLoaded */
    Menu();       
});