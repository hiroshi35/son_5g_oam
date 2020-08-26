<template>
  <div>
    <div class="list-group">
      <a href="#" class="list-group-item" v-for="(task, index) in taskList" @click.prevent="completeTask(index)">
        <div class="contextual-checkbox">
          <input :id="getId(task.title, index)" class="checkbox-custom" :name="getId(task.title, index)" type="checkbox"
                 :checked="task.completed">
          <label :for="getId(task.title, index)" class="checkbox-custom-label dis-bl"
                 :class="task.completed ? 'completed' : ''"><span></span>{{task.title}}
            <small class="pull-right" :class="labels[task.label].className" v-text="labels[task.label].title"></small>
          </label>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tasks: {
        required: true,
        type: Array
      }
    },
    data () {
      return {
        taskList: this.tasks,
        labels: {
          insignificant: {
            title: 'insignificant',
            className: 'label label-success'
          },
          asap: {
            title: 'asap!',
            className: 'label label-danger'
          },
          regular: {
            title: 'regular',
            className: 'label label-info'
          },
          important: {
            title: 'important',
            className: 'label label-warning'
          }
        }
      }
    },
    methods: {
      getId (title, index) {
        return title.toLowerCase()
          .replace(/[^\w ]+/g, '')
          .replace(/ +/g, '-') + index
      },
      completeTask (index) {
        this.taskList[index].completed = !this.taskList[index].completed
      }
    }
  }
</script>

<style scoped lang="scss">
  .completed {
    text-decoration: line-through;
    .label {
      background-color: #868686 !important;
      color: #fff !important;
    }
  }

  .list-group {
    margin-bottom: 0;
  }
</style>