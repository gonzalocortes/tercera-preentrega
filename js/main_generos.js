fetch('js/productos.json')
.then((response) => response.json())
.then((data) => {
    console.log(data);
    const resultado = document.getElementById("resultado");
    data.forEach(valor => {
        let comlumna = document.createElement("div");
        comlumna.className = "col-md-4";
        let div_padre = document.createElement("div");
        div_padre.className = "card m-2";
        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "card-header text-center";
        let div_hijo2 = document.createElement("div");
        div_hijo2.className = "card-body text-center";
        let parrafo = document.createElement("p");
        div_hijo1.innerHTML = `${valor.nombres} <b>($${valor.precios})</b>`;
        parrafo.innerText = valor.descripciones;
        let imagen = document.createElement("img");
        imagen.src = "imagen/" + valor.imagenes;
        imagen.alt = valor.nombre;
        imagen.width = 160;
        div_hijo2.appendChild(parrafo);
        div_hijo2.appendChild(imagen);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        comlumna.appendChild(div_padre);
        resultado.appendChild(comlumna);
    });
})