<template>
  <textarea>{{value}}</textarea>
</template>

<script>
  import 'trumbowyg'
  import 'trumbowyg/plugins/base64/trumbowyg.base64.js'
  import 'trumbowyg/plugins/colors/trumbowyg.colors.js'
  import 'trumbowyg/plugins/table/trumbowyg.table.js'
  import 'trumbowyg/plugins/upload/trumbowyg.upload.js'

  export default {
    props: {
      autogrow: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object
      },
      uploadPath: {
        type: String
      },
      value: {
        type: String
      }
    },
    computed: {
      optionsObj () {
        if (this.options) {
          return this.options;
        }
        return {
          resetCss: true,
          plugins: {
            upload: {
              serverPath: this.uploadPath
            }
          },
          autogrow: this.autogrow,
          btnsDef: {
            image: {
              dropdown: ['insertImage', 'base64', 'upload'],
              ico: 'insertImage'
            }
          },
          btns: [
            ['viewHTML'],
            ['formatting'],
            ['strong', 'em'],
            'btnGrp-semantic',
            ['superscript', 'subscript'],
            ['link'],
            ['image'],
            'btnGrp-justify',
            'btnGrp-lists',
            ['horizontalRule'],
            ['removeformat'],
            ['foreColor', 'backColor'],
            ['table'],
            ['fullscreen']
          ]
        }
      }
    },
    mounted () {
      let vm = this
      $.trumbowyg.svgPath = require('trumbowyg/dist/ui/icons.svg');
      $(this.$el).trumbowyg(this.optionsObj)
      $(this.$el).trumbowyg().on('tbwchange', (e) => {
        vm.$emit('input', e.target.value)
      })
      $(this.$el).trumbowyg().on('tbwinit', (e) => {
        vm.$emit('mounted')
      })
    }
  }
</script>
<style lang="scss">
  @import "~trumbowyg/dist/ui/trumbowyg";
  @import "~trumbowyg/dist/plugins/colors/ui/trumbowyg.colors";

  #trumbowyg-icons {
    display: none;
  }
</style>


