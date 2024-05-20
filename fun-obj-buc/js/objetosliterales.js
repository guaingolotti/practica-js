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
        return (`hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. mi primer comida favorita es el ${this.comidasFavoritas[0]}`);
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
