const cont = document.querySelector(".container");

// Conecta al servidor
connect2Server();

function pedirDatos(){
    getEvent("dameDatos", (datos) =>{
        console.log(datos);
    })
}

window.onload = pedirDatos();