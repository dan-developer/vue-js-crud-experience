import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/tutorials',
        name: 'tutorials-list',
        component: () => import('@/components/tutorial/List.vue'),
    },
    {
        path: '/tutorial/:id',
        name: 'tutorial-details',
        component: () => import('@/components/tutorial/Detail.vue'),
    },
    {
        path: '/tutorial/add',
        name: 'tutorial-add',
        component: () => import('@/components/tutorial/Add.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
