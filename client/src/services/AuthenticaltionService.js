import Api from './Api'

export default {
  register (credentials) {
    // register es el directorio
    // y credentials es el dato que post
    return Api().post('register', credentials)
  }
  // postUser () {
  //   axios
  //   .post('http://localhost:8081/users', {
  //     email: this.email,
  //     password: this.password
  //   })
  //   alert(`Hola, ${this.email}. Has registado de forma correctamente!`)
  // }
}

// AuthenticationService.register({
//   email: 'test@gmail.com',
//   password: '1234'
// })
