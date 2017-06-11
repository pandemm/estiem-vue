<template>
  <v-app>
    <v-navigation-drawer :temporary="temporary" :permanent="!temporary" clipped v-model="drawer" :isActive='false' enable-resize-watcher :hide-overlay="true">
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
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer=!drawer" v-if="temporary"></v-toolbar-side-icon>
      <router-link to="/">
        <img style="margin: auto;" src="https://www.estiem.org/Internal/Images/EstiemPortal/estiem_logo_frontpage.png" />
      </router-link>
      <v-spacer></v-spacer>
      <v-btn icon @click.native.stop="rightDrawer = !rightDrawer">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout>
            <router-view style="margin: auto;">
            </router-view>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import estiemnavigationdrawer from './layout/estiemnavigationdrawer.vue'
import axios from 'axios';
export default {
  data() {
    return {
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ESTIEM',
      items: [
        { icon: 'home', title: 'Homea', url: '/' },
        { icon: 'event', title: 'Events', url: '/events/eventlist' },
        { icon: 'forum', title: 'Forum', url: '/forum' },
        { icon: 'account_circle', title: 'My profile', url: '/Internal/default.aspx?PageId=517' },
        { icon: 'info', title: 'About ESTIEM', url: '/about' }
      ],

    }
  },
  components: {
    estiemnavigationdrawer,
  },
  methods: {
    toggleDrawer() {
      this.$store.dispatch('toggleDrawer');
    }
  },
  created() {
    console.log("creatd");
    let params = {
      eventtypes: 'all',
    };
    this.$store.dispatch('fetchEvents', params);
    console.log(this.events);
    console.log("creatd");
  },
  computed: {
    temporary() {
      console.log(window.innerWidth);
      if (window.innerWidth > 1024) {
        console.log("false");
        return false;
      }
      else {
        return true;
      }
    },
  },
  ready() {
    console.log("ready");
  }

}
</script>

<style lang="stylus">
  @import './stylus/main'

.toolbar {
  background-color: #205e44;
}

.footer {
  background-color: #205e44;
}
</style>
