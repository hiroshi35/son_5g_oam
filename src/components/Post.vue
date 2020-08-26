<template>
  <article>
    <div class="panel panel-white article">
      <div class="panel-body">
        <div :class="'article-thumbnail ' + imgPosition" :style="thumbnail"></div>
        <h2>{{title}}</h2>
        <div>
          <small>by </small>
          <a href="#">{{author}} </a> |
          <small><i class="fa fa-clock-o" aria-hidden="true"></i> {{date}}</small>
        </div>
        <div class="article-body">
          <slot></slot>
        </div>
      </div>
      <div class="panel-footer">
        <a class="comments" href="#"><i class="fa fa-comments" aria-hidden="true"></i> {{commentsNumber}}</a> |
        <a @click.prevent="toggleLike" class="likes" :class="{'liked': likedByUser}" href="#"><i class="fa fa-heart-o"
                                                                                           aria-hidden="true"></i> {{likes}}</a>
        |
        <a href="#" class="share"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
        <div class="category pull-right">
          <a href="#">{{category}}</a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      author: {
        type: String
      },
      title: {
        type: String,
        required: true
      },
      date: {
        type: String
      },
      category: {
        type: String
      },
      commentsNumber: {
        type: Number
      },
      likesNumber: {
        type: Number
      },
      img: {
        type: String
      },
      imgPosition: {
        type: String,
        default: 'top'
      },
      liked: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        likes: this.likesNumber,
        likedByUser: this.liked
      }
    },
    computed: {
      thumbnail () {
        if (this.img) {
          if (this.img) {
            return {
              backgroundImage: 'url(' + this.img + ')',
              color: '#fff',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }
          }
        }
      }
    },
    methods: {
      toggleLike () {
        // Your code here
        if (!this.likedByUser) {
          this.likedByUser = true
          this.likes++
        } else {
          this.likedByUser = false
          this.likes--
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  $red: #dc5e5a;
  $blue: #65a4da;
  $teal: #3ab39b;
  article {
    .article {
      background-color: #fff;
      .article-body {
        margin-top: 10px;
      }
      .top {
        height: 200px;
        margin-top: -15px;
        margin-right: -15px;
        margin-left: -15px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .likes {
        color: rgba($red, .8) !important;
        &:hover {
          color: $red !important;
        }
      }
      .comments {
        color: rgba($blue, .8);
        &:hover {
          color: $blue;
        }
      }

      .share {
        color: rgba($teal, .8);
        &:hover {
          color: $teal;
        }
      }

      .liked {
        color: darken($red, 10%) !important;
        font-weight: 600;

      }
    }
  }
</style>
