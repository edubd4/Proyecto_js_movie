
class Pelicula{
    constructor(id, nombre, categoria, descripcion,imagen,publicado){
        this.id=id
        this.nombre=nombre
        this.categoria=categoria
        this.descripcion=descripcion
        this.imagen=imagen
        this.publicado=publicado
    }
}

let peliculas=JSON.parse(localStorage.getItem('peliculas'))
let tableBody=document.querySelector('#table_body')

function agregarPelicula(params) {
    
}

