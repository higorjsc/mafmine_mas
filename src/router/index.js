import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: { name: "cardozo" },
        component: () => import("../views/cardozo.vue")
    },
    {
        path: "/cardozo",
        name: "cardozo",
        children: [

        ],
        component: () => import("../views/cardozo.vue")
    },
    {
        path: "/vergne",
        name: "vergne",
        component: () => import("../views/vergne.vue")
    },
    {
        path: "/moser",
        name: "moser",
        component: () => import("../views/moser.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    // mode: "history", // Use 'history' mode for cleaner URLs (requires server configuration)
    // base: "/escolha_acessos_v2/", // Specify your base URL here
    routes
})

export default router
