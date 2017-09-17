<template>
  <div class="card event-details" style="flex-basis:20%; flex-grow: 0; margin: 5px 5px;">
    <router-link class="card-link" :to="'/events/details/' + event.id">
      <img class="card-img-top" :src="imageUrl" style="width:100%">
      <div class="card-block">
        <h4 class="card-title event-name">{{event.name}}</h4>
        <div class="card-text event-text">
          <i class="material-icons" style="vertical-align:middle">date_range</i>
          {{event.startDate | formatdate}} to {{event.endDate | formatdate}} </br>
          <i class="material-icons" style="vertical-align:middle">place</i> {{event.place}}</div>
        <div class="card-text event-text">
          <i class="material-icons" style="vertical-align:middle">check</i>{{applicationOpen}}</div>
      </div>
    </router-link>
  </div>
</template>

  <script>
import moment from 'moment';
import eventsmenu from './eventsmenu.vue';
import eventinfo from './eventinfo.vue';
import eventtravel from './eventtravel.vue';
import eventparticipants from './event-participants.vue';

export default {
  data() {
    return {
      isSelected: false,
    }
  },
  props: {
    event
  },
  components: {
    eventsmenu,
    eventinfo,
    eventtravel,
    eventparticipants,
  },
  filters: {
    formatdate(value) {
      if (value) {
        return moment(value).format('DD.MM.YYYY');
      }
    }
  },
  computed: {
    applicationOpen: function() {
      let now = moment();
      if (now.isBefore(this.event.applicationEndDate)) {
        return "Application open";
      }
      else {
        return "Application closed";
      }
    },
    imageUrl: function() {
      if (this.event.parentGroupId == 35 || this.event.parentGroupId == 36 || this.event.parentGroupId == 37) {
        return 'https://www.estiem.org/GetFile.aspx?File=Images/ITProject/istanbul.jpg'
      }
      else if (this.event.parentGroupId == 85 || this.event.parentGroupId == 74) {
        return 'https://www.estiem.org/GetFile.aspx?File=Images/ITProject/izmir.jpg'
      }
      else {
        return 'https://www.estiem.org/GetFile.aspx?File=Images/ITProject/' + this.event.place + '.jpg'
      }
    }
  },
}
</script>

  <style>
.event-details {
  color: #205E44 !important;
}

.event-name {
  font-size: 20px;
}

.event-text {
  color: #625750 !important;
}

.event-details-name {
  color: #205E44;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.event-details-place {
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 0.8em;
}

.event-details-dates {
  padding-bottom: 5px;
  margin-left: 5px;
  padding-right: 5px;
  color: black;
  text-decoration: none !important;
  text-align: center;
  font-size: 0.8em;
}

.event-details-application {
  padding-bottom: 5px;
  margin-left: 5px;
  padding-right: 5px;
  color: black;
  text-decoration: none !important;
  text-align: center;
  font-size: 0.8em;
}

.event-box {
  background-color: #E8EAEA;
  border: 1px solid #bccec7;
  font-weight: bold;
  font-size: medium;
  margin-bottom: 5px;
  position: relative;
}

.event-star-button {
  right: 0;
  top: 0;
  position: absolute;
  border-color: black;
}

.selected {
  color: #E75480 !important;
}

.event-apply {
  right: 30px;
  top: 0px;
  position: absolute;
  color: #205E44;
}

@media (max-width: 600px) {
  .event-details-name {
    width: 200px;
    display: block;
    white-space: nowrap;
  }
}

#description img {
  max-width: 100%;
  width: 100% !important;
  height: auto !important;
}

#description {
  font-size: 16px !important;
}
</style>