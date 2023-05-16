


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
