<template>
  <div>
    <div class="container-fluid">
      <page-header title="Carousel"></page-header>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-white right-angular">
            <h4 slot="header">Bootstrap Carousel |
              <small>A slideshow component for cycling through elements</small>
            </h4>
            <carousel id="myCarousel">
              <carousel-item img-src="/static/imgs/carousel/1.jpg" caption="First Image"></carousel-item>
              <carousel-item img-src="/static/imgs/carousel/2.jpg" caption="Second Image"></carousel-item>
              <carousel-item img-src="/static/imgs/carousel/3.jpg" caption="Third Image"></carousel-item>
            </carousel>
          </panel>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->

  </div>
</template>

<script>
  import Carousel from '../components/Carousel.vue'
  import CarouselItem from '../components/CarouselItem.vue'

  export default {
    components: {
      Carousel,
      CarouselItem
    }
  }
</script>