const nombreAdeviner = Math.floor(Math.random()* 20) // nombre entre 0 et 20
console.log("le nombre a deviner est : ", nombreAdeviner)

var i = 0
function deviner() {
    i ++
    const nombre = parseInt(document.getElementById('nombre').value)
    if(!nombre) {
        return
    }
    const result = document.getElementById('result')
    if(nombre < nombreAdeviner) {
        result.innerHTML = "C'est plus ! 😢"
    } else if (nombre > nombreAdeviner ){
        result.innerHTML = "C'est moins ! 😭"
    } else {
        result.innerHTML = "BRAVO 😃, bien deviné🎉 apres "+i+" tentative"
    }
}
