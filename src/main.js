import { createApp } from "vue";
import App from "./App.vue";
import DesignSystem from "./design-system/index.js";

const app = createApp(App);

// Install Material 3 Design System plugin
app.use(DesignSystem);

app.mount("#app");
