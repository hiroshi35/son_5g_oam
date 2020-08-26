<template>
  <div>

    <div class="container-fluid">
      <div class="row container-margin">
        <div class="col-md-12">
          <post title="Class and Style Bindings" :author="author" :date="date" :comments-number="comments.length"
                :likes-number="likes" :category="category" :img="image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur et ex porro quia quos sapiente tempora! Aspernatur error harum laborum maxime nobis quas rem, sit tempora temporibus veritatis voluptatum?</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur deleniti eligendi eos excepturi facilis fugiat fugit in ipsa ipsum minus nesciunt nobis perferendis quas, quidem quos saepe tempore ullam?</p>
            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum fugiat harum impedit laudantium libero odit quis rem sed sit?
              Aliquid eaque maxime nesciunt nobis perferendis quibusdam quidem sit. Sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus corporis dicta doloremque earum exercitationem nam numquam quae saepe, unde voluptatibus. Architecto earum explicabo fugit laboriosam,
              neque numquam rerum. Corporis, earum.</p>
            <img class="thumbnail pull-left margin-right-5 margin-bottom-0" src="/static/imgs/pexels-photo-257840.jpeg" width="260px" height="auto" alt="Img">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos esse iste qui. Consectetur dolores, explicabo iste iusto natus nostrum nulla qui quo velit voluptate!
              Aperiam dicta excepturi ipsam nam obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, consequuntur culpa exercitationem iste nam rerum?
              Eius harum inventore nostrum, perferendis quia quisquam ratione reiciendis repudiandae veritatis.
              Dolores eligendi qui voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              A harum incidunt modi optio quidem sunt voluptas. Ab culpa dignissimos dolores eligendi enim nesciunt nulla sapiente.
              Deleniti facilis iste ullam unde!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ab animi autem culpa delectus deserunt, ea eligendi esse ex facilis fuga illo minus nobis quam qui quidem quos, reiciendis sed vero.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at culpa dolore, dolorum ducimus eius eligendi enim excepturi fuga fugiat itaque magnam modi numquam, quo rem sint tempora temporibus vel?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi molestias quia totam. Alias asperiores delectus deserunt eaque ex fuga, iure laborum laudantium maxime non, odio praesentium ratione unde voluptatem voluptates!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aut dignissimos eveniet ex fugit id inventore, labore magni obcaecati placeat, praesentium quidem sit vero voluptas! Eos impedit iste quae?
            </p>
            <h4>How to do this?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci corporis deserunt exercitationem hic illo illum itaque labore, laboriosam magnam magni, minus nam nemo non quibusdam quod suscipit vel voluptates.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa itaque quo reiciendis voluptas! Eligendi harum mollitia nulla possimus quis. Aliquam commodi distinctio esse facilis, laboriosam qui quia vitae voluptatibus!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo officia reiciendis? Accusantium assumenda cumque dicta doloremque ducimus eos incidunt molestiae necessitatibus nulla officia, quaerat, quidem sequi tempora velit, voluptate.</p>
          </post>
          <panel type="panel-white" :footer="true">
            <h4 slot="header">Comments</h4>
            <div class="post-comments">
              <div class="col-md-12">
                <div class="comment" v-for="(comment, index) in comments">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
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
                  <div class="divider" v-if="index + 1 != comments.length"></div>
                </div>
                <button class="btn btn-outlined-teal btn-block margin-top-15"><i class="fa fa-plus" aria-hidden="true"></i>
                  More Comments
                </button>
              </div>
            </div>
            <div slot="footer">
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
          </panel>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->

  </div>
</template>

<script>
  import Post from '../components/Post.vue'

  export default {
    components: {
      Post
    },
    data () {
      return {
        author: 'John Doe',
        likes: 4,
        date: '13 sep, 4:32 PM',
        image: '/static/imgs/pexels-photo-39811.jpeg',
        category: 'WEB',
        comments: [
          {
            author: {
              name: 'Frank Doe',
              avatar: '/static/imgs/avatars/man-4.png'
            },
            date: '3 hours ago',
            message: 'Lorem ipsum dolor sit amet, consectetur\n adipisicing elit. Corporis debitis dignissimos nisi obcaecati )',
            likes: 5
          },
          {
            author: {
              name: 'Sam Doe',
              avatar: '/static/imgs/avatars/man-7.png'
            },
            date: '2 hours ago',
            message: 'Lorem ipsum dolor sit amet, consectetur\n adipisicing elit. Corporis debitis dignissimos nisi obcaecati )',
            likes: 5
          }
        ]
      }
    }
  }
</script>