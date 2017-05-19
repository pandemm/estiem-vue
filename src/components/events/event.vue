<template>
  <div class="event-box">
    <span class="event-details1">{{event.Name}}, {{event.Place}}</span></br>
    <span class="event-details2">{{event.StartDate | formatdate}} to {{event.EndDate | formatdate}} | {{applicationopen}}</span>
  </div>

</template>

<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        msg: 'Hello world!',
      }
    },
    props: {
      event
    },
    filters: {
      formatdate(value) {
        if (value) {
          return moment(value).format('DD.MM.YYYY');
        }
      }
    },
    computed: {
      // Make this return true or false and have apply now button depending on that.
      applicationopen: function () {
        let now = moment();
        if (now.isBefore(this.event.ApplicationEndDate)) {
          return 'Application open';
        }
        else {
          return 'Application closed';
        }
      }
    }

  }
</script>

<style>
.event-details1 {
    color: #205E44;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
}

.event-details2 {
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    color: black;
    text-decoration: none !important;
}

.event-box {
    background-color: #E8EAEA;
    border: 1px solid #bccec7;
    font-weight: bold;
    font-size: medium;
    margin: 10px 10px 0px 10px;
}
</style>