let mensajeuno = 'Ingrese su nombre'
let resultadouno = prompt(mensajeuno)
console.log(resultadouno);


let mensajedos = 'Ingrese su edad'
let resultadodos = prompt(mensajedos)
console.log(resultadodos)

const fanDeportes = confirm('Te gustan los deportes?')
console.log(fanDeportes);

const mensajetres = `Muchas gracias ${resultadouno} por responder nuetsras preguntas`;
alert(mensajetres)

const usuario = {
    nombre: resultadouno,
    fanDeportes: fanDeportes,
    deportistaProfesional: function(){
        if (this.fanDeportes){
            return 'si, soy fan de los deportes';
        }else{
            return 'no soy tan fan aun de los deportes';
        }
    }

}
console.log(usuario.deportistaProfesional());

