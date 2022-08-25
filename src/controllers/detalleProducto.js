console.log("HELLO, I'M DETAILING THE PURCHASE")

//LLAMAR A LA MEMORIA!!

let producto=JSON.parse(localStorage.getItem("product"))  
console.log(producto)     

let carrito
if(JSON.parse(localStorage.getItem("carrito")!=null)){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length
}else{
    carrito=[]
}

            //REFERENCIAR LA IMAGEN DEL PRODUCTO!!

let foto=document.getElementById("imagenInfo")    
foto.src=producto.img   


let nombre=document.getElementById("nombreInfo")    
nombre.textContent=producto.nombre


let precio=document.getElementById("precioInfo")    
precio.textContent=producto.precio


let descripcion=document.getElementById("descripcionInfo")    
descripcion.textContent=producto.descripcion

//Traer el contenedor de estrellas
let contenedorEstrellas=document.getElementById("contenedorEstrellas")
console.log(contenedorEstrellas)
for(let i=1; i<=producto.popularidad;i++){
    
    let estrella=document.createElement("i")
    
    estrella.classList.add("bi","bi-star-fill","p-1","text-warning")
    contenedorEstrellas.appendChild(estrella)
}



/*let popularidad=document.getElementById("popularidadInfo")    
popularidad.textContent=producto.popularidad*/

let botonAgregar=document.getElementById("botonAgregarCarrito")
botonAgregar.addEventListener("click",function(){
    
    let cantidad=document.getElementById("cantidad").value
    producto.cantidad=cantidad
    
    console.log(carrito)
    carrito.push(producto)  //agrega un elemento a un arreglo
    
    
    //almacenar en memoria el carrito
    localStorage.setItem("carrito",JSON.stringify(carrito))

    //traigo la pildora
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length



})



//estrella    <i class="bi bi-star-fill"></i>
