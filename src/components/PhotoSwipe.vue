<template>
  <div>
    <div class="sc-gallery" ref="thumbnails">
      <figure v-for="(item, index) in items" @click.prevent="openGallery(index, $event)">
        <a :href="item.src">
          <img :src="item.src"/>
        </a>
        <figcaption>{{item.title}}</figcaption>
      </figure>
    </div>
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true" ref="gallery">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
          </button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
          </button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PhotoSwipe from 'photoswipe'
  import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'

  export default {
    props: {
      items: {
        type: Array,
        required: true
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        configuration: this.options
      }
    },
    methods: {
      openGallery (index) {
        let vm = this
        this.configuration.index = index
        this.configuration.getThumbBoundsFn = function (index) {
          let rect = $(vm.$refs.thumbnails).children()[index].getBoundingClientRect()
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        }
        // Initializes and opens PhotoSwipe
        let gallery = new PhotoSwipe(this.$refs.gallery, PhotoSwipeUIDefault, this.items, this.configuration)
        gallery.init()
      }
    }
  }
</script>

<style lang="scss">
  @import "~photoswipe/dist/photoswipe";
  @import "~photoswipe/dist/default-skin/default-skin";

  .sc-gallery {
    width: 100%;
    float: left;
  }

  .sc-gallery img {
    width: 100%;
    height: auto;
  }

  .sc-gallery figure {
    display: block;
    float: left;
    margin: 0 5px 5px 0;
    width: 150px;
  }

  .sc-gallery figcaption {
    display: none;
  }
  .pswp__caption__center{
    text-align: center;
  }
</style>
