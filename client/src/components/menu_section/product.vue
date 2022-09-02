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

    <!-- <button @click="loadImg('NARANJA')" class="button" style="margin-bottom:10px;">show</button> -->

    <button v-on:click="loadImg" class="button" style="margin-bottom:10px;">show</button>
    <div class="page-background">
    <p id='show' v-html="htmlData"></p>

        <!-- responsive correspondiente al tamano de foto -->
        <!-- <div class="responsive"> -->
        <!-- <div class="polaroid"> -->
            <!-- <p id='show' v-html="src"></p> -->
            <!-- <router-link to = "/Menu">
              <img src="../imagenes/f1.jpg" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
            </router-link>
            <p align="left" style="margin-left:5px; margin-bottom:10px; color:#B2B2B2;">Por precio/Kilo</p>
            <b>MANZANAS ROJAS</b><br><br>
            <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
            <button @click="addProduct" class="button" style="margin-bottom:10px;">Añadir</button> -->
        <!-- </div> -->
        <!-- </div> -->
        <!-- <img style="width: 100%;" class="pointer" src=" "> -->

    </div>

    </div>
  </body>
</div>
</html>
</template>

<script>
// import Api from '../../services/Api'
import axios from 'axios'

export default {

  data () {
    return {
      htmlData: ''
      // showProductName: null,
      // src:''
    }
  },

  methods: {
    // para devolver al la pagina anterior
    back () {
      this.$router.back(-1)
    },

    async loadImg () {
      // try {
      //   await axios.get(`http://localhost:8081/products`,
      //     {

      //     // responseType: 'arraybuffer'
      //     }).then(res => {
      //     // return 'data:image/jpg;base64,' + btoa(
      //     //   new Uint8Array(response.data)
      //     //     .reduce((data, byte) => data + String.fromCharCode(byte), '')
      //     // )
      //     consoleelement.log(res)
      //   })
      //   // .then(data => {
      //   //   console.log('eeeeeeeee')
      //   //   this.src = data
      //   // })
      // } catch (err) {
      //   console.log(err)
      // }
      try {
        await axios.get(`http://localhost:8081/products`, {
        }).then(res => {
          // console.log(res)
          var a = res.data
          const init = '<div class="responsive">' +
          '<div class="polaroid">'

          a.forEach((element, index) => {
            console.log(index)
            this.htmlData += init
            this.add(element['name'])
          })
          console.log(res)
        })
      } catch (err) {
        console.log(err)
      }
    },

    async add (name) {
      // var name = 'NARANJA'
      console.log(name)
      const fin = '</div></div>'
      try {
        await axios({
          // url: 'http://localhost:8081/products/?name=NARANJA',
          url: `http://localhost:8081/files/?name=${name}`,
          responseType: 'blob',
          methods: 'get'
        }).then(res => {
          var blob = new Blob([res.data], {type: 'image/jpg'})
          var url = window.URL.createObjectURL(blob)
          // this.src = url

          // console.log('sss')
          console.log(res)
          this.htmlData += '<img src=' + url + '>'
          this.htmlData += fin
          console.log('ss')
        })
      } catch (err) {
        console.log(err)
      }
      console.log(this.htmlData)
    },

    addProduct () {
      alert('Producto añadido.')
    }
  }
}
</script>
<style>

/* div.polaroid {
  width: 250px;
  text-align: center;
} */

.page-background .polaroid {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  background-color:#ffffff;
  border-radius:10px;
  width:300px;
  height:300px
}

.page-background h1 {
  color: black;
  font-size: 30px;
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
  width:90%;
  margin:10px;
  border-radius:10px;
}

</style>
