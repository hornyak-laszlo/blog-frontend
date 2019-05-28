<template>
  <div>
    <h1 class="title">Courses</h1>
    <h2 class="subtitle">I am listing here the courses which I participated in</h2>
    <div v-for="course in courses" :key="course.id">
      <course :name="course.name" :page="course.page" :url="course.url"></course>
      <br>
    </div>
  </div>
</template>

<script>
import Course from './Course'
import { getCourses } from '../api/courses'

export default {
  name: 'Courses',
  components: {
    Course
  },
  data () {
    return {
      courses: []
    }
  },
  async mounted () {
    const coursesRes = await getCourses()
    if (!coursesRes.success) {
      this.courses = []
      // notify coursesRes.message
    } else {
      this.courses = coursesRes.data
    }
  }
}
</script>
