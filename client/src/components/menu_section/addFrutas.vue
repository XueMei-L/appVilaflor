<template>
<html lang="en">
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
    <br><p style="font-size:50px;">Añadir un nuevo prodcuto</p><br>
    <div align='left' style="position: static; margin-left:16%"><Button class="button" style="background-color:white; color:black;" v-on:click = back>Volver</Button></div><br/>
    <div class="page-background">
      <div class="responsive" style="width:40%;">
      <div class="img" style="background-color:#ffffff; border-radius: 10px; margin-right:30px">
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
            <label>Imagen:</label>
            <input type="file" ref="file" @change="onChangeFile" enctype="multipart/form-data" required>
            <!-- <input type="submit">upload -->
            <br/><br/>
        </div>
      </div>
      </div>

      <div class="responsive" style="width:30%">
      <div class="img" style="background-color:#ffffff;border-radius: 10px;">
          <div style="font-size:30px; margin:20px;">Informacion del producto</div>
          <div style="text-align:left; margin-left:20px">
            <label>Tipo de producto: {{productType}}</label><br/><br/>
            <label>Nombre: {{productName}}</label><br/><br/>
            <label>Stock: {{productStock}}</label><br/><br/>
            <label>Forma de venta: {{productFormOfSale}}</label><br/><br/>
            <label>Precio: {{productPrice}} €</label><br/><br/>
            <label>Imagen:</label><img class="viewImage" src="" alt="" id="viewImg"><br/><br/>
        </div>
          <button align="center" class="button" style="margin-bottom:10px;" v-on:click="addProduct">Añadir</button>
      </div>
      </div>

    </div>
    </div>
  </body>
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
      productPrice: null,
      ProductImgFile: null
    }
  },

  methods: {
    back () {
      this.$router.back(-1)
    },

    // para devolver al la pagina anterior
    onChangeFile (event) {
      if (event.target.files[0]) {
        this.ProductImgFile = this.$refs.file.files[0]

        // preview image
        const reader = new FileReader()
        reader.onload = function () {
          document.getElementById('viewImg').src = reader.result
        }
        reader.readAsDataURL(this.ProductImgFile)

        console.log('uploading...')
      }
    },

    // Add a new product to database
    async addProduct () {
      const formData = new FormData()
      formData.append('file', this.ProductImgFile)
      formData.append('name', this.productName)
      formData.append('type', this.productType)
      formData.append('stock', this.productStock)
      formData.append('formOfSale', this.productFormOfSale)
      formData.append('pricePerOne', this.productPrice)

      console.log('uploading..')
      console.log(formData)

      try {
        await axios({
          url: 'http://localhost:8081/products',
          method: 'POST',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        alert(`Agregado el nuevo producto (${this.productName})`)
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>
<style>

</style>
