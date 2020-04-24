import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index.vue'
import Iindex from '../views/iindex.vue'
import Me from '../views/Me.vue'
import Travels from '../views/Travels.vue'
import Login from '../views/Login.vue'
import Book from '../views/Book.vue'
Vue.use(VueRouter)

const routes = [
  {path: '/',name:'Index',component:Index},
  {path: '/Iindex',name:'Iindex',component:Iindex},
  {path: '/Me',name:'Me',component:Me},
  {path: '/Travels',name:'Travels',component:Travels},
  {path: '/Login',name:'Login',component:Login},
  {path: '/Book',name:'Book',component:Book},
  // {path:'/Iindex',name:'Iindex',component:()=>import(/* webpackChunkName: "Iindex" */'../views/iindex.vue')},
  // {path:'/Me',component:()=>import(/* webpackChunkName: "me" */'../views/Me.vue')},
  // {path:'/Travels',component:()=>import(/* webpackChunkName: "Travels" */'../views/Travels.vue')},
  // {path:'/Login/',name:'Login',component:()=>import(/* webpackChunkName: "Login" */'../views/Login.vue')},
  // {path:'/Book',name:'Book',component:()=>import(/* webpackChunkName: "Book" */'../views/Book.vue')}
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
