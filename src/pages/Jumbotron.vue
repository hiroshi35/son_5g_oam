<template>
  <div id="page-wrapper">

    <jumbotron title="Hello World" img="/static/imgs/pexels-photo-235615.jpeg">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque dolore eligendi error, esse incidunt ipsa magni, minima molestias mollitia natus quae saepe sapiente sed similique voluptas voluptate. Impedit, iste.</p>
      <p slot="buttons">
        <button class="btn btn-outlined-orange rounded">Learn More</button>
      </p>
    </jumbotron>
    <div class="container-fluid">

      <div class="row">
        <div class="col-md-6">
          <panel type="panel-white right-angular">
            <h3 slot="header">Default Jumbotron</h3>
            <jumbotron title="Hello World">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque dolore eligendi error, esse incidunt ipsa magni, minima molestias mollitia natus quae saepe sapiente sed similique voluptas voluptate. Impedit, iste.</p>
              <p slot="buttons">
                <button class="btn btn-outlined-blue right-angular">Learn More</button>
              </p>
            </jumbotron>

          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-white right-angular">
            <h3 slot="header">Jumbotron with Image</h3>
            <jumbotron title="Hello World" img="/static/imgs/pexels-photo-459059.jpeg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque dolore eligendi error, esse incidunt ipsa magni, minima molestias mollitia natus quae saepe sapiente sed similique voluptas voluptate. Impedit, iste.</p>
              <p slot="buttons">
                <button class="btn btn-outlined-teal right-angular">Learn More</button>
              </p>
            </jumbotron>

          </panel>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->


  </div>
</template>

<script>
  import Jumbotron from '../components/Jumbotron.vue'

  export default {
    components: {
      Jumbotron
    }
  }
</script>