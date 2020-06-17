<template v-slot:default>
  <section class="slider-cmp">
    <h2> &lt; TECHNOLOGIES I USE &gt;  </h2>

    <agile class="slider-agile-vue" :navButtons="false" :dots="true" :speed="1000" :autoplay="true" :autoplay-speed="2000" :infinite="true" :mobileFirst="true">
  
      <div class="slide">
        <img src="../images/html5.png" />
      </div>

      <div class="slide">
        <img src="../images/cssLogo.png" />
      </div>

      <div class="slide">
        <img src="../images/jsLogo.png" />
      </div>

       <div class="slide">
        <img src="../images/sass-image.png" />
      </div>
     
      <div class="slide">
        <img src="../images/vueLogo.png" />
      </div>

      <div class="slide">
        <img src="../images/reactLogo.png" />
      </div>

      <div class="slide">
        <img src="../images/angularLogo.png" />
      </div>

      <div class="slide">
        <img src="../images/nodejsLogo.png" />
      </div>
     
    </agile>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: 'skills',
  components: {
    agile: VueAgile
  }
};
</script>

<style>
</style>

