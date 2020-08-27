<template>
  <div class="container-fluid">
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
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
    <div>
      <panel type="panel-red">
        <h3 slot="header">告警清單</h3>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr class="active">
                <th>No</th>
                <th>場域名稱</th>
                <th>基站編號</th>
                <th>告警內容</th>
                <th>嚴重性</th>
                <th>日期</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in alarms" :key="idx" @click="clickRow(item)">
                <td>{{idx}}</td>
                <td>{{item.name}}</td>
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
        <!-- <h3 slot="header">告警清單</h3> -->
        <ul class="ulGroup1">
          <li class="liGroup1">場域名稱: {{tempAlarm.name}}</li>
          <li class="liGroup1">基站編號: {{tempAlarm.enbSN}}</li>
          <li class="liGroup1">事件分類:</li>
          <li class="liGroup1">嚴重性: {{tempAlarm.degree}}</li>
          <li class="liGroup1">發生時間: {{tempAlarm.data}}</li>
        </ul>
        <ul class="ulGroup2">
          <li>事件原因</li>
          <li>事件描述</li>
        </ul>
      </panel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
        },
        {
          name: '未知場域4',
          enbSN: '0050BA-FAP-000H11485364',
          alarmContent: 'Threshold Crossed',
          degree: '高',
          date: '2020-10-03T12:00:00'
        },
        {
          name: '未知場域5',
          enbSN: '0050BA-FAP-000H11485365',
          alarmContent: 'Threshold Crossed',
          degree: '高',
          date: '2020-10-03T12:00:00'
        }
      ],
      tempAlarm: {}
    }
  },
  methods: {
    clickRow (item) {
      this.tempAlarm = item;
    }
  }
}
</script>

<style scoped>
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

  .ulGroup1 {
    display: flex;
    align-content: center;
    justify-content: space-around;
    list-style-type: none;
    padding: 0px;
  }

  .ulGroup2 {
    padding: 0px;
    list-style-type: none;
  }

  .liGroup1 {
    width: 20%;
  }

  /* li {
    border: 1px solid black;
  } */
</style>