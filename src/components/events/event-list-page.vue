<template>
  <div style="padding: 30px 0; margin: 0 5px;">
    <b-input-group size="md" style="margin-bottom:20px; max-width: 800px; margin: auto;">
      <b-form-input v-model="searchString"></b-form-input>
      <b-input-group-button>
        <b-btn>
          <i class="material-icons" style="vertical-align:middle">map</i>
        </b-btn>
      </b-input-group-button>
      <b-input-group-button>
        <b-btn>
          <i class="material-icons" style="vertical-align:middle">search</i>
        </b-btn>
      </b-input-group-button>
    </b-input-group>
    <event-list :searchString="searchString"></event-list>
  </div>
</template>

<script>
import eventList from './eventlist.vue';
import moment from 'moment';
//import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      searchString: '',
    }
  },
  props: ['count'],
  components: {
    eventList
  },
  computed: {
    events() {
      let events = this.$store.getters.events
      events.sort((a, b) => {
        console.log(a.startDate - b.startDate)
        return new Date(a.startDate) - new Date(b.startDate)
      })
      events = events.slice(0, this.count);
      return events;
    },
    searchedEvents() {
      return this.events.filter(a => a.name.toLowerCase().includes(this.searchString.toLowerCase()));
    }
  },
}
</script>

<style>

</style>