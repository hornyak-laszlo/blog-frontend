<template>
  <div>
    <h1 class="title">About me</h1>
    <h2 class="subtitle">Some information about me</h2>
    <work-experience></work-experience>
    <br>
    <education></education>
    <br>
    <main-projects></main-projects>
    <br>
    <skills></skills>
  </div>
</template>

<script>
import WorkExperience from './WorkExperience'
import Education from './Education'
import MainProjects from './MainProjects'
import Skills from './Skills'

export default {
  name: 'About',
  components: {
    WorkExperience,
    Education,
    MainProjects,
    Skills
  },
  data () {
    return {
    }
  }
}
</script>
