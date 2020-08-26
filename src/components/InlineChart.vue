<template>
  <span class="inline-chart"><span ref="chart" v-show="false"><slot></slot></span></span>
</template>

<script>
  import 'peity'
  export default {
    props: {
      type: {
        type: String,
        default: 'bar'
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    mounted () {
      $(this.$refs.chart).peity(this.type, this.options)
    }
  }
</script>
<style>
  .inline-chart {
    position: relative;
    margin-left: 2px;
    margin-right: 2px;

  }

  .inline-chart svg {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
</style>
