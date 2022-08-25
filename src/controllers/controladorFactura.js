let carrito=JSON.parse(localStorage.getItem("carrito"))

//
let factura=document.getElementById("factura")

        //COMRPUEBO EL ESTADO DEL CARRITO DE COMPRAS!!
if(carrito==null){

    let fila=document.createElement("div")
    fila.classList.add("row","my-5","justify-content-center")

    let columna=document.createElement("div")
    columna.classList.add("col-12","col-md-4") //centrar carrito

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src="../../assets/img/carritoVacio.jpg"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent=" no ha realizado compras "

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)


    
 
}else{

             //RECORRO EL CARRITO!!

    carrito.forEach(function(producto){
        let fila=document.createElement("div")
        fila.classList.add("row","my-5","justify-content-center","mt-5","shadow","p-3")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12","col-md-5")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12","col-md-3","border-end","align-self-center")

        let columna3=document.createElement("div")
        columna3.textContent="subtotal"
        columna3.classList.add("col-12","col-md-3","align-self-center","fs-1","text-center")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.img

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center","text-muted")
        nombre.textContent=producto.nombre

        let precio=document.createElement("h4")
        precio.classList.add("text-center","mt-5")
        precio.textContent="Unit cost: " + producto.precio

        let cantidad=document.createElement("h2")
        cantidad.classList.add("text-center","mt-5")
        cantidad.textContent="Cost: " + producto.cantidad

        let subtotal=document.createElement("h2")
        subtotal.classList.add("fw-bold","text-center","bg-dark","text-white")
        console.log(producto.precio)
        console.log(producto.cantidad)
        console.log(producto.precio*producto.cantidad)
        
        let subtotalcalculado=producto.precio.split("$")[1]*producto.cantidad //split= permite identificar una cadena y separarlas
        console.log(subtotalcalculado)

        subtotal.textContent=subtotalcalculado



        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna3.appendChild(subtotal)

        fila.appendChild(columna1)
        fila.appendChild(columna2)
        fila.appendChild(columna3)
        factura.appendChild(fila)


    }) 

}


