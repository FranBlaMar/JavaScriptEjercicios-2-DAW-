let formulario = document.getElementsByTagName("form")[0];

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let sexo = document.querySelectorAll("input[name='sexo']");
let hijos = document.querySelectorAll("input[name='hijos']");
let numHijos = document.getElementById("numHijos");
let terminos = document.getElementById("aceptar");


/*Recorro todos los input de tipo radio y les añado el evento */
for (let i = 0; i < hijos.length; i++){
    hijos[i].addEventListener("change",(e) => {
        //Obtengo el p que esta oculto
        let preguntaOculta = document.querySelector("p.hidde");
        //Si esta marcado el primer radio que es(Si tiene hijos), se elimina el atributo hidden de la pregunta oculta
        if (hijos[0].checked){
            preguntaOculta.hidden =false;
        }
        else{
            preguntaOculta.hidden =true;
        }
    })
}

/*Creo la clase validar, donde uso los atributos para guardar si un campo del formulario es correcto o no */
const validar = {
    dni: false,
    nombre: false,
    edad: false,
    sexo: false,
    hijos: false,
    terminos: false
}

/*Prevenimos que al darle submit se refresque la página y ejecutamos la funcion para validar el formulario */
formulario.addEventListener("submit",(e) =>{
    e.preventDefault();
    validarFormulario();
})

/*Añadimos el evento de validacion al dni,nombre y edad */
dni.addEventListener("change",(e) =>{
    let dato = e.target.value.trim();
    let expresion = /^[1-9][0-9]{7}[A-Z]$/;
    if ((dato.length > 0 && dato.length <= 9) && expresion.test(dato)){
        validar.dni = true;
    }
    else validar.dni = false;
})

nombre.addEventListener("change",(e) =>{
    let dato = e.target.value.trim();
    if (dato.length > 0 ){
        validar.nombre = true;
    }
    else validar.nombre = false;
})

edad.addEventListener("change",(e) =>{
    let dato = e.target.value;
    if (dato > 18 && dato < 100){
        validar.edad = true;
    }
    else validar.edad = false;
})

/*Al igual que con el input de hijos, le añadimos a cada radio el evento correspondiente*/
for (let i = 0; i < sexo.length; i++){
    sexo[i].addEventListener("change",(e) =>{
        let dato = e.target.value;
        if (dato != null){
            validar.sexo = true;
        }
        else validar.sexo = false;
    })
}

for (let i = 0; i < hijos.length; i++){
    hijos[i].addEventListener("change",(e) =>{
        let dato = e.target.value;
        if (dato != null){
            validar.hijos = true;
        }
        else validar.hijos = false;
    })
}
/*Comprobamos si el campo de terminos esta marcado o no */
terminos.addEventListener("change",(e) =>{
    let dato = e.target;
    if (dato.checked){
        validar.terminos = true;
    }
    else validar.terminos = false;
})


/*Funcion donde comprobamos si hay algun datos que no sea valido, si son todos validos se ejecuta el submit*/
function validarFormulario (){
    let datosValidos = Object.values(validar);
    let valido = datosValidos.findIndex(value => value == false);
    if (valido == -1) {
        formulario.submit();
    }
    else{
        alert("Formulario invalido");
    }
}