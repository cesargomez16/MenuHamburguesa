import hamburgerMenu from "./menu-hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
/* import scrollTopButton from "./boton.js"; */
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", " dec 31 2024 23:59:59", "feliz cumpleaños 🤓 🤓");
  /* scrollTopButton("scroll-top-btn"); */

  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=BjYrguKBfCo&list=PLvq-jIkSeTUZ7FtDshwPGlZoLSWyR5ryt" target="_blank" rel="noopener">Ver video</a>`,

    `<iframe width="560" height="315" src="https://www.youtube.com/embed/BjYrguKBfCo?si=msiH-sn_JERbfBGi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmap",
    "(min-width:1024px)",

    `<a href="https://maps.app.goo.gl/T56ogWkUSA4QqAZ27" target="_blank" rel="noopener">Ver Mapa</a>`,

    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d276.57914028757267!2d-73.21734112333391!3d7.113917957324843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sco!4v1727488307711!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> `
  );
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
