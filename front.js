const cont = document.querySelector(".container");

function pedirDatos(){
    fetchData("dameDatos", (datos) =>{
        datos.forEach(dato => {
            const tittle = document.createElement('h2');
            tittle.innerHTML = `${dato}`;;
            tittle.classList.add('tittle');
            
            cont.appendChild(tittle);
        });
    })
}

window.onload = pedirDatos();