let mensaje = "Bienvenidos a mi sitio."
alert(mensaje);

let seguro = "estas seguro de querer avanzar?"
confirm(seguro);

if(seguro){
    document.querySelector("h2").innerText = 'que alegria que quieras continuar con tu visita';
} else{
    document.querySelector("h2").innerText = 'lamentamos que no quieras continuar con tu visita'
};


let nombre = "ingrese su nombre"
prompt(nombre)