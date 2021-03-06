import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/mobile',
      name: 'mobile',
      component : () => import('./views/mobile/Index.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('./views/mobile/Service.vue')
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('./views/mobile/Discover.vue')
    },
    {
      path:'/practice',
      name:'practice',
      component: () => import('./views/VuePractice.vue')
    }
  ]
})
