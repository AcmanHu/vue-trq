import Vue from 'vue'
import App from './App.vue'
import './assets/css/basic.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
import VueRousouce from 'vue-resource'
Vue.use(VueRousouce)

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
import storage from './model/storage.js';
import router from './model/router.js';

router.beforeEach((to, from, next) => {
  var userInfo = storage.get('userinfo');//获取浏览器缓存的用户信息
  if(userInfo){ //如果有就直接到首页咯
      next();
  } else {
      if(to.path=='/login'){ //如果是登录页面路径，就直接next()
          next();
      } else { //不然就跳转到登录；
          next('/login');
      }

  }
})
console.log(router.app)
//使用路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
