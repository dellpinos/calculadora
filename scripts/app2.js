// let numeroIngresado = [];

// for(x = 0; x < 10; x++) {
//     numeroIngresado[x] = x+15;
//     console.log(x);
// }



// numeroIngresado.forEach(e => console.log(e));

// const string = numeroIngresado.toString();

// console.log(string);

let numeroIngresado = [];

let contadorClicks = 0;

// selectores
const coma = document.querySelector('#coma');
const numeroUno = document.querySelector('#numeroUno');
const numeroDos = document.querySelector('#numeroDos');
const numeroTres = document.querySelector('#numeroTres');

// listeners
let flagIgual = 0;
let flagNumero = 0;

function armarNumero(numero){
    numeroIngresado[flagNumero] = numero;
    flagNumero ++
}

numeroUno.addEventListener('click', function(){
    armarNumero(1);
    console.log(numeroIngresado);
})
numeroDos.addEventListener('click', function(){
    armarNumero(2);
    console.log(numeroIngresado);
})
numeroTres.addEventListener('click', function(){
    armarNumero(3);
    consoleEach()
})


function consoleEach(){
    numeroIngresado.forEach(e => console.log(e));
}

/// la idea es armar un string que vaya agregando (concatenando)
// los numeros leidos por el forEach
// despues convertir el tipo de dato a float y despues hacer la operacion





