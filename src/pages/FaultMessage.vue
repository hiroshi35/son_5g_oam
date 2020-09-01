<template>
  <div class="container-fluid">
    <div class="form-list">
      <div class="form-group">
        <label>Field Name: </label>
        <select class="form-control">
          <option v-for="(item, idx) in fields" :key="idx">{{item}}</option>
        </select>
      </div>
      <div class="form-group">
        <label>eNB S/N: </label>
        <select class="form-control">
          <option v-for="(item, idx) in enbs" :key="idx">{{item}}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Severity: </label>
        <select class="form-control">
          <option v-for="(item, idx) in degree" :key="idx">{{item}}</option>
        </select>
      </div>
      <div class="form-group">
        <label>StartTime: </label>
        <input type="date" v-model="startTime">
      </div>
      <div class="form-group">
        <label>EndTime: </label>
        <input type="date" v-model="endTime">
      </div>
      <div class="form-group">
        <a href="#" @click="searchFM"><i class="fa fa-search fa-2x" aria-hidden="true"></i></a>
      </div>
    </div>
    <div>
      <panel type="panel-primary">
        <h3 slot="header">Alarm List</h3>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr class="active">
                <th>No</th>
                <th>Field Name</th>
                <th>eNB S/N</th>
                <th>Content</th>
                <th>Severity</th>
                <th>Date</th>
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
          <li class="liGroup1">Field Name: {{tempAlarm.name}}</li>
          <li class="liGroup1">eNB S/N: {{tempAlarm.enbSN}}</li>
          <li class="liGroup1">Event Classification:</li>
          <li class="liGroup1">Severity: {{tempAlarm.degree}}</li>
          <li class="liGroup1">OccurTime: {{tempAlarm.data}}</li>
        </ul>
        <ul class="ulGroup2">
          <li>Event Cause</li>
          <li>Event Description</li>
        </ul>
      </panel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      startTime: '',
      endTime: '',
      degree: ['High','Medium','Low'],
      enbs: [
        '0050BA-FAP-000H11485361',
        '0050BA-FAP-000H11485322',
        '0050BA-FAP-000H11485333'
      ],
      fields: [
        '700',
        '710',
        '711',
        '712'
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
    },
    searchFM () {
      console.log(this.startTime);
      console.log(this.endTime);
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC");

th, td, li, label {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
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