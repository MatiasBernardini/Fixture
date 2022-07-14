function changeDisplay (x) {
    document.getElementById(x).style.display = "flex";
};

function margenParaTexto (x)
{
    document.getElementById (x)
    eliminadoEnOctavos.className = "mt-4";
    eliminadoEnCuartos.className = "mt-4";
    eliminadoEnSemis.className = "mt-4";
    eliminadoEnFinal.className = "mt-4";
};

function botonParaAvanzar(x, y)
{
    x.addEventListener("click", () => { changeDisplay(y) } )

};

let mensajeEliminadoOctavos = margenParaTexto("textoEliminadoOctavos");

let mensajeEliminadoCuartos = margenParaTexto("textoEliminadoCuartos");

let mensajeEliminadoSemis = margenParaTexto("textoEliminadoSemis");
  
let mensajeEliminadoFinal = margenParaTexto("textoEliminadoFinal");

let botonFases = document.getElementById ("inlineRadio1 fases");

let botonOctavos = document.getElementById ("inlineRadio1 octavos");

let eliminadoOctavos = document.getElementById ("inlineRadio2 octavos");

let botonCuartos = document.getElementById ("inlineRadio1 cuartos");

let eliminadoCuartos = document.getElementById ("inlineRadio2 cuartos");

let botonSemis = document.getElementById ("inlineRadio1 semis");

let eliminadoSemis = document.getElementById ("inlineRadio2 semis");

let eliminadoFinal = document.getElementById ("inlineRadio2 final");

botonParaAvanzar(botonFases, "octavos");

botonParaAvanzar(eliminadoOctavos, "eliminadoEnOctavos");

botonParaAvanzar(botonOctavos, "cuartos");

botonParaAvanzar(eliminadoCuartos, "eliminadoEnCuartos");

botonParaAvanzar(botonCuartos, "semis");

botonParaAvanzar(eliminadoSemis, "eliminadoEnSemis");

botonParaAvanzar(botonSemis, "final");

botonParaAvanzar(eliminadoFinal, "eliminadoEnFinal");