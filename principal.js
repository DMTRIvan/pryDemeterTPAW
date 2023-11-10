import productos from './producto.js';

console.log(productos)

// Identificamos el contenedor
const app = document.getElementById("app");

let renderizadoHTML = `<ul class = "productos">`

productos.libros.forEach(
    (numero)=>{
        renderizadoHTML += `
                    <article class="tarjeta_producto_catalogo">
                    <div class="item_catalogo">
                        <figure class="imagen_principal_productos">
                            <img src="${numero.imagen}" class="producto_imagen" alt="${numero.numero}">
                            <figcaption>${numero.nombre}</figcaption>
                        </figure>
                    </div>
                    </article>

        `
    }

)

renderizadoHTML += `</ul>`

app.innerHTML = renderizadoHTML