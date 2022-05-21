/* const NAME = "localhost:4000/"; */  /* Aqui va el nombre del dominio */
const NAME = "proyectsweb.github.io/zavan-spa";  /* Aqui va el nombre del dominio */
const DOMAIN = `http://${NAME}`; /* Aqui se puede convinar de acuerdo al dominio completo */
const SITE = `${DOMAIN}`;
const API = `${SITE}articulos`;   /* Con esta variable extraigo los datos de los articulos */
const POSTS = `${API}/posts?_embed`;  /* Este es un ejemplo, en caso de necesitarlos cuando consulte a las apis */
const POST = `${API}/posts`;
const SEARCH = `${API}/search?_embed&search=`;   /* Para implementar un buscador e implementar enpoints */


export {
    NAME,
    DOMAIN,
    SITE,
    API,
    POSTS,
    POST,
    SEARCH
}