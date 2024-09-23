import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs";

const Hoteles = ["Sheraton", "Palace", "Hilton"];

onEvent("dameDatos", () => {return Hoteles});

onEvent("dameDatosArchivo", () => {
    let datos = fs.readFileSync("data/datos.json", "utf8");
    return JSON.parse(datos)
});

startServer();