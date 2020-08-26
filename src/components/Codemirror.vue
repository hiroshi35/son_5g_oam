<template>
  <textarea :name="name">{{value}}</textarea>
</template>
<script>
  import CodeMirror from 'codemirror'

  export default {
    props: {
      mode: {
        type: String,
        default: 'php'
      },
      name: {
        type: String,
        default: 'code'
      },
      options: {
        type: Object
      },
      theme: {
        type: String,
        default: 'material'
      },
      value: {
        type: String,
        default: ''
      }
    },
    computed: {
      optionsObj () {
        if (this.options) {
          return this.options
        }
        return {
          lineNumbers: true,
          matchBrackets: true,
          styleActiveLine: true,
          theme: this.theme,
          mode: this.mode
        }
      }
    },
    mounted () {
      this.initEditor()
    },
    methods: {
      initEditor () {
        let vm = this
        import(/* webpackChunkName: "codemirror" */ 'codemirror/mode/' + vm.mode + '/' + vm.mode + '.js').then(() => {
          let editor = CodeMirror.fromTextArea(vm.$el, vm.optionsObj)
          editor.setValue(vm.value)
          setTimeout(function () {
            editor.refresh()
          }, 1)
          editor.on('change', (e) => {
            vm.$emit('input', editor.getValue())
          })
          vm.$emit('mounted')
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "~codemirror/lib/codemirror";
  @import "~codemirror/theme/material";
  @import "~codemirror/theme/dracula";
  @import "~codemirror/theme/eclipse";
  @import "~codemirror/theme/cobalt";
  @import "~codemirror/theme/monokai";
  @import "~codemirror/theme/yeti";
  @import "~codemirror/theme/zenburn";
  @import "~codemirror/theme/twilight";
</style>
