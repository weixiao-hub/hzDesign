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
      },
      {
        path: 'input',
        component: () => import('../views/Input.vue')
      }
    ]
  },
  {
    path: '/note',
    name: 'note',
    // name: 'notebook',
    component: () => import('@/views/noteBook.vue'),
    redirect: '/note/gsap',
    children: [
      {
        path: 'gsap',
        component: () => import('@/views/notes/gsap.vue')
      },
      {
        path: 'memory',
        component: () => import('@/views/javascript/memory.vue')
      }
    ]
  },
  {
    path: '/cases',
    redirect: '/cases/gsap',
    component: () => import('@/views/case.vue'),
    children: [
      {
        path: 'gsap',
        component: () => import('@/views/cases/gsap.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(() => {
  console.log('全局前置守卫')
})
router.afterEach(() => {
  console.log('全局后置守卫')
})
router.beforeResolve(() => {
  console.log('全局解析守卫')
})
namespace Test1 {
  export namespace Test2 {
    export let a = 1
  }

  console.log(Test2.a)
}

console.log(Test1.Test2.a)

export default router
