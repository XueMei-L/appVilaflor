<template>
<html lang="en">
<div id="app">
    <h1>Testing</h1>
    <router-link to="/menu_section/frutas">

    <input type="text" v-model="searchText" v-on:keyup.13="submit" placeholder="Search">
    <svg height="30" width="30">
    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
    </svg>
    </router-link>
    <p>{{msgSearch}}</p>
</div>
</html>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      searchText: null,
      msgSearch: null
    }
  },

  methods: {
    async submit () {
      var searchData = this.searchText.toUpperCase()
      try {
        await axios({
          url: `http://localhost:8081/product?name=${searchData}`,
          method: 'get'
        }).then((res) => {
          console.log(res.data)
        })
      } catch (err) {
        this.msgSearch = `No existe el producto "${searchData}"`
        console.log(err)
      }
    }
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
}

.input-wrapper {
  position: relative;
  width: 271px;
}

.input {
  box-sizing: border-box;
  color: #191919;
  padding: 15px 15px 15px 35px;
  width: 100%;
}

.input.password {
  padding: 15px 35px 15px 15px;
}

.input-icon {
  color: #191919;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.input-icon.password {
  left: unset;
  right: 12px;
}
</style>
