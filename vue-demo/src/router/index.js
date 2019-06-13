import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUIDemo from '@/components/ElementUIDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'ElementUIDemo',
          name:'ElementUIDemo',
          component:ElementUIDemo
        }
      ]

    },
  ]
})
