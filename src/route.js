import Vue from "vue";
import VueRouter from "vue-router";
// 引入组件
import Home from "./pages/home.vue";
import b from "./pages/b.vue";
import c from "./pages/c.vue";
import d from "./pages/d.vue";
import e from "./pages/e.vue";


// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);
// 一级，二级


var router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: '/home', name: 'Home', component: Home,
            children: [
                {
                    path: '/', name: 'c', component: c,
                },
                {
                    path: '/c', name: 'c', component: c,
                },
                {
                    path: '/b', name: 'b', component: b,
                },
                {
                    path: '/d', name: 'd', component: d,
                },
                {
                    path: '/e', name: 'e', component: e,
                },
            ]
        },


    ]
})
export default router;