import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  //当router-link被激活时使用该class样式
  linkActiveClass:'active', 
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'list',
          name:'list',
          component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
        },
        {
          path:'user',
          name:'user',
          component: User,
          //children这里直接写children{}而不是数组会出错，理由不明
          children:[
            {
            path: 'add',
            name: 'add',
            component: () => import(/* webpackChunkName: "add" */ './views/Add.vue'),
            }
          ]
        }
      ]
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
