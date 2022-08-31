<template>
<html lang="en">
 <div id="app">
         <div class="upload">
           <input type="file" id="file" multiple @change="upload">
         </div>
        <ul class="view">
            <li>
                <img src="./components/imagenes/logo.jpg">
                <div class="delect" title="删不了我" @click="noDelect">×</div>
            </li>
            <li v-for="(item,index) in list" :key="index" >
                <img :src="item">
                <div class="delect" @click="delect(index)">×</div>
            </li>
        </ul>
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

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app{
    width: 900px;
    background-color: rgb(241, 241, 241);
    margin: 50px auto;
}
.view{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: space-around;
}
.view > li{
    width: 200px;
    height: 120px;
    background-color: rgba(54, 194, 35,0.1);
    list-style: none;
    margin: 20px;
    position: relative;
}
.view > li > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.delect{
    position: absolute;
    right: 0;
    top: 0;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 15px;
      background-color: rgba(255, 255, 255,0.5);
      user-select: none;
      cursor: pointer;
      opacity: 0;
}
.delect:hover{

    background-color: rgba(31, 31, 31, 0.5);
      color: white;
}
.view>li:hover .delect{
    opacity: 1;
}

.upload{
    width: 80px;
    height: 20px;
    background-color: rgba(135, 206, 235,0.2);
    border: 1px dashed black;
    border-radius: 5px;
    position: relative;

}
.upload:hover{
    background-color: rgba(135, 206, 235,1);
}
.upload::before{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '上传图片';
    font-size: 13px;
    text-align: center;
    font-family: 'fangsong';
    line-height: 20px;
    user-select: none;
}
#file{
    width: 100%;
    height: 100%;
    opacity: 0;
}

</style>
