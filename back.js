import { onEvent, sendEvent, startServer } from "soquetic";

const Hoteles = ["Sheraton", "Palace", "Hilton"];

onEvent("dameDatos", () => {return Hoteles});

startServer();