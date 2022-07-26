// PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS!!

//1. CONTROLANDO EL CONTENIDO!!
let etiquetaTitulo=document.getElementById("titulo")
console.log(etiquetaTitulo) //CONSULTA DE CONTENIDO!!
let etiquetaImagen=document.getElementById("foto")


//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA(elemento)!!
etiquetaTitulo.textContent="HOLA MUNDO"

//1.2 MANIPULANDO EL SRC!!
etiquetaImagen.scr="https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck5.jpg?alt=media&token=5fd51045-c223-436e-97cc-16372b338fe0"
