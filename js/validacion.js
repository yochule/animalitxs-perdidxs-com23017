


// validación de entradas basado en:
// https://www.youtube.com/watch?v=36S19D6kZkc&ab_channel=AlexCGDesign

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const consulta = document.getElementById("consulta")

const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("mensajeValidacion")

formulario.addEventListener("submit", e=>{
  e.preventDefault()
  let avisos = ""
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  let entrar = false
  parrafo.innerHTML = ""

  if (nombre.value.length < 6){
    avisos += `nombre: al menos 6 caracteres </br>`
    entrar = true
  }
  if (!regexEmail.test(email.value)){
    avisos += `falta email, o email no válido </br>`
    entrar = true
  }
  if (consulta.value.length < 10){
    avisos += `no escribiste ningún comentario? </br>`
    entrar = true
  }

  if (entrar){
    parrafo.innerHTML = avisos
  }
  else{
    parrafo.innerHTML = "datos enviados, muchas gracias"
  }
})

