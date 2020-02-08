import VueRouter from "vue-router"
import Index from "../pages/index.vue"
import Home from "../pages/base/home.vue"
const routes = [
    {
        path: "",
        redirect: "/home",
    },
    {
        path: "/",
        component: Index,
        children: [
            {
                path: "",
                redirect: "/home",
            }, {
                path: "home",
                component: Home,
                children: [
                    {
                        path: "button",
                        component: () => import("../pages/base/button.vue")
                    },
                    {
                        path: "badge",
                        component: () => import("../pages/base/badge.vue")
                    }
                ]
            }, {
                path: "layout",
                component: () => import(/*webpackChunkName:"layout"*/"../pages/layout/layout.vue"),
                children:[
                    {
                        path: "header",
                        component: () => import("../pages/layout/header.vue")
                    },
                    {
                        path: "body",
                        component: () => import("../pages/layout/body.vue")
                    }
                ]
            },{
                path: "person",
                component: () => import(/*webpackChunkName:"person"*/"../pages/person.vue")
            }]
    }
]
const router = new VueRouter({ routes })

export default router