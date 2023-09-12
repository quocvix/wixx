import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home.vue";
import NewUpdate from "../components/NewUpdate.vue";
import DetailND from "../components/DetailND.vue";
import Book from "../components/Book.vue";
import BookDetail from "../components/BookDetail.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/signin",
            name: "signin",
            component: SignIn,
        },
        {
            path: "/signup",
            name: "signup",
            component: SignUp,
        },
        {
            path: "/new",
            name: "new",
            component: NewUpdate,
            // component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/new/:id",
            name: "newDetail",
            component: DetailND,
            props: true,
        },
        {
            path: "/book",
            name: "book",
            component: Book,
        },
        {
            path: "/book/:id",
            name: "bookDetail",
            component: BookDetail,
            props: true,
        },
    ],
});

export default router;