<template>
  <section id="about" class="about-section" v-scrollAnimation>
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
<style>
</style>