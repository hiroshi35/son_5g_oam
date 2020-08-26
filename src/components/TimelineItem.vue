<template>
  <li :class="{'timeline-inverted': inverted}">
    <div :class="'timeline-badge ' + badgeColor">
      <div class="icon" v-html="badgeIcon"></div>
      <div class="date">
        <small v-text="date"></small>
      </div>
    </div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h3 class="timeline-title" v-text="title"></h3>
      </div>
      <div class="timeline-body">
        <slot></slot>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      date: {
        type: String
      },
      badgeColor: {
        type: String,
        default: 'blue'
      },
      badgeIcon: {
        type: String,
        default: '<i class="fa fa-clock-o" aria-hidden="true"></i>'
      },
      inverted: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
