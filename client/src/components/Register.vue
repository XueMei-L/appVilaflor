<template>
<html lang="en">
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
          <form action="" class="login">
            <h2><p style="color:black; margin-top:10%;">Create an accout</p></h2>

            <!-- registeer section -->
            <input type="text" v-model="username" placeholder="Username">
            <p class="err-msg">{{usernamemsg}}</p>
            <input type="email" v-model="email" placeholder="Email">
            <p class="err-msg">{{emailmsg}}</p>
            <input type="password" v-model="password" placeholder="Password">
            <input type="password" v-model="repeatpassword" placeholder="Confirm Password">
            <p class="err-msg">{{passwordmsg}}</p>
            <!-- button of login -->
            <div>
            <button class="Register" v-on:click = "postUser" type="button" id="add">Create Your Accout</button>
            </div>
          </form>
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

  // devolver datos
  data () {
    return {
      username: null,
      email: null,
      password: null,
      repeatpassword: null,
      usernamemsg: null,
      emailmsg: null,
      passwordmsg: null
    }
  },

  methods: {
    postUser () {
      const checkuser = this.validate_field(this.username)
      const checkemail = this.validate_email(this.email)
      const checkpassword = this.validate_password(this.password, this.repeatpassword)

      if (checkuser && checkemail && checkpassword) {
        console.log('sss')
        axios
          .post('http://localhost:8081/register', {
            username: this.username,
            email: this.email,
            password: this.password
          }).then((response) => {
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.username)
            console.log('eee')
          })
        alert('Usuario creado correctamente, se le redirigira al inicio de sesion')
        this.$router.push('/')
      }
    },

    // check username
    validate_field (field) {
      if (field == null) {
        this.usernamemsg = '*El campo de username es obligatorio.'
      } else {
        this.usernamemsg = null
        return true
      }
    },

    // check email
    validate_email (email) {
      if (email == null) {
        this.emailmsg = '*El campo de correo es obligatorio.'
      } else if (email.match(/\S+@\S+\.\S+/)) {
        this.emailmsg = null
        return true
      } else {
        this.emailmsg = '*El campo correo no tiene un correo valido.'
      }
    },

    // check password and repeatpassword
    validate_password (password, repeatpassword) {
      if (password == null) {
        this.passwordmsg = '*El campo de contraseña es obligatorio.'
      } else if (password.length < 6) {
        console.log(2)
        this.passwordmsg = 'Contaseña invalida, debe tener longuitud minimo de 6.'
        console.log(this.passwordmsg)
      } else if (password !== repeatpassword) {
        this.passwordmsg = 'Las contraseñas no coinciden.'
      } else {
        this.passwordmsg = null
        return true
      }
    }

  }
}
</script>

<style>

.plantilla_login {
  position: absolute;
  right: 15%;
  top: 30%;
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
}
.Register{
  display: block;
  margin: 30px auto;
  width: 260px;
  height: 30px;
}
h1 {
  font-size: 50px;
}
.tu_mercado_ideal {
  position: absolute;
  left: 20%;
  top: 40%;
}
.container {
  object-position: 100px 50px;
  position: left;
  display: inline-block;
  width: 100%;
  height: 600px;
  background: #8ed6b8;
}

</style>
