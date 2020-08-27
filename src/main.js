import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import wow from 'wowjs';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/reset.css";
import 'animate.css';

Vue.use(ElementUI);

Vue.prototype.$wow = wow;

Vue.config.productionTip = false;

new Vue ({
  router,
  store,
  render: h => h (App),
}).$mount ('#app');
