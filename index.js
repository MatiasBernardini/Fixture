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

function actulizarCarrito (carrito) {
    let divCarrito = document.querySelector ("#carrito");
    carrito.productos.forEach( FutCoin => {
        divCarrito.innerHTML += renderCard(FutCoin); 
    })
    divCarrito.innerHTML += `<h3>Precio Total: $  ${carrito.calcularTotal ()} </h3>`
};

function renovarStorage(){
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

window.addEventListener("DOMContentLoaded", (e) => {
    let storage = JSON.parse(localStorage.getItem ("carrito"));
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

let futCoin1 = new FutCoin (1, " 100 FutCoin", "futcoin.png", 1000 );

let futCoin2 = new FutCoin (2, " 500 FutCoin", "futcoin.png", 5000 );

let futCoin3 = new FutCoin (3, " 1000 FutCoin", "futcoin.png", 10000 );

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
    })
});

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