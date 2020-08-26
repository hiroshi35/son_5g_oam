<template>
  <div>
    <div class="container-fluid">
      <page-header title="Tables"></page-header>
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-green">
            <h3 slot="header">Bordered Table</h3>
            <div class="table-responsive ">
              <table class="table table-bordered">
                <thead>
                <tr class="active">
                  <th>Page</th>
                  <th>Visits</th>
                  <th>% New Visits</th>
                  <th>Label</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>/main</td>
                  <td>200</td>
                  <td>15.3%</td>
                  <td><span class="label label-default">Default</span></td>
                </tr>
                <tr>
                  <td>/about_us</td>
                  <td>261</td>
                  <td>33.3%</td>
                  <td><span class="label label-success">Success</span></td>
                </tr>
                <tr>
                  <td>/forum</td>
                  <td>665</td>
                  <td>21.3%</td>
                  <td><span class="label label-primary">Primary</span></td>
                </tr>
                </tbody>
              </table>
            </div>
          </panel>
        </div>
        <div class="col-md-6 ">
          <panel type="panel-primary">
            <h3 slot="header">Table with Striped Rows</h3>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                <tr>
                  <th>Page</th>
                  <th>Visits</th>
                  <th>% New Visits</th>
                  <th>Label</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>/main</td>
                  <td>200</td>
                  <td>15.3%</td>
                  <td><span class="label label-default">Default</span></td>
                </tr>
                <tr>
                  <td>/about_us</td>
                  <td>261</td>
                  <td>33.3%</td>
                  <td><span class="label label-success">Success</span></td>
                </tr>
                <tr>
                  <td>/forum</td>
                  <td>665</td>
                  <td>21.3%</td>
                  <td><span class="label label-primary">Primary</span></td>
                </tr>
                </tbody>
              </table>
            </div>
          </panel>
        </div>
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-teal">
            <h3 slot="header">Basic Table</h3>
            <div class="table-responsive">
              <table class="table ">
                <thead>
                <tr>
                  <th>Page</th>
                  <th>Visits</th>
                  <th>% New Visits</th>
                  <th>Label</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>/main</td>
                  <td>200</td>
                  <td>15.3%</td>
                  <td><span class="label label-default">Default</span></td>
                </tr>
                <tr>
                  <td>/about_us</td>
                  <td>261</td>
                  <td>33.3%</td>
                  <td><span class="label label-success">Success</span></td>
                </tr>
                <tr>
                  <td>/forum</td>
                  <td>665</td>
                  <td>21.3%</td>
                  <td><span class="label label-primary">Primary</span></td>
                </tr>
                <tr>
                  <td>/blog</td>
                  <td>9516</td>
                  <td>89.3%</td>
                  <td><span class="label label-info">Info</span></td>
                </tr>
                </tbody>
              </table>
            </div>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-red">
            <h3 slot="header">Hover Table</h3>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                <tr>
                  <th>Page</th>
                  <th>Visits</th>
                  <th>% New Visits</th>
                  <th>Label</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>/main</td>
                  <td>200</td>
                  <td>15.3%</td>
                  <td><span class="label label-default">Default</span></td>
                </tr>
                <tr>
                  <td>/about_us</td>
                  <td>261</td>
                  <td>33.3%</td>
                  <td><span class="label label-success">Success</span></td>
                </tr>
                <tr>
                  <td>/forum</td>
                  <td>665</td>
                  <td>21.3%</td>
                  <td><span class="label label-primary">Primary</span></td>
                </tr>
                <tr>
                  <td>/blog.html</td>
                  <td>9516</td>
                  <td>89.3%</td>
                  <td><span class="label label-info">Info</span></td>
                </tr>

                </tbody>
              </table>
            </div>


          </panel>
        </div>
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-yellow">
            <h3 slot="header">Contextual Classes</h3>
            <div class="table-responsive">
              <table class="table ">
                <thead>
                <tr>
                  <th>Page</th>
                  <th>Visits</th>
                  <th>% New Visits</th>
                  <th>Label</th>
                </tr>
                </thead>
                <tbody>
                <tr class="active">
                  <td>/main</td>
                  <td>200</td>
                  <td>15.3%</td>
                  <td><span class="label label-default">Default</span></td>
                </tr>
                <tr class="success">
                  <td>/about_us</td>
                  <td>261</td>
                  <td>33.3%</td>
                  <td><span class="label label-success">Success</span></td>
                </tr>
                <tr>
                  <td>/forum</td>
                  <td>665</td>
                  <td>21.3%</td>
                  <td><span class="label label-primary">Primary</span></td>
                </tr>

                </tbody>
              </table>
            </div>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-orange">
            <h3 slot="header">Striped Table with Hover Effect</h3>
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                <tr>
                  <th>Page</th>
                  <th>Visits</th>
                  <th>% New Visits</th>
                  <th>Label</th>
                </tr>
                </thead>
                <tbody>
                <tr class="active">
                  <td>/main</td>
                  <td>200</td>
                  <td>15.3%</td>
                  <td><span class="label label-default">Default</span></td>
                </tr>
                <tr class="success">
                  <td>/about_us</td>
                  <td>261</td>
                  <td>33.3%</td>
                  <td><span class="label label-primary">Primary</span></td>
                </tr>
                <tr>
                  <td>/forum</td>
                  <td>665</td>
                  <td>21.3%</td>
                  <td><span class="label label-success">Success</span></td>
                </tr>
                </tbody>
              </table>
            </div>
          </panel>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </div>
</template>
