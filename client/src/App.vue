<template>
<html lang="en">

  <h1>Testing</h1>
  <label>email: </label>
  <input type="text" v-model="email" placeholder="ej: vilaflor@gmail.com"/>
  <br /><br />
  <label>contraseñas:</label>
  <input type="password" v-model="password" placeholder="password">
  <br /><br />
  <button v-on:click = "postUser"> Registrar </button>
  <br /><br />
  <button v-on:click = "getUser"> Show User Information </button>
  <p>{{user}}</p>

</html>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  // devolver datos
  data () { 
    return {
      email: null, 
      password: null,
      user:null
    }
  },

  methods: {
    postUser() {
      axios
        .post('http://localhost:8081/users', {
          email: this.email,
          password: this.password
        })
      alert(`Hola, ${this.email}. Has registado de forma correctamente!`)
    },
    
    getUser() {
      axios
        .get('http://localhost:8081/users')
        .then(response => (this.user = response.data))
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
