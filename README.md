# aquí tiene que ir la descripción de la tarea

podéis visitar mi web en el siguiente enlace: https://llosefer.github.io/delaura/

<!-- 
Para que aparezca el nombre:

en github ya está solucionado, no aparecía porque en el html, al final de todo no se puso bien la ruta:

<script src="scripts/main.js"></script>

en github hay una carpeta que se llama scripts y dentro un fichero que se llama main.js, que es el que tiene todo el JS de jsbin.com


Para el tema de las imágenes, que al clickear cambien:

- bajé dos imágenes y les llamé "a" y "b" y las metí en GitHub en la carpeta images (tal como pide la tarea)
- después en el código JS de jsbin.com cambié las rutas:

ruta antigua: en JS Bin
                                              images/firefox-icon.png
                                              images/firefox-icon.png

ruta nueva:   en GitHub
                                             images/a.jpg
                                             images/b.jpg


Para que se cambien las imágenes hay que crear lo que se llama un Contenedor y eso se hace metiendo: <img src="images/a.jpg" alt="berries" id="swap">   (he puesto berries como texto alternativo pero se puede poner lo que se quiera)

esto mete la imagen "a.jpg" y le pone un identificador que le hemos llamado "swap" y en el script de JS ponemos:

let miImage = document.querySelector('img#swap');  
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/a.jpg') {
      miImage.setAttribute('src','images/b.jpg');
    } else {
      miImage.setAttribute('src', 'images/a.jpg');
    }
}

aquí en el fichero viejo ponía 'img' y ahora pone 'img más el identificador swap y se unen con la almohadilla. El resto queda igual pero cambiamos la ruta de las imágenes para que eh GitHub sepa que las imágenes están en la carpeta "Images" 
-->
