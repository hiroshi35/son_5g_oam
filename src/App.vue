<template>
  <div :class="[{ 'sidebar-collapsed': collapsedSidebar && showNavigation, 'static-layout': staticLayout, 'main-layout': showNavigation}, theme]">
    <transition name="fade" mode="out-in">
      <page-loader v-if="pageLoader" :theme="theme"></page-loader>
    </transition>
    <app-navigation
      @themeChanged="updateTheme"
      @layoutChanged="updateLayout"
      :original-layout="staticLayout"
      @sidebarUpdated="updateSidebar"
      v-if="showNavigation"
    ></app-navigation>
    <div id="page-wrapper" :style="wrapperHeight">
      <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppNavigation from './layout/Navigation.vue';
  import AppFooter from './layout/Footer.vue';
  import PageLoader from './components/PageLoader.vue'
  import * as Cookie from 'js-cookie';

  export default {
    data () {
      return {
        collapsedSidebar: false,
        staticLayout: false,
        theme: 'default-theme',
        pageLoader: true,
        wrapperHeight: {
          minHeight: ''
        }
      }
    },
    computed: {
      showNavigation () {
        return !['not-found', 'login', 'register', 'forgot'].includes(this.$route.name)
      },
      transitionName () {
        // Remove transition for IE 11 and below
        if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
          return ''
        }
        return 'fade'
      }
    },
    methods: {
      updateTheme (theme) {
        this.theme = theme;
        Cookie.set('theme', theme);
      },
      updateLayout (layout) {
        this.staticLayout = layout;
        if (this.staticLayout) {
          this.moveDropdown();
          document.addEventListener('scroll', this.moveDropdown, false);
        } else {
          document.removeEventListener('scroll', this.moveDropdown, false);
        }
      },
      updateSidebar () {
        this.collapsedSidebar = !this.collapsedSidebar;
        Cookie.set('collapsedSidebar', this.collapsedSidebar);
      },
      moveDropdown () {
        if (window.innerWidth > 520) return;
        $('.dropdown.open .dropdown-toggle').dropdown('toggle');
        let nav = $('#nav').find('.nav');
        nav.find('.dropdown .dropdown-menu').css({ top: nav.height() - $(window).scrollTop() - nav.offset().top + 'px' });
      }
    },
    created () {
      if (Cookie.get('theme')) {
        this.theme = Cookie.get('theme');
      }
      if (Cookie.get('collapsedSidebar')) {
        this.collapsedSidebar = Cookie.get('collapsedSidebar') === 'true';
      }
    },
    mounted () {
      setTimeout(() => {
        this.pageLoader = false;
      }, 800);
      if (!this.showNavigation) return;
      this.wrapperHeight.minHeight = window.innerHeight - document.getElementById('nav').offsetHeight - document.getElementById('footer').offsetHeight + 'px';
      if (this.staticLayout) {
        document.addEventListener('scroll', this.moveDropdown, false)
      }
    },
    components: {
      AppNavigation,
      AppFooter,
      PageLoader
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/app.scss";
</style>

