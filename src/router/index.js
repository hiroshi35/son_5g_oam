/*
 |------------------------------------------------------
 |  Routes JavaScript File
 |------------------------------------------------------
 |
 | This is where all routes should be defined.
 |
 */

/**
 * We need the vue-router component to initialize the defined routes
 */
import Vue from 'vue'
import Router from 'vue-router'

/**
 * Import route components
 */
import Dashboard from '@/pages/Dashboard.vue'
import FieldList from '@/pages/FieldList.vue'
import FaultMessage from '@/pages/FaultMessage.vue'
import Animations from '@/pages/Animations.vue'
import Blog from '@/pages/Blog.vue'
import SinglePost from '@/pages/SinglePost.vue'
import Contacts from '@/pages/Contacts.vue'
import Inbox from '@/pages/Inbox.vue'
import Mail from '@/pages/Mail.vue'
import Profile from '@/pages/Profile.vue'
import Elements from '@/pages/Elements.vue'
import Forms from '@/pages/Forms.vue'
import Jumbotron from '@/pages/Jumbotron.vue'
import Tables from '@/pages/Tables.vue'
import Modals from '@/pages/Modals.vue'
import Timeline from '@/pages/Timeline.vue'
import Social from '@/pages/Social.vue'
import Widgets from '@/pages/Widgets.vue'
import Carousel from '@/pages/Carousel.vue'
import Panels from '@/pages/Panels.vue'
import Tabs from '@/pages/Tabs.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Forgot from '@/pages/Forgot.vue'
import NotFound from '@/pages/Error.vue'
import Blank from '@/pages/Blank.vue'
import Docs from '@/pages/docs/Docs.vue'
import Invoice from '@/pages/Invoice.vue'

/**
 * Lazy loaded components with external libraries
 */
const FormComponents = () => import(/* webpackChunkName: "form_components" */ '@/pages/FormComponents.vue')
const Datatables = () => import(/* webpackChunkName: "datatables" */ '@/pages/Datatables.vue')
const Charts = () => import(/* webpackChunkName: "chartsjs" */ '@/pages/Chartsjs.vue')
const Chartist = () => import(/* webpackChunkName: "chartist" */ '@/pages/Chartist.vue')
const Editors = () => import(/* webpackChunkName: "editors" */ '@/pages/Editors.vue')
const Calendar = () => import(/* webpackChunkName: "calendar" */ '@/pages/Calendar.vue')
const Gallery = () => import(/* webpackChunkName: "calendar" */ '@/pages/Gallery.vue')
const InlineCharts = () => import(/* webpackChunkName: "inline_charts" */ '@/pages/InlineCharts.vue')

Vue.use(Router);
/**
 * Define routes
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/fieldlist',
      name: 'fieldlist',
      component: FieldList
    },
    {
      path: '/faultmessage',
      name: 'faultmessage',
      component: FaultMessage
    },
    {
      path: '/animations',
      name: 'animations',
      component: Animations
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/single-post',
      name: 'single-post',
      component: SinglePost
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: Inbox
    },
    {
      path: '/mail',
      name: 'mail',
      component: Mail
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/charts',
      name: 'charts',
      component: Charts
    },
    {
      path: '/chartist',
      name: 'chartist',
      component: Chartist
    },
    {
      path: '/inline-charts',
      name: 'inline-charts',
      component: InlineCharts
    },
    {
      path: '/jumbotron',
      name: 'jumbotron',
      component: Jumbotron
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables
    },
    {
      path: '/editors',
      name: 'editors',
      component: Editors
    },
    {
      path: '/modals',
      name: 'modals',
      component: Modals
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/social',
      name: 'social',
      component: Social
    },
    {
      path: '/widgets',
      name: 'widgets',
      component: Widgets
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/datatables',
      name: 'datatables',
      component: Datatables
    },
    {
      path: '/panels',
      name: 'panels',
      component: Panels
    },
    {
      path: '/form-components',
      name: 'form-components',
      component: FormComponents
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: Forgot
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      name: 'not-found-404',
      component: NotFound
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice
    }
  ]
});
