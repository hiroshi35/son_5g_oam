<template>
  <div>
    <div class="container-fluid">
      <page-header title="Chart.js"></page-header>
      <!-- Page Heading -->
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-primary">
            <h3 slot="header">Line Chart</h3>
            <div class="col-md-12">
              <chart type="line" :height="20" :labels="['A', 'B', 'C', 'D', 'E']" :datasets="values.line"></chart>
            </div>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-moss">
            <h3 slot="header"> Pie Chart Example with Tooltips</h3>
            <chart type="pie" :height="75" :labels='["Red","Blue","Yellow"]' :datasets="values.pie"></chart>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-teal">
            <h3 slot="header"> Doughnut Chart Example with Tooltips</h3>
            <chart type="doughnut" :height="75" :labels='["Red","Blue","Yellow"]' :datasets="values.pie"></chart>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-blue-sky">
            <h3 slot="header">Bar Chart</h3>
            <chart type="bar" :height="25" :labels="['A', 'B', 'C', 'D', 'E']" :datasets="values.bar"></chart>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-red">
            <h3 slot="header">Polar Area Chart</h3>
            <chart type="polarArea" :height="50" :labels='["Red","Green","Yellow","Grey","Blue"]' :datasets="values.polar"></chart>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-brown">
            <h3 slot="header">Radar Chart</h3>
            <chart type="radar" :height="50"
                   :labels='["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"]'
                   :datasets="values.radar"></chart>
          </panel>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
  import Chart from '../components/Chart.vue'
  export default {
    components: {
      Chart
    },
    data () {
      return {
        values: {
          line: [
            {
              label: 'My First dataset',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56],
              spanGaps: false
            }
          ],
          bar: [
            {
              label: 'My First dataset',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ],
          pie: [
            {
              data: [300, 50, 100],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
          ],
          polar: [{
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              '#FF6384',
              '#4BC0C0',
              '#FFCE56',
              '#E7E9ED',
              '#36A2EB'
            ],
            label: 'My dataset' // for legend
          }],
          radar: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
              label: 'My Second dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
            }
          ]
        }
      }
    }
  }
</script>