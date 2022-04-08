import Vue from "vue";
import App from "./App.vue";

//導入需要被全局註冊的組件
import Count from "@/components/count.vue";
Vue.component("MyCount", Count);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
