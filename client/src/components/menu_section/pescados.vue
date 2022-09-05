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
    <br><p style="font-size:50px;">PESCADOS</p><br>
    <div align='left' style="position: static; margin-left:16%"><Button class="button" style="background-color:white; color:black;" v-on:click = back>Volver</Button></div><br/>

    <div class="page-background">
      <div class="responsive" style="display:inline-block">
          <div class="polaroid" style="display:inline-block" v-bind:key="p.id" v-for="(p, index) in products">
            <img :src="src[index]">
            <p>{{ p.formOfSale }}</p>
            <h1>{{ p.name }}</h1>
            <b>{{ p.pricePerOne }} €/Kg </b><br/><br/>
            <button v-if="user.type == 'admin'" class="button" v-on:click=editarProduct(p.name)>Editar</button>
            <button v-if="user.type == 'admin'" class="button" v-on:click=deleteProduct(p.name)>Eliminar</button>
            <button v-else class="button" v-on:click=addProduct(user.email,p.name)>Añadir</button>
        </div>
      </div>
      <div class="responsive" v-if="user.type == 'admin'">
        <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
            <router-link to = "/menu_section/addProduct">
            <img src="../imagenes/add1.png" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
            </router-link>
            <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">Agregar un nuevo producto</b><br><br>
            <router-link to = "/menu_section/addProduct">
            <button class="button" style="margin-bottom:10px;">Agregar</button>
            </router-link>
        </div>
      </div>
      <div class="responsive" v-if="openWindows">
        <div class="polaroid" style="background-color:#ffffff; border-radius: 10px; width:500px;">
          <h1 style="margin-top:10px">Editar información</h1><br/>
          <h2>{{editProductName}}</h2><br/>
          <div style="text-align:left; margin-left:20px">
          <label><b>Tipo de producto:</b> {{editProductType}}</label><br/><br/>
          <label><b>Stock:</b> {{editProductStock}}</label><br/><br/>
          <label><b>Forma de venta:</b> {{editProductformOfSale}}</label><br/><br/>
          <label><b>Precio:</b> {{editProductpricePerOne}} €</label><br/><br/>
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
            <br/><br/>
          </div>
            <button class="button" style="margin-bottom:10px;">Guardar</button>
            <button class="button" style="margin-bottom:10px;" @click="openWindows = false">Cancelar</button>
        </div>
      </div>
      <div class="responsive" v-if="openWindowsdelete">
        <div class="polaroid" style="background-color:#ffffff; border-radius: 10px; width:500px;">
          <h1 style="margin-top:10px">Editar información</h1><br/>
          <h2>{{editProductName}}</h2><br/>
          <div style="text-align:left; margin-left:20px">
          <label><b>Tipo de producto:</b> {{editProductType}}</label><br/><br/>
          <label><b>Stock:</b> {{editProductStock}}</label><br/><br/>
          <label><b>Forma de venta:</b> {{editProductformOfSale}}</label><br/><br/>
          <label><b>Precio:</b> {{editProductpricePerOne}} €</label><br/><br/>
          </div>
          <div>
            <button class="button" style="margin-bottom:10px;" v-on:click="deleteProductFromBBDD(editProductName)">Eliminar</button>
            <button class="button" style="margin-bottom:10px;" @click="openWindowsdelete = false">Cancelar</button>
          </div>
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
import { mapGetters } from 'vuex'

export default {

  data () {
    return {
      products: [],
      src: [],
      openWindows: false,
      openWindowsdelete: false,
      // editproduType:null,
      editProductName: '',
      editProductType: '',
      editProductformOfSale: null,
      editProductpricePerOne: null,
      editProductStock: null
    }
  },

  methods: {
    // para devolver al la pagina anterior
    back () {
      this.$router.back(-1)
    },
    async addProduct (user, name) {
      console.log(user, name)
      await axios.patch(`http://localhost:8081/pedido?email=${user}&pedido=${name}`
      ).then(res => {
        console.log(res)
      })
      alert('añadir ' + name)
    },
    async deleteProduct (name) {
      this.openWindows = false
      this.openWindowsdelete = true
      var name1, type, form, price, stock

      try {
        await axios({
          url: `http://localhost:8081/product?name=${name}`,
          methods: 'get'
        }).then(res => {
          console.log('heredidddddd')
          console.log(res.data)
          name1 = res.data[0]['name']
          type = res.data[0]['type']
          form = res.data[0]['formOfSale']
          price = res.data[0]['pricePerOne']
          stock = res.data[0]['stock']
        })
      } catch (err) {
        console.log(err)
      }
      this.editProductName = name1
      this.editProductType = type
      this.editProductformOfSale = form
      this.editProductpricePerOne = price
      this.editProductStock = stock
    },
    async deleteProductFromBBDD (deleteName) {
      try {
        await axios.delete(`http://localhost:8081/delete?name=${deleteName}`
        ).then(res => {
          alert(deleteName + 'eliminado')
          this.openWindowsdelete = false
        })
      } catch (err) {
        console.log(err)
      }
      // refresh products
      this.loadproduct()
    },
    async editarProduct (name) {
      console.log('editar')
      this.openWindows = true
      this.openWindowsdelete = false
      try {
        await axios({
          url: `http://localhost:8081/product?name=${name}`,
          methods: 'get'
        }).then(res => {
          console.log('heredidddddd')
          console.log(res.data)
          this.editProductName = res.data[0]['name']
          this.editProductType = res.data[0]['type']
          this.editProductformOfSale = res.data[0]['formOfSale']
          this.editProductpricePerOne = res.data[0]['pricePerOne']
          this.editProductStock = res.data[0]['stock']
        })
      } catch (err) {
        console.log(err)
      }
    },
    async add (name) {
      try {
        await axios({
          url: `http://localhost:8081/files/?name=${name}`,
          responseType: 'blob',
          methods: 'get'
        }).then(res => {
          console.log('here')
          // Obtener imagen como objeto blob
          var blob = new Blob([res.data], {type: 'image/jpg'})
          var url = window.URL.createObjectURL(blob)
          this.src.push(url)
        })
      } catch (err) {
        console.log(err)
      }
    },
    loadproduct () {
      axios
        .get('http://localhost:8081/products?type=Pescados')
        .then((response) => {
          this.products = response.data
          console.log(this.products)
          this.products.forEach(element => {
            this.add(element['name'])
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  // Antes de montar la pagina. autocarga
  mounted () {
    this.loadproduct()
  },

  computed: {
    ...mapGetters(['user'])
  }
}
</script>
<style>

.page-background .polaroid {
  width: 250px;
  background-color:#ffffff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius:10px;
  margin-bottom: 20px;
  margin-left: 25px;
}

.page-background div {
   display:inline-block
}

.page-background h1 {
  color: black;
  font-size: 25px;
  text-align: center;
}

.page-background p {
  text-align: left;
  font-family: Open Sans;
  font-size: 15px;
  margin-left: 5px;
  margin-bottom: 10px;
  color:#B2B2B2;
}

.page-background b {
  text-align: right;
  margin-right:5px;
  color: #3885ff;
  font-size: 15px;
}

.page-background button {
  margin-bottom:10px;

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
}

.page-background .button:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

.page-background .button:after {
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

.page-background .button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.page-background .button:active {
  top: 1px;
}

.page-background img {
  width: 90%;
  margin:10px;
  border-radius:10px;
}

</style>
