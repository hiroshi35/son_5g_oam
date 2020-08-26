<template>
  <div class="social-page">
    <div>
      <div>
        <jumbotron title="John Doe" img="/static/imgs/pexels-photo-257840.jpeg">
          <p>Chisinau, Moldova</p>
          <div class="social-profile-picture">
            <img src="/static/imgs/avatar.jpg" alt="">
          </div>
          <div slot="buttons">
            <button class="btn btn-outlined-orange rounded btn-follow">Follow</button>
          </div>

        </jumbotron>
        <div class="container-fluid">
          <div class="content">
            <div class="row">
              <div class="col-md-10 status">
                <panel type="panel-white right-angular" :footer="true">
                  <div slot="header">
                    <button class="btn btn-blue rounded"><i class="fa fa-camera" aria-hidden="true"></i>
                    </button>
                    <button class="btn btn-green rounded"><i class="fa fa-map-marker"
                                                             aria-hidden="true"></i></button>
                    <button class="btn btn-yellow rounded"><i class="fa fa-calendar-o"
                                                              aria-hidden="true"></i></button>

                  </div>
                  <form>

                    <textarea class="form-control" placeholder="What's on your mind?" rows="2"></textarea>

                  </form>
                  <div class="status-footer" slot="footer">

                    <button class="btn btn-teal rounded">POST</button>
                  </div>
                </panel>
              </div>
            </div>
            <social-post v-for="post in posts"
                         :author="post.author"
                         :date="post.date"
                         :title="post.title"
                         :likes="post.likes"
                         :comments="post.comments"
                         :id="post.id"
                         :key="post.id"
            >
              <div v-html="post.body"></div>
            </social-post>
          </div>
        </div>
        <!-- /.container-fluid -->

      </div>
    </div>
  </div>
</template>

<script>
  import Jumbotron from '../components/Jumbotron.vue'
  import SocialPost from '../components/SocialPost.vue'

  export default {
    components: {
      Jumbotron,
      SocialPost
    },
    data () {
      return {
        posts: [
          {
            id: 1,
            author: {
              name: 'John Smith ',
              avatar: '/static/imgs/avatars/man-1.png'
            },
            date: '4 hours ago',
            title: 'added a new photo ',
            likes: 15,
            body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><img src="/static/imgs/woodland-road-falling-leaf-natural-38537.jpeg" width="100%">',
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
          },
          {
            id: 2,
            author: {
              name: 'John Doe ',
              avatar: '/static/imgs/avatars/man-2.png'
            },
            date: '6 hours ago',
            title: 'added a new post ',
            body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolores laboriosam nesciunt nihil nisi nulla quisquam. Doloremque est facere impedit ipsam labore molestiae officiis, quam quos sint totam unde vero.</p>',
            likes: 25,
            comments: [
              {
                author: {
                  name: 'Frank Doe',
                  avatar: '/static/imgs/avatars/man-4.png'
                },
                date: '4 hours ago',
                message: 'Lorem ipsum dolor sit amet, consectetur\n adipisicing elit. Corporis debitis dignissimos nisi obcaecati )',
                likes: 5
              }
            ]
          },
          {
            id: 3,
            author: {
              name: 'John Doe',
              avatar: '/static/imgs/avatars/man-2.png'
            },
            date: '16 hours ago',
            title: 'added a new post ',
            body: '<div class="row"><div class="col-md-6"><img class="img-thumbnail" src="/static/imgs/pexels-photo-459059.jpeg" width="100%"></div> <div class="col-md-6"><img class="img-thumbnail" src="/static/imgs/pexels-photo-39811.jpeg" width="100%"></div></div>',
            likes: 25,
            comments: [
              {
                author: {
                  name: 'Frank Doe',
                  avatar: '/static/imgs/avatars/man-4.png'
                },
                date: '4 hours ago',
                message: 'Lorem ipsum dolor sit amet, consectetur\n adipisicing elit. Corporis debitis dignissimos nisi obcaecati )',
                likes: 5
              }
            ]
          }
        ]
      }
    }
  }
</script>