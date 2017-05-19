<template>
  <div>
    <h2>Events</h2>
    <template v-for="event in events">
      <event :event="event"></event>
    </template>

  </div>
</template>

<script>
  import axios from 'axios';
  import event from './event';
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
    created() {
      console.log("creatd");
      console.log(this.events.length);
      let params = {
        eventtypes: 'all',
      };
      if (!this.events.length) {
        this.$store.dispatch('fetchEvents', params);
        console.log(this.events);
      }
      console.log("creatd");
    },


  }
</script>

<style>
.example {
  color: red;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>