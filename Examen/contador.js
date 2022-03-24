function contadores(contador_papel, contador_piedra, contador_tijeras) {
    var contador_papel = contador_papel
    var contador_piedra = contador_piedra
    var contador_tijeras = contador_tijeras
    if(contador_papel > contador_piedra || contador_papel > contador_tijeras) {
    var eleccion = "Papel"
    localStorage.setItem("preload_eleccion", contador_papel)
    }
    else if(contador_piedra > contador_papel || contador_piedra > contador_tijeras) {
    var eleccion = "Piedra"
    localStorage.setItem("preload_eleccion", eleccion)

    }
    else if(contador_tijeras > contador_papel || contador_tijeras > contador_piedra) {
    var eleccion = "Tijeras"
    localStorage.setItem("preload_eleccion", eleccion)
    }
}