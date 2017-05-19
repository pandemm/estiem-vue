<template>
  <eventlist></eventlist>
</template>

<script>
import eventlist from './eventlist';
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
.example {
  color: red;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>