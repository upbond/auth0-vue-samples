import Vue from "vue";
import App from "./App.vue";
import Axios from "./plugins/axios";
import router from "./router";
import { Auth0Plugin } from "./auth";

import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { domain, clientId, audience } from "../auth_config.json";

Vue.config.productionTip = false;

Vue.use(hljs.vuePlugin);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.use(Axios);

library.add(faLink, faUser, faPowerOff);

Vue.component("font-awesome-icon", FontAwesomeIcon);

alert(navigator.userAgent);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
