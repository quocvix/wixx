import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "vue2-datepicker/index.css";

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
