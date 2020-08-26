<template>
  <div class="side-panel">
    <div class="side-panel-header theme-default">
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-5">
          <a href="#">
            <img class="img-circle avatar" src="/static/imgs/avatar.jpg" alt="Avatar">
          </a>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-7 name-position">
          <h2>John Doe</h2>
          <h4>Full-Stack Developer</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid side-panel-body">
      <div class="row">

        <div class="col-md-12">

          <div class=" row tab-header theme-default">
            <div class="col-md-3 col-sm-3 col-xs-3"><a href="#"><i class="fa fa-reply-all" aria-hidden="true"></i></a>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3"><a href="#"><i class="fa fa-gear" aria-hidden="true"></i></a></div>
            <div class="col-md-3 col-sm-3 col-xs-3"><a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3"><a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i></a>
            </div>

          </div>
          <ul class="task-list">
            <li class="task">
              <div class="row">
                <div class="col-md-9 col-sm-9 col-xs-9 task-body">
                  <strong>JS Bug</strong>
                  <p>Master Branch</p>
                  <div class="progress progress-thin">
                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60"
                         aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span
                      class="sr-only">60% Complete</span>
                    </div>
                  </div>

                </div>
                <div class="col-md-3 col-sm-3 col-xs-3 task-label">
                  <span class="label label-danger">BUG</span>
                  <p class="small text-muted"> 9:32 AM</p>
                </div>
              </div>
            </li>
            <li class="task">
              <div class="row">
                <div class="col-md-9 col-sm-9 col-xs-9 task-body">
                  <strong>Optimize PNG</strong>
                  <p>Master Branch</p>
                  <div class="progress progress-thin">
                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80"
                         aria-valuemin="0" aria-valuemax="100" style="width: 80%;"><span
                      class="sr-only">80% Complete</span>
                    </div>
                  </div>

                </div>
                <div class="col-md-3 col-sm-3 col-xs-3 task-label">
                  <span class="label label-warning">HELP</span>
                  <p class="small text-muted"> 5:32 PM</p>
                </div>
              </div>
            </li>
            <li class="task">
              <div class="row">
                <div class="col-md-9 col-sm-9 col-xs-9 task-body">
                  <strong>New Feature</strong>
                  <p>Master Branch</p>
                  <div class="progress progress-thin">
                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                         aria-valuemax="100" style="width: 40%;"><span class="sr-only">40% Complete</span>
                    </div>
                  </div>

                </div>
                <div class="col-md-3 col-sm-3 col-xs-3 task-label">
                  <span class="label label-info">NEW</span>
                  <p class="small text-muted"> 12:32 PM</p>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
      <div @click="closePanel" class="close-side-panel theme-default">
        <i class="fa fa-angle-double-left" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closePanel () {
        this.$emit('sidePanelClosed');
      },
      leave (e) {
        let button = document.getElementById('showSidePanel');
        if (!this.$el.contains(e.target) && !button.contains(e.target)) {
          this.closePanel();
        }
      }
    },
    mounted () {
      document.addEventListener('click', this.leave, false);
    }
  }
</script>