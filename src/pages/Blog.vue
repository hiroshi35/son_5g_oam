<template>
  <div>

    <div class="container-fluid ">
      <div class="row container-margin">
        <div class="col-md-9">
          <post title="Class and Style Bindings" author="John Doe" date="13 sep, 4:32 PM"
                :comments-number="12" :likes-number="3" category="WEB" img="/static/imgs/fall-autumn-red-season.jpg" :liked="true">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur et ex porro quia
              quos sapiente tempora! Aspernatur error harum laborum maxime nobis quas rem, sit tempora
              temporibus veritatis voluptatum?</p>
            <a class="btn btn-teal rounded" href="#">Read More...</a>
          </post>
          <post title="Transitions" author="Jane Doe" date="9 sep, 3:12 AM" :comments-number="2"
                :likes-number="13" category="DESIGN" img="/static/imgs/woodland-road-falling-leaf-natural-38537.jpeg">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur et ex porro quia
              quos sapiente tempora! Aspernatur error harum laborum maxime nobis quas rem, sit tempora
              temporibus veritatis voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolores doloribus dolorum eum iste, minima praesentium quas quasi quibusdam quos repellendus vitae, voluptates!
              Dignissimos est illum nemo nihil voluptatum! Quis, vero.</p>
            <a class="btn btn-teal rounded" href="#">Read More...</a>
          </post>
          <post title="Custom Filters" author="Frank Doe" date="8 sep, 5:19 PM" :comments-number="32"
                :likes-number="8" category="MOBILE" img="/static/imgs/pexels-photo.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur et ex porro quia
              quos sapiente tempora! Aspernatur error harum laborum maxime nobis quas rem, sit tempora
              temporibus veritatis voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, consequuntur illo inventore nesciunt odit quam ratione sit ut!
              A assumenda ex fugit impedit, nobis odio sapiente similique soluta! Consequuntur, pariatur.</p>
            <a class="btn btn-teal rounded" href="#">Read More...</a>
          </post>
          <nav>
            <ul class="pager">
              <li class="previous"><a href="#"><span aria-hidden="true">←</span> Older</a></li>
              <li class="next"><a href="#">Newer <span aria-hidden="true">→</span></a></li>
            </ul>
          </nav>
        </div>
        <div class="col-md-3">
          <panel type="panel-white">
            <h3 slot="header">Categories</h3>
            <div class="list-group blog-categories">
              <a href="#" class="list-group-item"><i class="fa fa-globe" aria-hidden="true"></i> WEB <span
                class="badge nav-badge pull-right bg-red">2</span></a>
              <a href="#" class="list-group-item"><i class="fa fa-pencil" aria-hidden="true"></i> DESIGN <span
                class="badge nav-badge pull-right bg-teal">1</span></a>
              <a href="#" class="list-group-item"><i class="fa fa-mobile" aria-hidden="true"></i> MOBILE <span
                class="badge nav-badge pull-right bg-blue">2</span></a>
              <a href="#" class="list-group-item"><i class="fa fa-terminal" aria-hidden="true"></i> PROGRAMMING <span
                class="badge nav-badge pull-right">4</span></a>

            </div>
          </panel>
          <panel type="panel-white">
            <h3 slot="header">Top Posts</h3>
            <div class="list-group top-posts">
              <a href="#" class="list-group-item"> Class and Style Bindings
                <small>by John Doe</small>
              </a>
              <a href="#" class="list-group-item"> Transitions
                <small>by Jane Doe</small>
              </a>
              <a href="#" class="list-group-item"> Custom Filters
                <small>by Frank Doe</small>
              </a>

            </div>

          </panel>
          <panel type="panel-white">
            <h3 slot="header">Top Comments</h3>
            <div class="list-group top-comments">
              <a href="#" class="list-group-item"><img class="img-circle pull-left avatar margin-right-5" src="/static/imgs/avatar.jpg" width="30px" height="30px"> John Doe <br>
                <small>Nice)</small>
              </a>
              <a href="#" class="list-group-item"><img class="img-circle pull-left avatar margin-right-5" src="/static/imgs/avatars/woman.png" width="30px" height="30px"> Jane Doe <br>
                <small>Great Article</small>
              </a>
              <a href="#" class="list-group-item"><img class="img-circle pull-left avatar margin-right-5" src="/static/imgs/avatars/man-4.png" width="30px" height="30px"> Frank Doe <br>
                <small>Very useful! Thx)</small>
              </a>
              <a href="#" class="list-group-item"><img class="img-circle pull-left avatar margin-right-5" src="/static/imgs/avatar.jpg" width="30px" height="30px"> John Doe <br>
                <small>Wow, so interesting.</small>
              </a>

            </div>

          </panel>
          <panel type="panel-white" :header="false">
            <form action="#">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Your email">
                <span class="input-group-btn">
                  <button class="btn btn-teal rounded-right" type="button">Subscribe</button>
                </span>
              </div>
            </form>
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
    }
  }
</script>