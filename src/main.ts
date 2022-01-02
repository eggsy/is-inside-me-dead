import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import { MotionPlugin as VueMotion } from "@vueuse/motion";

// CSS
import "./assets/tailwind.css";
import "./stylesheets/scrollbar.scss";

// Mount app
createApp(App).use(VueMotion).mount("#app");
