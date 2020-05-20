<template>
  <div id="app" class="main-layout">
    <navBar></navBar>
    <Hero />
    <About />
    <!-- <slider /> -->
    
  </div>
</template>
<script>
import Hero from "./components/hero.cmp";
import navBar from "./components/navbar.cmp";
// import slider from "./components/slider.cmp";
import About from './components/About.cmp';

export default {
  name: "App",
  components: {
    Hero,
    navBar,
    About
    // slider
  }
};
</script>


<style lang="scss">
</style>
