<template>
  <div>
    <h1 class="title">
      Courses
    </h1>
    <h2 class="subtitle">
      I am listing here the courses which I participated in
    </h2>
    <div v-for="course in courses" :key="course.id">
      <course :name="course.name" :page="course.page" :url="course.url" />
      <br>
    </div>
  </div>
</template>

<script>
import Course from '../components/Course'
import { courses } from '../api/courses'

export default {
  name: 'CoursePage',
  components: {
    Course
  },
  data () {
    return {
      courses: []
    }
  },
  head () {
    return {
      title: 'Courses - Laszlo Hornyak',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Courses done by Laszlo Hornyak'
      }]
    }
  },
  mounted () {
    this.courses = courses
  }
}
</script>
