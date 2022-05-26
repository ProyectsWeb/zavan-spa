import { elemArticulos, removerArticulos} from "../App/funciones/fetch.js";
import { PATHS } from "./routes.js";
console.log(PATHS)
/* PEGUE ESTE CODIGO QUE VIENE DESDE EL ARCHIVO ROUTER */

/* console.log(document.URL)
if(document.URL ==="/index.html"){
  const URI = pathname === "/" ? "home" : pathname.replace("/", "");
  console.log(URI)
  console.log("ESTAMOS EN EL INDEX.HTML")
} */
console.log(window)
console.log(origin)
if(origin){
  console.log("ESTS EN EL INDEX JS")
 /*  window.location.replace("/"); */
 
}
/* window.location.replace("/"); */
  

export class Router {
    /*  Metodo inicial */
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    /* Permite inicializar el router */    
    initRouter() {
         
        const { location: { pathname = "/" } } = window;
        console.log(pathname);    /* /index.html */   /*  / */


        

        if(pathname === "/index.html" || pathname === "/zavan-spa"){
          console.log("ESTAMOS MEJORANDO POR EL INDEX")
          window.location.replace("/");
        }else{
          console.log("YA SALI DEL INDEX BLOQUEADOR")
        }



        console.log(origin)
        const URI = pathname === "/" ? "home" : pathname.replace("/", "");
        console.log(URI);  /*  index.html */  /* home */
        this.load(URI);            
                
    }

  /*   Permite iniciar la carga de paginas. */    
    load(page = "home") {        
      console.log(origin)
      
        const { paths } = this;
       /*  const { path, template } = paths[page] || paths.error; */
       console.log(paths)
       /* console.log(path) */
        const { path, template } = paths[page] || paths.error;
console.log(paths[page])
        /* const { path, template } = paths[page];    */     
      console.log(path);
    /*   console.log(template); */
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


