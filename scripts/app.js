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

let operacion = [];

//inicializar operacion
for(x=0; x<16; x++) {
    operacion[x] = false;
}

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

let flagDobleOperador = 0;

// Operadores


    sumar.addEventListener('click', function(){

    
        almacenarNumero();
        if(operacion[0] == true) {
            cicloOperador();
        }
        operacion [0] = true;
        limpiarPantalla();
        
    });
    restar.addEventListener('click', function(){
        almacenarNumero();
        console.log('-');
        if(operacion[1] == true) {
            cicloOperador();
        }
        operacion [1] = true;
        limpiarPantalla();
        
    
    });
    dividir.addEventListener('click', function(){
        almacenarNumero();
        console.log('/');
        if(operacion[2] == true) {
            cicloOperador();
        }
        operacion [2] = true;
        limpiarPantalla();
        
    
    });
    multiplicar.addEventListener('click', function(){
        almacenarNumero();
        console.log('*');
        if(operacion[3] == true) {
            cicloOperador();
        }
        operacion [3] = true;
        limpiarPantalla();
        
    
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
    cicloOperador();

});


reset.addEventListener('click', function(){
    location.reload()
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
        console.log(`primer numero ${primerNumero}`);
    } else {
        segundoNumero = Number(numeroString);
        limpiarPantalla();
        console.log(`segundo numero ${segundoNumero}`);

    }
}

function cicloOperador() {
    for(x=0; x<16; x++) {
        if( operacion [x] == true) {
            operador (x);
            operacion [x] = false;
            console.log(`ciclo operador: ${operacion [x]} y x: ${x}`)
        }
    }
}

// let resultado = 0;

function operador (operador) {
    switch(operador) {
        case 0:
            primerNumero = primerNumero + segundoNumero;
            numeroVisible.textContent = primerNumero; // mostrar resultado en pantalla
            console.log(primerNumero); 
            console.log('+');
            
            break;
        case 1:
            console.log('-');
            primerNumero = primerNumero - segundoNumero;
            numeroVisible.textContent = primerNumero;
            console.log(primerNumero);
            break;
        
        case 2:
            console.log('/');
            primerNumero = primerNumero / segundoNumero;
            numeroVisible.textContent = primerNumero;
            console.log(primerNumero);
            break;
        case 3:
            console.log('*');
            primerNumero = primerNumero * segundoNumero;
            numeroVisible.textContent = primerNumero;
            console.log(primerNumero);
            break;
        default : 
        console.log('Error de switch');
            break;
    }
}
