import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Contact from '../views/Contact.vue'
import News from '../views/News.vue'
import Teachers from '../views/Teachers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
