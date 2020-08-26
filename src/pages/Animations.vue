<template>
  <div>

    <div class="container-fluid">
      <page-header title="CSS Animations"></page-header>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-gray right-angular">
            <h3 slot="header">
              Animation.css |
              <small>A cross-browser library of CSS animations.</small>
            </h3>
            <div class="row">
              <div class="col-md-4">
                <h4><strong>Example Animation Effect</strong></h4>
                <div style="display: none">{{animations}}</div>
                <div class="well animated" :class="animations" style="text-align: center">
                  <h2>Example Div</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, deserunt, dignissimos ea et facilis ipsa itaque labore laborum maxime minus, necessitatibus odio officiis provident reiciendis repudiandae voluptate! Ab, excepturi!</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur distinctio excepturi ipsum molestiae, molestias necessitatibus quaerat quis. Ab alias, aut blanditiis debitis et illo laboriosam laudantium, libero modi suscipit tempora?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto
                    commodi consequuntur debitis deleniti dicta eaque, earum eligendi error esse, in
                    iusto magni minima obcaecati perspiciatis porro quibusdam, vero voluptate?</p>
                  <p>A ipsam necessitatibus quaerat. Autem illum ipsam laudantium modi optio
                    perferendis saepe tempore temporibus? Consequuntur, dolores dolorum eaque earum
                    ex, hic laboriosam nobis nulla odio officia ratione similique, voluptatem
                    voluptates!</p>
                  <p>Dicta ea eveniet iusto nesciunt reprehenderit. Aliquam amet asperiores aspernatur
                    aut culpa cupiditate eius laborum necessitatibus nesciunt totam. Animi ea
                    expedita iure laudantium libero magnam officia similique, sint sit veniam!</p>
                  <p>Accusamus ad, assumenda beatae, cum cumque deserunt dicta dolorem ducimus eius
                    eos error exercitationem, magnam natus non obcaecati odit officiis quae tenetur
                    veniam veritatis? Atque dicta facere molestias pariatur sapiente?</p>
                  <p>Alias assumenda blanditiis consectetur debitis dolor dolorem ducimus eius
                    explicabo facere, illo inventore, mollitia nemo nihil, non quo ut voluptate?
                    Amet esse iure laboriosam laborum rem. Illo magni reiciendis repellendus?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque beatae
                    cupiditate distinctio dolore ducimus eligendi error fugiat iure pariatur,
                    possimus quibusdam recusandae tempora totam, vero? Autem corporis eius
                    inventore.</p>

                </div>
              </div>
              <div class="col-md-8 margin-bottom-btn">
                <h4><strong>Attention Seekers</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounce')">Bounce</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('flash')">Flash</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('pulse')">Pulse</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rubberBand')">Rubber Band
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('shake')">Shake</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('swing')">Swing</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('tada')">Tada</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('wobble')">Wobble</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('jello')">Jello</button>

                <h4><strong>Bouncing Entrances</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceIn')">Bounce In</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceInDown')">Bounce In Down
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceInLeft')">Bounce In Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceInRight')">
                  Bounce In Right
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceInUp')">Bounce In Up
                </button>

                <h4><strong>Bouncing Exits</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceOut')">Bounce Out</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceOutDown')">
                  Bounce Out Down
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceOutLeft')">
                  Bounce Out Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceOutRight')">
                  Bounce Out Right
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('bounceOutUp')">Bounce Out Up
                </button>

                <h4><strong>Fading Entrances</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeIn')">Fade In</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeInDown')">Fade In Down
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeInDownBig')">
                  Fade In Down Big
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeInLeft')">Fade In Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeInLeftBig')">
                  Fade In Left Big
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeInRight')">Fade In Right
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeInRightBig')">
                  Fade In Right Big
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeInUp')">Fade In Up</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeInUpBig')">Fade In Up Big
                </button>

                <h4><strong>Fading Exits</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeOut')">Fade Out</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeOutDown')">Fade Out Down
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeOutDownBig')">
                  Fade Out Down Big
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeOutLeft')">Fade Out Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeOutLeftBig')">
                  Fade Out Left Big
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeOutRight')">Fade Out Right
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeOutRightBig')">
                  Fade Out Right Big
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeOutUp')">Fade Out Up
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('fadeOutUpBig')">
                  Fade Out Up Big
                </button>

                <h4><strong>Flippers</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('flip')">Flip</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('flipInX')">Flip In X</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('flipInY')">Flip In Y</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('flipOutX')">Flip Out X</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('flipOutY')">Flip Out Y</button>

                <h4><strong>LightSpeed</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('lightSpeedIn')">LightSpeed In
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('lightSpeedOut')">
                  LightSpeed Out
                </button>


                <h4><strong>Rotating Entrances</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateIn')">Rotate In</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateInDownLeft')">
                  Rotate In Down Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateInDownRight')">
                  Rotate In Down Right
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateInUpLeft')">
                  Rotate In Up Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateInUpRight')">
                  Rotate In Up Right
                </button>

                <h4><strong>Rotating Exits</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateOut')">Rotate Out</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateOutDownLeft')">
                  Rotate Out Down Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateOutDownRight')">
                  Rotate Out Down Right
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateOutUpLeft')">
                  Rotate Out Up Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rotateOutUpRight')">
                  Rotate Out Up Right
                </button>

                <h4><strong>Sliding Entrances</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('slideInUp')">Slide In Up
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('slideInDown')">Slide In Down
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('slideInLeft')">Slide In Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('slideInRight')">Slide In Right
                </button>

                <h4><strong>Sliding Exits</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('slideOutUp')">Slide Out Up
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('slideOutDown')">Slide Out Down
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('slideOutLeft')">Slide Out Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('slideOutRight')">
                  Slide Out Right
                </button>

                <h4><strong>Zoom Entrances</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomIn')">Zoom In</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomInDown')">Zoom In Down
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomInLeft')">Zoom In Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomInRight')">Zoom In Right
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomInUp')">Zoom In Up</button>

                <h4><strong>Zoom Exits</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomOut')">Zoom Out</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomOutDown')">Zoom Out Down
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomOutLeft')">Zoom Out Left
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomOutRight')">Zoom Out Right
                </button>
                <button class="btn btn-outlined-default right-angular" @click="animate('zoomOutUp')">Zoom Out Up
                </button>

                <h4><strong>Specials</strong></h4>
                <button class="btn btn-outlined-default right-angular" @click="animate('hinge')">Hinge</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rollIn')">Roll In</button>
                <button class="btn btn-outlined-default right-angular" @click="animate('rollOut')">Roll Out</button>

              </div>
            </div>
          </panel>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->

  </div>
</template>
<script>
  export default {
    data () {
      return {
        animations: {
          bounce: false,
          flash: false,
          pulse: false,
          rubberBand: false,
          shake: false,
          swing: false,
          tada: false,
          wobble: false,
          jello: false,
          bounceIn: false,
          bounceInDown: false,
          bounceInLeft: false,
          bounceInRight: false,
          bounceInUp: false,
          bounceOut: false,
          bounceOutDown: false,
          bounceOutLeft: false,
          bounceOutRight: false,
          bounceOutUp: false,
          fadeIn: false,
          fadeInDown: false,
          fadeInLeft: false,
          fadeInRight: false,
          fadeInUp: false,
          fadeInDownBig: false,
          fadeInLeftBig: false,
          fadeInRightBig: false,
          fadeInUpBig: false,
          fadeOut: false,
          fadeOutDown: false,
          fadeOutLeft: false,
          fadeOutRight: false,
          fadeOutUp: false,
          fadeOutDownBig: false,
          fadeOutLeftBig: false,
          fadeOutRightBig: false,
          fadeOutUpBig: false,
          flip: false,
          flipInX: false,
          flipInY: false,
          flipOutX: false,
          flipOutY: false,
          lightSpeedIn: false,
          lightSpeedOut: false,
          rotateIn: false,
          rotateInDownLeft: false,
          rotateInDownRight: false,
          rotateInUpLeft: false,
          rotateInUpRight: false,
          rotateOut: false,
          rotateOutDownLeft: false,
          rotateOutDownRight: false,
          rotateOutUpLeft: false,
          rotateOutUpRight: false,
          slideInUp: false,
          slideInDown: false,
          slideInLeft: false,
          slideInRight: false,
          slideOutUp: false,
          slideOutDown: false,
          slideOutLeft: false,
          slideOutRight: false,
          zoomIn: false,
          zoomInDown: false,
          zoomInLeft: false,
          zoomInRight: false,
          zoomInUp: false,
          zoomOut: false,
          zoomOutDown: false,
          zoomOutLeft: false,
          zoomOutRight: false,
          zoomOutUp: false,
          hinge: false,
          rollIn: false,
          rollOut: false
        }
      }
    },
    methods: {
      animate: function (name) {
        let animationName = name;
        let vm = this;
        vm.animations[animationName] = true;
        setTimeout(function () {
          vm.animations[animationName] = false;
        }, 1000);
      }
    }
  }
</script>