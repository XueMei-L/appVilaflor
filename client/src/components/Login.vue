<template>
<div>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home</title>
  </head>

  <body>
    <!-- El modelo del fondo -->
    <div class="home-container">
      <div class="container-left">
        <!-- Titulo - Tu mercado ideal -->
        <span style="position:relative; top:45%">
          <h1 style="font-size: 50px; color:black"><i>Tu Mercado ideal<br> @vilaflor</i></h1>
        </span>
      </div>

      <div class="container-right">
        <div class="container-login">
          <form @submit.prevent="handleSubmit" class="login">
            <h2><p style="color:black; margin-top:10%;">Sign In</p></h2>

            <!-- Login with accout -->
            <input type="text" v-model="emailLogin" placeholder="Email">
            <input type="password" v-model="passwordLogin" placeholder="Password">

            <!-- button of login -->
            <div class="sign_in">
              <p class="err-msg">{{loginmsg}}</p>
              <input type="submit" value="Login">
            </div>

            <!-- Sign In Not Accout -->
            <p>Don't have an account? <br><br><router-link to="/Register">Sign up here</router-link></p>
            <!-- Forgot password change link -->
            <p><a href="https://www.google.com/">Forgot your password?</a></p>
          </form>
          </div>

      </div>
    </div>
  </body>
</div>
</template>

<script>
import Api from '@/services/Api'

export default {
  name: 'App',
  // devolver datos
  data () {
    return {
      emailLogin: null,
      passwordLogin: null,
      loginmsg: null
    }
  },
  methods: {

    async handleSubmit () {
      if (!this.emailLogin || !this.passwordLogin) {
        this.loginmsg = 'Rellenas datos necesarios para hacer login'
      } else {
        try {
          await Api().post(`login`, {
            email: this.emailLogin,
            password: this.passwordLogin
          }).then(response => {
            console.log(response.data.token)
            console.log(response.data.user)
            console.log('entra')
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
            // localStorage.setItem('token', response.data.token)
            // salto de pagina
            this.loginmsg = null
            alert(`Inicio de seccion correcto`)
            this.$router.push('/Menu')
          })
        } catch (err) {
          this.loginmsg = 'Los datos no son correctos'
        }
      }
    }
  }
}
</script>

<style>
body {
  background-color: rgb(255, 255, 255);
}
/* parte izquierda del home */
.home-container .container-left{
  float: left;
  width: 50%;
  height: 100%;
  /* background-color: red; */
}
/* parte derecha del home */
.home-container .container-right{
  float: right;
  width: 50%;
  height: 100%;
  /* background-color: orange; */
}
/* login part */
.container-login {
  position: relative;
  top:20%;
  display: inline-block;
  width: 350px;
  height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 25px gray;
}
.login input {
  display: block;
  top: 30%;
  margin: 10px auto;
  width: 250px;
  height: 30px;
  text-align: center;
}
.sign_in input{
  display: block;
  margin: 30px auto;
  width: 260px;
  height: 30px;
}
/* home contenido principal */
.home-container {
  object-position: 100px 50px;
  position: left;
  display: inline-block;
  width: 100%;
  height: 600px;
  background:url("./imagenes/b1.jpg");
  background-size: 100%;
}
</style>
