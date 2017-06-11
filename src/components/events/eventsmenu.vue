<template>
  <div class="event-menu">
    <router-link class="event-menu-item" :to="!info ? '/events/info/' + id + '#event' + id   : '/events'">Info</router-link>
    <router-link class="event-menu-item" to="/events/agenda">Agenda</router-link>
    <router-link class="event-menu-item" :to="!travel ? '/events/travel/' + id : '/events'">Travel</router-link>
    <router-link class="event-menu-item" :to="'/events/participants/' + id">Participants</router-link>
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
  props: ['id'],
  methods: {
    toggleDetails() {
      console.log("toggle");
      let className = 'event-details' + id;
      document.getClassByName(className).style.display = 'block';
    },
    toggleInfo() {
      console.log("toggleinfo");
      if (this.$route.path.indexOf("/info/" + this.event.Id) != -1) {
        this.$route.path = '/events';
      }
      else {
        return false;
      }
    }
  },
  computed: {
    info: function () {
      if (this.$route.path.indexOf("/info/" + this.id) != -1) {
        return true;
      }
      else {
        return false;
      }
    },
    travel: function () {
      if (this.$route.path.indexOf("/travel/" + this.id) != -1) {
        return true;
      }
      else {
        return false;
      }

    }
  }
}
</script>

<style>
.event-menu {
  background-color: rgb(32, 94, 68);
  font-size: medium;
  width: 100%;
  display: flex;
  justify-content: space-around;
}



.event-menu-item {
  text-decoration: none;
  padding: 8px 10px;
  font-size: 12px;
  color: #d0d0d0;
  text-transform: uppercase;
}
</style>