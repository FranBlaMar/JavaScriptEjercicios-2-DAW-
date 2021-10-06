
const semana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
    
  ]

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septeimbre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]


document.getElementById("mostrarFechaHora").addEventListener("change",(e) => {
    //Obtengo el segundo p del div con id ejercicio1
    let p = document.querySelector("#ejercicio1 p:nth-child(3)");
    //Creo la fecha con los datos introducidos por el usuario
    let fecha = new Date(e.target.value);
    //Añado el texto al segundo p
    p.innerHTML = `Hoy es ${semana[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()} y son las ${fecha.getHours()}:${fecha.getMinutes()} horas`;

});

document.getElementById("mostrarCalendarioAño").addEventListener("change",(e) => {
    //Obtengo el segundo p del div con id ejercicio2
    let p = document.querySelector("#ejercicio2 p:nth-child(4)");
    //Obtengo los valores de los inputs
    let mes=document.getElementById("mostrarCalendarioMes").value;
    let año=e.target.value;
    let letraMes = meses[mes];
    //Creo uan variable donde guardar cuantos dias tiene un mes
    let diasMes;
    //Si el mes tiene 30,31 o 28 dias lo guardo en la variable
    if (mes == 0|| mes==2 || mes==4 || mes==6 || mes==7 || mes==9 || mes==11) diasMes = 31;
    else if (mes==1) diasMes = 28;
    else if (mes==3 || mes==5 || mes==8 || mes==10) diasMes = 30;
    //Creo la fecha con dia 0;
    let date = new Date(año,mes,0);
    //Creo el texto donde añadir la info del calendario
    let texto = letraMes + " " + año + "<br>";
    //For que va desde 1 hasta el numero de dias que tenga el mes
    for( i=1; i <= diasMes; i++){
        //Voy desde el 1 hasta el 28,30 o 31
        date.setDate(i);
        //Obtengo el dia de la semana en letras
        let diaSemana= semana[date.getDay()];
        //Voy añadiendo la info al string
        texto= texto + `${diaSemana} (${i}), `;
    }
    p.innerHTML = texto;
});


document.getElementById("diasRetraso").addEventListener("change",(e) => {
    //Obtengo la fecha y los dias de retraso
    let fecha = new Date(document.getElementById("fechaPago").value);
    let diasRetraso = e.target.value;
    //Uso el set para sumar los dias de retraso a la fecha
    fecha.setDate(fecha.getDate()+ parseInt(diasRetraso));
    //Obtengo el tercer p del html para añadirle el texto
    let p = document.querySelector("#ejercicio3 p:nth-child(4)");
    p.innerHTML = `El día de pago es el ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;
})

let p = document.querySelector("#ejercicio4 p");
setInterval(() => {
    let today = new Date();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+ "  " +today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    p.innerHTML = `${date}`;
},1000)



let p2 = document.querySelector("#ejercicio5 p:nth-child(2)");
let finHora = document.getElementById("finHoraAlarma").value;
document.getElementById("finMinAlarma").addEventListener("change",(e)=> {
    let finHora = document.getElementById("finHoraAlarma").value;
    let finMin = e.target.value;
    let alarma= setInterval(() => {
        let today = new Date();
        let date = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
        p2.innerHTML = `${date}`;
    
        let hora = today.getHours();
        let min = today.getMinutes();
    
    
        if (finHora == hora && finMin == min){
            let sonido = document.createElement("iframe");
	        sonido.setAttribute("src","alarm-clock.mp3");
            sonido.setAttribute("allow","autoplay");
	        p2.appendChild(sonido);
            let reinicio = prompt("¿Desea posponer la alarma? (Si o No)");
            if (reinicio == "No") {
                let audio = document.getElementsByTagName("iframe")[0];
                p2.removeChild(audio);
                clearInterval(alarma);
            }
            else {
                let audio = document.getElementsByTagName("iframe")[0];
                p2.removeChild(audio);
                if ((parseInt(finMin) + 2) > 59){
                    finMin = (parseInt(finMin) + 2) - 59;
                }
                else{
                    finMin = parseInt(finMin) + 2;
                }
            }
        }
    },1000)
});

