<template>
  <div>
    <panel :header="false">
      <div class="contact">
        <div class="contact-avatar">
          <img class="img-circle center-block" :src="image" width="70px" height="70px">
        </div>
        <div class="row">
          <div class="col-md-12">
            <h3>{{name}}</h3>
            <small class="margin-bottom-10 dis-bl" v-text="title"></small>
            <div class="social-buttons">
              <a href="#" class="btn  btn-fb rounded"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="#" class="btn  btn-gplus rounded"><i class="fa fa-google" aria-hidden="true"></i></a>
              <a href="#" class="btn  btn-twitter rounded"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>

            <div class="btn-group btn-group-outlined-margin btn-group-xs" role="group" aria-label="...">
              <button type="button" class="btn btn-outlined-default rounded-left">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                Send A Message
              </button>
              <button type="button" class="btn btn-outlined-default rounded-right">View Profile <i class="fa fa-user"
                                                                                                   aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
  import Panel from './Panel.vue'

  export default {
    components: {
      Panel
    },
    props: {
      name: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    },
    data () {
      return {}
    }
  }
</script>