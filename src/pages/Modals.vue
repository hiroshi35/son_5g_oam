<template>
  <div>
    <div class="container-fluid">
      <page-header title="Modals"></page-header>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-gray">
            <h3 slot="header">Bootstrap Modals</h3>
            <table class="table table-bordered">
              <thead>
              <tr>
                <th>Type</th>
                <th width="30%">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Basic</td>
                <td>
                  <button type="button" class="btn btn-outlined-default right-angular btn-block"
                          @click="modal1 = true">LAUNCH MODAL
                  </button>
                  <modal id="modal" :show='modal1' @modalClosed="modal1 = false">
                    <h3 slot="title">Modal Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias
                      consequuntur cum doloribus et facere fuga id inventore, ipsum nam non
                      nostrum optio, quaerat. At molestias reprehenderit unde vitae
                      voluptatem.</p>
                    <div slot="footer">
                      <button type="button" class="btn btn-outlined-red right-angular"
                              @click="modal1 = false">CLOSE
                      </button>
                      <button type="button" class="btn btn-outlined-blue right-angular">SAVE
                      </button>
                    </div>
                  </modal>
                </td>
              </tr>
              <tr>
                <td>Small</td>
                <td>
                  <button type="button" class="btn btn-outlined-default right-angular  btn-block"
                          @click="modal2 = true">LAUNCH MODAL
                  </button>
                  <modal id="small_modal" :small="true" :show="modal2" @modalClosed="modal2 = false">
                    <h3 slot="title">Modal Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias
                      consequuntur cum doloribus et facere fuga id inventore, ipsum nam non
                      nostrum optio, quaerat. At molestias reprehenderit unde vitae
                      voluptatem.</p>
                    <div slot="footer">
                      <button type="button" class="btn btn-outlined-red right-angular"
                              @click="modal2 = false">CLOSE
                      </button>
                      <button type="button" class="btn btn-outlined-blue right-angular">SAVE
                      </button>
                    </div>
                  </modal>
                </td>
              </tr>
              <tr>
                <td>Large Modal</td>
                <td>
                  <button type="button" class="btn btn-outlined-default right-angular btn-block"
                          @click="modal3 = true">LAUNCH MODAL
                  </button>
                  <modal id="large_modal" :large="true" :show="modal3" @modalClosed="modal3 = false">
                    <h3 slot="title">Modal Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias
                      consequuntur cum doloribus et facere fuga id inventore, ipsum nam non
                      nostrum optio, quaerat. At molestias reprehenderit unde vitae
                      voluptatem.</p>
                    <div slot="footer">
                      <button type="button" class="btn btn-outlined-red right-angular"
                              @click="modal3 = false">CLOSE
                      </button>
                      <button type="button" class="btn btn-outlined-blue right-angular">SAVE
                      </button>
                    </div>
                  </modal>
                </td>
              </tr>

              </tbody>
            </table>

          </panel>
        </div>

      </div>
    </div>
    <!-- /.container-fluid -->
  </div>
</template>

<script>
  import Modal from '../components/Modal.vue'

  export default {
    components: {
      Modal
    },
    data () {
      return {
        modal1: false,
        modal2: false,
        modal3: false
      }
    }
  }
</script>