let usuario=JSON.parse(localStorage.getItem('user')) || null
let contenedor_lista=document.getElementById('menu_lista')

if (usuario.rol==='admin') {
   let item=document.createElement('li')
   item.classList='nav-item'
   let opcion=`<a class="nav-link" aria-current="page" href="./admin.html">Administracion</a>`
item.innerHTML=opcion ;
contenedor_lista.appendChild(item);

}