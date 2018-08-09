import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/page/Dashboard'
import Author from '@/components/page/Author'

Vue.use(Router)

export default new Router({
  base: __dirname,
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/author/:id',
      name: 'Author',
      component: Author
    }
  ]
})
