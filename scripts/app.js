// Selectores

const numeroVisible = document.querySelector('#numeroVisible');

const potencia = document.querySelector('#potencia');
const raiz = document.querySelector('#raiz');
const porcentaje = document.querySelector('#porcentaje');
const reset = document.querySelector('#reset');

const numeroSiete = document.querySelector('#numeroSiete');
const numeroOcho = document.querySelector('#numeroOcho');
const numeroNueve = document.querySelector('#numeroNueve');
const dividir = document.querySelector('#dividir');

const numeroCuatro = document.querySelector('#numeroCuatro');
const numeroCinco = document.querySelector('#numeroCinco');
const numeroSeis = document.querySelector('#numeroSeis');
const multiplicar = document.querySelector('#multiplicar');

const numeroUno = document.querySelector('#numeroUno');
const numeroDos = document.querySelector('#numeroDos');
const numeroTres = document.querySelector('#numeroTres');
const restar = document.querySelector('#restar');

const coma = document.querySelector('#coma');
const numeroCero = document.querySelector('#numeroCero');
const enter = document.querySelector('#enter');
const sumar = document.querySelector('#sumar');


// ACUS

let flagIgual = 0;
let flagNumero = 0;
let almacenarNumeroFlag = 0;
let comaFlag = 0;

let numeroIngresado = [];
let numeroString = '';

let primerNumero = 0;
let segundoNumero = 0;
let operacion = 0;

// Listeners

// Numeros
numeroCero.addEventListener('click', function(){
    armarNumero('0');
});
numeroUno.addEventListener('click', function(){
    armarNumero('1');
});
numeroDos.addEventListener('click', function(){
    armarNumero('2');
});
numeroTres.addEventListener('click', function(){
    armarNumero('3');
});
numeroCuatro.addEventListener('click', function(){
    armarNumero('4');
});
numeroCinco.addEventListener('click', function(){
    armarNumero('5');
});
numeroSeis.addEventListener('click', function(){
    armarNumero('6');
});
numeroSiete.addEventListener('click', function(){
    armarNumero('7');
});
numeroOcho.addEventListener('click', function(){
    armarNumero('8');
});
numeroNueve.addEventListener('click', function(){
    armarNumero('9');
});

coma.addEventListener('click', function(){
    if(comaFlag === 0){
        armarNumero('.');
        comaFlag++;
    }
});

// Operadores
sumar.addEventListener('click', function(){
    operador('+');
});
restar.addEventListener('click', function(){
    operador('-');
});
dividir.addEventListener('click', function(){
    operador('/');
});
multiplicar.addEventListener('click', function(){
    operador('*');
});

potencia.addEventListener('click', function(){
});
raiz.addEventListener('click', function(){
});
porcentaje.addEventListener('click', function(){
});

// Otros
enter.addEventListener('click', function(){
    almacenarNumero();
    limpiarPantalla();
    numeroVisible.textContent = primerNumero;
});
reset.addEventListener('click', function(){
});

// Funciones

function armarNumero(numero){
    if(flagNumero < 16){
        numeroIngresado[flagNumero] = numero;
        flagNumero ++;
        numeroString = numeroIngresado.join('');
        numeroVisible.textContent = numeroString;
    }
}

function limpiarPantalla() {
    numeroString = 0;
    numeroVisible.textContent = '';
    flagNumero = 0;
    comaFlag = 0;
    for(x = 0; x < 16; x++){
        numeroIngresado [x] = ''; /// no funciona
    }
}

function almacenarNumero (numero) {
    if(almacenarNumeroFlag == 0){
        primerNumero = Number(numeroString);
        almacenarNumeroFlag++;
        limpiarPantalla();
    } else {
        segundoNumero = Number(numeroString);
        limpiarPantalla();
    }
}

function operador (operador) {
    switch(operador) {
        case '+':
            almacenarNumero();
            if(almacenarNumeroFlag != 0) {
                primerNumero = primerNumero + segundoNumero;
                console.log(primerNumero);
            }
            console.log('+');
            break;
        case '-':
            almacenarNumero();
            if(almacenarNumeroFlag != 0) {
                primerNumero = primerNumero - segundoNumero;
                console.log(primerNumero);
            }
            console.log('-');
            break;
        case '/':

            console.log('/');
            break;
        case '*':
            console.log('*');
            break;
        case 'pot':
            console.log('pot');
            break;
        case 'raiz':
            console.log('raiz');
            break;
        case 'porc':
            console.log('porcentaje');
            break;
        default:
            console.log('switchError');
    }
}

