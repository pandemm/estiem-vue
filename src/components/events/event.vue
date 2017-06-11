  <template>
  <div :id="'event' + event.Id" class="event-box">
    <div style="display: flex;">
      <div>
        <span class="event-details-name">{{event.Name}} </span>
        <span class="event-details-place">{{event.Place}}</span>
        </br>
        <span class="event-details-dates">{{event.StartDate | formatdate}} to {{event.EndDate | formatdate}}</span>
        </br>
      </Div>
      <router-link v-if="applicationopen" :to="'/events/apply/' + event.Id">
        <v-btn class="event-apply" outline>Apply</v-btn>
      </router-link>
      <v-btn icon class="event-star-button" @click.native="toggleStar">
        <v-icon light right class="event-star text--darken-2" v-bind:class="{ selected: event.isSelected }">stars</v-icon>
      </v-btn>
    </div>
    <eventsmenu :id="event.Id"></eventsmenu>
    <eventinfo v-if="info" :description="event.Description"></eventinfo>
    <eventtravel v-if="travel"></eventtravel>
    <eventparticipants v-if="participants"></eventparticipants>
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
      msg: 'Hello world!',
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
    // Make this return true or false and have apply now button depending on that.
    applicationopen: function () {
      let now = moment();
      if (now.isBefore(this.event.ApplicationEndDate)) {
        return true;
      }
      else {
        return false;
      }
    },
    info: function () {
      if (this.$route.path.indexOf("/info/" + this.event.Id) != -1) {
        return true;
      }
      else {
        return false;
      }
    },
    travel: function () {
      if (this.$route.path.indexOf("/travel/" + this.event.Id) != -1) {
        return true;
      }
      else {
        return false;
      }
    },
    participants: function () {
      if (this.$route.path.indexOf("/participants/" + this.event.Id) != -1) {
        return true;
      }
      else {
        return false;
      }
    }
  },
  methods: {
    toggleStar: function () {
      console.log("toggleSTar");
      this.$store.dispatch('toggleSelected', this.event.Id);
    }
  }

}
</script>

  <style>
.event-details {
  display: none;
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