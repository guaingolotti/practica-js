//PRACTICA FUNCIONES//

//ej1/

function rectangulo (largo, ancho){
    return largo * ancho
}

const areaR = rectangulo(20,10)
console.log(areaR)

//ej2//

function triangulo (base, altura){
    return (base * altura)/2
}

const areaT = triangulo(20,10)
console.log(areaT)

//ej3//

function largoDelArray (array){
    return array.length;
}

const idiomas = ['español' , 'ingles' , 'chino'];
const largoIdiomas = largoDelArray(idiomas);
console.log(largoIdiomas);

//ej4//

function cantidadDeLetras (palabra){
    return palabra.length;
}
const palabra = 'programacion'
const largoPalabra = cantidadDeLetras(palabra)
console.log (largoPalabra)

//ej5//

function dolarHoy (precioArgentinos){
    return precioArgentinos * 500;
}
const dolarHoyDos = dolarHoy;
console.log (dolarHoy);
let precioEnPesos = 200;
let precioEnDolares = dolarHoyDos(precioEnPesos);
console.log(precioEnDolares);


//ej6//

function precioFinal (parametro){
    iva = 0,21;
    precioIva = parametro + parametro * iva
    return precioIva
}

//ej7//

function mitad (numero){
    return numero / 2
}
const mitadDos = mitad;
const resultadoMitad = mitadDos(20);
console.log (resultadoMitad);
