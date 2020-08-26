<template>
  <div>
    <div class="container-fluid">
      <!-- Page Heading -->
      <page-header title="Calendar"></page-header>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-white right-angular">
            <h3 slot="header">
              FullCalendar
            </h3>
            <calendar :events="values.events"
                      :draggable="true"
                      :external-events="values.externalEvents"
                      :delete-events="true"
                      :add-events="true"
                      :on-drop-external="values.onDrop"
                      @eventAdded="addEvent"
                      @externalEventAdded="addExternalEvent"
            ></calendar>
          </panel>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </div>
</template>

<script>
  import Calendar from '../components/Calendar.vue'

  export default {
    methods: {
      addEvent (e) {
        this.values.events.push(e)
      },
      addExternalEvent (e) {
        this.values.externalEvents.push(e)
      }
    },
    data () {
      return {
        values: {
          events: [
            {
              id: 1,
              title: 'Event',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() - 3),
              color: '#e53935'
            },
            {
              id: 2,
              title: 'Long Event',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() - 1),
              end: new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 2),
              color: '#90caf9'
            },
            {
              id: 199,
              title: 'Lunch with Jeffrey',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 4),
              color: '#80cbc4'
            },
            {
              id: 999,
              title: 'Party',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 1),
              color: '#ffd54f'
            },
            {
              id: 3,
              title: 'Meeting',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() - 2),
              color: '#66bb6a'
            },
            {
              id: 4,
              title: 'Lunch',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() - 10),
              color: '#ba68c8'
            },
            {
              id: 5,
              title: 'Birthday Party',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 6)
            },
            {
              id: 6,
              title: 'Click for Google',
              url: 'http://google.com/',
              start: new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 10)
            }
          ],
          externalEvents: [
            {
              id: 7,
              title: 'External Event 1',
              color: '#fa7252'
            },
            {
              id: 8,
              title: 'External Event 2',
              color: '#dc5e5a'
            },
            {
              id: 9,
              title: 'External Event 3',
              color: '#3ab39b'
            },
            {
              id: 10,
              title: 'External Event 4'
            },
            {
              id: 11,
              title: 'External Event 5',
              color: '#aebd38'
            }
          ],
          onDrop: function (event) {
            console.log(event);
          }
        }
      }
    },
    components: {
      Calendar
    }
  }
</script>