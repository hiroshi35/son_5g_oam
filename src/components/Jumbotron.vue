<template>
  <div :class="'jumbotron ' + className" :style="style">
    <div class="container">
      <h1>{{title}}</h1>
      <p>
        <slot></slot>
      </p>
      <p>
        <slot name="buttons"></slot>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      img: {
        type: String
      },
      className: {
        type: String,
        default: ''
      }
    },
    computed: {
      style () {
        if (this.img) {
          return {
            backgroundImage: 'url(' + this.img + ')',
            color: '#fff',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }
        }
        return ''
      }
    }
  }
</script>
