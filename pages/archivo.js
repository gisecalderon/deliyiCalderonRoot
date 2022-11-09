let carrito = [];

let btn_compra = document.querySelectorAll(".botonCompra");
console.log(btn_compra);

for(let boton of btn_compra){
    boton.addEventListener("click" , agregar_a_carrito);
}

function agregar_a_carrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    console.log(hijo);
    console.log(padre);
    console.log(abuelo);

    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let imagen_producto = abuelo.querySelector("img").src;

    console.log (nombre_producto);
    console.log (precio_producto);
    console.log(imagen_producto);

    let producto = {
        
        nombre: nombre_producto,
        precio: precio_producto,
        imagen: imagen_producto,
        cantidad: 1

    }
    
    carrito.push(producto);

    localStorage.setItem("h5","span");

    let nombre_primero = localStorage.getItem("h5");
    let precio_primero = localStorage.getItem("span");
    
    mostrar_carrito(producto);

    }
function mostrar_carrito (producto){
    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${producto.img}"></td>
                        <td>${producto.nombre}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.precio}</td>
                        <td></td>
                        <td><button class="btn btn-danger borrar_empanada">Borrar</td>`;
        
    console.log(fila);      
    let tabla = document.getElementById("tbody");
    tabla.append(fila);

    let btn_borrar = document.querySelectorAll(".borrar_empanada");

    for(let boton of btn_borrar){
        boton.addEventListener("click" , borrar_producto);
    }
    }

    function borrar_producto(e){

        let abuelo = e.target.parentNode.parentNode;

        abuelo.remove();
    }

    let btn_carrito = document.getElementById("mostrar_carrito");

    btn_carrito.addEventListener("click", function(){

        let carrito = document.getElementById("carrito");

        if(carrito.style.display != "none"){

            carrito.style.display = "none";
        }
        else{
            carrito.style.display = "flex";
        }

    } )



