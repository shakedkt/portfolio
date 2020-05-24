<template>
  <div id="app" class="main-layout">
    <navBar></navBar>
    <router-view />
  </div>
</template>
<script>
import navBar from "./components/navbar.cmp";

export default {
  name: "App",
  components: {
    navBar
  },
  
};
</script>


<style lang="scss">
</style>
