<template>
  <div class="ct-chart" :style="{width: chartWidth, height: chartHeight}"></div>
</template>
<script>
  import { capitalize } from 'lodash'
  import Chartist from 'chartist'
  export default {
    props: {
      chartWidth: {
        default: '100%'
      },
      chartHeight: {
        default: 'inherit'
      },
      data: {
        required: true
      },
      type: {
        default: 'line'
      },
      options: {
        default () {
          return {}
        }
      },
      responsiveOptions: {
        default () {
          return {}
        }
      },
      onDraw: {
        default () {
          return function () {}
        }
      }
    },
    watch: {
      data (val, oldVal) {
        this.chart.update(val)
      }
    },
    mounted () {
      let vm = this
      this.chart = new Chartist[capitalize(this.type)](this.$el, this.data, this.options, this.responsiveOptions)
      this.chart.on('draw', function (data) {
        vm.onDraw(data)
      })
    }
  }
</script>

<style lang="scss">
  @import "~chartist/dist/scss/chartist";
  .ct-label {
    font-size: 1.2rem !important;
  }
</style>