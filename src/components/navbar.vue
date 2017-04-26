<template>
  <ul>
    <li class="navbar-item" v-for="item in items" :key="item.name">
      <a :src="item.url">{{item.name}}</a>
    </li>
  </ul>
</template>


<script>
  import axios from 'axios';
  import NavbarItem from './navbar-item.vue';

  export default {
    components: {
      NavbarItem
    },
    data: () => ({
      items: [{ name: 'Home', url: 'lol' },
      { name: 'Events', url: 'lol' },
      { name: 'Resources', url: 'lol' },
      { name: 'Get Involved', url: 'lol' }]
    }),
  }
</script>

<style>
.navbar-item {
      text-decoration: none;
    padding: 8px 10px;
    font-size: 12px;
    color: #d0d0d0;
    text-transform: uppercase;
    background-color: rgb(32,94,68);
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>