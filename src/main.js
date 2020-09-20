import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index';



Vue.use(ElementUI)
Vue.use(router)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
