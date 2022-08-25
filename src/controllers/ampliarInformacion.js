let contenedorProductos=document.getElementById("fila")

                //escuchar clic en la fila!!


let  informacionProducto={}                

contenedorProductos.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
        informacionProducto.nombre=(evento.target.parentElement.querySelector("h3").textContent)
        informacionProducto.precio=(evento.target.parentElement.querySelector("h2").textContent)
        informacionProducto.descripcion=(evento.target.parentElement.querySelector("P").textContent)
        informacionProducto.popularidad=(evento.target.parentElement.querySelector("h4").textContent)
        informacionProducto.img=(evento.target.parentElement.querySelector("img").src)

        
                        //GUARDANDO UN OBJETO EN MEMORIA!!

        
        localStorage.setItem("product",JSON.stringify(informacionProducto))
        

        window.location.href="./ampliarInfo.html"
        
    } 
})  
                 