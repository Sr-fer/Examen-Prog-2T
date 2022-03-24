function main(){
    var victorias = localStorage.getItem("victorias_jugador")
    var contador_piedra = 0
    var contador_tijeras = 0
    var contador_papel = 0
    var rondas = localStorage.getItem("preload_rondas_local")
    var rondas_marca = document.getElementById("rondas_jugadas")


    var papel = document.getElementById("papel")
    papel.addEventListener("click", () =>{
        comprobador_papel(victorias)
        contadores(contador_piedra, contador_tijeras, contador_papel)
        contador_papel++
        rondas ++
        rondas_marca.innerHTML = rondas
        localStorage.setItem("preload_rondas", rondas)
    })
    var piedra = document.getElementById("piedra")
    piedra.addEventListener("click", () =>{
        comprobador_piedra(victorias)
        contadores(contador_piedra, contador_tijeras, contador_papel)
        contador_piedra++
        rondas ++
        rondas_marca.innerHTML = rondas
        localStorage.setItem("preload_rondas", rondas)
    })
    var tijeras = document.getElementById("tijera")
    tijeras.addEventListener("click", () =>{
        comprobador_tijeras(victorias)
        contadores(contador_piedra, contador_tijeras, contador_papel)
        contador_tijeras++
        rondas ++
        rondas_marca.innerHTML = rondas
        localStorage.setItem("preload_rondas_local", rondas)
    })
}
main()