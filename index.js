function changeDisplay (x) {
    document.getElementById(x).style.display = 'flex';
};

function eliminarFases (x)
{
    document.getElementById (x)
    eliminadoEnOctavos.className = "mt-4";
    eliminadoEnCuartos.className = "mt-4";
    eliminadoEnSemis.className = "mt-4";
    eliminadoEnFinal.className = "mt-4";
};

function callEvent(x, y)
{
    x.addEventListener("click", () => { changeDisplay(y) } )

};

let mensajeEliminadoOctavos = eliminarFases("textoEliminadoOctavos");

let mensajeEliminadoCuartos = eliminarFases("textoEliminadoCuartos");

let mensajeEliminadoSemis = eliminarFases("textoEliminadoSemis");
  
let mensajeEliminadoFinal = eliminarFases("textoEliminadoFinal");

let botonFases = document.getElementById ("inlineRadio1 fases");

let botonOctavos = document.getElementById ("inlineRadio1 octavos");

let eliminadoOctavos = document.getElementById ("inlineRadio2 octavos");

let botonCuartos = document.getElementById ("inlineRadio1 cuartos");

let eliminadoCuartos = document.getElementById ("inlineRadio2 cuartos");

let botonSemis = document.getElementById ("inlineRadio1 semis");

let eliminadoSemis = document.getElementById ("inlineRadio2 semis");

let eliminadoFinal = document.getElementById ("inlineRadio2 final");

callEvent(botonFases, 'octavos');

callEvent(eliminadoOctavos, 'eliminadoEnOctavos');

callEvent(botonOctavos, 'cuartos');

callEvent(eliminadoCuartos, 'eliminadoEnCuartos');

callEvent(botonCuartos, 'semis');

callEvent(eliminadoSemis, 'eliminadoEnSemis');

callEvent(botonSemis, 'final');

callEvent(eliminadoFinal, 'eliminadoEnFinal');