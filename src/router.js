import Vue from 'vue'
import Router from 'vue-router'
import Articles from './pages/Articles'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import NotFound from './pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: {
        path: '/404'
      }
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
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
