<template>
  <div :class="'panel ' + type">
    <div v-if="header" class="panel-heading">
      <slot name="header"></slot>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
    <div v-if="footer" class="panel-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        default: 'panel-white'
      },
      header: {
        type: Boolean,
        default: true
      },
      footer: {
        type: Boolean,
        default: false
      }
    }
  }
</script>