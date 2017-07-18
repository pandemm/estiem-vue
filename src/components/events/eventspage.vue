<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
import eventlist from './eventlist.vue';
export default {
  data () {
    return {
      msg: 'Hello events!'
    }
  },
  components: {
    eventlist
  }
}
</script>

<style>
</style>