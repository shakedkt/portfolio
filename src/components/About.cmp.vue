<template>
  <section class="about-section">
    <AboutMe />
    <Skills />
  </section>
</template>

<script>
import Skills from "./Skills.cmp";
import AboutMe from './AboutMe.cmp';

export default {
  name: "About",
  components: {
    AboutMe,
    Skills
  }
};
</script>
</script>

<style>
</style>