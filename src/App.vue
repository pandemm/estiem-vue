<template>
  <div id="app">
    <router-view name="navbar"></router-view>
    <router-view></router-view>
    <router-link to="/foo">Go to Foo</router-link>
  </div>
</template>

<script>
  import navbar from './components/navbar';
  export default {
    name: 'app',
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>