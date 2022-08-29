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
            <input type="text" placeholder="Username">
            <input type="email" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <input type="password" v-model="password2" placeholder="Confirm Password">

            <!-- button of login -->
            <div>
            <!-- <button class="Register" onclick="window.location.href='#'" type="button" id="add">Create Your Accout</button> -->
            <button class="Register" @click="register" type="button" id="add">Create Your Accout</button>
            <!-- <input type="button" value="Create Your Accout" onclick=javascript:jump()> -->
            </div>
            <!-- mostrar informaciones -->
            <p>{{email}}</p>
            <p>{{password}}</p>
            <p>{{password2}}</p>
          </form>
          </div>

      </div>
    </div>
  </body>

</html>
</template>

<script>
import AuthenticaltionService from '@/services/AuthenticaltionService'
export default {
  // para retornar objetos
  data () {
    return {
      email: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticaltionService.register({
        email: this.email,
        password: this.password,
        password2: this.password2
      })
      console.log(response.data)
      if (this.password !== this.password2) {
        console.log(response.password2)
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
