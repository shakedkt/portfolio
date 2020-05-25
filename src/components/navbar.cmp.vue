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


<router-link class="link" :to="'/portfolio/#hero'" @click.native="scrollFix('#scroll')" exact>
  Home
</router-link>

<router-link class="link" :to="'/portfolio/#about'" @click.native="scrollFix('#scroll')" exact>
  About
</router-link>

<router-link class="link" :to="'/portfolio/#portfolio'" @click.native="scrollFix('#scroll')" exact>
  Projects
</router-link>

<router-link class="link" :to="'/portfolio/#contact'" @click.native="scrollFix('#scroll')" exact>
  Contact
</router-link>

<router-link class="link" :to="'/portfolio/#contact'" @click.native="scrollFix('#scroll')" exact>
      <button contact class="hire-me">Hire me</button>
</router-link>
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
    },
    scrollFix: function(hashbang) {
      location.hash = hashbang;
    }
  },
  mounted: function() {
    setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
};
</script>

<style>
</style>