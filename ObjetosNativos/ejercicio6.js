document.getElementById("boton1").addEventListener("click",volver);
document.getElementById("boton2").addEventListener("click",avanzar);


function volver (){
    history.back();
}
function avanzar (){
    history.forward();
}