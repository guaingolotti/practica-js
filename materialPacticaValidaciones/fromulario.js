let formulario = document.querySelector('container');
let campoBuscar = document.querySelector ('form-group');
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    if (campoBuscar.value == ''){
    }else {
        this.submit()
    }
})
