<template>
<<<<<<< HEAD
  <div>
    <navbar></navbar>
    <div id="container">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import navbar from './layout/navbar.vue'
=======
  <v-app>
    <v-navigation-drawer :temporary="temporary" :permanent="!temporary" clipped v-model="drawer" :isActive='false' enable-resize-watcher :hide-overlay="true">
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-tile value="true" :href="item.url" :router="item.router">
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
            <router-view class="content">
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

>>>>>>> 032f1425fe5f0a667ee1b1a98b2b9ff81eb8c25e
export default {
  data() {
    return {
      items: [
        { icon: 'home', title: 'Home', url: '/', router: true },
        { icon: 'event', title: 'Events', url: '/events', router: true },
        { icon: 'forum', title: 'Forum', url: '/forum', router: true },
        { icon: 'account_circle', title: 'My profile', url: '/Internal/default.aspx?PageId=517' },
        { icon: 'info', title: 'About ESTIEM', url: '/about', router: true }
      ]

    }
  },
  created() {
    console.log("creatd");
    let params = {
      eventtypes: 'all',
    };
    this.$store.dispatch('fetchEvents', params);
    this.$store.dispatch('getUser');
    console.log(this.events);
    console.log("creatd");
  },
<<<<<<< HEAD
  components: {
    navbar,
=======
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
>>>>>>> 032f1425fe5f0a667ee1b1a98b2b9ff81eb8c25e
  }
}
</script>

<style lang="stylus">
<<<<<<< HEAD
@import './stylus/main'


/* 
https://work.smarchal.com/twbscolor/css/e74c3cc0392becf0f1ffbbbc0
*/


/* CARDS!! */

.card {margin-bottom:10px}
.card-footer {background-color:#fff; text-align:center}
.card-footer img {width:75%}

#container {
  padding:30px 0px; 
  margin-top:80px; 
  }
a {color:#625750}
a:hover {color:#625750;}
.card a:hover{background-color:#f0efef}
#map {
	width: 100%;
  height:calc(100vh - 200px);
	border: 1px solid #ccc;
}


	#facts {width:100%; max-width:767px;  margin: 0px auto; padding-left:13px; min-height:140px }
  #facts div { float:left; width:162px; margin:0 0 0 21px;}
	#facts div strong { float:left; width:162px; margin:0; padding:0; text-align:center; font-size:40px; color:#205e44; font-weight:normal; }
	#facts div p { float:left; width:162px; text-align:center; margin:0; padding:0 0px; font-size:16px; color:#8890a2; line-height:24px; font-weight:normal; }
  #facts div a:hover {display:inline-block; background-color: #205e44;}
  #facts div a:hover p, #facts div a:hover strong { color:#fff}
 
	#lead {width:100%; max-width:790px; text-align:center; margin: 10px auto; padding:10px 0; border-bottom:1px solid #d7d7d7; border-top:1px solid #d7d7d7;}
	#lead h1 { margin:10px 0 10px 0; padding:0; text-align:center; font-size:38px; color:#205e44; font-weight:normal; }
	#lead p { margin:auto; padding:0 10px; text-align:center; color:#8890a2; font-size:15px; line-height:27px; }
 
  #projects {width:100%; max-width:1000px; margin:20px auto;}
	#projects h2 {margin: 0 auto 20px; text-align:center; font-size:22px; color:#006e4a; font-weight:normal; clear:both }
	#projects ul { margin:auto; padding:0; list-style-type:none; list-style-image:none; }
	#projects ul li { float:left; width:245px; }
	#projects ul li a { float:left; height:109px; width:226px; margin:0 0 19px 19px; background:#fff; }
	#projects ul li a:hover { height:128px; margin-bottom:0; }
	#projects ul li a img { float:left; }
	#projects ul li a img.other { display:none; }
	#projects ul li a:hover img { display:none; }
	#projects ul li a:hover img.other { display:block; }
	#projects ul li a span { float:left; width:200px; padding:5px 13px 0 13px; color:#fff; text-align:center; font-size:12px; line-height:17px; display:none; }
	#projects ul li a:hover span { display:block; }

	#projects ul li.europe3d a:hover { background:#006e4a; }
	#projects ul li.summeracademy a:hover { background:#1f6938; }
	#projects ul li.times a:hover { background:#0c2b5e; }
	#projects ul li.braintrainer a:hover { background:#215e44; }
	#projects ul li.vision a:hover { background:#fc7800; }
	#projects ul li.academicdays a:hover { background:#791214; }
	#projects ul li.estiemmagazine a:hover { background:#205e44; }
	#projects ul li.estiemstudentguide a:hover { background:#205e44; }
	#projects ul li.businessbooster a:hover { background:#2990bc;}
  #projects ul li.lpi a:hover { background:#791214; }
  
  
@media screen and (max-width: 820px) {
    #facts { min-height:250px}
}

@media screen and (max-width: 450px) {

    #facts { min-height:500px }
}



.event-buttons {margin:auto; text-align:center; max-width:700px}
.event-buttons button {margin:10px; width:200px; height:100px; border:none}
=======
  @import './stylus/base.styl'

.toolbar {
  background-color: estiem-green;
}

#toolbar-search {
  color: white;
}

.footer {
  background-color: primaryColor  
}

.content {
  width: 800px;
}

.layout {
  justify-content: center;
}

// Workaround that the content doesnt go under the drawer. A fix should be released later in Vuetify.
.navigation-drawer
  &--persistent, &--permanent
    &.navigation-drawer--open:not(.navigation-drawer--is-mobile):not(.navigation-drawer--right)
      &:not(.navigation-drawer--clipped)
        ~ .toolbar
          padding-left: 300px

      ~ main,
      ~ .footer:not(.footer--fixed):not(.footer--absolute)
        padding-left: 300px

    &.navigation-drawer--open.navigation-drawer--right
      &:not(.navigation-drawer--clipped)
        + .toolbar
          padding-right: 300px

      ~ main,
      ~ .footer:not(.footer--fixed):not(.footer--absolute)
        padding-right: 300px

>>>>>>> 032f1425fe5f0a667ee1b1a98b2b9ff81eb8c25e
</style>
