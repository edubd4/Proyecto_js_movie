let usuario=JSON.parse(localStorage.getItem('user')) || null
let contenedor_lista=document.getElementById('menu_lista')

let contenedorTarjetas=document.getElementById("tarjetas_container")

let peliculas=JSON.parse(localStorage.getItem('peliculas')) ||[]

if (usuario.rol==='admin') {
   let item=document.createElement('li')
   item.classList='nav-item'
   let opcion=`<a class="nav-link" aria-current="page" href="./admin.html">Administracion</a>`
item.innerHTML=opcion ;
contenedor_lista.appendChild(item);

}
function cargarTarjetas() {
   contenedorTarjetas.innerHTML=" ";

   if(peliculas.length > 0){
      peliculas.map(peliculas=>{
      let div=document.createElement('div')
      div.classList="col-12 col-md-4 mb-3";

      let tarjeta=`<div class="card h-100">
      <img src="${peliculas.imagen}" class="card-img-top" alt="${peliculas.nombre}">
   <div class="card-body">
    <h5 class="${peliculas.nombre}">Card title</h5>
    <p class="card-text">${peliculas.descripcion}</p>
    <a href="#" class="btn btn-primary">Ver mas</a>
  </div>
  <div>`

      div.innerHTML=tarjeta
      contenedorTarjetas.appendChild(div)

   });
   }else{
      let div=document.createElement('div')
      let alerta=`<div class="alert-warning" role="alert">No hay peliculas disponibles
      <div>`
      div.innerHTML=alerta
      contenedorTarjetas.appendChild(div)

   }


   
}

cargarTarjetas();