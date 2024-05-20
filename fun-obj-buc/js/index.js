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


//PRACTICA OBJETOS LITERALES//

//ej1//
let misDatos = {
    nombre : 'Guadalupe',
    apellido : 'Ingolotti',
    dni : '45990209',
    comidasFavoritas : ['sushi','pasta','asado'],
}

console.log(misDatos)

//ej2//

let misDatosDos = {
    nombre : 'Guadalupe',
    apellido : 'Ingolotti',
    edad : 19,
    comidasFavoritas : ['sushi' , 'pasta' , 'asado'],

    saludar : function(){
        return (`hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. mi primer comida favorita es ${this.comidasFavoritas[0]}`);
    }
}

console.log(misDatosDos.saludar());

//ej3//

let auto = {
    marca: 'volskwagen',
    modelo: 'taos',
    anio: 2024,
    color: 'gris',
    posicion: 0,
    
    avanzar: function (pos){
        this.posicion += pos;
    },

    retroceder: function(pos){
        this.posicion -= pos;
    }

}

auto.avanzar(8);
auto.retroceder(20);
auto.avanzar(4);
console.log(`La posicon final del auto es: ${auto.posicion}`)

//ej4//

const nuevoAuto = {
    marca: 'volskwagen',
    modelo: 'taos',
    anio: 2024,
    color: 'gris',
    posicion: 0,

    moverse: function(pos){
        this.posicionn += pos;
        return this.posicion;
    }
}

nuevoAuto.moverse(5);
nuevoAuto.moverse(-9);
console.log(`La posicon final del auto es: ${nuevoAuto.posicion}`)


//PRACTICA BUCLES//

//precalentando//

//a//

for (let i=0; i<5; i++){
    console.log('practicando con el bucle for');
}

//b//

for(let i = 0; i < 10; i++){
    console.log(`la variable i tiene el valor ${i}`);
}

//c//

for(let i = 0; i < 20; i += 2){
    console.log(i);
}

for(let i = 0; i < 250; i += 5){
    console.log(i)
}

//d//

for(let i = 100; i >= 0; i--){
    console.log(i);
}

//tablas de multiplicar//

let base = 2;
let resultados = [];
for(let i = 1; i <= 10; i++){
    resultados.push(base * i);
}
console.log(resultados);

//ejemplos con otras bases//
let baseDos = 3;
let resultadosDos = [];
for(let i = 1; i <= 10; i++){
    resultadosDos.push(base * i);
}
console.log(resultadosDos);

let baseTres = 5;
let resultadosTres = [];
for(let i = 1; i <= 10; i++){
    resultadosTres.push(base * i);
}
console.log(resultadosTres);

//obteniendo el total//
let ganancias = [10, 28, 30, 40, 50, -1, -20, -30, -4, -50];
let total = 0;
for(let i = 0; i < ganancias.length; i++){
    total += ganancias[i];
}
console.log(`la suma total de las ganancias es: ` + total);

//recorriendo arrays//

//a//

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
]

console.log('temas: ');
for(let i = 0; i < healingIsDifficult.length; i ++){
    console.log(healingIsDifficult[i]);
}

//b//

console.log('orden del track:');
for(let i = 0; i < healingIsDifficult.length; i++){
    console.log(`${i + 1} ${healingIsDifficult[i]}`);
}

//recorriendo arrays de objetos literales//

let got  = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for(let i = 0; i < got.length; i ++){
    let persona = got[i];
    console.log(`hola ${persona.nombre} ${persona.apellido} criatura viajera!`)

    if (persona.ciudad){
        console.log(`soy ${persona.nombre} ${persona.apellido} de la ciudad ${persona.ciudad}`);
    } else {
        console.log(`soy ${persona.nombre} ${persona.apellido} de la ciudad descconocida`)
    }
}