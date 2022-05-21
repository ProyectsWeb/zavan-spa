import { elemArticulos, removerArticulos} from "../App/funciones/fetch.js";
import { PATHS } from "./routes.js";
console.log(PATHS)
/* PEGUE ESTE CODIGO QUE VIENE DESDE EL ARCHIVO ROUTER */
export class Router {
    /*  Metodo inicial */
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    /* Permite inicializar el router */    
    initRouter() {
        const { location: { pathname = "/" } } = window;
        const URI = pathname === "/" ? "home" : pathname.replace("/", "");
        this.load(URI);        
    }

  /*   Permite iniciar la carga de paginas. */    
    load(page = "home") {        
        const { paths } = this;
       /*  const { path, template } = paths[page] || paths.error; */
       console.log(paths)
        /* const { path, template } = paths[page] || paths.error; */

        const { path, template } = paths[page];        
      console.log(path);
      console.log(template);
        //
        const $CONTAINER = document.querySelector("#content");        
        $CONTAINER.innerHTML = template;        
       //window.history.pushState({}, "Genial", path); /* ESTE ES EL QUE TENIA ORIGINALMENTE */
        //  window.history.pushState( paths[page], "Genial", path);  ESTE ME FUNCIONABA BIEN Y ERA EL QUE IVA A DEJAR /* ESTE ES PARA ACTIVAR LAS URL FALSAS */

        let pathSinRaya = path.replace("/", "" );
        console.log(pathSinRaya)        
         // window.history.pushState( path, "Genial", path);
        //  window.history.pushState( path, "Primeras pruebas",  path);
        //  window.history.pushState( pathSinRaya, "Primeras pruebas",  path);
          window.history.pushState( page, "Primeras pruebas",  path);         
        
        if(path === '/articulos'){               
          elemArticulos();
                 
        }else{
         removerArticulos();
                   
        }    
      
        window.addEventListener("popstate", (e)=>{
          window.history.replaceState( page, "Primeras pruebas",  path);          
         
           console.log(e);
            ROUTER.load(e.state);

        }, false);              

         ////AQUI TERMINO LA NUEVA FORMA PARA LOS ROUTER
  }  
}

export const ROUTER = new Router(PATHS);