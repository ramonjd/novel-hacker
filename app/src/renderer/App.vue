<template>
  <div id="app">
    <NavMenu></NavMenu>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store';
  import NavMenu from './components/Navigation/NavMenu';
  export default {
    store,
    components: {
      NavMenu,
    },
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    animation: fadein 1s;
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
</style>
