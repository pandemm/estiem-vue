<template>
  <b-navbar class="navbar navbar-inverse navbar-toggleable-md fixed-top" style="background-color: #205e44;">
    <b-nav-toggle target="navbarSupportedContent"></b-nav-toggle>
    <b-navbar-brand to="/"><img src="../assets/estiem_logo.png" class="logo"></b-navbar-brand>

    <b-collapse is-nav id="navbarSupportedContent">
      <b-nav is-nav-bar>
        <b-nav-item to="/events/eventlist">
          <i class="material-icons" style="vertical-align:middle">event</i> Events
        </b-nav-item>
        <b-nav-item to="/localgroups">
          <i class="material-icons" style="vertical-align:middle">location_city</i> Local Groups
        </b-nav-item>
        <b-nav-item to="/about">
          <i class="material-icons" style="vertical-align:middle">info_outline</i> About ESTIEM
        </b-nav-item>
        <!-- <b-nav-item to="/events/eventlit">
              <i class="material-icons" style="vertical-align:middle">info_outline</i> About ESTIEM
            </b-nav-item>
            <b-nav-item to="/events/evenlist">
              <i class="material-icons" style="vertical-align:middle">star</i> Get Active
            </b-nav-item> -->
      </b-nav>
      <b-nav is-nav-bar class="ml-auto">
        <!-- <b-nav-item to="/profile">
          <i class="material-icons" style="vertical-align:middle">person</i> My Profile
        </b-nav-item> -->
        <b-nav-item to="/login">
          <i class="material-icons" style="vertical-align:middle">input</i> Sign In
        </b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: 'home', title: 'Home', url: '/' },
        { icon: 'event', title: 'Events', url: '/events/eventlist' },
        { icon: 'forum', title: 'Forum', url: '/forum' },
        { icon: 'account_circle', title: 'My profile', url: '/Internal/default.aspx?PageId=517' },
        { icon: 'info', title: 'About ESTIEM', url: '/about' }
      ],
    }
  },
}
</script>

<style lang="stylus">
@import '../stylus/main'
.navbar-inner {
    min-height: 0px;
}

.navbar .logo {margin:20px}
.navbar-toggler {margin:15px 0}

.navbar-brand,
.navbar-nav li a {
    line-height: 70px;
    height: 70px;
    padding-top: 0;
}

@media screen and (max-width: 767px) {
    .navbar-collapse {
      height: 100vh
	}
}

.navbar-inverse .navbar-nav li a {color: #ffffff;}
.navbar-inverse .navbar-nav .active a {background-color: estiem-green;}
.navbar-inverse .navbar-nav .active a:focus {background-color: #508971;}
.navbar-inverse .navbar-nav li a {background-color: estiem-green;}
.navbar-inverse .navbar-nav .active a:hover {background-color: #508971;}
.navbar-inverse .navbar-nav li a:focus {background-color: #508971;}
.navbar-inverse .navbar-nav li a:hover {background-color: #508971;}
</style>