<template>
  <div id="app-menu" class="collapse navbar-collapse menu" :class="{'full-page': full}">
    <div class="sidebar-wrapper side-nav">
      <div>
        <div class="menu-search" v-if="showSearch">
          <form action="#">
            <input type="text" placeholder="Search...">
          </form>
        </div>
      </div>
      <div class="sidebar-group">
        <h5 class="center-block">PAGES</h5>
        <ul class="nav navbar-nav ">
          <li>
            <router-link :to="{ name: 'dashboard' }" exact>
              <i class="fa fa-fw fa-dashboard"></i> Dashboard
            </router-link>
            <router-link :to="{ name: 'fieldlist' }" exact>
              <i class="fa fa-fw fa-list"></i> FieldList
            </router-link>
            <router-link :to="{ name: 'faultmessage' }" exact>
              <i class="fa fa-fw fa-exclamation-triangle"></i> Fault Message
            </router-link>
          </li>
          <li>
            <a href="javascript:;" class="collapsed" data-toggle="collapse" data-target="#social">
              <i class="fa fa-fw fa-users" aria-hidden="true"></i> Social <i
              class="fa fa-fw fa-angle-left pull-right dropdown-arrow"></i>
              <span class="badge nav-badge pull-right bg-moss">3</span>
            </a>
            <ul id="social" class="collapse">
              <li>
                <router-link :to="{ name: 'profile' }">
                  <i class="fa fa-fw fa-user" aria-hidden="true"></i> Profile
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'contacts' }">
                  <i class="fa fa-fw fa-th-large" aria-hidden="true"></i> Contacts
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'social' }">
                  <i class="fa fa-fw fa-globe" aria-hidden="true"></i> Social Feed
                </router-link>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript:;" class="collapsed" data-toggle="collapse" data-target="#blog">
              <i class="fa fa-pencil" aria-hidden="true"></i> Blog <i
              class="fa fa-fw fa-angle-left pull-right dropdown-arrow"></i>
              <span class="badge nav-badge pull-right bg-purple">2</span>
            </a>
            <ul id="blog" class="collapse">
              <li>
                <router-link :to="{ name: 'blog' }">
                  <i class="fa fa-fw fa-columns" aria-hidden="true"></i> Posts
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'single-post' }">
                  <i class="fa fa-fw fa-list-alt" aria-hidden="true"></i> Single Post
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="collapsed" data-toggle="collapse" data-target="#mailbox">
              <i class="fa fa-fw fa-envelope-o" aria-hidden="true"></i> Mailbox <i
              class="fa fa-fw fa-angle-left pull-right dropdown-arrow"></i>
              <span class="badge nav-badge pull-right bg-yellow">2</span>
            </a>
            <ul id="mailbox" class="collapse">
              <li>
                <router-link :to="{ name: 'inbox' }">
                  <i class="fa fa-fw fa-inbox" aria-hidden="true"></i> Inbox
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'mail' }">
                  <i class="fa fa-fw fa-list-alt" aria-hidden="true"></i> Mail
                </router-link>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript:;" class="collapsed" data-toggle="collapse" data-target="#tables">
              <i class="fa fa-fw fa-table"></i> Tables <i class="fa fa-fw fa-angle-left pull-right dropdown-arrow"></i>
              <span class="badge nav-badge pull-right bg-blue">2</span>
            </a>
            <ul id="tables" class="collapse">
              <li>
                <router-link :to="{ name: 'tables' }">
                  <i class="fa fa-fw fa-bars" aria-hidden="true"></i> Tables
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'datatables' }">
                  <i class="fa fa-fw fa-th" aria-hidden="true"></i> Datatables
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'forms' }">
              <i class="fa fa-fw fa-edit"></i> Forms
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'invoice' }">
              <i class="fa fa-fw fa-dollar"></i> Invoice
              <span class="badge nav-badge margin-left-5 bg-teal">new</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'elements' }">
              <i class="fa fa-fw fa-desktop"></i> Bootstrap Elements
            </router-link>
          </li>
          <li>
            <a href="javascript:;" class="collapsed" data-toggle="collapse" data-target="#other-pages">
              <i class="fa fa-fw fa-files-o" aria-hidden="true"></i> Other Pages <i
              class="fa fa-fw fa-angle-left pull-right dropdown-arrow"></i>
              <span class="badge nav-badge pull-right theme-default">4</span>
            </a>
            <ul id="other-pages" class="collapse">
              <li>
                <a href="/login"><i class="fa fa-fw fa-sign-in"></i> Login Page</a>
              </li>
              <li>
                <a href="/register">
                  <i class="fa fa-fw fa-user-plus" aria-hidden="true"></i> Register Page
                </a>
              </li>
              <li>
                <a href="/not-found">
                  <i class="fa fa-fw fa-exclamation" aria-hidden="true"></i> 404 Page
                </a>
              </li>
              <li>
                <router-link :to="{ name: 'blank' }">
                  <i class="fa fa-fw fa-file"></i> Blank Page
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'animations' }">
              <i class="fa fa-fw fa-spinner" aria-hidden="true"></i> CSS Animations
            </router-link>
          </li>
        </ul>
      </div>
      <div class="sidebar-group">
        <h5 class="center-block">COMPONENTS</h5>
        <ul class="nav navbar-nav ">
          <li>
            <router-link :to="{ name: 'panels' }">
              <i class="fa fa-fw fa-calendar-o"></i> Panels
            </router-link>
          </li>
          <li>
            <a href="javascript:;" class="collapsed" data-toggle="collapse" data-target="#charts">
              <i class="fa fa-fw fa-area-chart"></i> Charts <i
              class="fa fa-fw fa-angle-left pull-right dropdown-arrow"></i>
              <span class="badge nav-badge pull-right bg-teal">3</span>
            </a>
            <ul id="charts" class="collapse">
              <li>
                <router-link :to="{ name: 'charts' }">
                  <i class="fa fa-fw fa-pie-chart" aria-hidden="true"></i> Chart.js
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'chartist' }">
                  <i class="fa fa-fw fa-bar-chart" aria-hidden="true"></i> Chartist
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'inline-charts' }">
                  <i class="fa fa-fw fa-area-chart" aria-hidden="true"></i> Inline Charts
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;" class="collapsed" data-toggle="collapse" data-target="#elements">
              <i class="fa fa-cogs" aria-hidden="true"></i> UI Elements <i
              class="fa fa-fw fa-angle-left pull-right dropdown-arrow"></i>
              <span class="badge nav-badge pull-right bg-red">4</span>
            </a>
            <ul id="elements" class="collapse">
              <li>
                <router-link :to="{ name: 'modals' }">
                  <i class="fa fa-fw fa-credit-card" aria-hidden="true"></i> Modals
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'tabs' }">
                  <i class="fa fa-fw fa-list" aria-hidden="true"></i> Tabs
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'carousel' }">
                  <i class="fa fa-fw fa-arrows-h" aria-hidden="true"></i> Carousel
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'jumbotron' }">
                  <i class="fa fa-fw fa-indent" aria-hidden="true"></i> Jumbotron
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'timeline' }">
              <i class="fa fa-fw fa-clock-o" aria-hidden="true"></i> Timeline
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'form-components' }">
              <i class="fa fa-fw fa-paper-plane-o" aria-hidden="true"></i> Form Components
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'widgets' }">
              <i class="fa fa-fw fa-lightbulb-o" aria-hidden="true"></i> Widgets
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'editors' }">
              <i class="fa fa-fw fa-code" aria-hidden="true"></i> Editors
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'gallery' }">
              <i class="fa fa-fw fa-picture-o" aria-hidden="true"></i> Gallery
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'calendar' }">
              <i class="fa fa-fw fa-calendar" aria-hidden="true"></i> Calendar
            </router-link>
          </li>
        </ul>
      </div>
      <div class="sidebar-group">
        <h5 class="center-block">DOCS</h5>
        <ul class="nav navbar-nav ">
          <li>
            <router-link :to="{ name: 'docs' }">
              <i class="fa fa-fw fa-columns"></i> Docs
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import 'jquery-mousewheel';
  import 'malihu-custom-scrollbar-plugin'

  export default {
    props: {
      full: {
        default: false
      }
    },
    data () {
      return {
        showSearch: false
      }
    },
    methods: {
      checkSearch () {
        this.showSearch = document.documentElement.clientWidth <= 767;
      }
    },
    mounted () {
      this.checkSearch();
      window.addEventListener('resize', this.checkSearch);
      // Custom scrollbar for menu
      $('.side-nav').mCustomScrollbar({
        theme: 'minimal',
        scrollInertia: 300
      });
    }
  }
</script>

<style lang="scss">
  @import "~malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar";
</style>