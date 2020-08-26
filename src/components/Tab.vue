<template>
  <div  role="tabpanel" :class="{ 'tab-pane active': selected, 'tab-pane': !selected }" :id="id">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted: function () {
      this.pushTab()
    },
    props: ['title', 'selected'],
    computed: {
      id () {
        return this.title.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase()
      }
    },
    methods: {
      pushTab () {
        this.$nextTick(function () {
          this.$parent.tabs.push({
            id: this.id,
            title: this.title,
            selected: this.selected
          })
        })
      }
    }
  }
</script>

