<template>
  <div>
    <transition name="slide">
      <side-panel :side-panel="sidePanel" @sidePanelClosed="sidePanel = false" v-if="sidePanel"></side-panel>
    </transition>
    <nav id="nav" class="navbar navbar-inverse  navigation-bar"
         :class="staticLayout ? 'navbar-static-top' : 'navbar-fixed-top'" role="navigation" ref="navbar">
      <div class="navbar-header">
        <div class="col-md-12 profile-section">
          <a href="#">
            <div class="avatar ">
              <img class="img-circle " src="/static/imgs/avatar.jpg" height="45px" width="45px" alt="Avatar">
            </div>
            <div class="name">John Doe</div>
          </a>
          <div class="sidebar-menu">
            <div class="col-md-6 col-sm-6 sidebar-menu-item">
              <a @click.prevent="sidePanel = true" href="#" id="showSidePanel"><i class="fa fa-toggle-off" aria-hidden="true"></i></a></div>
            <div class="col-md-6 col-sm-6 sidebar-menu-item collapse-sidebar-control">
              <a @click.prevent="collapseSidebar" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a></div>
          </div>
        </div>
      </div>
      <div class="logo pull-left">
        <img src="/static/imgs/logo.png" alt="Logo" height="70px" width="auto">
      </div>
      <div class="search pull-left">
        <form action="#">
          <input type="text" placeholder="Search...">
        </form>
      </div>
      <ul class="nav navbar-right top-nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle theme-icon" data-toggle="dropdown">
            <i class="fa fa-circle-o"></i>
          </a>
          <div class="dropdown-menu color-dropdown">
            <div class="col-md-12 col-sm-12 col-xs-12"><i @click="changeTheme('default-theme')"
                                                         class="fa fa-circle-o default-theme-ico"></i></div>
            <div class="col-md-4 col-sm-4 col-xs-4"><i @click="changeTheme('orange-theme')"
                                                      class="fa fa-circle-o orange-theme-ico"></i></div>
            <div class="col-md-4 col-sm-4 col-xs-4"><i @click="changeTheme('blue-theme')"
                                                      class="fa fa-circle-o blue-theme-ico"></i></div>
            <div class="col-md-4 col-sm-4 col-xs-4"><i @click="changeTheme('purple-theme')"
                                                      class="fa fa-circle-o purple-theme-ico"></i></div>
            <div class="col-md-4 col-sm-4 col-xs-4"><i @click="changeTheme('red-theme')"
                                                      class="fa fa-circle-o red-theme-ico"></i></div>
            <div class="col-md-4 col-sm-4 col-xs-4"><i @click="changeTheme('teal-theme')"
                                                      class="fa fa-circle-o teal-theme-ico"></i></div>
            <div class="col-md-4 col-sm-4 col-xs-4"><i @click="changeTheme('brown-theme')"
                                                      class="fa fa-circle-o brown-theme-ico"></i></div>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" @click="fullPageMenu = false">
            <i class="fa fa-cog" aria-hidden="true"></i>
          </a>
          <ul class="dropdown-menu color-dropdown preventClosing">
            <li class="col-md-6 col-sm-6 col-xs-6 setting-name">STATIC LAYOUT</li>
            <li class="col-md-6 col-sm-6 col-xs-6">
              <div class="switcher-theme">
                <input type="checkbox" id="staticLayoutSwitcher" v-model="staticLayout"/>
                <label for="staticLayoutSwitcher"></label>
              </div>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <div class="badge dd-badge" v-text="messages.length"></div>
            <i class="fa fa-envelope"></i>
          </a>
          <ul class="dropdown-menu message-dropdown preventClosing">
            <message v-for="message in messages"
                     :name="message.name"
                     :time="message.time"
                     :image="message.image"
                     :body="message.body"
                     :key="message.id"
            ></message>
            <li class="message-footer">
              <div class="col-md-6 col-sm-6 col-xs-6 msg-footer-a"><a href="#">Mark All Read</a></div>
              <div class="col-md-6 col-sm-6 col-xs-6 msg-footer-a"><a href="#">Read All </a></div>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <div class="badge dd-badge" v-text="notifications.length"></div>
            <i class="fa fa-bell"></i>
          </a>
          <ul class="dropdown-menu alert-dropdown preventClosing">
            <notification
              v-for="notification in notifications"
              :image="notification.image"
              :type="notification.type"
              :title="notification.title"
              :date="notification.date"
              :body="notification.body"
              :key="notification.id"
            ></notification>
            <li class="notification-footer">
              <!-- <a class="not-footer-a" href="#">View All</a> -->
              <router-link class="not-footer-a" :to="{ name: 'faultmessage' }" exact>View All</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="profile-mobile">
            <i class="fa fa-user" aria-hidden="true"></i>
          </a>
        </li>
        <li class="pull-right">
          <a href="#" class="navbar-toggle" @click.prevent="fullPageMenu = !fullPageMenu">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <app-menu :full="fullPageMenu"></app-menu>
    </nav>
  </div>
</template>

<script>
  import SidePanel from './SidePanel.vue'
  import AppMenu from './Menu.vue'
  import Message from './components/Message.vue'
  import Notification from './components/Notification.vue'

  export default {
    props: {
      originalLayout: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      staticLayout: {
        get () {
          return this.originalLayout
        },
        set (layout) {
          this.$emit('layoutChanged', layout)
        }
      }
    },
    watch: {
      fullPageMenu (val) {
        if (val) {
          document.addEventListener('click', this.closeMenu, false);
        } else {
          document.removeEventListener('click', this.closeMenu, false);
        }
      }
    },
    data () {
      return {
        sidePanel: false,
        fullPageMenu: false,
        messages: [
          {
            id: 0,
            name: 'John Smith',
            image: '/static/imgs/avatars/man-1.png',
            time: '2:32 PM',
            body: 'Lorem ipsum dolor sit amet, consectetur...'
          },
          {
            id: 1,
            name: 'Jane Smith',
            image: '/static/imgs/avatars/woman.png',
            time: 'Yesterday at 12:32 PM',
            body: 'Lorem ipsum dolor sit amet, consectetur...'
          },
          {
            id: 2,
            name: 'Frank Doe',
            image: '/static/imgs/avatars/man-4.png',
            time: 'Yesterday at 12:32 PM',
            body: 'Lorem ipsum dolor sit amet, consectetur...'
          }
        ],
        notifications: [
          {
            id: 0,
            title: 'Notification 1',
            image: 'http://placehold.it/50x50',
            type: 'info',
            date: '12:21 PM',
            body: 'Lorem ipsum dolor sit amet, consectetur...'
          },
          {
            id: 1,
            title: 'Notification 2',
            image: 'http://placehold.it/50x50',
            type: 'success',
            date: 'Yesterday at 2:21 PM',
            body: 'Lorem ipsum dolor sit amet, consectetur...'
          },
          {
            id: 2,
            title: 'Notification 3',
            image: 'http://placehold.it/50x50',
            type: 'danger',
            date: 'Yesterday at 5:21 PM',
            body: 'Lorem ipsum dolor sit amet, consectetur...'
          }
        ]
      }
    },
    mounted () {
      $('.preventClosing').click(function (e) {
        e.stopPropagation();
      });
    },
    components: {
      SidePanel,
      AppMenu,
      Message,
      Notification
    },
    methods: {
      changeTheme (theme) {
        this.$emit('themeChanged', theme)
      },
      collapseSidebar () {
        this.$emit('sidebarUpdated')
      },
      closeMenu (e) {
        if (!document.getElementById('app-menu').contains(e.target)) {
          this.fullPageMenu = false;
        }
      }
    }
  }
</script>

<style scoped>
  .fadeOutLeft {
    -webkit-animation-name: slideOutLeft;
    animation-name: slideOutLeft;
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }

  .fadeInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }
</style>