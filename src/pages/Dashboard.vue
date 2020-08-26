<template>
  <div>
    <div class="container-fluid">

      <page-header title="Dashboard" small-text="Statistics Overview"></page-header>

      <div class="row margin-bottom-10">
        <div class="col-lg-3 col-md-6 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-red" icon='<i class="fa fa-envelope-o" aria-hidden="true"></i>'
                    title="Inbox">12
            </widget>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-blue" icon='<i class="fa fa-cloud" aria-hidden="true"></i>'
                    title="Weather">25 C
            </widget>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-teal"
                    icon='<i class="fa fa-battery-quarter" aria-hidden="true"></i>' title="Battery">25%
            </widget>
          </a>
        </div>
        <div class="col-lg-3 col-md-6 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-yellow" icon='<i class="fa fa-bell-o" aria-hidden="true"></i>'
                    title="Notification">3
            </widget>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-12 activityChart">
              <panel :header="false" :style="chartPanelHeight">
                <chart :height="25" type="bar" :datasets="bar.activityData"
                       :labels="[1,2,3,4,5,6,7,8, 9, 10, 11, 12]"
                       :options="bar.activityOptions"></chart>
              </panel>
            </div>
            <div class="col-md-6">
              <panel type="panel-white" :header="false" style="height: 420px">
                <calendar :events="calendar.values" :options="calendar.options" :draggable="false"></calendar>
              </panel>
            </div>
            <div class="col-md-6">
              <panel type="panel-teal" :header="false">
                <h3 slot="header">Events</h3>
                <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="label label-info pull-right rounded">just now</span>
                    <i class="fa fa-fw fa-calendar"></i> Events updated
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="label label-danger pull-right rounded">4 minutes ago</span>
                    <i class="fa fa-fw fa-comment"></i> Commented on a thread
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="label label-info pull-right rounded">26 minutes ago</span>
                    <i class="fa fa-fw fa-truck"></i> Order  shipped
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="label label-success pull-right rounded">2 hours ago</span>
                    <i class="fa fa-fw fa-check"></i> Completed task: "Header"
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="label label-info pull-right rounded">56 minutes ago</span>
                    <i class="fa fa-fw fa-money"></i> Invoice has been paid
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="label label-info pull-right rounded">1 hour ago</span>
                    <i class="fa fa-fw fa-user"></i> A new client has been added
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="label label-success pull-right rounded">three days ago</span>
                    <i class="fa fa-fw fa-check"></i> Completed task: "fix error on clients page"
                  </a>
                </div>
                <button class="btn btn-teal btn-block"> <i class="fa fa-calendar"></i> View Events</button>
              </panel>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <panel :header="false" type="panel-primary no-padding">
                <tasks :tasks="tasks"></tasks>
              </panel>
            </div>
            <div class="col-md-12">
              <panel type="panel-primary no-padding">
                <h3 slot="header">Visits <small>| New visits</small></h3>
                <div class="table-responsive" style="margin-bottom: 0">
                  <table class="table table-hover" style="margin-bottom: 0">
                    <thead>
                    <tr>
                      <th>Page</th>
                      <th>Visits</th>
                      <th>New Visits</th>
                      <th>Label</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Main</td>
                      <td>3565</td>
                      <td><inline-chart type="bar" :options="{fill:['#777777','#fff4dd']}">4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5
                      </inline-chart></td>
                      <td><span class="label label-default">Default</span></td>
                    </tr>
                    <tr class="info">
                      <td>About</td>
                      <td>261</td>
                      <td><inline-chart type="bar" :options="{fill:['#337ab7','#fff4dd']}">4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5
                      </inline-chart></td>
                      <td><span class="label label-primary">Primary</span></td>
                    </tr>
                    <tr>
                      <td>Sales</td>
                      <td>565</td>
                      <td><inline-chart type="bar" :options="{fill:['#5cb85c','#fff4dd']}">4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5
                      </inline-chart></td>
                      <td><span class="label label-success">Success</span></td>
                    </tr>
                    <tr>
                      <td>Blog</td>
                      <td>5516</td>
                      <td><inline-chart type="bar" :options="{fill:['#5bc0de','#fff4dd']}">4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5
                      </inline-chart></td>
                      <td><span class="label label-info">Info</span></td>
                    </tr>
                    <tr  class="warning">
                      <td>404</td>
                      <td>200</td>
                      <td><inline-chart type="bar" :options="{fill:['#f7bd6c','#fff4dd']}">4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5
                      </inline-chart></td>
                      <td><span class="label label-warning">Warning</span></td>
                    </tr>

                    <tr  class="danger">
                      <td>Tr. Failed</td>
                      <td>100</td>
                      <td><inline-chart type="bar" :options="{fill:['#d9534f','#fff4dd']}">4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5
                      </inline-chart></td>
                      <td><span class="label label-danger">Danger</span></td>
                    </tr>
                    <tr>
                      <td>Contact</td>
                      <td>1565</td>
                      <td><inline-chart type="bar" :options="{fill:['#5cb85c','#fff4dd']}">4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5
                      </inline-chart></td>
                      <td><span class="label label-success">Success</span></td>
                    </tr>
                    <tr class="info">
                      <td>Forum</td>
                      <td>1261</td>
                      <td><inline-chart type="bar" :options="{fill:['#337ab7','#fff4dd']}">4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5,6,1,2,5,6,7,8,12,4.2/5,2,5
                      </inline-chart></td>
                      <td><span class="label label-primary">Primary</span></td>
                    </tr>

                    </tbody>
                  </table>
                </div>
              </panel>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Widget from '../components/Widget.vue';
  import PageHeader from '../components/PageHeader.vue';
  import Chart from '../components/Chart.vue';
  import Calendar from '../components/Calendar.vue';
  import Tasks from '../components/Tasks.vue';
  import InlineChart from '../components/InlineChart.vue'

  export default {
    components: {
      Widget,
      PageHeader,
      Chart,
      Calendar,
      Tasks,
      InlineChart
    },
    data () {
      return {
        chartPanelHeight: {
          height: '250px'
        },
        bar: {
          activityData: [
            {
              label: 'Front-End Tasks',
              backgroundColor: '#3ab39b',
              borderColor: '#3ab39b',
              borderWidth: 1,
              data: [65, 59, 80, 81, 56, 55, 40, 33, 50, 25, 44, 13]
            },
            {
              label: 'Back-End Tasks',
              backgroundColor: '#fa7252',
              borderColor: '#fa7252',
              borderWidth: 1,
              data: [12, 59, 30, 61, 96, 65, 20, 53, 30, 15, 14, 23]
            },
            {
              label: 'UI/UX Tasks',
              backgroundColor: '#f7bd6c',
              borderColor: '#f7bd6c',
              borderWidth: 1,
              data: [15, 19, 20, 41, 16, 55, 40, 23, 20, 45, 44, 13]
            }
          ],
          activityOptions: {
            maintainAspectRatio: true,
            responsive: true,
            scaleShowVerticalLines: false,
            showTooltips: false,
            legend: {
              display: true,
              labels: {
                fontFamily: 'Lato'
              }
            },
            tooltips: {
              enabled: false
            },
            scales: {
              xAxes: [{
                display: false,
                gridLines: {
                  display: false
                }
              }],
              yAxes: [{
                display: false,
                gridLines: {
                  display: false
                }
              }]
            }
          }
        },
        calendar: {
          values: [
            {
              id: 999,
              title: 'Party',
              start: new Date(Date.now()),
              color: '#ffd54f'
            },
            {
              id: 4,
              title: 'Lunch',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 1),
              color: '#ba68c8'
            },
            {
              id: 5,
              title: 'Birthday Party',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 3)
            },
            {
              id: 6,
              title: 'Click for Google',
              url: 'http://google.com/',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() - 5)
            }
          ],
          options: {
            height: 400,
            header: {
              left: '',
              center: 'title',
              right: ''
            }
          }
        },
        tasks: [
          {
            title: 'Task 1',
            label: 'asap',
            completed: false
          },
          {
            title: 'Task 2',
            label: 'regular',
            completed: false
          },
          {
            title: 'Task 3',
            label: 'insignificant',
            completed: true
          },
          {
            title: 'Task 4',
            label: 'insignificant',
            completed: false
          }
        ]
      }
    },
    mounted () {
      this.chartPanelHeight.height = this.getChartPanelHeight() + 'px'
      setTimeout(() => {
        this.chartPanelHeight.height = 'auto'
      }, 1000)
    },
    methods: {
      getChartPanelHeight () {
        return $('.activityChart').width() / 4 + 22
      }
    }
  }
</script>