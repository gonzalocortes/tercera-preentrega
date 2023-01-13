const libros = [
    { id: 1, nombre: "Charles Dickens", descripcion: "Tiempos difíciles es la décima novela escrita por Charles Dickens. Se publicó por primera vez en 1854 y transcurre en Inglaterra durante la primera industrialización. El libro examina la sociedad inglesa y satiriza las condiciones sociales y económicas de la época.", precio: 750, imagen: "libro1.jpg", genero: "Ficción" },
    { id: 2, nombre: "Mary Shelley", descripcion: "El argumento de El mortal inmortal relata la historia de un hombre llamado Winzy, quien bebe un misterioso brebaje preparado por su mentor, Cornelio Agrippa. Se trata de un elixir de la inmortalidad, la fuente de la vida eterna, fabricada a partir de la alquimia.", precio: 1200, imagen: "libro2.jpg", genero: "Ficción" },
    { id: 3, nombre: "Shirley Jackson", descripcion: "Me llamo Mary Katherine Blackwood. Tengo dieciocho años y vivo con mi hermana Constance. A menudo pienso que con un poco de suerte podría haber sido una mujer lobo, porque mis dedos medio y anular son igual de largos, pero he tenido que contentarme con lo que soy. No me gusta lavarme, ni los perros, ni el ruido.", precio: 1000, imagen: "libro3.png", genero: "terror,Ficción gotica,miterio" },
    { id: 4, nombre: "Bram Stoker", descripcion: "Drácula, es una novela de fantasía gótica escrita por Bram Stoker, publicada en 1897. ​​ Publicada en castellano por Ediciones Hymsa bajo la colección ‘La novela aventura’ en 1935, con portada de Juan Pablo Bocquet e ilustraciones de ‘Femenía’.", precio: "1050", imagen: "libro4.jpg", genero: "Terror,Ficción gótica" },
    { id: 5, nombre: "Fiódor Dostoyevski", descripcion: "¿Por qué hay que leer Crimen y castigo ? Pues porque Crimen y castigo es el producto de un genio cuyo mundo gira entre la muerte y la locura, porque Dostoievski era un tío que retornaba.", precio: "850", imagen: "libro5.jpg", genero: " Novela psicológica, Policial" },
    { id: 6, nombre: "Corín Tellado", descripcion: "El matrimonio de conveniencia de Rafael y Paula se fraguó debido a intereses económicos. A este mal comienzo se le suman problemas de convivencia, situaciones difíciles y grandes reproches... ¿Lograrán sobreponerse a todos estos obstáculos o dejarán que su matrimonio fracase?.", precio: 990, imagen: "libro6.jpg", genero: "Romantico" },
];

const guardarProductosLS = (libros) => {
    localStorage.setItem("libros", JSON.stringify(libros));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("libros")) || [];
}

guardarProductosLS(libros);