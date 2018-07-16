import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Courses from '@/components/Courses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
