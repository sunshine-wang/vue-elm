import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/home'
import setAddress from '@/page/address'

Vue.use(Router)

export default new Router({
  routes: [{
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/set-address', //failed to get location,need set address
        name: 'setAddress',
        component: setAddress
    }
  ]
})
