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
    <br><p style="font-size:50px;">BÚSQUEDA</p><br>
    <div align='left' style="position: static; margin-left:16%"><Button class="button" style="background-color:white; color:black;" v-on:click = back>Volver</Button></div><br/>

    <div class="page-background">
    <input id="searchMsg" class="seachbox" type="text" v-model="searchText" v-on:keyup.13="submitText" placeholder="Introduzca el nombre de product">
    <button class="button" v-on:click=search style="width:10%; margin-top:25px; height: 50px; margin-left:10px;">Buscar</button>
    <br><br>
    </div>
    <div class="page-background">
      <p style="font-size:50px; color:#2c3e50">{{msgSearch}}</p>
    </div>
    <div class="page-background">
    <div class="responsive" style="display:inline-block">
        <div class="polaroid" style="display:inline-block" v-bind:key="p.id" v-for="(p, index) in productsSearchResult">
          <img :src="srcSearchResult[index]">
          <p>{{ p.formOfSale }}</p>
          <h1>{{ p.name }}</h1>
          <b>{{ p.pricePerOne }} €/Kg </b><br/><br/>
          <button v-if="!$store.state.isUserLoggedIn" class="button" v-on:click=addProduct(p.name)>Añadir</button>
          <button v-else-if="user.type === 'admin'" class="button" v-on:click=addProduct(p.name)>editar</button>
          <button v-else class="button" v-on:click=addProduct(user.email,p.name)>Añadir</button>
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
      productsSearchResult: [],
      srcSearchResult: [],
      msgSearch: null,
      searchText: null
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
    search () {
      this.productsSearchResult = []
      this.srcSearchResult = []
      if (this.searchText) {
        this.msgSearch = `los resultados de la búsqueda de "${this.searchText}":`
        axios
          .get(`http://localhost:8081/productSearch?name=${this.searchText}`)
          .then((response) => {
            this.productsSearchResult = response.data
            console.log(this.productsSearchResult)
            this.productsSearchResult.forEach(element => {
              this.add(element['name'])
            })
          })
          .catch((error) => {
            this.msgSearch = `No existe el producto "${this.searchText}"`
            console.log(error)
          })
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
          this.srcSearchResult.push(url)
        })
      } catch (err) {
        console.log(err)
      }
    }
  },

  // Antes de montar la pagina. autocarga
  mounted () {
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

.page-background .seachbox {
  font-size: 15px;
  padding: 5px;
  margin-top:20px;
  width: 90%;
  height: 50px;
  border-radius:10px;
}

</style>
