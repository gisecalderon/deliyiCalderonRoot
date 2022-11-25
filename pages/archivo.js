let carrito = [];

let btn_compra = document.querySelectorAll(".botonCompra");
console.log(btn_compra);

for(let boton of btn_compra){
    boton.addEventListener("click" , agregar_a_carrito);
}

function agregar_a_carrito(e){

    let menor = e.target;
    let medio = menor.parentNode;
    let mayor = medio.parentNode;

    console.log(menor);
    console.log(medio);
    console.log(mayor);

    let nombre_producto = medio.querySelector("h5").textContent;
    let precio_producto = medio.querySelector("span").textContent;
    let imagen_producto = mayor.querySelector("img").src;

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

    localStorage.setItem("producto", JSON. stringify(producto));

    let nombre_primero = localStorage.getItem("h5");
    let precio_primero = localStorage.getItem("span");
    
    mostrar_carrito(producto);
    };

    let nombre = "Criolla";
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

        let mayor = e.target.parentNode.parentNode;

        mayor.remove();
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



