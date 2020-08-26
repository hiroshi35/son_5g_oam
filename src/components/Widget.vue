<template>
  <div :class="'widget ' + className" :style="style">
    <div class="row">
      <div class="col-md-4 col-sm-4  col-xs-4">
        <div class="icon" v-html="icon"></div>
      </div>
      <div class="col-md-8 col-sm-8 col-xs-8">
        <div class="body">
          <div class="title">
            <h4>{{title}}</h4>
          </div>
          <div class="text">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      className: {
        type: String,
        default: 'widget-blue'
      },
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String
      },
      shadow: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      style () {
        if (this.shadow) {
          return {
            'box-shadow': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  //Colors
  @import "../assets/scss/variables";

  @mixin widget-color($color) {
    background-color: $color;
    color: #fff;
    &:hover {
      background-color: darken($color, 3%);
    }
  }

  .widget {
    padding: 15px;
    border-radius: 5px;
    transition: 200ms ease all;
    .icon {
      font-size: 6em;
      line-height: 1;

    }
    .body {
      text-align: right;
      h4 {
        color: #fff;
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: Lato, sans-serif;
        font-weight: 300;
      }
      .text {
        font-size: 32px;
        font-family: Lato, sans-serif;
        font-weight: 300;
      }

    }

  }

  .widget-blue {
    @include widget-color($blue);
  }

  .widget-red {
    @include widget-color($red);

  }

  .widget-teal {
    @include widget-color($teal);

  }

  .widget-yellow {
    @include widget-color($yellow);

  }

  .widget-orange {
    @include widget-color($orange);

  }

  .widget-green {
    @include widget-color($green);

  }

  .widget-purple {
    @include widget-color($purple);
  }

  .widget-mist {
    @include widget-color($mist);

  }

  .widget-brown {
    @include widget-color($brown);

  }

  .widget-stone {
    @include widget-color($stone);

  }

  .widget-moss {
    @include widget-color($moss);

  }

  .widget-sky {
    @include widget-color($sky);

  }

  .widget-pink {
    @include widget-color($pink);

  }

  .widget-blue-sky {
    @include widget-color($blue-sky);

  }

  .widget-blueberry {
    @include widget-color($blueberry);

  }

  .widget-strawberry {
    @include widget-color($strawberry);

  }

  .widget-shadow {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
</style>
