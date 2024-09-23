function pedirDatos(){
    fetchData("dameDatos", (datos) =>{
        datos.forEach(dato => {
            console.log(dato);
        });
    })
}

window.onload = pedirDatos();