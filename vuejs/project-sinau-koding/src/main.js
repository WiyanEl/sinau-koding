import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueToast from "vue-toast-notification";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Vue Toas Notification

// pagination
import Pagination from "vuejs-paginate-next";

// style
import "@/assets/css/style.css";

const app = createApp(App);

app.use(VueToast);

app.use(Pagination);

app.use(router);

app.mount("#app");
