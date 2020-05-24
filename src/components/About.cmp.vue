<template>
  <section id="about" class="about-section">
    <AboutMe v-scrollAnimation />
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
