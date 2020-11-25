import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

import Money from "@/components/Money.vue";
import Labels from "@/components/Labels.vue";
import Statistic from "@/components/Statistic.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: 'money'
    }, {
        path: '/money',
        component: Money
    },
    {
        path: '/labels',
        component: Labels
    },
    {
        path: '/statistic',
        component: Statistic
    },
    {
        path:'*',
        component:Money
    }
]

const router = new VueRouter({
    routes
})

export default router
