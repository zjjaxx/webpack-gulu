import VueRouter from "vue-router"
import Vue from "vue"
import Index from "../pages/index.vue"
import Home from "../pages/base/home.vue"
Vue.use(VueRouter)
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
                component: Home
            }, {
                path: "layout",
                component: () => import(/*webpackChunkName:"layout"*/"../pages/layout/layout.vue"),

            }, {
                path: "person",
                component: () => import(/*webpackChunkName:"person"*/"../pages/super/person.vue")
            }]
    },
    {
        path: "/button",
        component: () => import("../pages/base/button.vue")
    },
    {
        path: "/title",
        component: () => import("../pages/base/title.vue")
    },
    {
        path: "/icon",
        component: () => import("../pages/base/icon.vue")
    },
    {
        path: "/cell",
        component: () => import("../pages/base/cell.vue")
    },
    {
        path: "/input",
        component: () => import("../pages/base/input.vue")
    },
    {
        path: "/toast",
        component: () => import("../pages/base/toast.vue")
    },
    {
        path: "/dialog",
        component: () => import("../pages/base/dialog.vue")
    },
    {
        path: "/tabs",
        component: () => import("../pages/base/tabs.vue")
    },
    {
        path: "/sticky",
        component: () => import("../pages/base/sticky.vue")
    },
    {
        path: "/popup",
        component: () => import("../pages/base/popup.vue")
    },
    {
        path: "/checkbox",
        component: () => import("../pages/base/checkbox.vue")
    },
    {
        path: "/radio",
        component: () => import("../pages/base/radio.vue")
    },
    {
        path: "/refresh",
        component: () => import("../pages/base/refresh.vue")
    },
    {
        path: "/swipeCell",
        component: () => import("../pages/base/swipeCell.vue")
    },
    {
        path: "/row-col",
        component: () => import("../pages/layout/row-col.vue")
    },
    {
        path: "/picker",
        component: () => import("../pages/base/picker.vue")
    },
    {
        path: "/header",
        component: () => import("../pages/layout/header.vue")
    },
    {
        path: "/tabbar",
        component: () => import("../pages/layout/tabbar.vue")
    },
    {
        path: "/form",
        component: () => import("../pages/base/form.vue")
    },

]
const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }, 
    routes
})

export default router