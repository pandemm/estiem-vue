<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <estiemfooter></estiemfooter>
  </div>
</template>

<script>
  import navbar from './components/layout/navbar';
  import estiemfooter from './components/layout/footer';

  export default {
    name: 'app',
    components: {
      navbar,
      estiemfooter,
    },
    created() {
      console.log("creatEd");
      let params = {
        eventtypes: 'all',
      };
      if (!this.$store.getters.events) {
        this.$store.dispatch('fetchEvents', params);
      }
      console.log("creatd");
    },
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
html {
  height: 100%;
}
body {
  height: 100%;
  min-height: 100%;
}
</style>