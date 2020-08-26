<template>
  <div>
    <div class="container-fluid">
      <page-header title="Inline Chart"></page-header>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-primary">
            <h3 slot="header">Peity Charts |
              <small>Perfect library for inline graphics visualization data</small>
            </h3>
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                <tr class="active">
                  <th>Charts</th>
                  <th>Type</th>
                  <th>Code</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.2/5</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="donut" :options="{radius:14,fill:['#4cb5f5','#fff']}">3/5</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="donut" :options="{radius:14,fill:['#aebd38','#fff']}">1/5</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="donut" :options="{radius:14,fill:['#4d648d','#fff']}">2/5</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="donut" :options="{radius:14,fill:['#976ad6','#fff']}">4.8/5</inline-chart>
                    </div>
                  </td>
                  <td>Donut</td>
                  <td><code>&lt;inline-chart type="donut" :options="{radius:14,fill:['#fa7252','#fff4dd']}"&gt;3/5&lt;/inline-chart&gt;</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="pie" :options="{radius:14,fill:['#fa7252','#fff4dd']}">4.2/5</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="pie" :options="{radius:14,fill:['#4cb5f5','#fff']}">3/5</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="pie" :options="{radius:14,fill:['#aebd38','#fff']}">1/5</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="pie" :options="{radius:14,fill:['#4d648d','#fff']}">2/5</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="pie" :options="{radius:14,fill:['#976ad6','#fff']}">4.8/5</inline-chart>
                    </div>

                  </td>
                  <td>Pie</td>
                  <td><code>&lt;inline-chart type="pie" :options="{radius:14,fill:['#fa7252','#fff4dd']}"&gt;3/5&lt;/inline-chart&gt;</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="bar" :options="{fill:['#fa7252','#fff4dd']}">4.2/5,2,5,6,1,2,5,6,7,8,12
                      </inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="bar" :options="{fill:['#4cb5f5','#fff']}">3/5,6,7,2,6,7,1,2,5,6,7,8
                      </inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="bar" :options="{fill:['#aebd38','#fff']}">1/5,5,2,5,6,7,1,2,22,12,12,2
                      </inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="bar" :options="{fill:['#4d648d','#fff']}">5,6,2,6,7,8,1,2,3,4,5,6,7
                      </inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="bar" :options="{fill:['#976ad6','#fff']}">4.8/5,7,8,2,4,5,6,7</inline-chart>
                    </div>
                  </td>
                  <td>Bar</td>
                  <td><code>&lt;inline-chart type="bar" :options="{fill:['#976ad6']}"&gt;8,2,4,5,6,7&lt;/inline-chart&gt;</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="line" :options="{fill:['#fa7252']}">4.2/5,2,5,6,1,2,5,6,7,8,12</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="line" :options="{fill:['#4cb5f5']}">3/5,6,7,2,6,7,1,2,5,6,7,8</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="line" :options="{fill:['#aebd38']}">1/5,5,2,5,6,7,1,2,22,12,12,2
                      </inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="line" :options="{fill:['#4d648d']}">5,6,2,6,7,8,1,2,3,4,5,6,7</inline-chart>
                    </div>
                    <div class="col-md-2 margin-bottom-10">
                      <inline-chart type="line" :options="{fill:['#976ad6']}">4.8/5,7,8,2,4,5,6,7</inline-chart>
                    </div>
                  </td>
                  <td>Line</td>
                  <td><code>&lt;inline-chart type="line" :options="{fill:['#976ad6']}"&gt;8,2,4,5,6,7&lt;/inline-chart&gt;</code>
                  </td>
                </tr>
                </tbody>
              </table>
              <a href="https://github.com/benpickles/peity" class="btn btn-outlined-default right-angular"><i
                class="fa fa-github" aria-hidden="true"></i> View on GitHub </a>
            </div>
          </panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InlineChart from '../components/InlineChart.vue'

  export default {
    components: {
      InlineChart
    }
  }
</script>