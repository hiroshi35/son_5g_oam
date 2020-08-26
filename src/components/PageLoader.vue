<template>
  <div class="page-loader">
    <div class="loader">
      <fingerprint-spinner
        :animation-duration="800"
        :size="264"
        :color="color"
      ></fingerprint-spinner>
    </div>
  </div>
</template>

<script>
  import { FingerprintSpinner } from 'epic-spinners'

  export default {
    components: {
      FingerprintSpinner
    },
    data () {
      return {
        themeColor: {
          'default-theme': '#4CAF50',
          'orange-theme': '#fa7252',
          'teal-theme': '#3ab39b',
          'blue-theme': '#65a4da',
          'red-theme': '#dc5e5a',
          'purple-theme': '#976ad6',
          'brown-theme': '#a27148'
        }
      }
    },
    props: {
      theme: {
        default: 'default-theme'
      }
    },
    computed: {
      color () {
        return this.themeColor[this.theme]
      }
    }
  }
</script>

<style scoped>
  .page-loader{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #28353a;
    z-index: 9999;
    top: 0;
    left: 0;
  }
  .loader{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>