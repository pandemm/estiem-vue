<template>
  <div class="homepage">
      <h2 style="text-align:center;">Apply now for: </h2>
      <event-list :count="4" :application-open="true"></event-list>
  </div>
</template>

<script>
import eventList from '../events/eventlist.vue'
export default {
  data() {
    return {
      msg: 'Welcome to the new ESTIEM'
    }
  },
  components: {
      eventList
  }
}
</script>

<style>
.homepage {
    padding-top: 10px;
}
</style>