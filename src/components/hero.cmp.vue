<template>
  <section id="hero" class="hero-wrapper">
    <div class="hero-details" v-scrollAnimation>
      <h3>Hi, I AM</h3>
      <h1>Shaked Katsir</h1>
      <h4>Fullstack / Front End Developer</h4>
      <h3 class="details-paragraph">
        Passionate about solving challenges, with experience in building single
        page applications using advanced web technologies.
      </h3>
    </div>

<div class="hero-image">
      <img src="../images/try.jpeg" v-scrollAnimation />
</div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.before-enter {
  opacity: 0.05;
  transition: all 1s ease-in-out;
  transform: scale(0.7);
}
.enter {
  opacity: 1;
  transform: scale(1);
}
</style>