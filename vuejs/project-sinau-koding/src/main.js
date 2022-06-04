import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// style
import "@/assets/css/style.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
