import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Vue Toas Notification
import "vue-toastification/dist/index.css";

// style
import "@/assets/css/style.css";

const app = createApp(App);

app.use(router);

app.use(Toast);

app.mount("#app");
