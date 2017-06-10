<template>
  <div id="header" class="ui container">
    <a id="menutoggle" class="launch icon item"><i class="content icon" style="color: white;"></i></a>
    <img id="header-logo" src="https://www.estiem.org/Internal/Images/EstiemPortal/estiem_logo_frontpage.png" />
    <a id="menutoggle" class="launch icon item"><i class="content icon" style="color: white;"></i></a>
  </div>
</template>


<script>
  export default {
    data: () => ({
      items: [{ name: 'Home', url: 'https://www.estiem.org/Internal/default.aspx?PageId=603' },
      { name: 'Events', url: 'events' },
      { name: 'Resources', url: 'https://www.estiem.org/Internal/default.aspx?PageId=519' },
      { name: 'Get Involved', url: 'https://www.estiem.org/Internal/default.aspx?PageId=521' },
      { name: 'Forum', url: 'https://www.estiem.org/Internal/default.aspx?PageId=520' },
      { name: 'Drive', url: 'https://www.estiem.org/Internal/default.aspx?PageId=3702' },
      { name: 'Career Centre', url: 'https://www.estiem.org/Internal/default.aspx?PageId=1613' },
      { name: 'My Profile', url: 'https://www.estiem.org/Internal/default.aspx?PageId=517' },
      { name: 'Logout', url: 'logout' }]
    }),
  }
</script>

<style>
#menutoggle {
  display:block;
  padding: 5px;
}
.navbar-item {
      text-decoration: none;
    padding: 8px 10px;
    font-size: 12px;
    color: #d0d0d0;
    text-transform: uppercase;
    background-color: rgb(32,94,68);
    display: inline-block;
}
.navbar-item a {
    text-decoration: none;
    padding: 8px 10px;
    font-size: 12px;
    color: #d0d0d0;
    text-transform: uppercase;
}
li .router-link-active {
    padding: 7px 9px;
    border: 1px solid #fff;
    color: #205e44;
    background: #fff;
}
.navbar-item a:hover {
    padding: 7px 9px;
    border: 1px solid #fff;
    color: #205e44;
    background: #fff;
}
#header {
    background-color: rgb(32,94,68);
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;  
}
#header-logo {
  display: inline-block;
  padding: 5px;
}
#navbar {
  top: 0px;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>