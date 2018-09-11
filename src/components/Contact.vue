<template>
  <div>
    <h1 class="title">Contact</h1>
    <h2 class="subtitle">I look forward to your message</h2>
    <form @submit.prevent="sendMessage">
      <section>
        <b-field label="Name">
          <b-input v-model="name"
            size="is-medium"
            required
            placeholder="Your name">
          </b-input>
        </b-field>

        <b-field label="Email">
          <b-input type="email"
            size="is-medium"
            v-model="email"
            required
            placeholder="Your email">
          </b-input>
        </b-field>

        <b-field label="Message">
          <b-input type="textarea"
            v-model="message"
            required
            size="is-medium"
            placeholder="Your message"></b-input>
        </b-field>

        <button class="button is-info is-outlined is-medium is-fullwidth">Submit</button>
      </section>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  name: 'Contact',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async sendMessage () {
      try {
        const url = 'https://0elxks30bg.execute-api.eu-central-1.amazonaws.com/dev/send-message'
        const payload = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        await axios.post(url, payload)
      } catch (error) {
        // TODO FIX CORS ERROR
        console.error(error)
      } finally {
        this.$toast.open({
          message: `Hi ${this.name}, thank you for contacting me!`,
          type: 'is-success',
          queue: false,
          position: 'is-top'
        })
        this.name = ''
        this.email = ''
        this.message = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
