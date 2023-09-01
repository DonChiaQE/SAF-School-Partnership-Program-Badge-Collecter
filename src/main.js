import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),

    routes: [
        {
            path: '/',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/scanner',
            component: () => import('./views/Scanner.vue')
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
