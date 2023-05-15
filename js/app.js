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
        // console.log(e.target.parentElement)
        if(e.target.value.trim() === '') {
            mensajeError(`El campo ${e.target.id} es Obligatorio`, e.target.parentElement)
            return mensajeError;
        } 

        limpiarAlerta(e.target.parentElement);

    }

    //creando mensaje de error
    function mensajeError(mensaje, referencia) {

        //comprobar si ya existe un alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }


        const error = document.createElement('P');
        error.textContent = mensaje;
       
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }
    
});

