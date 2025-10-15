import {
  subscribeGETEvent,
  subscribePOSTEvent,
  realTimeEvent,
  startServer,
} from "soquetic";
import fs from "node:fs";

const Hoteles = [
    "Alvear Palace Hotel", 
    "Hotel Llao Llao Resort, Golf & Spa", 
    "Faena Hotel Buenos Aires",
    "Arakur Ushuaia Resort & Spa",
    "Park Hyatt Mendoza",
    "Algodón Mansion",
    "Alvear Icon Hotel",
    "Cavas Wine Lodge",
    "Panamericano Buenos Aires Hotel",
    "Sofitel Recoleta",
    "Sheraton Iguazú Resort & Spa",
    "Design Suites Calafate",
    "Los Cauquenes Resort + Spa + Experiences",
    "House of Jasmines Relais & Châteaux",
    "NH Mendoza Cordillera",
    "Howard Johnson Hotel & Casino Formosa",
    "El Casco Art Hotel",
    "Gran Melia Iguazú",
    "Patagonia Plaza Hotel",
    "Las Balsas Relais & Châteaux"
];

subscribeGETEvent("dameDatos", () => {return Hoteles});

subscribeGETEvent("dameDatosArchivo", () => {
    let datos = fs.readFileSync("data/hoteles_argentinos.json", "utf8");
    return JSON.parse(datos)
});

startServer();