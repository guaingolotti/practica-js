// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");
    titulo.addEventListener('mouseover', function(){
    let nombre = prompt("cual es tu nombre?");
    
    console.log("El nombre es:", nombre)

let saludo = document.querySelector("#saludo");
let span = document.querySelector(".bienvenida span");
if (nombre == false || nombre === ""){
    saludo.innerText = 'Bienvenid@ usuario';
    saludo.style.textTransform = "uppercase";
    titulo.style.display = "none";
    span.style.display = "block";
} else {
    document.querySelector("#saludo").innerText = 'bienvenido ' + nombre;
    saludo.style.textTransform = "uppercase";
    titulo.style.display = "none";
    span.style.display = "block";
}
});

let span = document.querySelector(".bienvenida span");

span.addEventListener("click", function(){
    let secbienvenida = document.querySelector(".bienvenida");
    secbienvenida.style.display = "block";
    let secpersonajes = document.querySelector(".personajes");
    secpersonajes.style.display = "flex";
});


let bart = this.document.querySelector("#bart");
let lisa = this.document.querySelector("#lisa");
let marge = this.document.querySelector("#marge");
let maggie = this.document.querySelectorAll("#maggie");
let milhouse = this.document.querySelector("#milhouse");
let burns = this.document.querySelector("#burns");
let bobPatinio = this.document.querySelector("#bobPatinio");
let flanders = this.document.querySelector("#flanders");
let duffman =  this.document.querySelector("#duffman");
let gregory = this.document.querySelector("#gregory");
let nelson = this.document.querySelector("#nelson");

let bartDos = this.document.querySelector("#bart span");
let lisaDos = this.document.querySelector("#lisa span");
let margeDos = this.document.querySelector("#marge span");
let maggieDos = this.document.querySelectorAll("#maggie span");
let milhouseDos = this.document.querySelector("#milhouse span");
let burnsDos = this.document.querySelector("#burns span");
let bobPatinioDos = this.document.querySelector("#bobPatinio span");
let flandersDos = this.document.querySelector("#flanders span");
let duffmanDos =  this.document.querySelector("#duffman span");
let gregoryDos = this.document.querySelector("#gregory span");
let nelsonDos = this.document.querySelector("#nelson span");
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    
bart.document.querySelector( 'click', function (){

});

lisa.document.querySelector('dblclick', function(){

});

marge.document.querySelector('click' , function(){

});

maggie.document.querySelector('mouseout', function(){

});

milhouse.document.querySelector('click', function (){

});

burns.document.querySelector('mouseover', function(){

});

bobPatinio.document.querySelector('dblclick', function(){

});

flanders.document.querySelector('mouseover', function(){

});

duffman.document.querySelector('dblclick', function(){

});

gregory.document.querySelector('mouseover', function(){

});

nelson.document.querySelector('click', function(){

});
    /* Asignarle evento a la variable boton */
    //let boton = ;

 
 }) 