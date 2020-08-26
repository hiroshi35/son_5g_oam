<template>
  <div :id="id" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li v-for="(item, index) in items" :data-target="'#'+id" :data-slide-to="index"
          :class="{ 'active': index === 0 }"></li>


    </ol>
    <div class="carousel-inner" role="listbox">
      <div v-for="(item, index) in items" class="item" :class="{ 'active': index === 0 }">
        <img :src="item.imgSrc">

        <div class="carousel-caption">
          {{item.caption}}
        </div>
      </div>


    </div>
    <a class="left carousel-control" :href="'#'+id" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" :href="'#'+id" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        required: true
      }
    },
    data () {
      return {
        items: []
      }
    }
  }
</script>
