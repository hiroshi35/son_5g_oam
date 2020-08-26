<template>
  <div>
    <div class="container-fluid">
      <page-header title="Editors"></page-header>
      <div class="row">
        <div class="col-md-12">
          <transition name="fade">
            <panel type="panel-white right-angular">
              <h3 slot="header">Trumbowyg</h3>
              <trumbowyg v-model="text" @mounted="showTrumbowyg = true"></trumbowyg>
            </panel>
            </transition>
        </div>
        <div class="col-md-12">
          <transition name="fade">
            <panel type="panel-white right-angular" v-show="showCodeMirror">
              <h3 slot="header">CodeMirror</h3>
              <codemirror mode="php" theme="material" v-model="code" @mounted="showCodeMirror = true"></codemirror>
            </panel>
          </transition>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </div>
</template>

<script>
  import Trumbowyg from '../components/Trumbowyg.vue'
  import Codemirror from '../components/Codemirror.vue'

  export default {
    components: {
      Trumbowyg,
      Codemirror
    },
    data () {
      return {
        showTrumbowyg: false,
        showCodeMirror: false,
        text: 'Your text here...',
        code: '<?php echo \'Hi there...\''
      }
    }
  }
</script>
