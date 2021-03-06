// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store/index.js'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'

import animated from 'animate.css' // npm install animate.css --save安装，在引入


Vue.config.productionTip = false
Vue.use(ElementUI,animated)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
