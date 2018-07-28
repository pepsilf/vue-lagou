import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Search from '@/components/search/Search'
import User from '@/components/user/User'
import City from '@/components/search/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search/:city',
      name: 'search',
      component: Search,
      props:true
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
