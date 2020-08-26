<template>
  <div class="row page-title">
    <div class="col-lg-12">
      <h1 class="page-header">
        {{title}}
        <small>{{smallText}}</small>
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      smallText: {
        type: String
      }
    }
  }
</script>
<style lang="scss">
  $page-background: #e8eef2;
  $blue: #65a4da;
  $text-color: #7d868c;
  .page-title {
    margin-bottom: 10px;
    background-color: lighten($page-background, 1%);
    border-bottom: 1px solid darken($page-background, 10%);
    h1 {
      padding-top: 7px;
      margin-top: 0 !important;
      padding-left: 5px;
      margin-bottom: 0;
      small{
        font-family: Lato;
        font-weight: 300;
      }
    }
    .breadcrumb {
      margin-top: 7px;
      padding-left: 0;
      margin-bottom: 0;
      background-color: transparent;

      .active {
        color: rgba($text-color, 0.9);

      }
      li {

        a {
          color: $blue;

          &:hover, &:focus {
            color: darken($blue, 8%);
            border: none;
            text-decoration: none;
          }

        }
      }

    }
  }
</style>
