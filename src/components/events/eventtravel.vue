<template>
  <div class="description">
    Here are some protips on how to travel to {{event.Place}}.</br>
    <a :href="'https://www.rome2rio.com/s/' + user.LocalGroup.Name + '/' + event.ParentGroupName">Rome2Rio</a>
  </div>
</template>

<script>
import moment from 'moment';
import eventsmenu from './eventsmenu.vue';
export default {
  data() {
    return {
    }
  },
  computed: {
    event() {
      console.log(this.$route.params.id);
      return this.$store.getters.getEventById(this.$route.params.id);
    },
    user() {
      console.log(this.$store.getters.getUser);
      return this.$store.getters.getUser;
    }
  },
}
</script>

<style>

</style>