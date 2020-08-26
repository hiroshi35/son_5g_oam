<template>
  <div>
    <footer id="footer">
      <div class="footer">
        © {{year}} <a href="http://valentinsirbu.me/">Sirbu Valentin</a> - Silence Theme v1.0.1
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>