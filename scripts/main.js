let miImage = document.querySelector('img#swap');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/a.jpg') {
      miImage.setAttribute('src','images/b.jpg');
    } else {
      miImage.setAttribute('src', 'images/a.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre){
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bio Life, ' + miNombre;
  }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.innerHTML = 'Bio Life,' + nombreAlmacenado;
}


miBoton.onclick = function() {
    estableceNombreUsuario();
}
