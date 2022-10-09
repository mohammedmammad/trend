import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import ScrollFixedHeader from "vuejs-scroll-fixed-header";
Vue.use(ScrollFixedHeader);
import rate from "vue-rate";
import "vue-rate/dist/vue-rate.css";
Vue.use(rate);
Vue.use(Vuelidate);
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faFilter,
  faAngleLeft,
  faShareFromSquare,
  faPlus,
  faLink,
  faPaperPlane,
  faCirclePlus,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faCircleCheck,
  faCircleXmark,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
library.add(
  faCalendar,
  faMagnifyingGlass,
  faFilter,
  faAngleLeft,
  faShareFromSquare,
  faPlus,
  faLink,
  faPaperPlane,
  faCirclePlus,
  faHeadset,
  faCircleXmark,
  faCircleQuestion,
  faCircleCheck
);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.scss";
import i18n from "./i18n";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
router.beforeEach((to, from, next) => {
  if (!store.getters.loggedIn) {
    next({
      path: `/create`,
    });
  } else {
    next();
  }
});
