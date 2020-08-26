<template>
  <div>
    <canvas ref="canvas" width="100" :height="height"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    props: {
      type: {
        default: 'line'
      },
      height: {
        type: Number,
        default: 50
      },
      datasets: {
        required: true
      },
      labels: {
        required: true
      },
      options: {
        default () {
          return {
            maintainAspectRatio: true,
            responsive: true,
            legend: {display: true}
          }
        }
      }
    },
    watch: {
      datasets (val) {
        this.chart.data.datasets = val
        this.chart.update()
      }
    },
    mounted: function () {
      let element = this.$refs.canvas.getContext('2d')
      this.chart = new Chart(element, {
        type: this.type,
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options: this.options
      })
    }
  }
</script>
