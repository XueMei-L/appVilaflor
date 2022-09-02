<template>
<html lang="en">
<div id='frutas'>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Frutas</title>

  </head>

  <body>
  <div class="page-background-0">
        <!-- responsive correspondiente al tamano de foto -->
        <div class="responsive">
        <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
            <a target="_self" href="/fruits">
            <img src="../imagenes/f1.jpg" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
            </a>
            <p align="left" style="margin-left:5px; margin-bottom:10px; color:#B2B2B2;">Por precio/Kilo</p>
            <b>MANZANAS ROJAS</b><br><br>
            <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
            <button @click="AddProduct" class="button" style="margin-bottom:10px;">Añadir</button>
        </div>
        </div>

        <div class="responsive">
        <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
            <a target="_self" href="/fruits">
            <img src="../imagenes/f2.jpg" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
            </a>
            <p align="left" style="margin-left:5px; margin-bottom:10px; color:#B2B2B2;">Por precio/Kilo</p>
            <b>MANZANAS</b><br><br>
            <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
            <button @click="AddProduct" class="button" style="margin-bottom:10px;">Añadir</button>
        </div>
        </div>

        <div class="responsive">
        <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
            <a target="_self" href="/fruits">
            <img src="../imagenes/f3.jpg" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
            </a>
            <p align="left" style="margin-left:5px; margin-bottom:10px; color:#B2B2B2;">Por precio/Kilo</p>
            <b>MANZANAS</b><br><br>
            <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
            <button @click="AddProduct" class="button" style="margin-bottom:10px;">Añadir</button>
        </div>
        </div>

        <div class="responsive">
        <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
            <a target="_self" href="/fruits">
            <img src="../imagenes/f4.jpg" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
            </a>
            <p align="left" style="margin-left:5px; margin-bottom:10px; color:#B2B2B2;">Por precio/Kilo</p>
            <b>MANZANAS</b><br><br>
            <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
            <button @click="AddProduct" class="button" style="margin-bottom:10px;">Añadir</button>
        </div>
        </div>
    </div>
  </body>
</div>
</html>
</template>

<script>
export default {
  name: 'frutas',

  data () {
    return {
    }
  },

  methods: {
    // para devolver al la pagina anterior
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style>

div.polaroid {
  width: 250px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
}

.page-background-0 {
  width:80%;
  height:100%;
  background-color:#e4e4e4;
  display: flex;
  justify-content:center;
  padding:10px;
  border-radius: 10px;
}

</style>
