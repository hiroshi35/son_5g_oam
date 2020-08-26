<template>
  <div class="timeline_wrapper">
    <ul class="timeline">
      <slot></slot>
    </ul>
  </div>
</template>

<style>
  .timeline {
    list-style: none;
    padding: 20px 0 20px;
    position: relative;
  }

  .timeline:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 1px;
    background-color: #c5c5c5;
    left: 50%;
    margin-left: -1.5px;
  }

  .timeline > li {
    margin-bottom: 20px;
    position: relative;
  }

  .timeline > li:before,
  .timeline > li:after {
    content: " ";
    display: table;
  }

  .timeline > li:after {
    clear: both;
  }

  .timeline > li:before,
  .timeline > li:after {
    content: " ";
    display: table;
  }

  .timeline > li:after {
    clear: both;
  }

  .timeline > li > .timeline-panel {
    width: 46%;
    float: left;
    border: 1px solid #d4d4d4;
    border-radius: 0px;
    padding: 20px;
    position: relative;
    background: #fff;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .timeline > li > .timeline-panel:before {
    position: absolute;
    top: 26px;
    right: -15px;
    display: inline-block;
    border-top: 15px solid transparent;
    border-left: 15px solid #ccc;
    border-right: 0 solid #ccc;
    border-bottom: 15px solid transparent;
    content: " ";
  }

  .timeline > li > .timeline-panel:after {
    position: absolute;
    top: 27px;
    right: -14px;
    display: inline-block;
    border-top: 14px solid transparent;
    border-left: 14px solid #fff;
    border-right: 0 solid #fff;
    border-bottom: 14px solid transparent;
    content: " ";
  }

  .timeline > li > .timeline-badge {
    border: 2px solid #eee;

    color: #fff;
    width: 50px;
    height: 50px;
    line-height: 47px;
    font-size: 1.4em;
    text-align: center;
    position: absolute;
    top: 16px;
    left: 50%;
    margin-left: -25px;
    background-color: #999999;
    z-index: 100;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  .timeline > li > .timeline-badge > .date {
    font-size: 15px;
    font-family: Lato, sans-serif;
    font-weight: 300;
    color: #7d868c;
    text-align: left;
    position: absolute;
    top: 0;
    right: -70px;

  }
  @media only screen and (min-width: 472px) {
    .timeline > li.timeline-inverted > .timeline-badge > .date {
      text-align: right;
      color: #7d868c;
      position: absolute;
      top: 0;
      left: -110px;
      right: 50px;

    }

    .timeline > li.timeline-inverted > .timeline-panel {
      float: right;
    }

    .timeline > li.timeline-inverted > .timeline-panel:before {
      border-left-width: 0;
      border-right-width: 15px;
      left: -15px;
      right: auto;
    }

    .timeline > li.timeline-inverted > .timeline-panel:after {
      border-left-width: 0;
      border-right-width: 14px;
      left: -14px;
      right: auto;
    }
  }
  @media only screen and (max-width: 472px) {
    .timeline:before {
      top: 0;
      bottom: 0;
      position: absolute;
      content: " ";
      width: 1px;
      background-color: #c5c5c5;
      left: 70%;
      margin-left: -1.5px;
    }
    .timeline > li > .timeline-badge {
      left: 70%;
    }
    .timeline .timeline-panel{
      width: 60% !important;
    }
  }

  .timeline-badge.primary {
    background-color: #2e6da4 !important;
  }

  .timeline-badge.success {
    background-color: #3f903f !important;
  }

  .timeline-badge.warning {
    background-color: #f0ad4e !important;
  }

  .timeline-badge.danger {
    background-color: #d9534f !important;
  }

  .timeline-badge.info {
    background-color: #5bc0de !important;
  }

  .timeline-badge.blue {
    background-color: #65a4da !important;
  }

  .timeline-badge.green {
    background-color: #79d679 !important;
  }

  .timeline-badge.yellow {
    background-color: #f7bd6c !important;
  }

  .timeline-badge.red {
    background-color: #dc5e5a !important;
  }

  .timeline-badge.teal {
    background-color: #3ab39b !important;
  }

  .timeline-badge.purple {
    background-color: #976ad6 !important;
  }

  .timeline-title {
    margin-top: 0;
    color: inherit;
    font-family: Lato, sans-serif;
    font-weight: 300;
  }

  .timeline-body > p,
  .timeline-body > ul {
    margin-bottom: 0;
  }

  .timeline-body > p + p {
    margin-top: 5px;
  }
</style>
