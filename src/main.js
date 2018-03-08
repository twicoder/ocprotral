// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/js/uikit-icons.js'
import echarts from 'echarts'
import VueResource from 'vue-resource'

Vue.config.productionTip = false;
Vue.use(Element);
Vue.prototype.$echarts = echarts;
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
