const rederProducto = () => {
    const libros = cargarProductos();
    let salida = `<div class="col-md-6 text-center">
        <img src="imagenes/${libros.imagen}" alt="${libros.nombre}" class="img-fluid" title="${libros.nombre}" />
    </div> 
    <div class="col-md-5">
      <h1>${libros.nombre}</h1>
      <h3>${libros.genero}</h3>
      <p>${libros.descripcion}</p>
      <p>$${libros.precio}</p>
      <p><a href="#" class="btn btn-warning" onClick="agregarAlCarrito(${libros.id}); title="Agregar al Carrito">Agregrar (+)</a></p>
    </div>`;

    document.getElementById("libro").innerHTML = salida;
}

rederProducto();
renderBotonCarrito();
