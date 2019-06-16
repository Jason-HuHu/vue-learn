// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';


//引入APP这个组件
import App from './App'
//引入路由配置
import router from './router'


Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  /**
   * 最后的效果将会替换页面中id 为app 的div元素
   * 一定是html中的根容器元素
   */
  el: '#app',
  /*使用路由*/
  router,
  /*告知当前页面想使用App这个组件*/
  components: { App },
  /*告知页面这个组件用这样的标签来包裹着,并且使用它*/
  template: '<App/>'
})
