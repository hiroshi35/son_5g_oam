<template>
  <div>
    <table v-if="!table" ref="table" class="table table-bordered"></table>
    <div v-if="table" ref="table" class="table-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import 'datatables.net-bs';

  export default {
    props: {
      tableData: {
        type: Array,
        default () {
          return []
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      options: {
        type: Object
      },
      table: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    data () {
      return {
        dtHandle: null
      }
    },
    watch: {
      tableData (val) {
        let vm = this
        vm.dtHandle.clear()
        vm.dtHandle.rows.add(val)
        vm.dtHandle.draw()
      }
    },
    computed: {
      optionsObj () {
        if (this.options) {
          return this.options
        }
        if (this.table) {
          return {
            bAutoWidth: false
          }
        }
        return {
          responsive: false,
          columns: this.columns,
          data: this.tableData,
          bAutoWidth: false
        }
      }
    },
    mounted () {
      this.dtHandle = $(this.table ? this.$refs.table.children : this.$refs.table).DataTable(this.optionsObj)
    }
  }
</script>

<style lang="scss">
  @import "~datatables.net-bs/css/dataTables.bootstrap";
</style>