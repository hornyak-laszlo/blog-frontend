import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
