const rederProductos = () => {
    const libros = cargarProductosLS();
    let salida = "";

    for (let producto of libros) {
        salida += `<div class="col-md-4 mb-4">
        <a href="#" onClick="verProducto(${producto.id});"  class="text-decoration-none text-dark" title="ver ${producto.nombre}">
        <div class="card text-center border-0">
                   <img src="imagenes/${producto.imagen}" class="card-img-top"  alt="${producto.nombre}">
                   <div class="card-body">
                   <h3 class="card-title">${producto.nombre}</h3>
                  <p class="card-text">$${producto.precio}</p>
                </div>
             </div>
          </a>
     </div>`;
    }
    document.getElementById("libro").innerHTML = salida;
}

rederProductos();
renderBotonCarrito();







