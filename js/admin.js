
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

let peliculas=JSON.parse(localStorage.getItem('peliculas')) || []
let tableBody=document.querySelector('#table_body')

// let pelicula1 = new Pelicula (
//     1,
//     "ironman",
//     "ciencia-ficcion",
//     "Tony Stark es un inventor de armamento brillante que es secuestrado en el extranjero. Sus captores son unos terroristas que le obligan a construir una máquina destructiva pero Tony se construirá una armadura para poder enfrentarse a ellos y escapar",
//     "https://dossierinteractivo.com/wp-content/uploads/2021/05/iron-man-portada.jpg",
//     "si"
// )
//Primera pelicula cargada con hardcode
// peliculas.push(pelicula1)
// localStorage.setItem('peliculas',JSON.stringify(peliculas))

function agregarPelicula(e) {
    e.preventDefault()
    
    let id= new Date().getTime();
    let nombre=document.getElementById('nombre').value
    let cat=document.getElementById('cat').value
    let desc=document.getElementById('desc').value
    let imagen=document.getElementById('imagen').value
    let public=document.getElementById('public').value

peliculas.push(new Pelicula(id,nombre,cat,desc,imagen,public))
localStorage.setItem('peliculas',JSON.stringify(peliculas));
document.getElementById('formulario').reset ()
}

const cargarPelicula=()=>{
    peliculas.map(function (pelicula,index) {
        let tr=document.createElement('tr')
        let celda=`
        <th scope="row">${index + 1}</th> 
        <td>${pelicula.nombre}</td>
        <td>${pelicula.categoria}</td>
        <td>${pelicula.publicado}`

        tr.innerHTML=celda
        table_body.appendChild(tr)

    })
}


document.getElementById('formulario').addEventListener('submit',agregarPelicula);

cargarPelicula();