function capturarInformacionTarea(idTarea)
{
    fetch(`/conseguirInfoTarea?idTarea=${idTarea}`)
    .then(response => response.json())
    .then(data => {
        let fechaInicioDetalle = document.getElementById('fechaInicioDetalle')
        let fechaFinDetalle = document.getElementById('fechaFinDetalle')
        let estadoTareaDetalle = document.getElementById('estadoTareaDetalle')
        let descripcionTareaDetalle = document.getElementById('descripcionTareaDetalle')
        let indTarea = document.getElementById('indTarea')
        let comentariosTareaTotales = document.getElementById('comentariosTareaTotales')

        fechaInicioDetalle.value = data.fechaInicio
        fechaFinDetalle.value = data.fechaFin
        estadoTareaDetalle.value = data.estadoTarea
        descripcionTareaDetalle.value = data.descripcionTarea
        indTarea.innerHTML = data.idTarea
        comentariosTareaTotales.innerHTML = ''
        for(let i = 0; i < data.comentariosTotales.length; i++)
        {
            comentariosTareaTotales.innerHTML += `
                <div class="row mb-3">
                    <div class="col-3">
                        ${data.comentariosTotales[i][0]}
                    </div>
                    <div class="col-9">
                        ${data.comentariosTotales[i][1]}
                    </div>
                </div>
            `
        }
    })
}

function eliminarInfo()
{
    let fechaInicioDetalle = document.getElementById('fechaInicioDetalle')
    let fechaFinDetalle = document.getElementById('fechaFinDetalle')
    let estadoTareaDetalle = document.getElementById('estadoTareaDetalle')
    let descripcionTareaDetalle = document.getElementById('descripcionTareaDetalle')
    let indTarea = document.getElementById('indTarea')
    let comentariosTareaTotales = document.getElementById('comentariosTareaTotales')

    fechaInicioDetalle.value = ''
    fechaFinDetalle.value = ''
    estadoTareaDetalle.value = ''
    descripcionTareaDetalle.value = ''
    indTarea.innerHTML = ''
    comentariosTareaTotales.innerHTML = ''
}

function enviarComentario()
{
    let comentarioUsuario = document.getElementById('comentarioUsuario')
    let indTarea = document.getElementById('indTarea')
    
    datos = {
        'comentario':comentarioUsuario.value,
        'idTarea':indTarea.innerHTML
    }

    fetch('/publicarComentario',{
        method:"POST",
        headers:{
            "X-Requested-With":"XMLHttpRequest",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body:JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        capturarInformacionTarea(indTarea.innerHTML)
    })

}

function getCookie(name)
{
    let cookieValue = null;
    if(document.cookie && document.cookie !== "")
    {
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++)
        {
            const cookie = cookies[i].trim();
            if(cookie.substring(0,name.length + 1) === (name + "="))
            {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue 
}

function finalizarTarea(idFinalizar)
{
    console.log(idFinalizar)
    /*
    Pregunta 5
    a.
    En esta funcion se debe de postear informacion y actualizar una celda para la tarea correspondiente
    Al capturar el idFinalizar se puede obtener el id de la tarea a traves del metodo
    split en javascript (investigar), con dicho id se puede armar el string 'estado' + id
    para capturar el elemento correspondiente a la celda del estado, a traves de su propiedad 
    innerHTML se puede cambiar el valor.

    b.
    Los cambios realizados en a solo se veran en el DOM, al actualizarlo todo volvera
    a su valor inicial, por lo que el siguiente paso es postear informacion al servidor
    Utilizar una peticion post y acceder a la tarea con su respectivo id y cambiar el estado
    de la tarea. Debido a que se usa la peticion fetch la pagina no se recargara,
    pero si la recarga manualmente no observara cambios ya que el estado de la tarea
    ha sido modificada tambien en base de datos
    
    */
}