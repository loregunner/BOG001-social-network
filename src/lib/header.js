export const inicio = () => {
    const template1 =
  
      `<div class="container-firts">
    <div class="container logo-nav-container">
    <div class="container-logo">
    <div class="container-img-logo"><img class="logoImg" src="./logo1.png">
    <div class="name-logo">ShojoAnime</div>
    <div class="name-logo1">Social</div>
  </div>
  </div>
  
  <nav class="navigation">
  <ul>
  <li><a href="#/formulario">Login</a></li>
  <li><a href="#/formularioRegistro">Registro</a></li>
  </ul>
  </nav>
  </a>
  </div>`
  
    const vistaInicio = document.createElement("div")
    vistaInicio.innerHTML = template1
    return vistaInicio
  }
  
  export const centro = () => {
    const template2 =
      `<div class="container1">
  <img src="./Imageninicio.jpg" class="img">
  <img src="./corazon.svg" class="corazon">
  <h1>Tu portal de Anime Shojo</h1>
  <h2>Orientado a chicas jovenes. Las series Shojo son mangas hechos para publico femenino, muy románticos en
    general.</h2>
  </div>
  <img src="./usuario.svg" class="usuario">
  <img src="./libro.svg" class="libro">
  <img src="./telefono.svg" class="telefono">
  
  <h3 class="hL">Conoce nuevas personas</h3>
  <blockquote>
  <p class="p">Comparte tus gustos,<br>opiniones o simplemente pasa-<br> un buen rato con los demás.&nbsp</p>
  </blockquote>
  <h3 class="h5">Lee Recomendaciones</h3>
  <blockquote>
  <p class="p1">Conoce nuevos mangas y animes<br> que puedan ser de tu interés.</p>
  </blockquote>
  <h3 class="h6">Desde tu móvil o tablet</h3>
  <blockquote>
  <p2>Adaptado a todos los dispositivos<br> tablets y smartphone.</p2>
  </blockquote>
  <img src="./buscar.svg" class="lupa">
  <h3 class="h7"> Explora el universo del manganime</h3>
  <p class="p3">Busca entre animes, mangas, ovas y doramas.</p>
  
  <div class="imageGif">
  <img src="./tenor.gif" class="gif1">
  <img src="./gif2.gif" class="gif2">
  <img src="./gif1.gif" class="gif3">
  </div>`
    const vistaCentral = document.createElement("div")
    vistaCentral.innerHTML = template2
    return vistaCentral
  }