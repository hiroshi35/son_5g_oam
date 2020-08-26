<template>
  <div>

    <div class="container-fluid">
      <page-header title="Form Components"></page-header>
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-blue-sky">
            <h3 slot="header">Select2</h3>
            <h4>Select</h4>
            <v-select2 :data="{laravel: 'Laravel', gulp: 'Gulp', sass: 'Sass'}"></v-select2>
            <div class="divider"></div>
            <h4>Placeholder</h4>
            <v-select2 :data="{laravel: 'Laravel', gulp: 'Gulp', sass: 'Sass'}" placeholder="Custom Placeholder"></v-select2>
            <div class="divider"></div>
            <h4>Disabled Search</h4>
            <v-select2 :data="{laravel: 'Laravel', gulp: 'Gulp', sass: 'Sass'}" :search="false"></v-select2>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-red">
            <h3 slot="header">DateTimePicker</h3>
            <div class="row">
              <div class="col-md-6">
                <h4>Default Datetimepicker</h4>
                <datepicker v-model="date"></datepicker>
              </div>
              <div class="col-md-6">
                <h4>With icon</h4>
                <datepicker :icon="true"></datepicker>
              </div>
            </div>
            <div class="divider"></div>
            <h4>Custom Format</h4>
            <datepicker :icon="true" format="DD-MM-YYYY"></datepicker>
            <div class="divider"></div>
            <h4>Custom Icon</h4>
            <datepicker :icon="true" format="LT" custom-icon='<i class="fa fa-clock-o" aria-hidden="true"></i>'></datepicker>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-teal">
            <h3 slot="header">Color Picker</h3>
            <div class="row">
              <div class="col-md-6">
                <h4>Default Color Picker</h4>
                <colorpicker v-model="color1"></colorpicker>
              </div>
              <div class="col-md-6">
                <h4>Input Group Addon</h4>
                <colorpicker :icon="true" v-model="color2 "></colorpicker>
              </div>
            </div>
          </panel>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </div>
</template>

<script>
  import Colorpicker from '../components/Colorpicker.vue'
  import Datepicker from '../components/Datepicker.vue'
  import VSelect2 from '../components/VSelect2.vue'

  export default {
    components: {
      Colorpicker,
      Datepicker,
      VSelect2
    },
    data () {
      return {
        date: '02-02-2018 12:21',
        color1: '#fa7252',
        color2: '#65a4da'
      }
    }
  }
</script>