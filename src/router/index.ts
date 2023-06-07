import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/home'
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/modules',
    name: 'modules',
    component: () => import('../views/Modules.vue'),
    redirect: '/modules/button',
    children: [
      {
        path: 'button',
        component: () => import('../views/Button.vue')
      },
      {
        path: 'dropdown',
        component: () => import('../views/Dropdown.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
