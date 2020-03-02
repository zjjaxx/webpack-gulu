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
                        path: "title",
                        component: () => import("../pages/base/title.vue")
                    },
                    {
                        path: "icon",
                        component: () => import("../pages/base/icon.vue")
                    },
                    {
                        path: "menuItem",
                        component: () => import("../pages/base/menu-item.vue")
                    },
                    {
                        path: "input",
                        component: () => import("../pages/base/input.vue")
                    },
                    {
                        path: "toast",
                        component: () => import("../pages/base/toast.vue")
                    },
                    {
                        path: "dialog",
                        component: () => import("../pages/base/dialog.vue")
                    },
                    {
                        path: "tabs",
                        component: () => import("../pages/base/tabs.vue")
                    },
                    {
                        path: "sticky",
                        component: () => import("../pages/base/sticky.vue")
                    }
                ]
            }, {
                path: "layout",
                component: () => import(/*webpackChunkName:"layout"*/"../pages/layout/layout.vue"),
                children:[
                    {
                        path: "row-col",
                        component: () => import("../pages/layout/row-col.vue")
                    },
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