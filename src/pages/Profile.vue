<template>
  <div>
    <div class="container-fluid">
      <div class="row profile">
        <div class="col-md-6 col-lg-3">
          <panel type="panel-primary" :header=false>
            <div class="profile-image">
              <img class="rounded-top-corners" src="/static/imgs/avatar.jpg" width="100%" height="auto" alt="Photo">
            </div>
            <div class="col-md-12">
              <h3 class="profile-name">JOHN DOE <br>
                <small>FULL STACK WEB DEVELOPER</small>
              </h3>
              <p><i class="fa fa-map-marker" aria-hidden="true"></i> Chisinau, Moldova</p>
              <h4><strong>About</strong></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur cumque dolorem
                eos excepturi exercitationem fugiat nemo, obcaecati, odit optio quod quos rem sit, sunt
                unde vel voluptas voluptate voluptatem!</p>
              <h4><strong>Activity</strong></h4>
              <div class="row">
                <div class="col-md-12">
                  <chart :height="25" type="bar" :datasets="activityData"
                         :labels='[1,2,3,4,5,6,7,8,9,10,11,12,13]'
                         :options="activityOptions"></chart>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-activity btn-outlined-green btn-block right-angular"> Show
                    Details
                  </button>
                </div>
              </div>
              <h4><strong>Contact</strong></h4>
              <div class="row">
                <div class="col-md-6">
                  <p><i class="fa fa-envelope-o" aria-hidden="true"></i> <strong>john@doe.com</strong></p>
                  <p><i class="fa fa-phone" aria-hidden="true"></i> <strong>+444 555</strong></p>
                  <p><i class="fa fa-skype" aria-hidden="true"></i> <strong>johndoe</strong></p></div>
                <div class="col-md-6"><p><i class="fa fa-twitter" aria-hidden="true"></i> <strong>@johndoe</strong>
                </p>
                  <p><i class="fa fa-facebook" aria-hidden="true"></i> <strong>john.doe</strong></p>
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <a href="#" class="btn btn-outlined-blue btn-block right-angular">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                Send A Message
              </a>
            </div>
          </panel>
        </div>
        <div class="col-md-6 col-lg-9">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <panel type="panel-primary" :header=false>
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <h3>Personal Info</h3>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <button class="btn btn-outlined-teal btn-block rounded pull-right "><i class="fa fa-cloud-download" aria-hidden="true"></i>
                      Resume
                    </button>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="row">
                  <div class="col-md-4">
                    <p><i class="fa fa-calendar" aria-hidden="true"></i> 23 sep 1992</p>
                  </div>
                  <div class="col-md-6">
                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Chisinau, Moldova</p>
                  </div>
                  <div class="col-md-2">
                    <i class="fa fa-mars" aria-hidden="true"></i>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="row">
                  <div class="col-md-12">
                    <h4>Education</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <p><i class="fa fa-graduation-cap" aria-hidden="true"></i> <strong>Massachusetts Institute of Technology</strong>
                      - Computer Science
                      <small>- 2010-2015</small>
                    </p>
                    <p><i class="fa fa-university" aria-hidden="true"></i> <strong>Harvard College</strong>
                      <small>- 2007-2010</small>
                    </p>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="row">
                  <div class="col-md-12">
                    <h4>Work History</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <p><i class="fa fa-briefcase" aria-hidden="true"></i> <strong> ABC inc.</strong> - PHP Developer -
                      <small>2013 - Present</small>
                    </p>
                    <p><i class="fa fa-building" aria-hidden="true"></i> <strong>Example Company</strong>
                      - Front-End Developer -
                      <small>2011 - 2013</small>
                    </p>
                  </div>
                </div>
              </panel>
            </div>
            <div class="col-md-12 col-lg-6">
              <panel type="panel-primary" :header=false>
                <div class="row">
                  <div class="col-md-12">
                    <h4>Skills</h4>
                    <div class="divider"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>PHP</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.35/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>HTML/CSS</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.2/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>GIT</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.5/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>JS</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.1/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>PYTHON</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.35/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>HAML</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.2/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>Laravel</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.8/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>Symphony</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.5/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>PHOTOSHOP</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">3.6/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-xs-6"><p><strong>AI</strong></p></div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                        <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">3.2/5
                        </inline-chart>
                      </div>
                    </div>
                  </div>
                </div>
              </panel>
              <panel :header="false">
                <div class="row">
                  <div class="col-md-12">
                    <h4>Work in Progress</h4>
                    <div class="divider"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <button class="btn btn-outlined-red rounded btn-block margin-bottom-5">
                      3 Tasks
                    </button>
                  </div>
                  <div class="col-md-4">
                    <button class="btn btn-outlined-purple rounded btn-block margin-bottom-5">
                      1 Project
                    </button>
                  </div>
                  <div class="col-md-4">
                    <button class="btn btn-outlined-stone rounded btn-block margin-bottom-5">
                      4 Issues
                    </button>
                  </div>
                </div>
              </panel>
            </div>
          </div>
          <panel type="panel-primary" :header=false>
            <div class="row">
              <div class="col-md-12">
                <h4>Activities</h4>
                <div class="divider"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object img-circle" width="50px" height="50px" src="/static/imgs/avatar.jpg">
                    </a>
                  </div>
                  <div class="media-body">
                    <p class="media-heading"><strong>John Doe</strong> has pushed 4 commits
                    </p>
                    <small>on Jul 30, 2016</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="divider"></div>
            <div class="row">
              <div class="col-md-12">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object img-circle" width="50px" src="/static/imgs/avatars/man-1.png">
                    </a>
                  </div>
                  <div class="media-body">
                    <p class="media-heading"><strong>John Smith</strong> started following <strong>John Doe</strong>
                    </p>
                    <small>on Jul 30, 2016</small>
                  </div>
                </div>
              </div>

            </div>
            <div class="divider"></div>
            <div class="row">
              <div class="col-md-12">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object img-circle" width="50px" src="/static/imgs/avatars/woman.png">
                    </a>
                  </div>
                  <div class="media-body">
                    <p class="media-heading">
                      <strong>Jane Doe</strong> posted message on <strong>John Doe</strong> chronology
                    </p>
                    <small>on Jul 29, 2016 - 8 PM</small>
                    <div class="activity-body margin-top-15">
                      <div class="well">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet, aut culpa cumque deserunt dolorem doloribus error esse fugiat libero maxime, nam praesentium quas quia quis sapiente tempora voluptatem!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="divider"></div>
            <div class="row">
              <div class="col-md-12">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object img-circle" width="50px" src="/static/imgs/avatar.jpg">
                    </a>
                  </div>
                  <div class="media-body">
                    <p class="media-heading"><strong>John Doe</strong> has pushed 6 commits
                    </p>
                    <small>on Jul 29, 2016</small>
                  </div>
                </div>
              </div>

            </div>
            <div class="divider"></div>
            <div class="row">
              <div class="col-md-12">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object img-circle" width="50px" src="/static/imgs/avatar.jpg">
                    </a>
                  </div>
                  <div class="media-body">
                    <p class="media-heading"><strong>John Doe</strong> posted message on <strong>John Smith</strong>
                      chronology </p>
                    <small>on Jul 28, 2016 - 3 PM</small>
                    <div class="activity-body margin-top-15">
                      <div class="well">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet, aut culpa cumque deserunt dolorem doloribus error esse fugiat libero maxime, nam praesentium quas quia quis sapiente tempora voluptatem!
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div class="row">
              <div class="col-md-12">
                <button class="btn btn-outlined-teal btn-block right-angular"><i class="fa fa-plus"
                                                                                 aria-hidden="true"></i> Show More
                </button>
              </div>
            </div>
          </panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Chart from '../components/Chart.vue'
  import InlineChart from '../components/InlineChart.vue'

  export default {
    data () {
      return {
        activityData: [
          {
            label: 'Activity',
            backgroundColor: '#79d679',
            borderColor: '#79d679',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40, 33, 22, 11, 12, 44, 1]
          }
        ],
        activityOptions: {
          maintainAspectRatio: true,
          responsive: true,
          scaleShowVerticalLines: false,
          showTooltips: false,
          legend: {
            display: false

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
      }
    },
    components: {
      Chart,
      InlineChart
    }
  }
</script>