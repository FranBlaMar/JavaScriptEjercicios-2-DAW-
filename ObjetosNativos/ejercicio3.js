console.log(location);
document.getElementById("boton1").addEventListener("click", assign);
document.getElementById("boton2").addEventListener("click", replace);
document.getElementById("boton3").addEventListener("click", reload);

//Pasa a otra pagina y permite volver atras
function assign(){
    location.assign("http://www.cocacola.es");
}
//Sustituye la pagina que estamos visualizando, por lo cual no permite volver atras ya que detecta que es una página nueva y no existe ninguan anterior
function replace(){
    location.replace("http://www.cocacola.es");
}
//Refresca la pagina (Si tiene true refresca del servidor y si pone false usa el cache)
function reload(){
    location.reload(true);
}

