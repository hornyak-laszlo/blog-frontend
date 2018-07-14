<template>
  <div>
    <h1 class="title">Contact</h1>
    <h2 class="subtitle">I look forward to your message</h2>
    <section>
      <b-field label="Name">
        <b-input v-model="name" placeholder="Your name"></b-input>
      </b-field>

      <b-field label="Email">
        <b-input type="email"
          v-model="email"
          placeholder="Your email">
        </b-input>
      </b-field>

      <b-field label="Message">
        <b-input type="textarea" v-model="message" placeholder="Your message"></b-input>
      </b-field>

      <button class="button is-info is-outlined is-medium is-fullwidth">Submit</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
