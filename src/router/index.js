import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import QueuePage from '@/components/QueuePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/lab1',
      name: 'QueuePage',
      component: QueuePage
    }
  ]
})
