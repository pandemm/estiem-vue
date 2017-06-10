<template>
  <v-navigation-drawer :temporary="temporary" clipped v-model="drawer" :isActive='false' enable-resize-watcher :hide-overlay="true">
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-tile value="true" :href="item.url" router>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world!',
      items: [
        { icon: 'home', title: 'Home', url: '/' },
        { icon: 'event', title: 'Events', url: '/events/eventlist' },
        { icon: 'forum', title: 'Forum', url: '/forum' },
        { icon: 'account_circle', title: 'My profile', url: '/Internal/default.aspx?PageId=517' },
        { icon: 'info', title: 'About ESTIEM', url: '/about' }
      ],
    }
  },
  computed: {
    drawer() {
      return this.$store.getters.drawer
    },
    temporary() {
      console.log(window.innerWidth);
      if(window.innerWidth > 1024)
      {
        return false;
      }
      else
      {
        return true;
      }
      return window.innerWidth;
    }
  },
  watch: {
    isActive() {
      console.log("watch");
      if (drawer == true)
      { this.$store.dispatch('toggleDrawer'); }
    }
  },
  // props: ['drawer']
}
</script>

<style>
.icon {
  color: #205e44;
}

</style>