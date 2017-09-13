<template>
  <div style="padding: 30px 0; margin: 0 5px;">
    <b-input-group size="md"  style="margin-bottom:20px;">
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
  components: {
    event
  },
  computed: {
    events() {
      let events = this.$store.getters.events
      events.sort( (a, b) => { 
        console.log(a.startDate - b.startDate)
        return new Date(a.startDate) - new Date(b.startDate) })
      return events;
    },
    searchedEvents() {
      return this.events.filter(a => a.Name.toLowerCase().includes(this.searchString.toLowerCase()));
    }
  },
}
</script>

<style>
</style>