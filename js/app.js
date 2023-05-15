document.addEventListener('DOMContentLoaded', function() {
    
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario');
    
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)

    //validacion del input
    function validar(e) {
        console.log(e.target.parentElement)
        if(e.target.value.trim() === '') {
            mensajeError(`El campo ${e.target.id} es Obligatorio`, e.target.parentElement)
            return mensajeError;
        } 
    }

    //creando mensaje de error
    function mensajeError(mensaje, referencia) {
        const error = document.createElement('P');
        error.textContent = mensaje;
       
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        referencia.appendChild(error)


    }
    
});

