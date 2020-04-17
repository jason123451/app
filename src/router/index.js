import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import count from '../components/count'
import NavMenu from '../components/NavMenu'
import layout from '../pages/layout'
import mian from '../pages/mian'
import user from '../pages/user'
import login from '../pages/login'
import businessClassify from '../pages/businessClassify'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children: [{
        path: '/',
        component: mian
      },
      {
        path: '/user',
        component: user
      },
      {
        path: '/businessClassify',
        component: businessClassify
      }
    ]
    },

    {
      path: '/login',
      component :login
    },
   
  
    
  ]
})
