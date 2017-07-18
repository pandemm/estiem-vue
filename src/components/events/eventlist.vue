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
import event from './event.vue';
//import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      msg: 'Helloeeesworld!',
    }
  },
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
</style>