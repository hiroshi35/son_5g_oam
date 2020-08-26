<template>
  <div>
    <div class="container-fluid">
      <!-- Page Heading -->
      <page-header title="Chartist" small-text="| SIMPLE RESPONSIVE CHARTS"></page-header>

      <div class="row">
        <div class="col-lg-12">
          <panel type="panel-red">
            <h3 slot="header">Line Chart</h3>
            <chartist chart-height="300px" :data="values.line"></chartist>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-teal">
            <h3 slot="header">Bar Chart</h3>
            <chartist chart-height="300px" type="bar" :data="values.barData" :options="values.barOptions"></chartist>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-sky">
            <h3 slot="header">Pie Chart</h3>
            <chartist chart-height="500px" type="pie" :data="values.pie"></chartist>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-moss">
            <h3 slot="header">GAUGE CHART</h3>
            <chartist chart-height="500px" type="pie" :data="{series: [20, 10, 30, 40]}" :options="values.gaugeChart"></chartist>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-yellow">
            <h3 slot="header">ADVANCED SMIL ANIMATIONS</h3>
            <chartist chart-height="300px" type="line" :data="values.animationData" :options="{low: 0}"
                      :on-draw="values.animationDraw"></chartist>
          </panel>
        </div>
      </div>
      <!-- /.row -->
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </div>
</template>

<script>
  import Chartist from '../components/Chartist.vue'

  export default {
    components: {
      Chartist
    },
    data () {
      return {
        values: {
          line: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            series: [
              [5, 2, 4, 2, 3]
            ]
          },
          pie: {
            series: [5, 3, 4]
          },
          gaugeChart: {
            donut: true,
            donutWidth: 60,
            startAngle: 270,
            total: 200,
            showLabel: true
          },
          barData: {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
              [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
          },
          barOptions: {
            high: 10,
            low: -10,
            axisX: {
              labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
              }
            }
          },
          animationData: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
              [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
              [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
              [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
              [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
          },
          animationDraw: function (data) {
            let seq = 0;
            let delays = 80;
            let durations = 500;
            seq++;

            if (data.type === 'line') {
              // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
              data.element.animate({
                opacity: {
                  // The delay when we like to start the animation
                  begin: seq * delays + 1000,
                  // Duration of the animation
                  dur: durations,
                  // The value where the animation should start
                  from: 0,
                  // The value where it should end
                  to: 1
                }
              });
            } else if (data.type === 'label' && data.axis === 'x') {
              data.element.animate({
                y: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.y + 100,
                  to: data.y,
                  // We can specify an easing function from Chartist.Svg.Easing
                  easing: 'easeOutQuart'
                }
              });
            } else if (data.type === 'label' && data.axis === 'y') {
              data.element.animate({
                x: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 100,
                  to: data.x,
                  easing: 'easeOutQuart'
                }
              });
            } else if (data.type === 'point') {
              data.element.animate({
                x1: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
                },
                x2: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
                },
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'easeOutQuart'
                }
              });
            } else if (data.type === 'grid') {
              // Using data.axis we get x or y which we can use to construct our animation definition objects
              let pos1Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '1'] - 30,
                to: data[data.axis.units.pos + '1'],
                easing: 'easeOutQuart'
              };

              let pos2Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '2'] - 100,
                to: data[data.axis.units.pos + '2'],
                easing: 'easeOutQuart'
              };

              let animations = {};
              animations[data.axis.units.pos + '1'] = pos1Animation;
              animations[data.axis.units.pos + '2'] = pos2Animation;
              animations['opacity'] = {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
              };
              data.element.animate(animations);
            }
          }
        }
      }
    },
    methods: {
      sum (a, b) {
        return a + b
      }
    }
  }
</script>