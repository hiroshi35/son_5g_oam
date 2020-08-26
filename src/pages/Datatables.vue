<template>
  <div>
    <div class="container-fluid">

      <page-header title="Datatables"></page-header>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-purple">
            <h3 slot="header">Datatable </h3>
            <datatable :table-data='tableData'
                       :columns="columns"
            ></datatable>

          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-red">
            <h3 slot="header">Datatable </h3>
            <datatable :table=true>
              <table class="table table-striped ">
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
            </datatable>
          </panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Datatable from '../components/Datatable.vue'

  export default {
    data () {
      return {
        columns: [{title: 'Define'}, {title: 'Your'}, {title: 'Column Names'}, {title: 'Here'}],
        tableData: [
          ['1', 'Second', 'Third', 'Jane'],
          ['2', 'Second', 'Third', 'Fourth'],
          ['3', 'Jane', 'Third', 'Smith'],
          ['4', 'Smith', 'Third', 'Fourth'],
          ['5', 'Second', 'Third', 'Jane'],
          ['6', 'Second', 'Frank', 'Fourth'],
          ['7', 'Jane', 'Third', 'Fourth'],
          ['8', 'Smith', 'Jane', 'Smith'],
          ['9', 'Second', 'Third', 'Fourth'],
          ['10', 'Jane', 'Frank', 'Fourth'],
          ['11', 'Second', 'Third', 'Fourth'],
          ['12', 'Frank', 'Third', 'Fourth'],
          ['13', 'Second', 'Third', 'Fourth'],
          ['14', 'Smith', 'Jane', 'Smith'],
          ['15', 'Doe', 'John', 'Doe'],
          ['16', 'Second', 'Third', 'Fourth'],
          ['17', 'Frank', 'Third', 'Fourth']
        ]
      }
    },
    components: {
      Datatable
    }
  }
</script>