<template>
<html lang="es">
  <div id=app>

  <h1>Testing1</h1>
  <label>email: </label>
  <input type="text" v-model="email" placeholder="ej: vilaflor@gmail.com"/>
  <br /><br />
  <label>contraseñas:</label>
  <input type="password" v-model="password" placeholder="password">
  <br /><br />
  <button v-on:click = "postUser"> Registrar </button>

  <h1>Testing2</h1>
  <label>email: </label>
  <input type="text" v-model="emailLogin" placeholder="ej: vilaflor@gmail.com"/>
  <br /><br />
  <label>contraseñas:</label>
  <input type="password" v-model="passwordLogin" placeholder="password">
  <br /><br />
  <button v-on:click = "CheckUser"> Login </button>
  <!-- <p>user: {{user}}</p> -->

  </div>
</html>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  // devolver datos
  data () {
    return {
      email: null,
      password: null,
      user: null,
      emailLogin: null,
      passwordLogin: null
    }
  },

  methods: {
    postUser () {
      axios
        .post('http://localhost:8081/users', {
          email: this.email,
          password: this.password
        })
    },

    async CheckUser () {
      await axios
        // .get(`http://localhost:8081/users?email=${this.emailLogin}&password=${this.passwordLogin}`)
        .get(`http://localhost:8081/users?email=111@gmail.com&&password=11111`)
        .then((response) => {
          // console.log(typeof (response))
          var parsedobj = JSON.parse(JSON.stringify(response))
          // obtener algun valor concreto
          console.log(parsedobj.data[0]['email'])

          // this.user = response.data
          // let email = JSON.stringify((response.data).get('email').value())
          // console.log(this.user)
          // console.log(this.user)
          // alert(email)
        }, (err) => {
          alert(`confima que el email o la contraseña esta bien correcta.`)
          console.log(err)
        })
    }
  },

  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
