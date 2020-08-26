<template>
  <div>
    <div class="container-fluid">
      <page-header title="Widgets"></page-header>
      <div class="row">
        <div class="col-lg-3 col-md-6 margin-bottom-10">
          <widget class-name="widget-red" icon='<i class="fa fa-envelope-o" aria-hidden="true"></i>' title="Inbox">12
          </widget>
        </div>
        <div class="col-lg-3 col-md-6 margin-bottom-10">
          <widget class-name="widget-blue" icon='<i class="fa fa-cloud" aria-hidden="true"></i>' title="Weather">25 C
          </widget>
        </div>
        <div class="col-lg-3 col-md-6 margin-bottom-10">
          <widget class-name="widget-teal" icon='<i class="fa fa-battery-quarter" aria-hidden="true"></i>'
                  title="Battery">25%
          </widget>
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
        <div class="col-md-4 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-green" icon='<i class="fa fa-calendar" aria-hidden="true"></i>' title="Events">
              2
            </widget>
          </a>
        </div>
        <div class="col-md-4 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-purple" icon='<i class="fa fa-folder-o" aria-hidden="true"></i>' title="Folders">
              25
            </widget>
          </a>
        </div>
        <div class="col-md-4 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-pink" icon='<i class="fa fa-heart-o" aria-hidden="true"></i>' title="Followers">
              21
            </widget>
          </a>
        </div>
        <div class="col-md-4 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-moss" icon='<i class="fa fa-users" aria-hidden="true"></i>' title="Users">36
            </widget>
          </a>
        </div>
        <div class="col-md-4 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-blue-sky" icon='<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>'
                    title="Likes">15
            </widget>
          </a>
        </div>
        <div class="col-md-4 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-blueberry" icon='<i class="fa fa-newspaper-o" aria-hidden="true"></i>'
                    title="News">6
            </widget>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-stone" icon='<i class="fa fa-sticky-note-o" aria-hidden="true"></i>'
                    title="Notes">2
            </widget>
          </a>
        </div>
        <div class="col-md-6 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-brown" icon='<i class="fa fa-tags" aria-hidden="true"></i>' title="Tags">5
            </widget>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 margin-bottom-10">
          <widget class-name="widget-red right-angular" icon='<i class="fa fa-envelope-o" aria-hidden="true"></i>'
                  title="Inbox">12
          </widget>
        </div>
        <div class="col-md-3 margin-bottom-10">
          <widget class-name="widget-blue right-angular" icon='<i class="fa fa-cloud" aria-hidden="true"></i>'
                  title="Weather">25 C
          </widget>
        </div>
        <div class="col-md-3 margin-bottom-10">
          <widget class-name="widget-teal right-angular" icon='<i class="fa fa-battery-quarter" aria-hidden="true"></i>'
                  title="Battery">25%
          </widget>
        </div>
        <div class="col-md-3 margin-bottom-10">
          <a href="#">
            <widget class-name="widget-yellow right-angular" icon='<i class="fa fa-bell-o" aria-hidden="true"></i>'
                    title="Notification">3
            </widget>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Widget from '../components/Widget.vue'

  export default {
    components: {
      Widget
    }
  }
</script>