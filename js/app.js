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
        if(e.target.value.trim() === '') {
            mensajeError()
        } else {
            console.log(e.target.value)
        }
    }

    //creando mensaje de error
    function mensajeError() {
        const error = document.createElement('P');
        error.textContent = 'Campo Obligatorio';
        console.log(error);
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        formulario.appendChild(error)
    }
    
});

