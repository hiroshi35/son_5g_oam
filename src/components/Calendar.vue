<template>
  <div class="sc-calendar">
    <div v-if="externalEvents.length || addEvents" ref="externals">
      <div class="row">
        <div class="col-md-2 sc-events">
          <h4>External Events</h4>
          <div class='fc-event' v-for="event in externalEvents" :key="event.id" :data-id="event.id"
               :data-color="event.color ? event.color : '#2e99b3'"
               :style="{backgroundColor: event.color ? event.color : '#2e99b3',borderColor: event.color ? event.color : '#2e99b3'}">
            {{event.title}}
          </div>
          <div v-show="externalEvents.length" class="divider"></div>
          <button v-show="addEvents" type="button" class="btn btn-red right-angular btn-block margin-bottom-15"
                  @click="addEvent = !addEvent">{{addEvent ? 'CANCEL ' : 'ADD EVENT '}}
            <i aria-hidden="true" class="fa" :class="addEvent ? 'fa-times' : 'fa-plus'">
          </i></button>
          <div v-show="addEvent" class="new-event">
            <h4>Add New Event</h4>
            <form action="#">
              <div v-if="!idAutoGeneration" class="form-group" :class="{'has-error' : eventIdError}"><input
                class="form-control" placeholder="#ID" v-model="eventId">
                <p v-if="eventIdError" class="help-block">ID is required</p>
              </div>
              <div class="form-group" :class="{'has-error' : eventNameError}">
                <input class="form-control" placeholder="Enter Event Name" v-model="eventName">
                <p v-if="eventNameError" class="help-block">Event Name is required</p>
              </div>
              <div class="form-group" :class="{'has-error' : eventColorError}">
                <colorpicker :icon="true" value="#2e99b3" v-model="eventColor"></colorpicker>
                <p v-if="eventColorError" class="help-block">Invalid Color</p>
              </div>
              <button type="button" class="btn btn-teal right-angular btn-block push-event-button btn-block margin-bottom-15" @click="pushEvent">ADD EVENT</button>
            </form>
          </div>
        </div>
        <div class="col-md-10">
          <div ref="calendar"></div>
        </div>
      </div>
    </div>
    <div v-if="!externalEvents.length && !addEvents" ref="calendar"></div>
  </div>
</template>


<script>
  import Colorpicker from './Colorpicker.vue'
  import 'fullcalendar'
  import 'moment'
  import 'jquery-ui/ui/widgets/draggable'

  export default {
    props: {
      options: {
        type: Object,
        default () {
          return {
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
            }
          }
        }
      },
      events: {
        type: Array
      },
      draggable: {
        type: Boolean,
        default: false
      },
      externalEvents: {
        type: Array,
        default: () => []

      },
      aspectRatio: {
        type: Number,
        default: 1.35
      },
      idAutoGeneration: {
        type: Boolean,
        default: true
      },
      deleteEvents: {
        type: Boolean,
        default: false
      },
      addEvents: {
        type: Boolean,
        default: false
      },
      onDrop: {
        type: Function,
        default: null
      },
      onResize: {
        type: Function
      },
      onDropExternal: {
        type: Function
      }
    },
    computed: {
      optionObj () {
        let obj = this.options
        let vm = this

        obj.aspectRatio = this.aspectRatio
        if (this.events) {
          obj.events = this.events
        }
        if (this.draggable) {
          obj.editable = true
          obj.droppable = true
          obj.eventDrop = function (event, dayDelta, minuteDelta, allDay, revertFunc) {
            vm.events.forEach(function (element, index, array) {
              if (event.id === element.id) {
                element.start = event.start.format()
                if (event.end) {
                  element.end = event.end.format()
                } else {
                  delete element.end
                }
                if (typeof vm.onDrop === 'function') {
                  vm.onDrop(element);
                }
              }
            })
          }
          obj.eventResize = function (event, delta, revertFunc) {
            vm.events.forEach(function (element, index, array) {
              if (event.id === element.id) {
                element.end = event.end.format()
                if (typeof vm.onResize === 'function') {
                  vm.onResize(element)
                }
              }
            })
          }

          obj.drop = function (date) {
            $(this).remove()
            let id = $(this).data('id')
            vm.$emit('eventAdded', {
              id: id,
              title: $.trim($(this).text()),
              start: date.format(),
              color: $(this).data('color')
            })
            let index = vm.getExternalEventIndexById(id)
            vm.externalEvents[index].inEvents = true
            if (typeof vm.onDropExternal === 'function') {
              vm.onDropExternal(vm.externalEvents[index])
            }
          }
        }
        obj.eventRender = function (event, element) {
          if (vm.deleteEvents) {
            element.find('.fc-bg').css('pointer-events', 'none')
            element.append('<div style=\'position:absolute;bottom:0px;right:0px;z-index: 9999;\'><button type=\'button\' class=\'btn btn-block btnDeleteEvent\'><i class=\'fa fa-times\' aria-hidden=\'true\'></i></button></div>')
            element.find('.btnDeleteEvent').click(function (e) {
              e.preventDefault()
              $(vm.$refs.calendar).fullCalendar('removeEvents', event._id)
              vm.events.remove(vm.getEventIndexById(event.id))
            })
          }
        }
        return obj
      }
    },
    mounted () {
      $(this.$refs.calendar).fullCalendar(this.optionObj)
      if (this.externalEvents) {
        this.initExternalEvents()
      }
    },
    updated () {
      this.initExternalEvents()
    },
    data () {
      return {
        addEvent: false,
        eventName: '',
        eventId: '',
        eventColor: '#2e99b3',
        eventNameError: false,
        eventColorError: false,
        eventIdError: false
      }
    },
    methods: {
      pushEvent () {
        let hasError = false
        this.eventIdError = false
        this.eventNameError = false
        this.eventColorError = false
        if (!this.idAutoGeneration && !this.eventId) {
          this.eventIdError = true
          hasError = true
        }
        if (!this.eventName) {
          this.eventNameError = true
          hasError = true
        }
        if (!this.eventColor) {
          this.eventColorError = true
          hasError = true
        } else {
          let isValidColor = /(^#[0-9A-Fa-f]{6})|(^#[0-9A-Fa-f]{3})/.test(this.eventColor)
          if (!isValidColor) {
            this.eventColorError = true
            hasError = true
          }
        }
        if (hasError) {
          return false
        }
        this.$emit('externalEventAdded', {
          id: this.idAutoGeneration ? 'id' + (new Date()).getTime() : this.eventId,
          title: this.eventName,
          color: this.eventColor
        })
        this.addEvent = false
        this.eventName = ''
        this.eventId = ''
      },
      initExternalEvents () {
        $('.sc-events .fc-event').each(function () {
          $(this).data('event', {
            id: $(this).data('id'),
            title: $.trim($(this).text()),
            stick: true,
            color: $(this).data('color')
          })
          $(this).draggable({
            zIndex: 999,
            revert: true,
            revertDuration: 0
          })
        })
      },
      getEventIndexById (id) {
        let indx = false
        this.events.forEach(function (element, index, array) {
          console.log(id, element.id);
          if (id === element.id) {
            indx = index
          }
        })
        return indx
      },
      getExternalEventIndexById (id) {
        let indx = false
        this.externalEvents.forEach(function (element, index, array) {
          if (id === element.id) {
            indx = index
          }
        })
        return indx
      }
    },
    components: {
      Colorpicker
    }
  }
</script>

<style lang="scss">
  @import "~fullcalendar/dist/fullcalendar";

  .fc-event {
    border-radius: 0px !important;
  }

  .fc-event .fc-content {
    font-size: 12px;
    font-family: Lato, sans-serif;
  }

  .fc-widget-header {
    font-family: Lato, sans-serif;
    font-weight: 300;
  }

  .fc-widget-content {
    font-family: Lato, sans-serif;
    font-weight: 300;
    font-size: 11px;
  }

  .fc-day-grid-event {
    margin: 1px 2px 0;
    padding: 4px 4px !important;
  }

  .fc-today {
    opacity: .2;
    border: none;
    background-color: #78d657 !important;
  }

  .fc-day-top {
    opacity: 1;
    background: none !important;
  }

  .fc-time-grid-event.fc-v-event.fc-event {
    border-radius: 4px;
    border: none;
    padding: 5px;
    opacity: .65;
    left: 5% !important;
    right: 5% !important;
  }

  .fc-event {
    font-size: inherit !important;
  }

  .fc td, .fc th {
    border-style: none !important;
    border-width: 1px !important;
    padding: 0 !important;
    vertical-align: top !important;
  }

  .fc-event .fc-bg {
    z-index: 1 !important;
    background: inherit !important;
    opacity: .25 !important;
  }

  .fc-time-grid-event .fc-time {
    font-weight: normal !important;
  }

  .fc-ltr .fc-h-event.fc-not-end, .fc-rtl .fc-h-event.fc-not-start {
    opacity: .65 !important;
    margin-left: 12px !important;
    padding: 5px ! important;
  }

  .fc-day-grid-event.fc-h-event.fc-event.fc-not-start.fc-end {
    opacity: .65 !important;
    margin-left: 12px !important;
    padding: 5px ! important;
  }

  .sc-events .fc-event {
    cursor: pointer;
    margin-bottom: 5px;
    padding: 2px 4px;

  }

  .fc-center h2 {
    font-family: Lato, sans-serif;
    font-weight: 300;
  }

  .sc-calendar h4 {
    font-family: Lato, sans-serif;
    font-weight: 300;
  }

  .fc-state-default {
    background: none !important;
  }

  .fc-state-down, .fc-state-active {
    background-color: #f7f7f7 !important;
    box-shadow: none !important;
  }

  .sc-events {
    position: relative;
  }

  .btnDeleteEvent {
    background: none;
    opacity: .4;
  }

  .btnDeleteEvent:hover {
    color: #fff;
    opacity: 1;
  }
</style>
