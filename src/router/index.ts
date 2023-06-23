/*
 * @Author: GuluGulu 2295980270@qq.com
 * @Date: 2023-04-27 00:23:13
 * @LastEditors: GuluGulu 2295980270@qq.com
 * @LastEditTime: 2023-05-20 20:24:14
 * @FilePath: \vue-examples\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/example01',
    component: () => import('@/views/example01/Example01View.vue')
  },
  {
    path: '/example02',
    component: () => import('@/views/example02/Example02View.vue')
  },
  {
    path: '/example03',
    component: () => import('@/views/example03/Example03View.vue')
  },
  {
    path: '/example04',
    component: () => import('@/views/example04/HomeView.vue'),
    children: [
      {
        props: true,
        path: 'location',
        component: () => import('@/views/example04/LocationView.vue')
      },
      {
        props: true,
        name: 'foods',
        path: 'foods',
        component: () => import('@/views/example04/FoodsView.vue')
      },
      {
        props: true,
        path: 'shops/:sid',
        component: () => import('@/views/example04/ShopView.vue')
      },
      {
        props: true,
        path: 'orders',
        component: () => import('@/views/example04/OrderView.vue')
      }
    ]
  },
  {
    path: '/example05',
    component: () => import('@/views/example05/Example05View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
