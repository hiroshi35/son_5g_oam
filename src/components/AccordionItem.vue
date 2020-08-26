<template>
  <div class="panel accordion">
    <div class="panel-heading" role="tab" :id="'heading_' + id">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" :data-parent="'#' + parentId" :href="'#' + id" aria-expanded="true"
           :aria-controls="id" v-html="title">
        </a>
      </h4>
    </div>
    <div :id="id"
         :class="{'panel-collapse collapse in': active, 'panel-collapse collapse': !active }"
         role="tabpanel" :aria-labelledby="'heading_' + id">
      <div class="panel-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'active'],
    computed: {
      id () {
        return this.title.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase()
      },
      parentId () {
        return this.$parent.id
      }
    }
  }
</script>