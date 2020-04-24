import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {						//读取状态数据：this.$store.state.xxx
	  // courseTypes: [],			//课程类型
    userInfo: {}	,			//当前登录的用户信息
    // userMsg:[] //当前用户的基本信息
  },
  mutations: {					//使用mutations修改状态数据：this.$store.commit('setXxx',data)
	  // setCourseTypes(state, types){		//修改课程类型
		//   state.courseTypes = types
    // },
	  setUserInfo(state, info){			//修改用户登录信息
		  state.userInfo = info
	  }
  },
  actions: {
  },
  modules: {
  }
})
