<template>
  <div id="eventlist">
    <h2>Events</h2>
    <template v-for="event in events">
      <event :event="event" v-if="event.isSelected"></event>
    </template>
    <template v-for="event in events">
      <event :event="event" v-if="!event.isSelected"></event>
    </template>
  
  </div>
</template>

<script>
import axios from 'axios';
import event from './event.vue';
//import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      msg: 'Helloeeesworld!',
    }
  },
  // methods: {
  //   fetchevents() {
  //     axios.get('https://www.estiem.org/Internal/mvc/events/getfutureevents')
  //       .then(response => {
  //         this.events = response.data;
  //         console.log(response.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       }

  //       )
  //   }
  // },
  components: {
    event
  },
  computed: {
    events() {
      return this.$store.getters.events
    },
  },


}
</script>

<style>
  #eventlist {
    width: 800px;
  }
</style>