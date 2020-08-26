<template>
  <select class="select sc-select form-control" style="width:100%">
    <option v-if="placeholder && !value" selected disabled></option>
    <option v-for="(value, key) in data" :value="key">{{value}}</option>
    <slot></slot>
  </select>
</template>

<script>
  import 'select2'
  export default {
    props: {
      options: {
        type: Object
      },
      data: {
        type: Object
      },
      placeholder: {
        type: String,
        default: 'Select Option'
      },
      search: {
        type: Boolean,
        default: true
      },
      value: {
        type: String
      }
    },
    computed: {
      optionsObj () {
        if (this.options) {
          return this.options
        }
        let obj = {}
        if (this.placeholder) {
          obj.placeholder = this.placeholder
        }
        if (!this.search) {
          obj.minimumResultsForSearch = Infinity
        }
        return obj
      }
    },
    mounted () {
      let vm = this
      $(this.$el).select2(this.optionsObj).val(this.value)
        .on('change', function () {
          vm.$emit('input', this.value)
        })
    },
    watch: {
      value: function (value) {
        $(this.$el).val(value).select2().val(value)
      }
    },
    destroyed: function () {
      $(this.$el).off().select2('destroy')
    }
  }
</script>

<style lang='scss'>
  @import "~select2/dist/css/select2";
  .select2 span, input {
    outline: none;
  }

  /* Make Select2 boxes match Bootstrap3 heights: */
  .select2-selection__rendered {
    line-height: 32px !important;
  }

  .select2-selection {
    height: 34px !important;
  }

  .select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 32px !important;
  }
</style>


