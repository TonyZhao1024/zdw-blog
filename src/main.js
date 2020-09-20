import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import VueRouter from 'vue-router'


Vue.use(ElementUI)
Vue.use(router)

import StringUtilsComp from './components/detaiVue/StringUtilsComp'
import HelloWorld from "./components/HelloWorld";
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/StringUtilsComp', component: StringUtilsComp }
]



// 接着创建路由实例

const routers = new VueRouter({
  routes
})



new Vue({
  routers,
  router,
  render: h => h(App),
}).$mount('#app')
