//Añadimos los eventos a los botones
window.onload = function(){numeroTotalEmpleados()};
let botonAnadir = document.getElementById("añadir");
botonAnadir.addEventListener("click",anadirEmpleado);

let botonBorrar = document.getElementById("borrar");
botonBorrar.addEventListener("click",borrarEmpleado);

let botonModificar = document.getElementById("modificar");
botonModificar.addEventListener("click",modificarEmpleado);

//Funcion para comprobar el dni
//Recibe un DNI por parametro y lo comprueba con los de la tabla
function comprobarDni(dni){
    let dnis = document.querySelectorAll("td:nth-child(2)");
    let resul = false;
    //Si existe ese dni en la tabla devuelve true, en caso contrario devuelve false
    for (let i = 0; i < dnis.length; i++){
        if (dnis[i].textContent == dni){
            resul = true;
        }
    }
    return resul;
}

//Metodo para añadir empleado a la tabla
function anadirEmpleado (){
    //Obtenemos los datos introducidos en los inputs
    let dniEmp = document.getElementById("dni").value;
    let nombreEmp = document.getElementById("nombre").value;
    let apellidosEmp = document.getElementById("apellidos").value;
    //Comprobamos si existe el dni
    //Si existe, salta una alerta
    if(comprobarDni(dniEmp)){
        alert("El empleado ya está en la tabla");
    }
    //Si no existe, añadimos el empleado
    else{
        let tabla= document.getElementsByTagName("tbody")[0];
        //Contamos cuantos tr hay en la tabla (Cuantos trabajadores hay)
        let numEmpleados= document.getElementsByTagName("tr").length-1;
        //Creamos el tr
        let nuevoTr = document.createElement("tr");
        //Creamos los td y les añadimos los datos obtenidos de los inputs
        let tdNumEmpleado = document.createElement("td");
        tdNumEmpleado.appendChild(document.createTextNode(numEmpleados+1));
        let tdDni = document.createElement("td");
        tdDni.appendChild(document.createTextNode(dniEmp));
        let tdNombre = document.createElement("td");
        tdNombre.appendChild(document.createTextNode(nombreEmp));
        let tdApellidos = document.createElement("td");
        tdApellidos.appendChild(document.createTextNode(apellidosEmp));
        //Añadimos todos los td al tr
        nuevoTr.appendChild(tdNumEmpleado);
        nuevoTr.appendChild(tdDni);
        nuevoTr.appendChild(tdNombre);
        nuevoTr.appendChild(tdApellidos);
        //Para alinear el texto de los nuevos datos
        nuevoTr.style.textAlign="center";
        //Añadimos el tr a la tabla
        tabla.appendChild(nuevoTr);
        numeroTotalEmpleados();
    }
}

function numeroTotalEmpleados(){
    let numEmpleados = document.getElementsByTagName("tr").length -1;
    document.getElementsByTagName("b")[0].innerHTML = `Número total de empleados: ${numEmpleados}`
}