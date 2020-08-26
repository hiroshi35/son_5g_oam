import Vue from 'vue'
import $ from 'jquery'

Vue.config.productionTip = false

global.$ = window.$ = window.jQuery = global.jQuery = $
