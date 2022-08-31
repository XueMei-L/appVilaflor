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
    <br><p style="font-size:50px;">Añadir un nuevo prodcuto</p><br>
    <div><Button class="button" style="background-color:white; color:black;" v-on:click = back>Volver</Button></div><br/>

    <div class="page-background">
      <div class="responsive">
      <div class="img" style="background-color:#ffffff;border-radius: 10px;">
          <div style="font-size:30px; margin:20px;">Agregar un producto nuevo</div>
          <div style="text-align: left; margin-left:10%;">
            <!-- Informacion - Seleccionar tipo de producto -->
            <label>Tipo de producto: </label>
             <select v-model="productType">
              <option>Frutas o Vegetales</option>
              <option>Pescados</option>
              <option>Carnes</option>
              <option>Perfumes</option>
            </select><br/><br/>
            <!-- Informacion - Nombre de producto -->
            <label>Nombre:</label>
            <input type="text" v-model="productName" placeholder="Nombre de producto"><br/><br/>
            <!-- Informacion - Stock de producto -->
            <label>Stock:</label>
            <input type="number" min="0" v-model="productStock" placeholder="Stock"><br/><br/>
            <!-- Informacion - Forma de venta de producto -->
            <label>Forma de venta: </label>
            <select v-model="productFormOfSale">
              <option>Precio/Kilo</option>
              <option>Precio/Unidad</option>
            </select><br/><br/>
            <label>Precio:</label>
            <input type="number" step="any" min="0" v-model="productPrice" placeholder="Precio"> €<br/><br/>
            <!-- Informacion - Imagen que corresponde -->
            <label>Imagen:</label><br/><br/>
        </div>
        <button class="button" style="margin-bottom:10px;" v-on:click="addProduct">Añadir</button>
      </div>
      </div>

      <div class="responsive">
      <div class="img" style="background-color:#ffffff;border-radius: 10px;">
          <div style="font-size:30px; margin:20px;">Informacion del producto</div>
          <div style="text-align: left; margin-left:10%;">
            <label>Tipo de producto: {{productType}}</label><br/><br/>
            <label>Nombre: {{productName}}</label><br/><br/>
            <label>Stock: {{productStock}}</label><br/><br/>
            <label>Forma de venta: {{productFormOfSale}}</label><br/><br/>
            <label>Precio: {{productPrice}} €</label><br/><br/>
            <label>Imagen:</label><br/><br/>
        </div>
        <button class="button" style="margin-bottom:10px;">Añadir</button>
      </div>
      </div>

    </div>
    </div>
  </body>
</div>
</html>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',

  data () {
    return {
      productType: null,
      productName: null,
      productStock: null,
      productFormOfSale: null,
      productPrice: null
    }
  },

  methods: {
    // para devolver al la pagina anterior
    back () {
      this.$router.back(-1)
    },
    // Post un nuevo producto
    addProduct () {
      if (this.productType && this.productName && this.productStock && this.productFormOfSale) {
        console.log(`eeeee`)
        axios
          .post('http://localhost:8081/products', {
            name: this.productName,
            type: this.productType,
            stock: this.productStock,
            formOfSale: this.productFormOfSale,
            pricePerOne: this.productPrice
          })
        alert(`Agregado el nuevo producto (${this.productName})`)
        this.$router.push('/menu_section/frutas')
      } else {
        alert('Deben tener todos los campos rellenados')
      }
    }
  }
}
</script>
<style>

div.polaroid2 {
  width: 100%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
}

</style>
