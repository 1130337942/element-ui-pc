import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        // {
        //   path: "/",
        //   name: "home",
        //   component: Home
        // },
        // {
        //   path: "/about",
        //   name: "about",
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () =>
        //     import(/* webpackChunkName: "about" */ "./views/About.vue")
        // }
        {
            path: "/",
            name: "index",
            component: () =>
                import ( /* webpackChunkName: "index" */ "./views/index.vue"),
            children: [{
                    path: "",
                    name: "home",
                    component: Home,
                    meta: {
                        name: '首页'
                    }
                }, {
                    path: '/cont1_1',
                    meta: {
                        name: '1_1'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "cont1_1" */ "./views/cont1_1.vue"),
                }, {
                    path: '/cont1_2',
                    meta: {
                        name: '1_2'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "About" */ "./views/About.vue"),
                },
                {
                    path: '/cont2_1',
                    meta: {
                        name: '2_1'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "cont1_2" */ "./views/cont2_1.vue"),
                }, {
                    path: '/cont2_2',
                    meta: {
                        name: '2_2'
                    },
                    component: () =>
                        import ( /* webpackChunkName: "cont1_2" */ "./views/cont2_2.vue"),
                }
            ],
        },
    ]
});