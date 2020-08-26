<template>
  <div>
    <div class="container-fluid">
      <page-header title="Timeline"></page-header>
      <div class="row">
        <div class="col-md-12">
          <timeline>
            <timeline-item title="Have a meeting with Will" date="1 hour ago" badge-color="green"
                           badge-icon='<i class="fa fa-calendar-check-o" aria-hidden="true"></i>'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur consequuntur eveniet id in laboriosam nisi quaerat quas quia repellendus. Assumenda incidunt labore nesciunt nihil, nostrum quis repellendus. Fugit, voluptas.
              </p>
              <button class="btn btn-outlined-teal right-angular margin-top-10">Add Event</button>

            </timeline-item>
            <timeline-item title="Break" date="2 hours ago" :inverted="true">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate eveniet magni maxime! Consectetur cupiditate dolorem, facere ipsum nobis officiis quaerat quos. Aspernatur et nam natus nisi voluptas. Nulla, repudiandae.
              </p>

            </timeline-item>
            <timeline-item title="Send Code to Mike" date="Yesterday" badge-color="red"
                           badge-icon='<i class="fa fa-code" aria-hidden="true"></i>'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis dolorem esse hic ratione? Aspernatur atque doloremque enim, ex ipsum iste magnam nihil possimus quas qui rem sequi veritatis voluptatum!
              </p>
            </timeline-item>
            <timeline-item title="Recharge Batteries" date="30.04.2016" :inverted="true"
                           badge-icon='<i class="fa fa-battery-quarter" aria-hidden="true"></i>' badge-class="purple">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum laudantium magni possimus repellat voluptas! Dolore et in ipsa libero nihil rem sapiente sint tempora voluptatum. Aliquam aspernatur facere officia repellat!
            </timeline-item>
            <timeline-item title="Deadline" date="14.04.2016" badge-color="yellow">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate eveniet magni maxime! Consectetur cupiditate dolorem, facere ipsum nobis officiis quaerat quos. Aspernatur et nam natus nisi voluptas. Nulla, repudiandae.
              </p>
              <div class="row">
                <div class="col-md-12">
                  <button class="btn btn-outlined-yellow right-angular margin-top-10 btn-block">Tasks</button>
                </div>
              </div>

            </timeline-item>
          </timeline>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->

  </div>
</template>

<script>
  import Timeline from '../components/Timeline.vue'
  import TimelineItem from '../components/TimelineItem.vue'

  export default {
    components: {
      Timeline,
      TimelineItem
    }
  }
</script>
