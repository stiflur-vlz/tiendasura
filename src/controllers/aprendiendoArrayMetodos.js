/*let numeros=[25,60,80,100,25,60,80,100]

                //RECORRER UN ARREGLO!!
                 //ESCULCAR/OBTENER DE A 1 ELEMENTO!!

                //1.forEach!!
numeros.forEach(function(numero){
    console.log(numero)
})*/





/*let comidas=[
    {
        nombre:"callejero de la 10",
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosdeliciassvl.appspot.com/o/hamburguesa1.jpeg?alt=media&token=3613c234-a188-4d34-923e-217295e73c3c"
    },
    {
        nombre:"hamburguesa la 10",
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosdeliciassvl.appspot.com/o/hamburguesa2.jpeg?alt=media&token=b472e9bd-9a17-4484-8cd8-6a1a25a9f81f"
    },
    {
        nombre:"tocineta quesuda",
        foto:"https://firebasestorage.googleapis.com/v0/b/fotosdeliciassvl.appspot.com/o/hamburguesa3.jpeg?alt=media&token=90016fd5-67be-4584-b54b-24865f29f100"
    }
]*/


let fila=document.getElementById("fila")

                    // QUEMAR (HARD CORE) LA BASE DE TATOS!!
let productos=[

    {
    
    nombre:"shell & logo",
    fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck18.jpg?alt=media&token=7996a05b-eeb3-4aec-a636-40d9ba4d336b",
    "https://as01.epimg.net/meristation/imagenes/2019/10/17/noticias/1571310983_816560_1571311554_noticia_normal.jpg"],
    precio:11.33,
    popularidad:2,
    descripcion:"DARKSIDERS, originally Darksiders: Wrath of War, is an action video game developed by Vigil Games and produced by THQ for PlayStation 3, Xbox 360 and Microsoft Windows, originally scheduled for release in February 2009. But due to a series of problems, they delayed it for January 2010. It was presented at E3 2007, in the city of Los Angeles.An upgraded version called Darksiders Warmastered Edition was released later in 2016 for Xbox One, PS4, PC, and WII Comic artist Joe Madureira (X-men, Battle Chasers or The Ultimates) collaborates in the design and development of the game. In the game we embody War (War), one of the four horsemen of the apocalypse in a post-apocalyptic world.In August 2012, a parallel sequel came out in which we play one of Guerra's brothers, Muerte, who comes to defend his brother before the council. Later in the same way an improved version for this sequel came out for PlayStation 4, Xbox One, PC and Wii U.6"
    
    },
    
    {
            nombre:"Sweater & Diver",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck6.jpg?alt=media&token=60c68d92-5bcb-4b6b-b0b8-349fe2f84e8f","https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck15.jpg?alt=media&token=50de1327-a7c7-4299-b50c-807e0e9bb1e8"],
        precio:11.33,
        popularidad:1,
        descripcion:"DARKSIDERS, originally Darksiders: Wrath of War, is an action video game developed by Vigil Games and produced by THQ for PlayStation 3, Xbox 360 and Microsoft Windows, originally scheduled for release in February 2009. But due to a series of problems, they delayed it for January 2010. It was presented at E3 2007, in the city of Los Angeles.An upgraded version called Darksiders Warmastered Edition was released later in 2016 for Xbox One, PS4, PC, and WII Comic artist Joe Madureira (X-men, Battle Chasers or The Ultimates) collaborates in the design and development of the game. In the game we embody War (War), one of the four horsemen of the apocalypse in a post-apocalyptic world.In August 2012, a parallel sequel came out in which we play one of Guerra's brothers, Muerte, who comes to defend his brother before the council. Later in the same way an improved version for this sequel came out for PlayStation 4, Xbox One, PC and Wii U.6"
    },

    {
        nombre:"Bag & Cap",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck16.jpg?alt=media&token=4052e9ab-3d34-442d-918b-abd8f5bc271f","https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck14.jpg?alt=media&token=5986b063-9227-42e6-98dc-7416113c6a99"],
        precio:16.99,
        popularidad:5,
        descripcion:"DARKSIDERS, originally Darksiders: Wrath of War, is an action video game developed by Vigil Games and produced by THQ for PlayStation 3, Xbox 360 and Microsoft Windows, originally scheduled for release in February 2009. But due to a series of problems, they delayed it for January 2010. It was presented at E3 2007, in the city of Los Angeles.An upgraded version called Darksiders Warmastered Edition was released later in 2016 for Xbox One, PS4, PC, and WII Comic artist Joe Madureira (X-men, Battle Chasers or The Ultimates) collaborates in the design and development of the game. In the game we embody War (War), one of the four horsemen of the apocalypse in a post-apocalyptic world.In August 2012, a parallel sequel came out in which we play one of Guerra's brothers, Muerte, who comes to defend his brother before the council. Later in the same way an improved version for this sequel came out for PlayStation 4, Xbox One, PC and Wii U.6"
    },

    {
        nombre:"Diver & Sweatshirt",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck12.jpg?alt=media&token=3465b083-bea5-4873-b947-d930a749b546","https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck17.jpg?alt=media&token=a0f45321-2e14-4c04-882a-9d9aac4c4dd9"],
        precio:13.59,
        popularidad:4,
        descripcion:"DARKSIDERS, originally Darksiders: Wrath of War, is an action video game developed by Vigil Games and produced by THQ for PlayStation 3, Xbox 360 and Microsoft Windows, originally scheduled for release in February 2009. But due to a series of problems, they delayed it for January 2010. It was presented at E3 2007, in the city of Los Angeles.An upgraded version called Darksiders Warmastered Edition was released later in 2016 for Xbox One, PS4, PC, and WII Comic artist Joe Madureira (X-men, Battle Chasers or The Ultimates) collaborates in the design and development of the game. In the game we embody War (War), one of the four horsemen of the apocalypse in a post-apocalyptic world.In August 2012, a parallel sequel came out in which we play one of Guerra's brothers, Muerte, who comes to defend his brother before the council. Later in the same way an improved version for this sequel came out for PlayStation 4, Xbox One, PC and Wii U.6"
    },


    {
        nombre:"T-shirt & Shell2",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck9.jpg?alt=media&token=02019968-499a-4d68-b248-ce84b4b7ec65","https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck1.jpg?alt=media&token=673a9612-a786-4b21-89ff-0467a37dd793"],
        precio:19.60,
        popularidad:1,
        descripcion:"DARKSIDERS, originally Darksiders: Wrath of War, is an action video game developed by Vigil Games and produced by THQ for PlayStation 3, Xbox 360 and Microsoft Windows, originally scheduled for release in February 2009. But due to a series of problems, they delayed it for January 2010. It was presented at E3 2007, in the city of Los Angeles.An upgraded version called Darksiders Warmastered Edition was released later in 2016 for Xbox One, PS4, PC, and WII Comic artist Joe Madureira (X-men, Battle Chasers or The Ultimates) collaborates in the design and development of the game. In the game we embody War (War), one of the four horsemen of the apocalypse in a post-apocalyptic world.In August 2012, a parallel sequel came out in which we play one of Guerra's brothers, Muerte, who comes to defend his brother before the council. Later in the same way an improved version for this sequel came out for PlayStation 4, Xbox One, PC and Wii U.6"
    },


    {
        nombre:"Sweatshirt2 & Picture",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck7.jpg?alt=media&token=04a1fda0-e885-4e83-b8d3-87ea2cc368ed","https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck13.jpg?alt=media&token=5eafdbbc-5f6c-49fe-b4d0-64933dcb0bc4"],
        precio:6.12,
        popularidad:5,
        descripcion:"DARKSIDERS, originally Darksiders: Wrath of War, is an action video game developed by Vigil Games and produced by THQ for PlayStation 3, Xbox 360 and Microsoft Windows, originally scheduled for release in February 2009. But due to a series of problems, they delayed it for January 2010. It was presented at E3 2007, in the city of Los Angeles.An upgraded version called Darksiders Warmastered Edition was released later in 2016 for Xbox One, PS4, PC, and WII Comic artist Joe Madureira (X-men, Battle Chasers or The Ultimates) collaborates in the design and development of the game. In the game we embody War (War), one of the four horsemen of the apocalypse in a post-apocalyptic world.In August 2012, a parallel sequel came out in which we play one of Guerra's brothers, Muerte, who comes to defend his brother before the council. Later in the same way an improved version for this sequel came out for PlayStation 4, Xbox One, PC and Wii U.6"
    },

     {  nombre:"Xbox & Nintendo Switch",
        fotos:["https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6339/6339274_sd.jpg","https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5872/5872300_sd.jpg"],
        precio:36.25,
        popularidad:4,
        descripcion:"It is a group of mediators between Heaven and Hell who attribute the rapid onset of the Apocalypse and the final destruction of Earth to War. They are the ones who take away War's powers and send him to Earth.Characteristic:Play as two of the Four Horsemen of the Apocalypse (Death and War) and begin to understand their power and the havoc the Apocalypse has caused on planet Earth.Epic Universe: Featuring comic book legend Joe Madureira's unique style, unlike anything seen before.Player Choices and Customizations – Customize your experience with various sets of armor, weapons, and skill trees that allow players to create their own Death.Replayability – Explore a huge open world, complete dozens of side quests, and customize Death with a full leveling system, skill trees, and endless gear combinations.Walkthrough: Death is an agile character capable of incredible acrobatic feats that allow the player to explore the world in a way never seen before."
    },


    {   nombre:"Darksiders Collection",
        fotos:["https://s.pacn.ws/1500/10c/darksiders-16-scale-painted-statue-war-standard-edition-654121.1.jpg?v=qm6dp7&width=760","https://i.ytimg.com/vi/HE6R-3048lk/maxresdefault.jpg"],
        precio:22.65,
        popularidad:3,
        descripcion:"DARKSIDERS, originally Darksiders: Wrath of War, is an action video game developed by Vigil Games and produced by THQ for PlayStation 3, Xbox 360 and Microsoft Windows, originally scheduled for release in February 2009. But due to a series of problems, they delayed it for January 2010. It was presented at E3 2007, in the city of Los Angeles.An upgraded version called Darksiders Warmastered Edition was released later in 2016 for Xbox One, PS4, PC, and WII Comic artist Joe Madureira (X-men, Battle Chasers or The Ultimates) collaborates in the design and development of the game. In the game we embody War (War), one of the four horsemen of the apocalypse in a post-apocalyptic world.In August 2012, a parallel sequel came out in which we play one of Guerra's brothers, Muerte, who comes to defend his brother before the council. Later in the same way an improved version for this sequel came out for PlayStation 4, Xbox One, PC and Wii U.6"
    },


    {   nombre:"t-shirt & sports set",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck10.jpg?alt=media&token=fbc0e73c-e5b4-45d2-a3d8-c2c2fc6e374c","https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck11.jpg?alt=media&token=4b813fe2-2be2-4a24-be96-a924c287d6c6"],
        precio:22.65,
        popularidad:3,
        descripcion:"DARKSIDERS, originally Darksiders: Wrath of War, is an action video game developed by Vigil Games and produced by THQ for PlayStation 3, Xbox 360 and Microsoft Windows, originally scheduled for release in February 2009. But due to a series of problems, they delayed it for January 2010. It was presented at E3 2007, in the city of Los Angeles.An upgraded version called Darksiders Warmastered Edition was released later in 2016 for Xbox One, PS4, PC, and WII Comic artist Joe Madureira (X-men, Battle Chasers or The Ultimates) collaborates in the design and development of the game. In the game we embody War (War), one of the four horsemen of the apocalypse in a post-apocalyptic world.In August 2012, a parallel sequel came out in which we play one of Guerra's brothers, Muerte, who comes to defend his brother before the council. Later in the same way an improved version for this sequel came out for PlayStation 4, Xbox One, PC and Wii U.6"
    },


    {   nombre:"sweater2 & notebook",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck19.jpg?alt=media&token=d81c3624-68e1-4213-a858-b8bcecf0ae4a","https://firebasestorage.googleapis.com/v0/b/tiendasurasvl.appspot.com/o/darck2.jpg?alt=media&token=33161d4c-b9b9-436a-a356-c280ff271cbe"],
        precio:22.65,
        popularidad: 2,
        descripcion:"DARKSIDERS, originally Darksiders: Wrath of War, is an action video game developed by Vigil Games and produced by THQ for PlayStation 3, Xbox 360 and Microsoft Windows, originally scheduled for release in February 2009. But due to a series of problems, they delayed it for January 2010. It was presented at E3 2007, in the city of Los Angeles.An upgraded version called Darksiders Warmastered Edition was released later in 2016 for Xbox One, PS4, PC, and WII Comic artist Joe Madureira (X-men, Battle Chasers or The Ultimates) collaborates in the design and development of the game. In the game we embody War (War), one of the four horsemen of the apocalypse in a post-apocalyptic world.In August 2012, a parallel sequel came out in which we play one of Guerra's brothers, Muerte, who comes to defend his brother before the council. Later in the same way an improved version for this sequel came out for PlayStation 4, Xbox One, PC and Wii U.6"
    }

    
    
    
    ]




                //RECORRIENDO EL ARREGLO!!
productos.forEach(function(producto){

    console.log(producto)

                //CREANDO UN DIV DESDE JV

    let columna=document.createElement("div")
    columna.classList.add("col")   

                    //CREANDO UNA TARJETA!!

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","text-center","h-100")


                    //CREANDO UNA IMAGEN!!

    let imagen=document.createElement("img")         
    imagen.classList.add("img-fluid","w-100","p-5")  
    imagen.src=producto.fotos[0]

                //---DETECTANDO EVENTO DE MOUSE---\\

    imagen.addEventListener("mouseover",function(){
        imagen.src=producto.fotos[1]
    })     
    
        imagen.addEventListener("mouseleave",function(){
            imagen.src=producto.fotos[0]
        })


                    //CREAR NOMBRE A CADA IMAGEN!!

    let nombre=document.createElement("h3")  
    nombre.classList.add("fw-bold")
    nombre.textContent= producto.nombre  


                    //CREAR PRECIO!!
    let precio=document.createElement("h2")  
    precio.classList.add("fw-bold")
    precio.textContent="$"+ producto.precio


                   
    let popularidad=document.createElement("h4")  
    popularidad.classList.add("fw-bold", "d-none")
    popularidad.textContent= `${producto.popularidad}`

    let contenedorEstrellas=document.createElement("div")
console.log(contenedorEstrellas)
for(let i=1; i<=producto.popularidad;i++){
    
    let estrella=document.createElement("i")
    
    estrella.classList.add("bi","bi-star-fill","p-1","text-warning")
    contenedorEstrellas.appendChild(estrella)
}


                    //CREANDO LA DESCRIPCION!!
    
    let descripcion=document.createElement("p","ps-5")  
    descripcion.classList.add("text-danger","d-none")
    descripcion.textContent= producto.descripcion    






                    //DEFINIENDO PADRES E HIJOS!!

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)  
    tarjeta.appendChild(precio)
    tarjeta.appendChild(popularidad) 
    tarjeta.appendChild(contenedorEstrellas) 
    tarjeta.appendChild(descripcion)


})



                // QUEMAR (HARD CORE) LA BASE DE TATOS!!

