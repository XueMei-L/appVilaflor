<template>
<html lang="en">
<div id="app">
    <h1>Testing</h1>
    <input type="file">dddd
    <br/>
    <input type="submit">upload
         <!-- <div class="upload">
           <input type="file" id="file" multiple @change="upload">
         </div>
        <ul class="view">
            <li>
                <div class="delect" title="删不了我" @click="noDelect">×</div>
            </li>
            <li v-for="(item,index) in list" :key="index" >
                <img :src="item">
                <div class="delect" @click="delect(index)">×</div>
            </li>
        </ul> -->
    </div>
</html>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },

  methods: {}
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
</style>
