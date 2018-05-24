import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/home'
import setAddress from '@/page/address'
import shopDetail from '@/page/shopDetail'
import food from '@/page/food'
import market from '@/page/market'

import order from '@/page/myOrder'
import login from '@/page/login'

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
    },
    {
        path:'/shop-detail/:id',
        name:'shopDetail',
        component:shopDetail
    },{
        path:'/food',
        name:'food',
        component: food
    },{
        path:'/market',
        name:'market',
        component:market
    },{
        path:'/order',
        name:'order',
        component:order
    },{
        path:'/login',
        name:'login',
        component:login
    }
  ]
})
