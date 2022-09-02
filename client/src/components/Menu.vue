<template>
<div>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Fruits</title>

  </head>

  <body>
    <!-- El modelo del fondo -->
    <div class="container_main" align=center style="background-color:#ebeef3;">
      <br><p style="font-size:50px;">MENU</p><br>

    <div class="menu-background">
      <div class="responsive">
      <div class="img" style="background-color:#ffffff;border-radius: 10px;">
          <div class="desc">FRUTAS Y VEGETALES</div>
          <router-link to = "/menu_section/productFruits">
          <img src="./imagenes/frutas.jpg" alt="foto de frutas" style="margin:10px;border-radius: 10px;">
          </router-link>
      </div>
      </div>

      <div class="responsive">
      <div class="img" style="background-color:#ffffff;border-radius: 10px;">
          <div class="desc">PESCADOS</div>
          <!-- <router-link to = "/menu_section/frutas"> -->
          <img src="./imagenes/pescados.jpg" alt="foto de pescados" style="margin:10px; border-radius: 10px;">
          <!-- <router-link to = "/menu_section/frutas"> -->
      </div>
      </div>
    </div>

    <div class="menu-background">
      <div class="responsive">
      <div class="img" style="background-color:#ffffff;border-radius: 10px;">
          <div class="desc">CARNES</div>
          <a target="_self" href="/carnes">
          <img src="./imagenes/carnes.jpg" alt="foto de frutas" style="margin:10px;border-radius: 10px;">
          </a>
      </div>
      </div>

      <div class="responsive">
      <div class="img" style="background-color:#ffffff;border-radius: 10px;">
          <div class="desc">PERFUMES</div>
          <a target="_self" href="#javascript">
          <img src="./imagenes/perfumes.jpg" alt="foto de pescados" style="margin:10px;border-radius: 10px;">
          </a>
      </div>
      </div>
    </div>

    </div>
  </body>
  <footer>
  </footer>
</div>
</template>

<style>

/* Imagenes ------------------------------------------------------------------------------------------------- */
div.img {
    border: 1px solid #ccc;
}

div.img:hover {
    border: 1px solid #777;
}

div.img img {
    width: 90%;
}

/* descripcion de las imagenes */
div.desc {
    padding: 15px;
    text-align: center;
}

* {
    box-sizing: border-box;
}

.responsive {
    padding: 0 6px;
    float: left;
    margin:10px;
}

.menu-background {
    width:90%;
    height:100%;
    background-color:#e4e4e4;
    display: flex;
    justify-content:center;
    padding:10px;
    border-radius: 10px;
}

@media only screen and (max-width: 700px){
    .responsive {
        width: 49.99999%;
        margin: 6px 0;
    }
}

@media only screen and (max-width: 500px){
    .responsive {
        width: 100%;
    }
}

/* Imagenes ------------------------------------------------------------------------------------------------- */

.container_main {
  object-position: 100px 50px;
  position: left;
  display: inline-block;
  width: 100%;
  height: auto;
  background: white;
}

</style>
