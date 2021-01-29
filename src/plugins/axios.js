import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL || "";

Plugin.install = Vue => {
  Vue.axios = axios;
  window.axios = axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axios;
      }
    },
    $axios: {
      get() {
        return axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
