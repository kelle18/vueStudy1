import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);


import router from "./route.js"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
// new Vue({
//   render: h => h(App),
//   router,  // 注入到根实例中
// }).$mount('#app')
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)
})
