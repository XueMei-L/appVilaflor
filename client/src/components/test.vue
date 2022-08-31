<template>
<html lang=es>
</html>
</template>

<script>
import UploadService from '@/services/UploadFilesService'

export default {
  name: 'upload-image',
  data () {
    return {
      selectedFiles: undefined,
      progressInfos: [],
      message: '',
      fileInfos: []
    }
  },
  methods: {
    // Para seleccionar fotos
    selectImage () {
      this.currentImage = this.$refs.file.files.item(0)
      this.previewImage = URL.createObjectURL(this.currentImage)
      this.progress = 0
      this.message = ''
    },
    // Upload - Forma de subir fotos
    upload () {
      this.progress = 0
      UploadService.upload(this.currentImage, (event) => {
        // barra que calcula el proceso de subir fotos
        this.progress = Math.round((100 * event.loaded) / event.total)
      })
        .then((response) => {
          this.message = response.data.message
          return UploadService.getFiles()
        })
        .then((images) => {
          this.imageInfos = images.data
        })
        .catch((err) => {
          this.progress = 0
          this.message = 'Could not upload the image! ' + err
          this.currentImage = undefined
        })
    },
    // to get image Infos
    mounted () {
      UploadService.getFiles().then(response => {
        this.imageInfos = response.data
      })
    }

  }
}
</script>
