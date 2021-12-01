<template>
  <div>
    <h1 class="title">
      Contact
    </h1>
    <h2 class="subtitle">
      I look forward to your message
    </h2>
    <form @submit.prevent="sendMessage">
      <section>
        <b-field label="Name">
          <b-input v-model="name" size="is-medium" required placeholder="Your name" />
        </b-field>

        <b-field label="Email">
          <b-input v-model="email" type="email" size="is-medium" required placeholder="Your email" />
        </b-field>

        <b-field label="Message">
          <b-input v-model="message" type="textarea" required size="is-medium" placeholder="Your message" />
        </b-field>

        <button class="button is-info is-outlined is-medium is-fullwidth">
          Submit
        </button>
      </section>
    </form>
  </div>
</template>

<script>
import { sendEmail } from '../api/email'

export default {
  name: 'ContactPage',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  head () {
    return {
      title: 'Contact - Laszlo Hornyak',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Contact Laszlo Hornyak'
      }]
    }
  },
  methods: {
    async sendMessage () {
      const emailRes = await sendEmail(this.name, this.email, this.message)
      if (emailRes.success) {
        this.$toast.open({
          message: `Hi ${this.name}, thank you for contacting me!`,
          type: 'is-success',
          queue: false,
          position: 'is-top'
        })
        this.name = ''
        this.email = ''
        this.message = ''
      } else {
        this.$toast.open({
          message: 'Email was not sent!',
          type: 'is-danger',
          queue: false,
          position: 'is-top'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
