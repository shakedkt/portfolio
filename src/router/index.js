import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.cmp.vue'
import ThankYou from '../components/thankYou.cmp.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'contactThankYou',
        component: ThankYou
    }
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes
})

export default router
