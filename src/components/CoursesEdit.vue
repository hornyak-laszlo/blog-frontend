<template>
  <div>
    <h1 class="title">{{isEdit ? 'Edit course' : 'Add course'}}</h1>
    <form @submit.prevent="saveCourse">
      <section>
        <b-field label="Name">
          <b-input v-model="name"
            size="is-medium"
            required
            placeholder="Name">
          </b-input>
        </b-field>

        <b-field label="Url">
          <b-input v-model="url"
            size="is-medium"
            required
            placeholder="Url">
          </b-input>
        </b-field>

        <b-field label="Page">
          <b-input v-model="page"
            size="is-medium"
            required
            placeholder="Page"></b-input>
        </b-field>

        <button class="button is-info is-outlined is-medium is-fullwidth">Submit</button>
      </section>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CoursesEdit',
  data () {
    const isEdit = !!this.$route.params.id
    let name = ''
    let url = ''
    let page = ''
    try {
      if (isEdit) {
        // const courseId = this.$route.params.id
        // const queryUrl = `https://0elxks30bg.execute-api.eu-central-1.amazonaws.com/dev/courses/${courseId}`
        // const response = await axios.get(queryUrl)
        const response = {
          name: 'Test',
          url: 'http://test.com',
          page: 'TestPage'
        }
        name = response.name
        url = response.url
        page = response.page
      }
      return {
        isEdit,
        name,
        url,
        page
      }
    } catch (error) {
      console.error(error)
      return {
        isEdit,
        name,
        url,
        page
      }
    }
  },
  methods: {
    async saveCourse () {
      try {
        const payload = {
          name: this.name,
          url: this.email,
          page: this.message
        }
        if (this.isEdit) {
          const courseId = this.$route.params.id
          const url = `https://0elxks30bg.execute-api.eu-central-1.amazonaws.com/dev/courses/${courseId}`
          await axios.put(url, payload)
        } else {
          const url = 'https://0elxks30bg.execute-api.eu-central-1.amazonaws.com/dev/courses'
          await axios.post(url, payload)
        }
      } catch (error) {
        // TODO FIX CORS ERROR
        console.error(error)
      } finally {
        this.$router.replace('/courses')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
