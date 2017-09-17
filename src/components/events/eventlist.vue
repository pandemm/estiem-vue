<template>
  <div style="padding: 30px 0; margin: 0 5px;">
    <b-card-group deck style="justify-content: center;">
      <template v-for="event in !searchString ? events : searchedEvents">
        <event :event="event" v-if="!event.isSelected"></event>
      </template>
    </b-card-group>
  </div>
</template>

<script>
import event from './event.vue';
import moment from 'moment';
//import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      searchString: '',
    }
  },
  props: {
    count: {
      default: 30
    },
    applicationOpen: {
      default: false,
    },
    alumni: {
      default: false,
    },
    exchanges: {
      default: false,
    },
    searchString: {
      default: ''
    }
  },
  components: {
    event
  },
  computed: {
    events() {
      let events = this.$store.getters.events
      events.sort((a, b) => {
        console.log(a.startDate - b.startDate)
        return new Date(a.startDate) - new Date(b.startDate)
      })
      if(this.applicationOpen)
      {
      events = this.getApplicationOpen(events);
      }

      events = this.filterAlumni(events);
      events = this.filterExchanges(events);
      events = events.slice(0, this.count);
      return events;
    },
    searchedEvents() {
      return this.events.filter(a => a.name.toLowerCase().includes(this.searchString.toLowerCase()));
    },

  },
  methods: {
    getApplicationOpen(events) {
      let now = moment();
      events = events.filter(e => now.isSameOrBefore(e.applicationEndDate))
      return events;
    },
    filterAlumni(events) {
      events = events.filter(e => e.eventType != 12)
      return events;
    },
    filterExchanges(events) {
      events = events.filter(e => e.eventType != 9)
      return events;
    }
  }
}
</script>

<style>

</style>