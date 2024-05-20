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