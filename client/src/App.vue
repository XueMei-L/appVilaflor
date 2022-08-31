<template>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home</title>

    <link type="text/css" rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
  </head>
  <div>
    <div class="row">
      <div class="col-8">
        <label class="btn btn-default p-0">
          <input
            type="file"
            accept="image/*"
            ref="file"
            @change="selectImage"
          />
        </label>
      </div>
      <div class="col-4">
        <button class="btn btn-success btn-sm float-right" :disabled="!currentImage" @click="upload">
          Upload
        </button>
      </div>
    </div>
    <div v-if="currentImage" class="progress">
      <div
        class="progress-bar progress-bar-info"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>
    <div v-if="previewImage">
      <div>
        <img class="preview my-3" :src="previewImage" alt="" />
      </div>
    </div>
    <div v-if="message" class="alert alert-secondary" role="alert">
      {{ message }}
    </div>
    <div class="card mt-3">
      <div class="card-header">图片列表</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(image, index) in imageInfos"
          :key="index"
        >
          <a :href="image.url">{{ image.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</html>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  // devolver datos
  data () {
    return {
    }
  },

  methods: {
    postUser () {
      axios
        .post('http://localhost:8081/users', {
          email: this.email,
          password: this.password
        })
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
