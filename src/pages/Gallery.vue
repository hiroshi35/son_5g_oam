<template>
  <div>
    <div class="container-fluid">
      <!-- Page Heading -->
      <page-header title="Gallery" small-text="PhotoSwipe"></page-header>

      <div class="row">
        <div class="col-md-12">
          <panel type="panel-white right-angular">
            <h4 slot="header">PhotoSwipe</h4>
            <photo-swipe :items="items"></photo-swipe>
          </panel>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </div>
</template>

<script>
  import PhotoSwipe from '../components/PhotoSwipe.vue'

  export default {
    data () {
      return {
        items: [
          {
            src: '/static/imgs/pexels-photo-257840.jpeg',
            w: 1280, // image width
            h: 819, // image height
            title: 'First Image',
            author: 'John Doe'
          },
          {
            src: '/static/imgs/pexels-photo-39811.jpeg', // path to image
            w: 1280, // image width
            h: 853, // image height
            title: 'Second Image',
            author: 'John Doe'
          },
          {
            src: '/static/imgs/fall-autumn-red-season.jpg', // path to image
            w: 1280, // image width
            h: 853, // image height
            title: 'Third Image',
            author: 'John Doe'
          },
          {
            src: '/static/imgs/pexels-photo.jpg', // path to image
            w: 1280, // image width
            h: 853, // image height
            title: 'Another Image',
            author: 'John Doe'
          },
          {
            src: '/static/imgs/woodland-road-falling-leaf-natural-38537.jpeg', // path to image
            w: 1280, // image width
            h: 853, // image height
            title: 'Another Image',
            author: 'John Doe'
          },
          {
            src: '/static/imgs/pexels-photo-235615.jpeg', // path to image
            w: 1280, // image width
            h: 853, // image height
            title: 'Another Image',
            author: 'John Doe'
          },
          {
            src: '/static/imgs/pexels-photo-247431.jpeg', // path to image
            w: 1280, // image width
            h: 873, // image height
            title: 'Another Image',
            author: 'John Doe'
          },
          {
            src: '/static/imgs/pexels-photo-247478.jpeg', // path to image
            w: 1280, // image width
            h: 846, // image height
            title: 'Another Image',
            author: 'John Doe'
          }
        ]
      }
    },
    components: {
      PhotoSwipe
    }
  }
</script>