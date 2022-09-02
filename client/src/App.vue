<template>
  <div id="app">
    <div>
      <a target="_self" href="/">
      <img src="./components/imagenes/logo.jpg" alt="foto de frutas" style="width:80px">
      </a>
    </div>

    <div class="home-page">
      <input class="seach_box" type="text" placeholder="Seach">
      <ul id="nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Register">Register</router-link></li>
        <li><router-link to="/Menu">Categoria</router-link></li>
        <li><router-link to="/menu_section/frutas">Producto</router-link></li>
        <li><router-link to="/menu_section/product">Pedido</router-link></li>
        <li><router-link to="/contact">Contacto</router-link></li>
        <p class="navegador"></p>
      </ul>
    </div>
  <router-view/>

    <footer class="footer-distributed">
      <div class="footer-left">
        <!-- buttons -->
        <div class="footer-buttons">
          <!-- <router-link to="/footer/privacidad">Contacto</router-link>ddd -->
          <router-link to="/footer/privacidad">
              <button class="button">PRIVACIDAD</button></router-link>
          <router-link to="/footer/termino_de_uso">
              <button class="button">TERMINOS DE USO</button></router-link>
          <router-link to="/footer/aviso_legal">
              <button class="button">AVISO LEGAL</button></router-link>
          <router-link to="/footer/empleo">
              <button class="button">EMPLEO</button></router-link>
        </div>

      <!-- icons social media -->
      <div class="footer-icons">
        <svg height="30" width="30">
          <a href="https://www.linkedin.com" tabindex="0" role="link">
            <path fill="white" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z">
            </path>
          </a>
        </svg>

        <svg height="30" width="30">
            <a href="https://twitter.com" tabindex="0" role="link">
            <path fill="white" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z">
            </path>
            </a>
          </svg>

        <svg height="30" width="30">
          <a href="https://instagram.com" tabindex="0" role="link">
            <path fill="white" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z">
            </path>
          </a>
        </svg>
      </div>
    </div>

    <div class="footer-center">
      <div>
        <svg height="30" width="30">
          <path fill="white" d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
        </svg>
        <p>
          <span>C/Molinos de cal, 38. La Laguna.</span>Tenerife. Islas Canarias. España
        </p>
      </div>
      <div>
        <svg height="30" width="30">
          <path fill="white" d="M17.453,12.691V7.723 M17.453,12.691V7.723 M1.719,12.691V7.723 M18.281,12.691V7.723 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484 M7.309,13.312h5.383c0.229,0,0.414-0.187,0.414-0.414s-0.186-0.414-0.414-0.414H7.309c-0.228,0-0.414,0.187-0.414,0.414S7.081,13.312,7.309,13.312 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M16.625,6.066h-1.449V3.168c0-0.228-0.186-0.414-0.414-0.414H5.238c-0.228,0-0.414,0.187-0.414,0.414v2.898H3.375c-0.913,0-1.656,0.743-1.656,1.656v4.969c0,0.913,0.743,1.656,1.656,1.656h1.449v2.484c0,0.228,0.187,0.414,0.414,0.414h9.523c0.229,0,0.414-0.187,0.414-0.414v-2.484h1.449c0.912,0,1.656-0.743,1.656-1.656V7.723C18.281,6.81,17.537,6.066,16.625,6.066 M5.652,3.582h8.695v2.484H5.652V3.582zM14.348,16.418H5.652v-4.969h8.695V16.418z M17.453,12.691c0,0.458-0.371,0.828-0.828,0.828h-1.449v-2.484c0-0.228-0.186-0.414-0.414-0.414H5.238c-0.228,0-0.414,0.186-0.414,0.414v2.484H3.375c-0.458,0-0.828-0.37-0.828-0.828V7.723c0-0.458,0.371-0.828,0.828-0.828h13.25c0.457,0,0.828,0.371,0.828,0.828V12.691z M7.309,13.312h5.383c0.229,0,0.414-0.187,0.414-0.414s-0.186-0.414-0.414-0.414H7.309c-0.228,0-0.414,0.187-0.414,0.414S7.081,13.312,7.309,13.312M7.309,15.383h5.383c0.229,0,0.414-0.187,0.414-0.414s-0.186-0.414-0.414-0.414H7.309c-0.228,0-0.414,0.187-0.414,0.414S7.081,15.383,7.309,15.383 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555"></path>
        </svg>
        <p>+34 699356895</p>
      </div>

      <div>
        <svg height="30" width="30">
          <path fill="white" d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
        </svg>
        <p><a href="mailto:support@company.com">support@vilaflorcompany.com</a></p>
      </div>

    </div>

    <div class="footer-right">
      <p class="footer-company-about">
        <span>Sobre la empresa</span>
        El supermercado Vilaflor fue fundado en 2022 y tiene su sede en Tenerife, España. Vilaflor es una de las primeras empresas de distribución en España peninsular en introducir productos agrícolas frescos en los supermercados modernos.
      </p>
    </div>

    <div class="footer-copyright">
      <br><p>
      © 2022 Vilaflor Corporación. Reservados todos los derechos.
      Todos los nombres de productos, logotipos, marcas, marcas comerciales y marcas comerciales registradas son propiedad de sus respectivos dueños. Todos los nombres de empresas, productos y servicios utilizados en este sitio web tienen únicamente fines de identificación.
      </p>
    </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  font-family: Open Sans;
  margin: 0;
  padding: 0;
}
.html {
  width: 100%;
  height: 100%;
}
.body {
  display:grid;
  min-height: 100%;
  grid-template-rows: auto 1fr auto;
}
/* NAVEGADOR ------------------------------------------------------------------------------------------------------------------*/
.navegador {
  width: 100%;
  border-top-style:solid;
  border-top-width: 1px;
}
.home-page ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.home-page li {
  display: inline-block;
}
.home-page li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/*Navagador, cuando el raton pasa cambia el color */
.home-page li a:hover {
  color: black;
  border-bottom-style:solid;
  border-bottom-style: 1px;
  border-radius: 5px;
  background-color: #d7d4d4;
}
/* NAVEGADOR ------------------------------------------------------------------------------------------------------------------*/
/* Otros elementos */
.seach_box {
  position:absolute;
  right:10%;
  top: 14%;
  border-radius: 6px;
}
/* FOOTER ------------------------------------------------------------------------------------------------------------------*/
.page-background {
  width:80%;
  height:100%;
  background-color:#e4e4e4;
  display: flex;
  justify-content:center;
  padding:10px;
  border-radius: 10px;
}
.footer-distributed {
  background: rgb(91, 88, 88);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 55px 50px;
}
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
    display: inline-block;
    vertical-align: top;
}
/* Footer left */
.footer-distributed .footer-left{
    width: 40%;
}
/* Footer links - buttons */
.footer-distributed .footer-buttons .button{
  width:45%;
  background-color: #666;
  border:2px;
  border-style: groove;
}
/* Footer Center */
.footer-distributed .footer-center{
  width: 35%;
}
.footer-distributed .footer-center i{
  background-color:  #525558;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}
.footer-distributed .footer-center i.fa-envelope{
  font-size: 17px;
  line-height: 38px;
}
.footer-distributed .footer-center p{
  display: inline-block;
  color: #ffffff;
  font-weight:400;
  vertical-align: middle;
  margin:0;
}
.footer-distributed .footer-center p span{
  display:block;
  font-weight: normal;
  font-size:14px;
  line-height:2;
}
.footer-distributed .footer-center p a{
  color:#ffffff;
  text-decoration: none;;
}
.footer-distributed .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}
.footer-distributed .footer-links .link-1:before {
  content: none;
}
/* Footer Right */
.footer-distributed .footer-right{
  width: 20%;
}
.footer-distributed .footer-company-about{
  line-height: 20px;
  color:  #b5b9bc;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}
.footer-distributed .footer-company-about span{
  display: block;
  color:  #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}
/* Footer buttom copyright */
.footer-distributed .footer-copyright{
  color:  #dddddd;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}
/* FOOTER -------------------------------------------------------------------------------------------------------------------------*/
/* button design ------------------------------------------------------------------------------------------------------------------*/
.button{
  position: relative;
  background-color: black;
  border-radius: 1em;
  font-size: 12px;
  color: white;
  padding: 0.8em 1.8em;
  cursor:pointer;
  user-select:none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
}
.button:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}
.button:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}
.button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}
.button:active {
  top: 1px;
}
/* button design ------------------------------------------------------------------------------------------------------------------*/
/* If you don't want the footer to be responsive, remove these media queries */
@media (max-width: 880px) {
    .footer-distributed{
      font: bold 14px sans-serif;
    }
    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right{
      display: block;
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }
    .footer-distributed .footer-center i{
      margin-left: 0;
    }
}

.err-msg {
  color:red;
  font-size: 0.7rem;
}
</style>
