<template>
  <div>
    <div :class="{'vertical-tabs' : vertical, 'vertical-tabs-right': right}">
      <div class="tab-nav">
        <div class="nav-wrapper">
          <ul class="nav nav-tabs" role="tablist">
            <li v-for="tab in tabs" :class="{ 'active': tab.selected}" role="presentation">
              <a :href="'#'+tab.id" :aria-controls="tab.id" role="tab" data-toggle="tab" v-html="tab.title">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      vertical: {
        type: Boolean,
        default: false
      },
      right: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        tabs: []
      }
    }
  }
</script>
<style lang="scss">
  $primary-text-color: #717171;
  $text-color: #7d868c;
  .tab-nav {

    .nav {

      display: table;
      width: 100%;
      text-align: center;
      border: none;

      li {
        display: table-cell;
        float: none;

        i {
          padding-left: 2px;
        }

      }
      a {
        color: $text-color;
        border: none;
        transition: 200ms ease all;

      }
      a:hover, a:focus {
        border: none;
        color: $primary-text-color;
        outline: none;
        background-color: inherit;

      }
      .active {

        color: $primary-text-color;
        a, a:hover, a:focus {
          border: none;
          background: none;

        }
      }

    }
  }

  .vertical-tabs {
    .tab-nav {
      padding: 0 !important;
      margin-left: -15px;
      margin-bottom: -15px;
      margin-top: -15px;
      .nav-wrapper {
        background-color: transparent;
        position: relative !important;
        float: left;
        border-top-right-radius: 0;
        border-bottom-left-radius: 5px;
        margin-right: 10px;

        .nav {

          li {
            display: block;
            a {
              font-size: 15px;
              i {
                font-size: 22px;
              }
              color: $text-color;
              &:focus, &:hover {
                color: $primary-text-color;
              }
            }
          }
          .active {
            background-color: #fff;

            a {
              color: $text-color;
              &:focus, &:hover {
                color: $primary-text-color;
              }
            }
          }
        }

      }
    }
    .tab-content {

      margin-top: 15px;
    }

  }

  .vertical-tabs-right {
    .tab-nav {

      .nav-wrapper {

        float: right;
      }
    }

  }
</style>
