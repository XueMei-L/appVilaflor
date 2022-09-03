import Api from './Api'

export default {
  // register (credentials) {
  //   // register es el directorio
  //   // y credentials es el dato que post
  //   return Api().post('register', credentials)
  // }.
  // postUser () {
  //   axios
  //   .post('http://localhost:8081/users', {
  //     email: this.email,
  //     password: this.password
  //   })
  //   alert(`Hola, ${this.email}. Has registado de forma correctamente!`)
  // }
  async CheckUser (email, password) {
    if (!email || !password) {
      return 'Rellenas datos necesarios para hacer login'
    } else {
      await Api()
        .get(`users?email=${email}&password=${password}`)
        .then((response) => {
          // salto de pagina
          alert(`Inicio de seccion correcto`)
          this.$router.push('/Menu')
          var parsedobj = JSON.parse(JSON.stringify(response))
          return parsedobj.data[0]['username']
        }, (err) => {
          console.log(err)
          return 'Confima que el email o la contraseña esta bien correcta.'
        })
    }
  }
}
