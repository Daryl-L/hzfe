import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'

import Dashboard from './view/Dashboard'
import Article from './view/Article'
import Dynamic from './view/Dynamic'
import About from './view/About'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  linkActiveClass: 'active'
})

router.map({
  '/': {
    name: 'Dashboard',
    component: Dashboard
  },
  '/article': {
    name: 'Article',
    component: Article
  },
  '/dynamic': {
    name: 'Dynamic',
    component: Dynamic
  },
  '/about': {
    name: 'About',
    component: About
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
