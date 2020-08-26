<template>
  <div>
    <div v-if="icon" class='input-group' ref="element">
      <input type='text' class="form-control" :placeholder="placeholder" :value="value">
      <span class="input-group-addon"><i></i></span>
    </div>
    <input v-else type="text" class="form-control" :placeholder="placeholder" ref="element" :value="value">
  </div>

</template>
<script>
  import 'bootstrap-colorpicker'
  export default {
    props: {
      placeholder: {
        type: String,
        default: 'Enter Color'
      },
      options: {
        type: Object,
        default () {
          return {
            format: 'hex'
          }
        }
      },
      icon: {
        type: Boolean,
        default: false
      },
      value: {
        type: String
      }
    },
    watch: {
      color (val) {
        this.$emit('input', val)
      },
      value (val) {
        $(this.$refs.element).colorpicker('setValue', val)
      }
    },
    mounted () {
      let vm = this
      $(this.$refs.element).colorpicker(vm.options)
      $(this.$refs.element).colorpicker().on('changeColor', function (e) {
        vm.color = e.color.toHex()
      })
    },
    data () {
      return {
        color: ''
      }
    }
  }
</script>

<style lang="scss">
  @import "~bootstrap-colorpicker/dist/css/bootstrap-colorpicker";
</style>

