'use strict'

window.addEventListener('load', () => {

    function intervalo() {
        var tiempo = setInterval(function () {
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }
        }, 500);
        return tiempo;
    }

    var tiempo = intervalo();

    var start = document.querySelector("#start");
    var stop = document.querySelector("#stop");

    start.addEventListener("click", function(){
        console.log("Has iniciado el intervalo");
        intervalo();
    });

    stop.addEventListener("click", function(){
        console.log("Has finalizado el intervalo");
        clearInterval(tiempo);
    });

});