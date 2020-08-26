<template>
  <div class="row">
    <div class="col-md-10 post">
      <panel type="panel-white right-angular" :footer="true">
        <div slot="header">
          <div class="row">
            <div class="col-md-8 col-xs-8">
              <div class="media">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object img-circle" :src="author.avatar" width="40px" height="40px">
                  </a>
                </div>
                <div class="media-body">
                  <strong><a href="#" v-text="author.name"></a></strong> {{title}}<br>
                  <small v-text="date"><i class="fa fa-clock-o" aria-hidden="true"></i></small>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-4 config">
              <div class="dropdown pull-right">
                <button class="btn btn-config dropdown-toggle" type="button" :id="'postconfig' + id" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                <ul class="dropdown-menu contextual-dropdown" :aria-labelledby="'postconfig' + id">
                  <li><a href="#"><i class="fa fa-times" aria-hidden="true"></i> Hide Post</a></li>
                  <li><a href="#"><i class="fa fa-reply" aria-hidden="true"></i> ReportPost</a></li>
                  <li><a href="#"><i class="fa fa-user-times" aria-hidden="true"></i>Unfollow</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="post-body">
          <slot></slot>
        </div>
        <div class="post-comments">
          <div class="col-md-12">
            <div class="divider"></div>
            <div class="comment" v-for="(comment, index) in comments">
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object img-circle" width="30px" :src="comment.author.avatar" height="30px">
                      </a>
                    </div>
                    <div class="media-body">
                      <p class="media-heading"><strong> <a href="#" v-html="comment.author.name"></a></strong>
                        <small class="pull-right"> {{comment.date}} <i class="fa fa-clock-o" aria-hidden="true"></i></small>
                      </p>
                      <p>{{comment.message}}</p>
                      <div>
                        <a href="#"> {{comment.likes}} <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> </a> |
                        <a href="#">Like</a> |
                        <a href="#">Reply</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="divider" v-if="index + 1 != comments.length"></div>
            </div>
          </div>
        </div>
        <div slot="footer">
          <div class="row post-footer">
            <div class="col-md-4 col-sm-4 col-xs-4">
              <button class="btn btn-green rounded"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{likes}} Likes</button>
            </div>
            <div class="col-md-8 col-sm-8 col-xs-8">
              <form>
                <div class="input-group">
                  <input type="text" class="form-control rounded-left" placeholder="Write a Comment!">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-teal right-angular dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                      <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu contextual-dropdown dropdown-menu-right">
                      <li><a href="#"><i class="fa fa-camera" aria-hidden="true"></i> Add Photo</a></li>
                      <li><a href="#"><i class="fa fa-video-camera" aria-hidden="true"></i> Add Video</a></li>
                      <li><a href="#"><i class="fa fa-calendar-o" aria-hidden="true"></i> Add Event</a></li>
                    </ul>
                    <button type="button" class="btn btn-teal rounded-right">POST</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </panel>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        required: true
      },
      author: {
        type: Object,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      comments: {
        type: Array
      },
      likes: {
        type: Number,
        default: 0
      }
    }
  }
</script>