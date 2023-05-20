


// encabezado común:
document.getElementById("id-encabezado").innerHTML = `
    
        <a href="index.html" 
            <div class="logo">
                <img class="logo-img" src="img/pata-perro.png" alt="patita-perro" />
            </div>
        </a>

        <div>
          <nav>
            <a href="galeria.html">Buscar</a>
            <a href="refugios.html">Refugios</a>
            <a href="contacto.html">Contacto</a>
          </nav>
        </div>
          
        <a href="index.html" 
            <div class="logo">
              <img class="logo-img" src="img/pata-gato.png" alt="patita-perro" />
            </div>
        </a>

          `

// pie de página común:
document.getElementById("id-piedepagina").innerHTML = `
<div class="footer-contenedor-nosotros">
<div class="nombres">Jime-Naza-Mariano-Leila</div>
<div class="com">
  (Com23017 - 2023) <span class="copyleft">&#169;</span>
</div>
</div>
<div class="footer-contenedor-redes">
<a href="http://facebook.com"
  ><img src="img/icono-face.png" alt="facebook"
/></a>

<a href="mailto:"
  ><img src="img/icono-emailmes.png" alt="email-me"
/></a>

<a href="http://instagram.com"
  ><img src="img/icono-insta.png" alt="instagram"
/></a>
</div>
`


// para poner la fecha de la ultima actualizacion
var ahora = new Date();
var fechaCorta = ahora.toLocaleString("es-ar", {day:"2-digit", month: "short", year: "numeric"});
var fechaLarga = ahora.toLocaleDateString("es-ar", {weekday:"long", day:"numeric", month: "long", year: "numeric"});
console.log(fechaCorta)
console.log(fechaLarga)




// todo lo que sigue es para agregar una pequeña seccion de comentarios, usando un API-Rest desde jsonplaceholder

n = 3; // cantidad de comentarios mostrados
m = 20; // cantidad de comentarios disponibles, que tambien podría representar la longitud de la base de datos que tiene el placeholder

const arr = []; // así se va a llamar el array donde pongo los indices
do {const randomNumber = Math.floor(Math.random() * m) + 1
    if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
    }
} while (arr.length < n);


// los datos van a salir de json-placeholder
let url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then(response => response.json())
    .then(data => {
        texto = "<h2>algunos comentarios de nuestros visitantes:</h2><br>"
        for (i in arr){
            texto = texto + `
            
            <p class = "quiendijo">${data[i].email.split("@").shift()} dijo: </p>

            <p class= "quedijo">"${data[i].body}"</p>
            <br>
            `
        }
        document.getElementById("datos").innerHTML = texto
    })
    .catch(error => console.log("Ocurrió un error", error))