import Vue from 'vue'
Vue.directive("focus",{
  inserted(domElem){
    //让当前元素自动获得焦点
    domElem.focus();
    //      DOM原生
  }
})


