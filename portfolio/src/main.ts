import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//https://animate.style/
import 'animate.css'
//https://vuejsprojects.com/vue-fullpage-js
//import 'vue-fullpage.js'

//https://michalsnik.github.io/aos/
import AOS from 'aos';
import "aos/dist/aos.css";
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
