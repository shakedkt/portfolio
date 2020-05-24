<template>
  <section class="home">
    <Hero />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </section>
</template>

<script>
import Hero from "./hero.cmp";
import About from "./About.cmp";
import Portfolio from "./portfolio.cmp";
import Contact from "./contactMe.cmp";
import Footer from "./footer.cmp";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Portfolio,
    Contact,
    Footer
  }
};
</script>

<style>
.home {
  scroll-behavior: smooth;
}
</style>