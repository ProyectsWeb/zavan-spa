import { ARTICULOS } from "../App/templates/Articulos.js";
import { COMOFUNCIONA } from "../App/templates/Comofunciona.js";
import { CONTRATAR } from "../App/templates/Contratar.js";
import { HOME } from "../App/templates/Home.js";
import { PRECIOS } from "../App/templates/Precios.js";
import { QUEES } from "../App/templates/Quees.js";

export const PATHS = {
    home: {
        path: "/index.html",
        template:  HOME        
    },
    quees: {
        path: "/quees",
        template: QUEES   
    },
    comofunciona: {
        path: "/comofunciona",
        template: COMOFUNCIONA     
    },
    precios: {
        path: "/precios",
        template: PRECIOS  
    },
    articulos: {
        path: "/articulos",
        template: ARTICULOS    
    },
    contratar: {
        path: "/contratar",
        template: CONTRATAR  
    }
}