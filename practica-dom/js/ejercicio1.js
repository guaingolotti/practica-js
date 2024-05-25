//PRACTICA INTEGRADORA//

let mensaje = alert("Bienvenidos a mi sitio.");

let seguro = confirm("estas seguro de querer avanzar?");
if (seguro){
   document.querySelector("h2.saludo").innerText = "que alegria que quieras continuar con tu visita";
} else{
   document.querySelector("h2.saludo").innerText = "lamentamos que no quieras continuar con tu visita";
   document.querySelector(".container-bienvenida").style.display = 'none';
};

let nombre = prompt("ingrese su nombre");
console.log(nombre);
document.querySelector("h1").innerText = `Bienvenido ${nombre}`;


let container = document.querySelector(".container-general");
let denegado = document.querySelector(".contenido-bloqueado");

let edad = prompt("cuantos años tenes?");
if (edad >= 17){
   document.querySelector(".container-general").style.display = 'block';
   document.querySelector("#accesoDenegado").style.display = 'none';

      let progra = confirm("te gusta la programacion?");
      let imagenProgra = document.querySelector(".background-img");

      if (progra){
      imagenProgra.innerHTML = '<img src= "../img/programmer.jpeg">';
      } else{
      imagenProgra.innerHTML = '<img src = "../img/gatito.jpeg">';
      };

      let ruta = prompt("ingrese url de imagen para su avatar");
      let avatar = document.querySelector('.avatar');
      avatar.src = ruta;

         let peliculas = {
            nombre: '',
            director: '',
            duracion: '',
            actor: '',
         };

         peliculas.nombre = prompt('cual es tu pelicula favorita');
         peliculas.director = prompt('quien es el director?');
         peliculas.duracion = prompt('cuantos minutos dura la pelicula?');
         peliculas.actor = prompt('ingrese el nombre del actor');

         document.querySelector("#nombre").innerText = peliculas.nombre;
         document.querySelector("#director").innerText = peliculas.director;
         document.querySelector("#duracion").innerText = peliculas.duracion + ' minutos';
         document.querySelector("#actor").innerText = peliculas.actor;
         
         document.querySelector("#pelicula").style.display = 'block';
} else {
   document.querySelector("#accesoDenegado").style.display = 'flex';
   container.style.display = 'none';
};