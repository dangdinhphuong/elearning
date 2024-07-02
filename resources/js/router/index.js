import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin.js";

const routes = [...admin];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const isRouteExist = (routeName) => {
    return !!routeName;
};



export default router;
