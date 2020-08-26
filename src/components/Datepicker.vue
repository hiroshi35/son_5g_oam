<template>
  <div>
    <div v-if="icon" class='input-group date' ref="element">
      <input type='text' class="form-control" :placeholder="placeholder" v-model="value">
      <span class="input-group-addon" v-html="customIcon"></span>
    </div>
    <input v-else type="text" class="form-control" :placeholder="placeholder" ref="element" v-model="value">
  </div>

</template>
<script>
  import 'moment'
  import 'eonasdan-bootstrap-datetimepicker'

  export default {
    props: {
      placeholder: {
        type: String,
        default: 'Enter Date'
      },
      options: {
        type: Object
      },
      icon: {
        type: Boolean,
        default: false
      },
      customIcon: {
        type: String,
        default: '<span class="glyphicon glyphicon-calendar"></span>'
      },
      format: {
        type: String,
        default: 'DD-MM-YYYY HH:mm'
      },
      value: {
        type: String,
        default: ''
      }
    },
    computed: {
      optionObj () {
        if (this.options) {
          return this.options
        }
        let obj = {}
        if (this.format) {
          obj.format = this.format
        }
        return obj
      }
    },
    mounted () {
      let vm = this
      $(this.$refs.element).datetimepicker(this.optionObj).on('dp.change', function (e) {
        console.log('sd');
        vm.$emit('input', e.date.format(vm.format))
      })
    }
  }
</script>

<style lang="scss">
  @import "~eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker";
</style>
