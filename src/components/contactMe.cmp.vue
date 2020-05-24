<template>
  <section class="contact-wrapper" id="contact">
    <div>
      <h4>Contact Me</h4>
      <h2>Get in Touch</h2>
    </div>

    <div>
      <form target="_blank" action="https://formsubmit.co/shakedkat@gmail.com" method="POST">
        <div class="name-and-email">
          <input class="name" v-model="mailData.name" type="text" placeholder="Name" />
          <input v-model="mailData.email" type="email" name="email" placeholder="Email" />
        </div>
        <input v-model=" mailData.subject" type="text" name="subject" placeholder="Subject" />
        <textarea v-model="mailData.text" name="message" placeholder="message"></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:8080/contact" />

        <button @click="submitTheForm" type="submit">Send</button>
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
  methods: {
    submitTheForm() {
      this.mailData = "";
    }
  }
};
</script>

<style>
</style>