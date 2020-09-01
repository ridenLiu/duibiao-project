// 引入框架
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入组件
import ElementUI from 'element-ui';

// 公共样式
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/normalize.css'

Vue.use(ElementUI);

// import network from './network'


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
