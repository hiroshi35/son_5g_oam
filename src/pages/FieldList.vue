<template>
  <div class="container-fluid" style="padding-top: 10px;">
    <modal id="場域警告列表" :large="true" :show="isShowModal" @modalClosed="isShowModal = false">
      <h3 slot="title">場域警告列表</h3>
      <div class="form-list">
        <div class="form-group">
          <label>場域名稱</label>
          <select class="form-control">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div class="form-group">
          <label>基站編號</label>
          <select class="form-control">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div class="form-group">
          <label>嚴重性</label>
          <select class="form-control">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div class="form-group">
          <label>起屎日期</label>
          <input type="date">
        </div>
        <div class="form-group">
          <label>結束日期</label>
          <input type="date">
        </div>
        <div class="form-group">
          <i class="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
      </div>
      <div slot="footer">
        <button type="button" class="btn btn-outlined-red right-angular"
                @click="modal3 = false">CLOSE
        </button>
        <button type="button" class="btn btn-outlined-blue right-angular">SAVE
        </button>
      </div>
      <div>
        <panel :header="false">
          <h3 slot="header">告警清單</h3>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr class="active">
                  <th>No</th>
                  <th>基站編號</th>
                  <th>告警內容</th>
                  <th>嚴重性</th>
                  <th>日期</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in alarms" :key="idx" @click="clickRow(item)">
                  <td>{{idx}}</td>
                  <td>{{item.enbSN}}</td>
                  <td>{{item.alarmContent}}</td>
                  <td>{{item.degree}}</td>
                  <td>{{item.date}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </panel>
      </div>
      <div>
        <panel :header="false">
          <ul class="ulGroup2">
            <li>事件原因:</li>
            <li>事件分類:</li>
            <li>事件描述:</li>
          </ul>
        </panel>
      </div>
      <div>
        <panel :header="false">
          <div style="display: flex; justify-content: space-around;">
            <label style="font-size: 20px">低</label>
            <label style="font-size: 20px">中</label>
            <label style="font-size: 20px">高</label>
          </div>
          <div style="display: flex; justify-content: space-around;">
            <i class="fa fa-exclamation-triangle fa-5x" style="color: #0080FF;"></i>
            <i class="fa fa-exclamation-triangle fa-5x" style="color: #fcba03;"></i>
            <i class="fa fa-exclamation-triangle fa-5x" style="color: #EA0000;"></i>
          </div>
          <div style="display: flex; justify-content: space-around;">
            <label style="font-size: 20px">0</label>
            <label style="font-size: 20px">0</label>
            <label style="font-size: 20px">0</label>
          </div>
        </panel>
      </div>
    </modal>
    <!-- <page-header title="場域列表"></page-header> -->
    <panel type="panel-green">
      <h3 slot="header">場域列表</h3>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr class="active">
              <th>場域ID</th>
              <th>場域名稱</th>
              <th>Path Loss Model</th>
              <th>基地台數量</th>
              <th>加入最愛</th>
              <th>場域告警</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in fields" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.passLoss}}</td>
              <td>{{item.enbCount}}</td>
              <td><i class="fa fa-heart fa-2x" style="color: #EA0000" v-if="item.fav"></i><i class="fa fa-heart-o fa-2x" v-if="!item.fav"></i></td>
              <td><i class="fa fa-exclamation-triangle fa-2x" style="color: #0080FF" @click.prevent="isShowModal = true"></i></td>
              <td><i class="fa fa-trash fa-2x"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </panel>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  components: {
    Modal
  },
  props: {

  },
  data () {
    return {
      isShowModal: true,
      fields: [
        {
          id: 1,
          name: 'field1',
          passLoss: '單一空間',
          fav: true,
          enbCount: 3
        },
        {
          id: 2,
          name: 'field2',
          passLoss: '單一空間',
          fav: false,
          enbCount: 4
        },
        {
          id: 3,
          name: 'field3',
          passLoss: '單一空間',
          fav: true,
          enbCount: 5
        },
        {
          id: 4,
          name: 'field4',
          passLoss: '單一空間',
          fav: false,
          enbCount: 5
        },
        {
          id: 5,
          name: 'field5',
          passLoss: '單一空間',
          fav: true,
          enbCount: 5
        }
      ],
      alarms: [
        {
          name: '未知場域1',
          enbSN: '0050BA-FAP-000H11485361',
          alarmContent: 'Threshold Crossed',
          degree: '高',
          date: '2020-10-03T12:00:00'
        },
        {
          name: '未知場域2',
          enbSN: '0050BA-FAP-000H11485362',
          alarmContent: 'Threshold Crossed',
          degree: '高',
          date: '2020-10-03T12:00:00'
        },
        {
          name: '未知場域3',
          enbSN: '0050BA-FAP-000H11485363',
          alarmContent: 'Threshold Crossed',
          degree: '高',
          date: '2020-10-03T12:00:00'
        }
      ]
    }
  },
  methods: {

  },
  mounted () {

  },
  watch: {
    isShowModal: {
      immediate: true,
      handler(newValue, oldValue) {
        // console.log("New: " + newValue);
        // console.log("Old: " + oldValue);
      }
    }
  }
}
</script>

<style lang="css">
td,th{
  text-align:center;
}

.panel-body {
  padding: 5px;
}

i {
  font-size: large;
}

.form-control {
  width:auto;
  display:inline-block;
}

.form-group {
  margin: auto;
}

.form-list {
  display: flex;
  align-content: center;
  justify-content: space-around;
  margin: 10px 15px;
  /* padding: 10px; */
}

.ulGroup2 {
  /* padding: 5px 10px; */
  /* list-style-type: none;。 */
}

</style>