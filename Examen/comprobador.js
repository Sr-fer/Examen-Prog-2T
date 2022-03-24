function comprobador_papel(victorias) {
if(IA_eleccion() == 1) {
    var ganador = document.getElementById("ganador")
    var eleccion_IA = document.getElementById("eleccion_ia")
    var eleccion_J = document.getElementById("eleccion_j")
    ganador.innerHTML = "IA"
    eleccion_IA.innerHTML = "Tijeras"
    eleccion_J.innerHTML = "Papel"
}
else if(IA_eleccion() == 2){
    var ganador = document.getElementById("ganador")
    var eleccion_IA = document.getElementById("eleccion_ia")
    var eleccion_J = document.getElementById("eleccion_j")
    ganador.innerHTML = "Jugador"
    eleccion_IA.innerHTML = "Piedra"
    eleccion_J.innerHTML = "Papel"
    victorias++
    localStorage.setItem("victorias_jugador", victorias)
    }
else if(IA_eleccion() == 3){
    var ganador = document.getElementById("ganador")
    var eleccion_IA = document.getElementById("eleccion_ia")
    var eleccion_J = document.getElementById("eleccion_j")
    ganador.innerHTML = "Empate"
    eleccion_IA.innerHTML = "Papel"
    eleccion_J.innerHTML = "Papel"
    }
}

function comprobador_piedra(victorias) {
    if(IA_eleccion() == 1) {
    var ganador = document.getElementById("ganador")
    var eleccion_IA = document.getElementById("eleccion_ia")
    var eleccion_J = document.getElementById("eleccion_j")
    ganador.innerHTML = "Jugador"
    eleccion_IA.innerHTML = "Tijeras"
    eleccion_J.innerHTML = "Piedra"
    victorias++
    //localStorage.setItem("victorias_jugador", victorias)
}
else if(IA_eleccion() == 2){
    var ganador = document.getElementById("ganador")
    var eleccion_IA = document.getElementById("eleccion_ia")
    var eleccion_J = document.getElementById("eleccion_j")
    ganador.innerHTML = "Empate"
    eleccion_IA.innerHTML = "Piedra"
    eleccion_J.innerHTML = "Piedra"
    }
else if(IA_eleccion() == 3){
    var ganador = document.getElementById("ganador")
    var eleccion_IA = document.getElementById("eleccion_ia")
    var eleccion_J = document.getElementById("eleccion_j")
    ganador.innerHTML = "IA"
    eleccion_IA.innerHTML = "Papel"
    eleccion_J.innerHTML = "Piedra"
    }
}


function comprobador_tijeras(victorias){
    if(IA_eleccion() == 1) {
    var ganador = document.getElementById("ganador")
    var eleccion_IA = document.getElementById("eleccion_ia")
    var eleccion_J = document.getElementById("eleccion_j")
    ganador.innerHTML = "Empate"
    eleccion_IA.innerHTML = "Tijeras"
    eleccion_J.innerHTML = "Tijeras"
}
else if(IA_eleccion() == 2){
    var ganador = document.getElementById("ganador")
    var eleccion_IA = document.getElementById("eleccion_ia")
    var eleccion_J = document.getElementById("eleccion_j")
    ganador.innerHTML = "IA"
    eleccion_IA.innerHTML = "Piedra"
    eleccion_J.innerHTML = "Tijeras"
    }
else if(IA_eleccion() == 3){
    var ganador = document.getElementById("ganador")
    var eleccion_IA = document.getElementById("eleccion_ia")
    var eleccion_J = document.getElementById("eleccion_j")
    ganador.innerHTML = "Jugador"
    eleccion_IA.innerHTML = "Papel"
    eleccion_J.innerHTML = "Tijeras"
    victorias++
    //localStorage.setItem("victorias_jugador", victorias)
    }
}