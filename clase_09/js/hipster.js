let mensaje = 'ingrese su nacionalidad';
let resultado = prompt(mensaje);

console.log(resultado)

let mensajeuno = 'ingrese su profesion';
let profesion = prompt(mensajeuno);

console.log(profesion)

let mensajedos = 'cuantos kms caminas por dias?'
let kms = prompt(mensajedos);

console.log(kms)

function filosofoHipster(resultado, profesion, kms){
    if (resultado == 'argentina' && profesion == 'musico' && kms > 10){
        return 'soy un filosofo hipster';
    }else{
       return 'aun no soy filosofo hipster' 
    }
}

const resultadouno = filosofoHipster();
console.log(resultadouno);
