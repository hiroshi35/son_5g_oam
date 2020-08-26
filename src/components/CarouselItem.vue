<template></template>

<script>
  export default {
    props: {
      imgSrc: {
        required: true,
        type: String
      },
      caption: {
        type: String
      }
    },
    mounted () {
      this.$parent.items.push({
        imgSrc: this.imgSrc,
        caption: this.caption
      })
    }
  }
</script>
