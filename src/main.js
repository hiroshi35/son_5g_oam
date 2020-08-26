// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Polyfills for ie 11 and ie 10
import 'core-js/modules/es7.array.includes'
import 'core-js/modules/es6.promise'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap-sass'

// Global components
import Panel from './components/Panel.vue'
import PageHeader from './components/PageHeader.vue'

Vue.component('Panel', Panel)
Vue.component('PageHeader', PageHeader)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

// Helpers

// eslint-disable-next-line no-extend-native
Array.prototype.remove = function (from, to) {
  let rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
