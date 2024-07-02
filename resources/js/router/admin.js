import routeNameConstant from "@/constants/RouteNameConstant.js";
const admin = [
    {
        path: "/",
        name: routeNameConstant.HOME_PAGE,
        component: () => import("../layouts/home.vue")
    },
    {
        path: "/learning",
        name: routeNameConstant.LEARNING,
        component: () => import("../views/lessons.vue"),
    }
];

export default admin;
