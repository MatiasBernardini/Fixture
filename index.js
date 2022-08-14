// FUNCIONES
function changeDisplay (id) {
    document.getElementById(id).style.display = "flex";
};

function margenParaTexto (idParaMargen)
{
    document.getElementById (idParaMargen)
    eliminadoEnOctavos.className = "mt-4";
    eliminadoEnCuartos.className = "mt-4";
    eliminadoEnSemis.className = "mt-4";
    eliminadoEnFinal.className = "mt-4";
};

function botonParaAvanzar(idBoton, idDelIndex)
{
    idBoton.addEventListener("click", () => { changeDisplay(idDelIndex) } )

};

function renderCard (FutCoin){
    let cardRendered = `
    <div class="container card m-4" style="width: 18rem;">
        <img class="card-img-top" src="./img/${FutCoin.imagen}" alt="Card image cap">
        <div class="card-body" id=tarjetaFutCoin>
            <h5 class="card-title"> ${FutCoin.id}.${FutCoin.nombre}</h5>
            <p class="card-text">$ ${FutCoin.precio}</p>
        <a href="#" class="btn btn-primary botonDeCompra" id="${FutCoin.id}" >Agregar al Carrito <i class="fa-solid fa-cart-plus"></i></a>
        </div>
    </div>
    `;
    return cardRendered;
};

function limpiarCarrito () {
    let divCarrito = document.querySelector ("#carrito");
    divCarrito.innerHTML = "";
};

let totalCarrito;

function actulizarCarrito (carrito) {
    let divCarrito = document.querySelector ("#carrito");
    carrito.productos.forEach( FutCoin => {
        divCarrito.innerHTML += renderCard(FutCoin); 
    })

    totalCarrito = carrito.calcularTotal();

    valorXcien = totalCarrito * 10;

    divCarrito.innerHTML += `<h3>Precio Total: $  ${totalCarrito} </h3>
                             <button id="botonComprarFutcoin" class="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                             data-target="#comprarModal">Comprar</button>
                            `
    let botonApuesta = document.querySelector ("#botonApuesta");

    botonApuesta.setAttribute("placeholder", valorXcien);
};

function renovarStorage(){
    sessionStorage.removeItem("carrito");
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
};

function obtenerComentario () {
    fetch ("data.json")
    .then ( (response) => {
        console.log (response);
        return response.json ();
    })
    .then ( (data) => {
        console.log (data);
        console.log (data [0].body);

        data.forEach ( (comentario) => {
            let columna = document.createElement ("div")   
            columna.className = "col-md-3"
            columna.innerHTML = ` 
                                 <h6>Nombre: ${comentario.nombre} </h>
                                 <p>edad: ${comentario.edad} </p>
            `
            contenedorComentarios.appendChild (columna)
        })
    });
};

function mostrarAlertBotonFixture () {
    Swal.fire({
        icon: "success",
        title: "Su fixture ya ha sido guardado",
        text: "¡Gracias por confiar en nosotros y muy buena suerte!",
      })
};

// CARRITO

window.addEventListener("DOMContentLoaded", (e) => {
    let storage = JSON.parse(sessionStorage.getItem ("carrito"));
    let carritoGuardado = new Carrito (storage.id, storage.productos);
    storage.productos.forEach(FutCoin => {
        carritoGuardado.productos.push(FutCoin);
    })
    limpiarCarrito();
    actulizarCarrito(carritoGuardado);
});

class FutCoin {
    constructor (id, nombre, imagen, precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
};

class Carrito {
    constructor (id,){
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++){
            total = total + this.productos [i].precio;
        }
        return total;
    }

};

let catalogoFutCoin = [];

let futCoin1 = new FutCoin (1, " 1.000 FutCoin", "futcoin.png", 1000 );

let futCoin2 = new FutCoin (2, " 5.000 FutCoin", "futcoin.png", 5000 );

let futCoin3 = new FutCoin (3, " 10.000 FutCoin", "futcoin.png", 10000 );

catalogoFutCoin.push (futCoin1);
catalogoFutCoin.push (futCoin2);
catalogoFutCoin.push (futCoin3);

let cardsDiv = document.querySelector ("#cards");

catalogoFutCoin.forEach ( FutCoin => {
    cardsDiv.innerHTML += renderCard (FutCoin);
}
);

let carrito = new Carrito (1);
 
let botones = document.querySelectorAll (".botonDeCompra");

let arrayDeBotones = Array.from (botones);

arrayDeBotones.forEach ( boton => {
    boton.addEventListener ( "click", (e) => {
        let productoSeleccionado = catalogoFutCoin.find (FutCoin => FutCoin.id == e.target.id);
        carrito.productos.push(productoSeleccionado);
        limpiarCarrito();
        actulizarCarrito(carrito);
        renovarStorage();

        Toastify({
            text: "Producto Agregado al Carrito",
            className: "info",
            style: {
              background: "#a4344a",
            }
          }).showToast();
    })
});

// VARIABLES 

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

margenParaTexto("textoEliminadoOctavos");

margenParaTexto("textoEliminadoCuartos");

margenParaTexto("textoEliminadoSemis");
  
margenParaTexto("textoEliminadoFinal");

const contenedorComentarios = document.getElementById ("comentarios");

obtenerComentario ();

const alertaDeBotonFinalizarFixtured = document.getElementById ("botonFinalizarFixture");
alertaDeBotonFinalizarFixtured.onclick = mostrarAlertBotonFixture