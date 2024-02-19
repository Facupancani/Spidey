var spidey = document.getElementById("spidey");
var gwen1 = document.getElementById("gwen1");
var miles1 = document.getElementById("miles1");
var red1 = document.getElementById("red1");
var red2 = document.getElementById("red2");
var duende = document.getElementById("duende");
var juego41 = document.getElementById("cardjuego1");
var juego42 = document.getElementById("cardjuego2");
var juego43 = document.getElementById("cardjuego3");
var logotipo = document.getElementById("logotipo");
var edifIzq = document.getElementById("edifIzq");
var edifMed = document.getElementById("edifMed");
var edifDer = document.getElementById("edifDer");


window.addEventListener("scroll", function () {
  let y = window.scrollY || window.pageYOffset;
  gwen1.style.top = 263 + y * 0.03 + "px";
  gwen1.style.left = 90 - y * 0.07 + "px";
  miles1.style.top = 206 + y * 0.1 + "px";
  miles1.style.left = 703 + y * 0.1 + "px";
  spidey.style.top = 278 - y * 0.4 + "px";
  red1.style.top = -1219 - y * 0.75 + "px";
  red1.style.rotate = y * 0.1 + "deg";
  red2.style.top = -1890 - y * 0.12 + "px";
  red2.style.rotate = -y * 0.11 + "deg";
  duende.style.top = -420 + y * 0.15 + "px";

  edifIzq.style.top = 20 + y * 0.15 + "px";
  edifIzq.style.left = -y * 0.15 + "px";
  edifDer.style.top = -726 + y * 0.2 + "px";
  edifDer.style.left = 906 + y * 0.2 + "px";
  var EdifscaleFactor = 1 -  y * 0.00006;
  edifMed.style.transform = "scaleY(" + EdifscaleFactor + ")";



  //** ANIMACION LOGOTIPO NAV */
  if (y < 280) {

    logotipo.style.top = 91 - y * 0.6 + "px";
    var scaleFactor = 1 - y * 0.0017;
    logotipo.style.transform = "scale(" + scaleFactor + ")";
  }

  if (y > 280) {

    logotipo.style.top = -85 + "px";
    var scaleFactor = 0.4;
    logotipo.style.transform = "scale(" + scaleFactor + ")";
  }
//* ANIMACION JUEGO SECCION 3 *//
if (y < 1200){
  var j1 = document.getElementById("contJuego1");
  var j2 = document.getElementById("contJuego2");
  var j3 = document.getElementById("contJuego3");
  j1.style.animation = "saleJuego 1.2s ease forwards";
  j2.style.animation = "saleJuego 1s ease forwards";
  j3.style.animation = "saleJuego 0.8s ease forwards";
}
  if(y > 1250){
    var j1 = document.getElementById("contJuego1");
    var j2 = document.getElementById("contJuego2");
    var j3 = document.getElementById("contJuego3");
    j1.style.animation = "entraJuego 0.8s ease forwards";
    j2.style.animation = "entraJuego 1.0s ease forwards";
    j3.style.animation = "entraJuego 1.2s ease forwards";
  }
 

  var despTop = 0;
  //* ANIMACION JUEGO SECCION 4 *//
  if (y > 1700 && y<2800 ){
    juego41.style.top = -430 + y * 0.07 + "px";
    juego42.style.top = -280 + y * 0.07 + "px";
    juego43.style.top = -120 + y * 0.07 + "px";
  }
  
  juego41.addEventListener("mouseover", function() {
    despTop2 = (-200 + y * 0.05) + 180;
    despTop3 = (-40 + y * 0.05) + 150;
    juego42.style.top = despTop2 + 'px';
    juego43.style.top = despTop3 + 'px';
  });
  juego41.addEventListener("mouseout", function() {
    juego42.style.top = -200 + y * 0.05 + "px";
    juego43.style.top = -40 + y * 0.05 + "px";
  });
  
  juego42.addEventListener("mouseover", function() {
    despTop1 = (-350 + y * 0.05) - 10;
    despTop3 = (-40 + y * 0.05) + 200;
    juego41.style.top = despTop1 + 'px';
    juego43.style.top = despTop3 + 'px';
  });
  juego42.addEventListener("mouseout", function() {
    juego41.style.top = -350 + y * 0.05 + "px";
    juego43.style.top = -40 + y * 0.05 + "px";
  });
  
  juego43.addEventListener("mouseover", function() {
    despTop1 = (-350 + y * 0.05) - 50;
    despTop2 = (-200 + y * 0.05) - 80;
    juego41.style.top = despTop1 + 'px';
    juego42.style.top = despTop2 + 'px';
  });
  juego43.addEventListener("mouseout", function() {
    juego41.style.top = -350 + y * 0.05 + "px";
    juego42.style.top = -200 + y * 0.05 + "px";
});



 //* ANIMACION JUEGO SECCION 6 *//
 if (y > 3500) {
  features1.classList.remove("oculto");
  features1.classList.add("visible");

  features2.classList.remove("visible");
  features2.classList.add("oculto");

  features3.classList.remove("visible");
  features3.classList.add("oculto");

  features4.classList.remove("visible");
  features4.classList.add("oculto");
}

if (y > 4300) {
  features1.classList.remove("visible");
  features1.classList.add("oculto");

  features2.classList.remove("oculto");
  features2.classList.add("visible");

  features3.classList.remove("visible");
  features3.classList.add("oculto");

  features4.classList.remove("visible");
  features4.classList.add("oculto");
}

if (y > 4700) {
  features1.classList.remove("visible");
  features1.classList.add("oculto");

  features2.classList.remove("visible");
  features2.classList.add("oculto");

  features3.classList.remove("oculto");
  features3.classList.add("visible");

  features4.classList.remove("visible");
  features4.classList.add("oculto");
}
if (y > 5200) {
  features1.classList.remove("visible");
  features1.classList.add("oculto");

  features2.classList.remove("visible");
  features2.classList.add("oculto");

  features3.classList.remove("visible");
  features3.classList.add("oculto");

  features4.classList.remove("oculto");
  features4.classList.add("visible");
}

});

// PARALLAX MOUSE

(function() {
  const elemParallax = document.querySelector("#parallaxMouse");

  if (elemParallax) {
    const _w = window.innerWidth / 2;
    const _h = window.innerHeight / 2;

    elemParallax.addEventListener("mousemove", parallax);

    function parallax(e) {
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${30 - (_mouseX - _w) * 0.01}% ${58 - (_mouseY - _h) * 0.0001}%`; // FONDO
      let _depth2 = `${100 - (_mouseX - _w) * 0.1}% ${50 - (_mouseY - _h) * 0.0001}%`; //
      let _depth3 = `${110 - (_mouseX - _w) * 0.01}% ${65 - (_mouseY - _h) * 0.01}%`; // HULK
      let _depth4 = `${0 - (_mouseX - _w) * 0.01}% ${45 - (_mouseY - _h) * 0.035}%`; // ELASTIC
      let _depth5 = `${20 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.001}%`;
      let _depth6 = `${70 - (_mouseX - _w) * 0.05}% ${10 - (_mouseY - _h) * 0.1}%`; // BLACK PANTHER
      let x = `${_depth6},${_depth5},${_depth4},${_depth3}, ${_depth2}, ${_depth1}`;
      elemParallax.style.backgroundPosition = x;
    }
  }
})();


/** ANIMACION MAS HEROES */

var miles8 = document.getElementById("miles8-2")
var peter8 = document.getElementById("peter8-3")
var gwen8 = document.getElementById("gwen8-1")
var bordeTop = document.getElementById("borderTop-bg-more-friends")
var bordeBottom = document.getElementById("borderBottom-bg-more-friends")
var contInfo = document.getElementById("moreInfo")
var imgHeroe = document.getElementById("imgHeroe")
var txtDiv = document.getElementById("textInfo")
var closeBtn = document.getElementById("closeBtn")


miles8.addEventListener("mouseover", function() {
  miles8.style.scale =1.4;
  peter8.style.scale =.9;
  peter8.style.filter = "blur(5px)";
  gwen8.style.scale =.9;
  gwen8.style.filter = "blur(5px)";
  bordeTop.style.background = 'rgb(48, 76, 113)';
  bordeBottom.style.background = 'rgb(48, 76, 113)';
});
miles8.addEventListener("mouseout", function() {
  miles8.style.scale =1;
  peter8.style.scale =1;
  peter8.style.filter = "none";
  gwen8.style.scale =1;
  gwen8.style.filter = "none";
  bordeTop.style.background = 'white';
  bordeBottom.style.background = 'white';
});

closeBtn.addEventListener("click", function() {
  contInfo.style.height = 0 + "px";
});
gwen8.addEventListener("click", function() {
  openInfoPanel();
  loadGwen();
});
peter8.addEventListener("click", function() {
  openInfoPanel();
  loadPeter();
});
miles8.addEventListener("click", function() {
  openInfoPanel();
  loadMiles();
});
peter8.addEventListener("mouseover", function() {
  miles8.style.scale =.9;
  miles8.style.filter = "blur(5px)";
  peter8.style.scale =1.4;
  gwen8.style.scale =.9;
  gwen8.style.filter = "blur(5px)";
  bordeTop.style.background = 'rgb(61, 108, 231)';
  bordeBottom.style.background = 'rgb(61, 108, 231)';
});
peter8.addEventListener("mouseout", function() {
  miles8.style.scale =1;
  miles8.style.filter = "none";
  peter8.style.scale =1;
  gwen8.style.scale =1;
  gwen8.style.filter = "none";
  bordeTop.style.background = 'white';
  bordeBottom.style.background = 'white';
});

gwen8.addEventListener("mouseover", function() {
  miles8.style.scale =.9;
  miles8.style.filter = "blur(5px)";
  peter8.style.scale =.9;
  peter8.style.filter = "blur(5px)";
  gwen8.style.scale =1.4;
  bordeTop.style.background = 'rgb(201, 43, 148)';
  bordeBottom.style.background = 'rgb(201, 43, 148)';
});
gwen8.addEventListener("mouseout", function() {
  miles8.style.scale =1;
  miles8.style.filter = "none";
  peter8.style.scale =1;
  peter8.style.filter = "none";
  gwen8.style.scale =1;
  bordeTop.style.background = 'white';
  bordeBottom.style.background = 'white';
});

function openInfoPanel() {
  contInfo.style.height = 800 + "px";
}
function loadPeter() {
  imgHeroe.src = 'resources/peter-parker.png';
  txtDiv.innerHTML = `
  <h1 class="subTitulo">Peter Parker</h1>
  <p class="text">también conocido como Spider-Man, es un personaje de
      ficción de Marvel Comics.
      Los poderes de Spider-Man son el resultado de una picadura
      de araña radiactiva
      que le otorgó habilidades especiales. Sus poderes incluyen:
  </p>
  <ol>
      <li>Agilidad sobrehumana: Spider-Man tiene una agilidad
          extraordinaria que le permite
          moverse de manera rápida y ágil, saltar grandes
          distancias y realizar acrobacias asombrosas.</li>
      <li>Fuerza sobrehumana: Aunque no es tan fuerte como algunos
          de los superhéroes más
          poderosos de Marvel, Spider-Man tiene una fuerza
          considerable que le permite levantar
          objetos pesados y enfrentarse a enemigos formidables.</li>
      <li>Sentido arácnido: Spider-Man tiene un sentido arácnido
          que le permite detectar el peligro antes de que ocurra.
          Puede reaccionar instintivamente a las amenazas, lo que
          lo hace extremadamente difícil de sorprender.</li>
      <li>Trepar paredes: Spider-Man puede adherirse a las paredes
          y techos, lo que le permite moverse de manera vertical y
          colgarse boca abajo.</li>
      <li>Disparadores de telaraña: Peter Parker ha creado
          lanzadores de telarañas especiales que le permiten
          disparar y controlar telarañas. Utiliza estas telarañas
          para balancearse entre edificios, atrapar a los villanos
          y crear redes para inmovilizar a los oponentes.</li>
  </ol>
  <p>Estos son los poderes principales de Spider-Man en los
      cómics y en varias adaptaciones cinematográficas y
      televisivas. Cabe destacar que a lo largo de la historia de
      los cómics, Spider-Man ha adquirido o perdido temporalmente
      otros poderes y habilidades debido a diferentes tramas y
      eventos.t</p>`
}
function loadGwen() {
  imgHeroe.src = 'resources/gwen-stacy.png';
  txtDiv.innerHTML = `
  <h1 class="subTitulo">Gwen Stacy</h1>
  <p class="text">también conocida como Spider-Woman o Spider-Gwen, es un personaje de cómic de Marvel Comics que proviene de una realidad alternativa en el multiverso de Spider-Man. Sus poderes son en gran medida similares a los de otros Spider-Personajes, pero Gwen tiene algunas variaciones específicas. Los poderes de Spider-Gwen incluyen:
  </p>
  <ol>
      <li>Agilidad sobrehumana: Gwen Stacy posee una agilidad extraordinaria que le permite moverse de manera rápida y realizar acrobacias impresionantes.</li>
      <li>Fuerza sobrehumana: Al igual que otros Spider-Personajes, Gwen tiene una fuerza considerable que le permite levantar objetos pesados y luchar contra enemigos formidables.</li>
      <li>Sentido arácnido: Spider-Gwen también posee el sentido arácnido, que le permite detectar el peligro antes de que ocurra, similar a Peter Parker y otros Spider-Men.</li>
      <li>Trepar paredes: Al igual que otros Spider-Personajes, Gwen Stacy puede adherirse a las paredes y techos, lo que le permite moverse de manera vertical y colgarse boca abajo.</li>
      <li>Disparadores de telaraña: Spider-Gwen utiliza lanzadores de telarañas para balancearse entre edificios, atrapar a los villanos y crear redes para inmovilizar a los oponentes.</li>
  </ol>
  <p>En resumen, Spider-Gwen posee habilidades arácnidas similares a las de otros personajes de Spider-Man, pero su traje y su identidad están diseñados de manera diferente, y proviene de una realidad alternativa donde Gwen Stacy adquiere los poderes de Spider-Man en lugar de Peter Parker. El personaje ha ganado popularidad en los cómics y se ha convertido en un ícono por derecho propio.</p>`
}

function loadMiles() {
  imgHeroe.src = 'resources/miles-morales.png';
  txtDiv.innerHTML = `
  <h1 class="subTitulo">Miles Morales</h1>
  <p class="text">Sus poderes son en gran medida similares a los de Peter Parker, el Spider-Man original, pero Miles tiene algunas diferencias notables. Los poderes de Miles Morales incluyen:
  </p>
  <ol>
      <li>Agilidad sobrehumana: Miles posee una agilidad extraordinaria que le permite moverse de manera rápida y realizar acrobacias impresionantes, al igual que Peter Parker.</li>
      <li>Sentido arácnido: Al igual que Peter Parker, Miles Morales tiene un sentido arácnido que le permite detectar el peligro antes de que ocurra. Esto le proporciona una ventaja en la lucha contra los criminales.</li>
      <li>Trepar paredes: Miles puede adherirse a las paredes y techos, lo que le permite moverse de manera vertical y colgarse boca abajo, al igual que otros Spider-Men.</li>
      <li>Camuflaje arácnido: Una de las características distintivas de Miles Morales es su habilidad de camuflaje arácnido. Puede volverse completamente invisible para el ojo humano durante un corto período de tiempo. Esta habilidad le proporciona una ventaja estratégica en situaciones de combate y sigilo.</li>
      <li>Descarga venenosa: En algunas versiones de los cómics y adaptaciones, Miles Morales también puede liberar una "descarga venenosa" que es una forma de energía bioeléctrica. Esta habilidad puede usarse en combate o para desactivar dispositivos electrónicos.</li>
  </ol>
  <p>Estos son los poderes principales de Miles Morales en los cómics y en las adaptaciones cinematográficas y de videojuegos. El personaje de Miles Morales ha ganado popularidad y es conocido por su origen diverso y sus habilidades únicas en el universo de Spider-Man.</p>`
}
  

//** ABRIR Y CERRAR MENU DESPLEGABLE */
var modo = true;
function state(){
    var barra1 = document.getElementById("rec1");
    var barra2 = document.getElementById("rec2");
    var barra3 = document.getElementById("rec3");
    var menu = document.getElementById("menu");
    var cat1 = document.getElementById("cat1");
    var cat2 = document.getElementById("cat2");
    var cat3 = document.getElementById("cat3");

    if(modo){
        barra1.style.animation = 'rota1 .5s ease forwards';
        barra2.style.animation = 'rota2 .5s ease forwards';
        barra3.style.animation = 'rota3 .5s ease forwards';
        abrirMenu(menu, cat1, cat2, cat3);
    }else{
        barra1.style.animation = 'desrota1 .5s ease forwards';
        barra2.style.animation = 'desrota2 .5s ease forwards';
        barra3.style.animation = 'desrota3 .5s ease forwards';
        cerrarMenu(menu, cat1, cat2, cat3);
    }
    modo = !modo;
}


function abrirMenu(menu, cat1, cat2, cat3){
    menu.style.animation = 'abrirMenu .5s ease forwards'
    menu.style.opacity = "1";
    cat1.style.animation = 'entraCat 0.5s ease forwards'
    cat2.style.animation = 'entraCat 1s ease forwards'
    cat3.style.animation = 'entraCat 1.5s ease forwards'
}
function cerrarMenu(menu, cat1, cat2, cat3){
    menu.style.animation = 'cerrarMenu .5s ease forwards'
    menu.style.opacity = "0";
    cat1.style.animation = 'saleCat 3.0s ease forwards'
    cat2.style.animation = 'saleCat 3.0s ease forwards'
    cat3.style.animation = 'saleCat 3.0s ease forwards'
}



function animarHero(){
  edifDer.style.animation = 'animarEdifDer 1s ease-out';
  edifIzq.style.animation = 'animarEdifizq 1s ease-out';
  edifMed.style.animation = 'animarmedio 0.9s ease-out';
  
  spidey.style.animation = 'animarHeromedio 0.5s ease-out';
  red1.style.animation = 'animarHeromedio 0.5s ease-out';
  gwen1.style.animation = 'animarizq 0.9s ease-out';
  miles1.style.animation = 'animar 0.8s ease-out';
  red2.style.animation = 'animar 0.8s ease-out';

}

/* ANIMACION CARGA */
const barra = document.getElementById("barra-carga");

if (overlayCarga) {
  const overlay = document.getElementById("overlayCarga");

  function startLoading() {
    let percentage = 0;
    const interval = 50; 

    const updateLoader = setInterval(() => {
      percentage++;

      if (percentage >= 100) {
        clearInterval(updateLoader);
        setTimeout(function() {
          overlay.style.opacity = '0';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
          
          animarHero();

          // Después de que la opacidad sea 0, oculta el overlay
          setTimeout(function() {
            overlay.style.display = 'none';
          }, 500); 
        }, 800); 
      }
    }, interval);
  }


  startLoading();
} 