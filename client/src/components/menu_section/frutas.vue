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
    <!-- El modelo del fondo -->
    <div class="container_main" align=center style="background-color:#ebeef3;">
    <br><p style="font-size:50px;">FRUTAS Y VEGETALES</p><br>
    <div><Button class="button" style="background-color:white; color:black;" v-on:click = back>Volver</Button></div><br/>

    <div class="page-background">
        <!-- responsive correspondiente al tamano de foto -->
        <div class="responsive">
        <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
            <router-link to = "/menu_section/addFrutas">
            <img src="../imagenes/add1.png" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
            </router-link>
            <!-- <p align="left" style="margin-left:5px; margin-bottom:10px; color:#B2B2B2;">Por precio/Kilo</p> -->
            <!-- <b>Agregar una nueva fruta o vegetal</b><br><br> -->
            <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">Agregar una nueva fruta o vegetal</b><br><br>
            <button class="button" style="margin-bottom:10px;">Agregar</button>
        </div>
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

</style>
