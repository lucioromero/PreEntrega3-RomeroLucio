// CLASS

class Destino{
    constructor(nombre, ciudad, pais, precio){
        this.nombre = nombre
        this.ciudad = ciudad
        this.pais = pais
        this.precio = precio
    }
}

// OBJECTS

const tandil = new Destino("Tandil", "Buenos Aires", "Argentina", 35000)
const bariloche = new Destino("Bariloche", "Rio Negro", "Argentina", 52000)
const carlosPaz = new Destino("Villa Carlos Paz", "Córdoba", "Argentina", 46000)
const fortaleza = new Destino("Fortaleza", "Ceará", "Brasil", 87000)
const porto = new Destino("Porto Alegre", "Rio Grande", "Brasil", 92000)
const copacabana = new Destino("Copacabana", "Rio de Janeiro", "Brasil", 81500)
const santaMarta = new Destino("Santa Marta", "Magdalena", "Colombia", 78000)
const cartagena = new Destino("Cartagena", "Bolivar", "Colombia", 71000)
const bogota = new Destino("Bogota", "Antioquia", "Colombia", 65000)

// ARRAY

const ciudades = [tandil, bariloche, carlosPaz, fortaleza, porto, copacabana, santaMarta, cartagena, bogota]

// ARRAY FILTERS

const ciudadesArg = ciudades.filter((city) => { return city.pais == "Argentina"})
const ciudadesBra = ciudades.filter((city) => { return city.pais == "Brasil"})
const ciudadesCol = ciudades.filter((city) => { return city.pais == "Colombia"})

// DOM ELEMENTS

const btnArg = document.querySelector("#arg")
const btnBra = document.querySelector("#bra")
const btnCol = document.querySelector("#col")
const tema = document.querySelector("#tema")
const body = document.body
const card = document.querySelectorAll(".card")

// EVENTS

btnArg.addEventListener("click", mostrarDestinosArg)
btnBra.addEventListener("click", mostrarDestinosBra)
btnCol.addEventListener("click", mostrarDestinosCol)
tema.addEventListener("click", cambiarTema)

// FUNCTIONS

function mostrarDestinosArg(){
    if(btnArg.innerText == "Ver Destinos"){
        btnArg.innerText = "Ocultar"
        let br = document.createElement("br")
        listaArg.append(br)
            for(destino of ciudadesArg){
                let item = document.createElement("li")
                item.innerText = `${destino.nombre}, $${destino.precio}`
                listaArg.append(item)
            }       
    } else {
        btnArg.innerText = "Ver Destinos"
        listaArg.innerHTML = ""
    }   
}

function mostrarDestinosBra(){
    if(btnBra.innerText == "Ver Destinos"){
        btnBra.innerText = "Ocultar"
        let br = document.createElement("br")
        listaBra.append(br)
            for(destino of ciudadesBra){
                let item = document.createElement("li")
                item.innerText = `${destino.nombre}, $${destino.precio}`
                listaBra.append(item)   
            }     
    } else {
        btnBra.innerText = "Ver Destinos"
        listaBra.innerHTML = ""
    }   
}

function mostrarDestinosCol(){
    if(btnCol.innerText == "Ver Destinos"){
        btnCol.innerText = "Ocultar"
        let br = document.createElement("br")
        listaCol.append(br)
            for(destino of ciudadesCol){
                let item = document.createElement("li")
                item.innerText = `${destino.nombre}, $${destino.precio}`
                listaCol.append(item)   
            }     
    } else {
        btnCol.innerText = "Ver Destinos"
        listaCol.innerHTML= ""
    }   
}

function cambiarTema(){
    body.classList.toggle("dark-mode")

    if(body.classList.contains("dark-mode")){
        tema.innerText = "Modo claro"
        card.forEach(card => card.classList.add("card-dark"))
    } else {
        tema.innerText = "Modo oscuro"
        card.forEach(card => card.classList.remove("card-dark"))
    }    
}





