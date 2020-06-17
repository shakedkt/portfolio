<template>
  <section class="contact-wrapper" id="contact">
    <div>
      <h4>Get in Touch</h4>
      <h2>&lt; Contact Me &gt;</h2>
    </div>

    <div>
      <form target="_blank" action="https://formsubmit.co/shakedkat@gmail.com" method="POST">
        <div class="name-and-email">
          <input class="name" v-model="mailData.name" name="name" type="text" placeholder="Name" >
          <input v-model="mailData.email" type="email" name="email" placeholder="Email" >
          </div>
        <input class="subject" v-model="mailData.subject" type="text" name="subject" placeholder="Subject">
        <textarea v-model="mailData.text" name="message" placeholder="Message" required></textarea>
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="http://www.shakedkat.com/contact">

        <button type="submit">Send</button>
      </form>
    </div>

  </section>
</template>


<script>
export default {
  data() {
    return {
      mailData: {}
    };
  },

};
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
