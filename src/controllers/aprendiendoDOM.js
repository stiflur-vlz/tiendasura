// PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS!!

//1. CONTROLANDO EL CONTENIDO!!
let etiquetaTitulo=document.getElementById("titulo")
console.log(etiquetaTitulo) //CONSULTA DE CONTENIDO!!
let etiquetaImagen=document.getElementById("foto")


//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA(elemento)!!
etiquetaImagen.textContent="HOLA MUNDO"

//1.2 MANIPULANDO EL SRC!!
etiquetaImagen.scr="https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck5.jpg?alt=media&token=5fd51045-c223-436e-97cc-16372b338fe0"

//2. CONTROLANDO EL DISEÑO(etiqueta)!!
let parrafo = document.getElementById("parrafo")
parrafo.textContent="Darksiders, originalmente Darksiders: Wrath of War, es un videojuego de acción desarrollado por Vigil Games y producido por THQ para PlayStation 3, Xbox 360 y Microsoft Windows, planeado en un principio el lanzamiento para febrero del 2009. Pero por una serie de problemas, lo retrasaron para enero del 2010. Fue presentado en el E3 de 2007, en la ciudad de Los Ángeles.​Una versión mejorada llamada Darksiders Warmastered Edition fue lanzada más tarde en 2016 para Xbox One, PS4, PC y WII U.En el diseño y elaboración del juego colabora el dibujante de cómics Joe Madureira (X-men, Battle Chasers o The Ultimates).1​ En el juego encarnamos a Guerra (War) uno de los cuatro jinetes del apocalipsis en un mundo postapocalíptico.En agosto de 2012 salió una secuela paralela en la que encarnamos a uno de los hermanos de Guerra, Muerte, que viene a defender a su hermano ante el consejo. Más tarde de igual manera salió una versión mejorada para esta secuela para PlayStation 4, Xbox One, PC y Wii U."

//2.1 AGREGANDO UN ESTILO (CLASS)!!
//TEXT-DANGER!!
parrafo.classList.add("text-danger","fs-1","text-center") //text-danger=texto rojo

etiquetaImagen.classList.add("d-block","mx-auto")   //centrar imagen

//2.2 QUITANDO O REMOVER UN ESTILO(clase)!!
parrafo.classList.remove("text-ranger")
