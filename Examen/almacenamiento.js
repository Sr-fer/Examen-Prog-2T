function preload_elecciones(){
var seleccion_frecuencia = document.getElementById("eleccion_habitual")
seleccion_frecuencia.innerHTML = localStorage.getItem("preload_eleccion")
}
function preload_victorias(){
var rondas_ganadas = document.getElementById("rondas_ganadas")
rondas_ganadas.innerHTML = localStorage.getItem("victorias_jugador")
}
function preload_rondas() {
var rondas_marca = document.getElementById("rondas_jugadas")
rondas_marca.innerHTML = localStorage.getItem("preload_rondas_local")
}