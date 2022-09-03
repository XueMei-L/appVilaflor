import axios from 'axios'

export default {
  async submit (searchText) {
    var searchData = searchText.toUpperCase()
    try {
      await axios({
        url: `http://localhost:8081/product?name=${searchData}`,
        method: 'get'
      }).then((res) => {
        return res.data
      })
    } catch (err) {
      this.msgSearch = `No existe el producto "${searchData}"`
      console.log(err)
    }
  }
}
