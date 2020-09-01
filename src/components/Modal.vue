<template>
  <div class="modal fade" :id="id" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog" :class="{'modal-lg': large,'modal-sm': small}">
      <div class="modal-content" ref="modal">
        <div class="modal-header">
          <button type="button" class="close" @click.prevent="closeModal"><span>&times;</span></button>
          <slot name="title"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      id: {
        required: true
      },
      large: {
        default: false
      },
      small: {
        default: false
      },
      show: {
        default: false
      }
    },
    watch: {
      show (val) {
        if (val) {
          $(this.$el).modal('show')
          document.addEventListener('click', this.clickOutside, false);
          console.log('HI1');
        } else {
          $(this.$el).modal('hide')
          document.removeEventListener('click', this.clickOutside, false);
          console.log('HI2');
        }
      }
    },
    mounted () {
      if (this.show) {
        $(this.$el).modal('show')
        document.addEventListener('click', this.clickOutside, false);
        console.log('HI3');
      }
    },
    methods: {
      closeModal () {
        this.$emit('modalClosed');
        console.log('HI4');
      },
      clickOutside (e) {
        // if (!this.$refs.modal.contains(e.target)) {
        //   this.closeModal();
        //   console.log('HI5');
        // }
      }
    }
  }
</script>
