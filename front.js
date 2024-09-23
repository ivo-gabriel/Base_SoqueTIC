const cont = document.querySelector(".container");

function pedirDatos(){
    fetchData("dameDatosArchivo", (datos) =>{
        datos.forEach(dato => {

            const card = document.createElement('div');
            card.classList.add('hotel-card');
        
            const tittle = document.createElement('h2');
            tittle.innerHTML = `Hotel ${dato.nombre}`;;
            tittle.classList.add('tittle');
        
            const rating = document.createElement('p');
            rating.innerHTML = `Calificacion ${dato.calificacion}`;;
            rating.classList.add('rating');
        
            const ubication = document.createElement('p');
            ubication.innerHTML = `Ubicacion ${dato.ubicacion}`;;
            ubication.classList.add('Ubi');
        
            const rooms = document.createElement('p');
            rooms.innerHTML = `Habitaciones ${dato.habitaciones}`;;
            rooms.classList.add('rooms');
            
            card.appendChild(tittle);
            card.appendChild(rating);
            card.appendChild(ubication);
            card.appendChild(rooms);

            cont.appendChild(card);
        });
    })
}

window.onload = pedirDatos();