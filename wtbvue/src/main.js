import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import MyHeader from "./components/hy/MyHeader.vue"
// import MyFooter from './components/hy/MyFooter.vue'
// Vue.component("my-footer",MyFooter)
//配置axios
import axios from "axios"
//2.配置访问服务器基础路径
axios .defaults.baseURL="http://wtbyjbe.applinzi.com"
// axios .defaults.baseURL="http://127.0.0.1:5050/"
axios.defaults.headers.post['Content-Type'] = 'application/json'  //所有POST请求内容类型
//3.配置保存session数据
axios.defaults.withCredentials=true
//4.注册
Vue.prototype.axios=axios;
//配置vuex
// 引入字体图标文件
import "./font/font/iconfont.css"
//引入 element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入自定义指令文件
//import './components/dire'
// Vue.use(dire)
Vue.directive("focus",{
  inserted(domElem){
    //让当前元素自动获得焦点
    domElem.focus();
    //      DOM原生
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
