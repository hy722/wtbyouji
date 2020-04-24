<template>
  <div class="header-topBar">
    <div class="header-topBarC">
      <div class="float-left">
        <ul class="">
          <li><a href="javascript:;" class="text-white h6 px-3"><img src="/img/hy/me/logo.png" alt=""></a></li>
          <li><router-link :to="'Iindex'" class="text-white h6 px-3">首页</router-link></li>
          <li><a href="javascript:;" class="text-white h6 px-3">问答</a></li>
          <li><a href="javascript:;" class="text-white h6 px-3">马蜂窝周边</a></li>
          <li><a href="javascript:;" class="text-white h6 px-3">结伴</a></li>
          <li><a href="javascript:;" class="text-white h6 px-3">小组</a></li>
          <li><a href="javascript:;" class="text-white h6 px-3">蜂首俱乐部</a></li>
          <li><a href="javascript:;" class="text-white h6 px-3 dropdown-toggle">更多</a>
            <div class="hheader-gengduo px-2">
              <ul>
                <li><a href="javascript:;" class="text-white">真人兽</a></li>
                <li><a href="javascript:;" class="text-white">马蜂窝高校</a></li>
                <li><a href="javascript:;" class="text-white">照片PK</a></li>
                <li><a href="javascript:;" class="text-white">马蜂窝拍卖行</a></li>
                <li><a href="javascript:;" class="text-white">道具商店</a></li>
                <li><a href="javascript:;" class="text-white">蜂首俱乐部</a></li>
                <li><a href="javascript:;" class="text-white">VIP</a></li>
                <li><a href="javascript:;" class="text-white">分歧终端机</a></li>
              </ul>
            </div>
          </li>
        </ul> 
      </div>
      <div class="float-left hheader-cc">
        <el-input size="small" placeholder="请输入内容" prefix-icon="el-icon-search" class="wkey float-left"></el-input>
          <el-button v-show="isLogin" size="small mt-2 ml-2" round class="float-left" type="primary">打卡</el-button>
          <ul class="float-left" :class="{hheader_search:isLogin,hheader_login:!isLogin}">
            <li v-show="!isLogin" class="ml-2"><a href="javascript:;" @click="toLogin(1)" >登录</a></li>
            <li v-show="!isLogin">/</li>
            <li v-show="!isLogin"><a href="javascript:;" @click="toLogin(2)">注册</a></li>
            <li v-show="!isLogin"><a  class="hheader_dkg_login" href="javascript:;"></a></li>
            <li v-show="!isLogin" ><a href="javascript:;" class="hheader_dkg_login"></a></li>
            <li v-show="!isLogin" ><a href="javascript:;" class="hheader_dkg_login"></a></li>
            <li v-show="isLogin" class="dropdown-toggle float-left ml-3 text-center"><a href="javascript:;">消息</a>
              <div>
                <ul class="">
                  <li><a href="javascript:;">私信</a></li>
                  <li><a href="javascript:;">小组消息</a></li>
                  <li><a href="javascript:;">系统通知</a></li>
                  <li><a href="javascript:;">问答消息</a></li>
                  <li><a href="javascript:;">回复消息</a></li>
                  <li><a href="javascript:;">喜欢与收藏</a></li>
                  <li><a href="javascript:;">好友动态</a></li>
                </ul>
              </div>
            </li>
            <li v-show="isLogin" class="dropdown-toggle float-left text-center"><a href="javascript:;"><img :src="touxiang?getURL+touxiang:'/img/hy/myHeader/login.png'" alt="" /></a>
             <div>
                <ul class="">
                  <li class="hheader-fengmi"><a href="javascript:;">蜂蜜 0</a>/<a href="javascript:;">金币 20</a></li>
                  <li><a href="javascript:;">我的马蜂窝 <span>LV.1</span></a></li>
                  <li><a href="javascript:;">写游记</a></li>
                  <li><a href="javascript:;">预约游记</a></li>
                  <li><a href="javascript:;">我的足迹</a></li>
                  <li><a href="javascript:;">我的问答</a></li>
                  <li><a href="javascript:;">我的好友</a></li>
                  <li><a href="javascript:;">我的收藏</a></li>
                  <li><a href="javascript:;">我的路线</a></li>
                  <li><a href="javascript:;">我的订单</a></li>
                  <li><a href="javascript:;">我的优惠券</a></li>
                  <li><a href="javascript:;">我的创作者开放平台</a></li>
                  <li><a href="javascript:;">设置</a></li>
                  <li><a href="javascript:;" @click="signout()">退出</a></li>
                </ul>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getURL} from '../baseurl'
export default {
  data(){
    return {
      isLogin:false,
      touxiang:'',
      getURL:'',
    }
  },
  created() {
    this.getURL=getURL()
      if(this.$store.state.userInfo.uid || sessionStorage.uid){
      this.isLogin=true;
      this.touxiang=sessionStorage.touxiang;
    }else{
      this.isLogin=false;
    }
  },
  methods: {
     //去登录或注册
    toLogin(i){
      this.$router.push({
        name:'Login',
        params:{
          sta:i
        }
      })
    },
    signout(){
      this.axios.get('/user/sig').then(res=>{
        if(res.data.code==200){  
          this.$store.commit('setUserInfo',res.data.userInfo);
          sessionStorage.uid='';
           sessionStorage.touxiang='';
          sessionStorage.setItem('userInfo','');
          this.isLogin=false;
          }
      }).catch(err=>{
        console.log(err)
        return
      })
    },
  },
  watch: {
    // idk(){  
    //    if(this.$store.state.userInfo.uid){
    //   this.isLogin=true;
    // }else{
    //   this.isLogin=false;
    // }
    // }
  },

}
</script>

<style>
.header-topBar{
    height: 46px;
    width: 100%;
    background-color: rgba(34,35,36,0.95);
    font-family: "Microsoft Yahei";
    line-height: 46px;
}
.header-topBarC{
  width:1000px;
  margin:0 auto;
  height: 46px;
}
.header-topBarC>div>ul>li{
  float: left;
  line-height: 46px;
  position: relative;
}
.header-topBarC>div>ul>li:hover{
  background-color: #000;
}
.hheader-gengduo{
  width:130px;
  background-color: rgba(34,35,36,0.95);
  position: absolute;
  display: none;
  z-index: 100;
}
.hheader-gengduo>ul>li{
  height:35px;
  line-height: 35px;
}
  .header-topBarC>div>ul>li:last-child:hover>div{
    display: block;
  }
  .wkey{
    width:150px !important;
  }
.wkey>input{
  background-color: #666;
  border: none !important;
  width:150px;
}
.hheader_login>li{
  position: relative;
}
.hheader_login>li>a{
  color:#ff9d00;
  font-size: 14px;
}
.hheader_dkg_login{
  display: inline-block;
  width:26px;
  height: 26px;
  background-image: url('/img/hy/myheader/topbar-bg.png');
  margin-top:10px;
}
.hheader_login>li:nth-child(4)>a{
  background-position: -100px 0px;
}
.hheader_login>li:nth-child(5)>a{
    background-position: -130px -30px;
}
.hheader_login>li:nth-child(6)>a{
    background-position: -160px 0;
}
.hheader_login>li+li{
  margin-left:8px;
}
.hheader_search>li{
  position: relative;
  width:69px; 
}
.hheader_search>li>a{
  color: #fff;
}
.hheader_search>li>a>img{
  width: 35px;
  border-radius: 50%;
}
.hheader_search>li:hover{
  background-color: black;
}
.hheader_search>li>div{
  background-color: rgba(34,35,36,0.95);
  position: absolute;
  z-index: 50;
  text-align: left;
}
.hheader_search>li>div{
  width:150px;
  font-size: 12px;
  display: none;
}
.hheader_search>li:hover>div{
  display: block;
}
.hheader_search>li>div>ul>li{
  height:30px;
  line-height: 30px;
  padding-left:10px;
}
.hheader-fengmi{
  background-color: #ff9d00;;
}
/************************************************************************** */

</style>