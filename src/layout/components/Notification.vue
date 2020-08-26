<template>
  <li class="message-preview">
    <a href="#">
      <div class="media">
        <div class="pull-left ">
          <img class="media-object img-circle" :src="image" alt="">
          <div class="notification-badge" :class="notificationType.className" v-text="notificationType.title"></div>
        </div>
        <div class="media-body">
          <div class="col-md-9 col-sm-9 col-xs-9">
            <h5 class="media-heading"><strong v-text="title"></strong>
            </h5>
            <p class="small text-muted" v-text="date"></p>
            <p v-text="body"></p>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-3 icons">
            <i class="fa fa-times-circle-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
  export default {
    data () {
      return {
        types: {
          success: {
            title: 'Success',
            className: 'label label-success'
          },
          danger: {
            title: 'Danger',
            className: 'label label-danger'
          },
          info: {
            title: 'Info',
            className: 'label label-info'
          },
          warning: {
            title: 'Warning',
            className: 'label label-warning'
          }
        }
      }
    },
    props: {
      image: {
        required: true,
        type: String
      },
      title: {
        required: true,
        type: String
      },
      date: {
        required: true,
        type: String
      },
      body: {
        required: true,
        type: String
      },
      type: {
        required: true,
        type: String
      }
    },
    computed: {
      notificationType () {
        return this.types[this.type];
      }
    }
  }
</script>