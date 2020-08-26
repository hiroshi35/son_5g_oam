<template>
  <div>
    <div class="panel-group" :id="id" role="tablist" aria-multiselectable="true">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      id: {
        default: 'accordion' + Math.floor((Math.random() * 1000) + 1)
      }
    }
  }
</script>

<style lang="scss">
  .accordion {
    margin-bottom: 5px;

    .panel-heading {

      border-radius: 0;
      a {
        text-decoration: none;
      }
    }
  }
</style>
