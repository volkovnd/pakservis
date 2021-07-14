import Vue from "vue";

import App from "@/App.vue";

import "@/bindPlugins";
import "@/bindGlobals";

Vue.config.productionTip = false;

new Vue({
  ...App,
}).$mount("#app");
