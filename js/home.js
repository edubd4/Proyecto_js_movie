/* let usuario=JSON.parse(localStorage.getItem('user')) || null
let contenedor_lista=document.getElementById('menu_lista')

if (usuario.rol==='admin') {
   let item=document.createElement('li')
   item.classList='nav-item'
   let opcion=`<a class="nav-link" aria-current="page" href="./admin.html">Administracion</a>`
item.innerHTML=opcion ;
contenedor_lista.appendChild(item);

} */

/*let usuario=JSON.parse(localStorage.getItem('user')) || null
let contenedor_lista=document.getElementById('menu_lista')

if (usuario.rol==='admin') {
   let item=document.createElement('li')
   item.classList='nav-item'
   let opcion=`<a class="nav-link" aria-current="page" href="./admin.html">Administracion</a>`
item.innerHTML=opcion ;
contenedor_lista.appendChild(item); 

}*/
 
/*codigo para el carousel de categorias*/
let fila = document.querySelector(`.contenedor-carousel`)
let peliculas = document.querySelector(`.pelicula`)

let flechaIzquierda = document.querySelector(`.flecha-izquierda`)
let flechaDerecha = document.querySelector(`.flecha-derecha`)

//Event listener para flecha derecha // 
flechaDerecha.addEventListener(`click`,() => {
   fila.scrollLeft += fila.offsetWidth;
  console.log(`hola`)
})

//Event listener para flecha Izquierda // 
flechaIzquierda.addEventListener(`click`,() => {
   fila.scrollLeft -= fila.offsetWidth;
   
}) 

/*------------------------------------------------------*/

/*codigo para el carousel de categorias-2*/
let fila2 = document.querySelector(`.contenedor-carousel-2`)
let peliculas2 = document.querySelector(`.pelicula-2`)

let flechaIzquierda2 = document.querySelector(`.flecha-izquierda-2`)
let flechaDerecha2 = document.querySelector(`.flecha-derecha-2`)

//Event listener para flecha derecha-2 // 
flechaDerecha2.addEventListener(`click`,() => {
   fila2.scrollLeft += fila2.offsetWidth;
  console.log(`hola`)
})
-2
//Event listener para flecha Izquierda-2 // 
flechaIzquierda2.addEventListener(`click`,() => {
   fila2.scrollLeft -= fila2.offsetWidth;
   
}) 

/*------------------------------------------------------*/

/*codigo para el carousel de categorias-3*/
let fila3 = document.querySelector(`.contenedor-carousel-3`)
let peliculas3 = document.querySelector(`.pelicula-3`)

let flechaIzquierda3 = document.querySelector(`.flecha-izquierda-3`)
let flechaDerecha3 = document.querySelector(`.flecha-derecha-3`)

//Event listener para flecha derecha-3 // 
flechaDerecha3.addEventListener(`click`,() => {
   fila3.scrollLeft += fila3.offsetWidth;
  console.log(`hola`)
})
-2
//Event listener para flecha Izquierda-3 // 
flechaIzquierda3.addEventListener(`click`,() => {
   fila3.scrollLeft -= fila3.offsetWidth;
   
}) 

/*------------------------------------------------------*/

/*codigo para el carousel de categorias-4*/
let fila4 = document.querySelector(`.contenedor-carousel-4`)
let peliculas4 = document.querySelector(`.pelicula-4`)

let flechaIzquierda4 = document.querySelector(`.flecha-izquierda-4`)
let flechaDerecha4 = document.querySelector(`.flecha-derecha-4`)

//Event listener para flecha derecha-4 // 
flechaDerecha4.addEventListener(`click`,() => {
   fila4.scrollLeft += fila4.offsetWidth;
  console.log(`hola`)
})
-2
//Event listener para flecha Izquierda-4 // 
flechaIzquierda4.addEventListener(`click`,() => {
   fila4.scrollLeft -= fila4.offsetWidth;
   
}) 

