<template>
  <div>
    <h1 class="title">
      About me
    </h1>
    <h2 class="subtitle">
      Some information about me
    </h2>
    <work-experience />
    <br>
    <education />
    <br>
    <main-projects />
    <br>
    <skills />
  </div>
</template>

<script>
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import MainProjects from '../components/MainProjects'
import Skills from '../components/Skills'

export default {
  name: 'About',
  metaInfo () {
    return {
      title: 'About - Laszlo Hornyak',
      meta: [{
        name: 'description',
        content: 'About Laszlo Hornyak'
      }]
    }
  },
  components: {
    WorkExperience,
    Education,
    MainProjects,
    Skills
  }
}
</script>
