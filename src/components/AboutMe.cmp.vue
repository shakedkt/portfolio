<template>
  <section class="about-me-wrapper">
    <div class="offer">
      <h2>What I offer</h2>

      <div class="grid-container">
        <img src="../images/frontendIcon.svg" />
        <h3>Efficient, fast, clean and effective code</h3>

        <img src="../images/designer.svg" />
        <h3>Simple, clean, modern and intuitive design</h3>

        <img src="../images/mentor.svg" />
        <h3>Using best of breed technology frameworks</h3>
      </div>
    </div>

    <div class="about-me">
      <h2>About Me</h2>

      <div class="about-me-paragraph">
        <h3>
          A programmer from Tel Aviv.
          Passionate about learning all the time and building new things, <br>
          I specialize in creating beautiful pixel-perfect single page applications.
        </h3>
        <br />
        <h3>Graduate of the Coding Academy - an intensive (640 hours) and selective coding bootcamp that qualifies Web developers.</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

 .before-enter{
        opacity: 0.2;
        transform: translateY(120px);
        transition: all 1s ease-in-out;
        }
        
        .enter{
            opacity: 1;
            transform: translateY(0px);
        }
</style>
