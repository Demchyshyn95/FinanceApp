import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "@/store/store";
import resource from "vue-resource/src/resource";

Vue.config.productionTip = false
Vue.use(resource)


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
