<template>
  <div class="nav">
      
    <div class="logo">
      SK
      <span>.</span>
    </div>

    <div class="navigation-icon" @click="toggleHamburger">
      <i class="fas fa-bars hamburger"></i>
    </div>

    <div class="nav-bar" ref="nav">
      <a to="/">Home</a>
      <a to="/">About</a>
      <a to="/">Projects</a>
      <a to="/">Contact</a>
      <button class="hire-me">Hire me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    toggleHamburger() {        
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    }
  }
};
</script>

<style>
</style>