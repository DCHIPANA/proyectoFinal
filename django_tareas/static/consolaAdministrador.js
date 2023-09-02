function editarUsuario(idUsuario)
{
    fetch(`/conseguirInfoUsuario?idUsuario=${idUsuario}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let nombreUsuario = document.getElementById('editaNombreUsuario')
        let apellidoUsuario = document.getElementById('editaApellidoUsuario')
        let emailUsuario = document.getElementById('editaEmailUsuario')
        let fechaIngresoUsuario = document.getElementById('editaFechaIngresoUsuario')
        let nroCelularUsuario = document.getElementById('editaNroCelular')
        let profesionUsuario = document.getElementById('editaProfesionUsuario')
        let indUsuario = document.getElementById('indUsuario')
        
        nombreUsuario.value = data.nombreUsuario
        apellidoUsuario.value = data.apellidoUsuario
        emailUsuario.value = data.emailUsuario
        fechaIngresoUsuario.value = data.fechaIngresoUsuario
        nroCelularUsuario.value = data.nroCelularUsuario
        profesionUsuario.value = data.profesionUsuario
        indUsuario.innerHTML = data.indUsuario
    })
}

function actualizarUsuario()
{
    let indUsuario = document.getElementById('indUsuario')
    let nroCelular = document.getElementById('editaNroCelular')
    let profesion = document.getElementById('editaProfesionUsuario')
    fetch(`/actualizarUsuario?idUsuario=${indUsuario.innerHTML}&nroCelular=${nroCelular.value}&profesion=${profesion.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}