<template>
<header>
   <div class="header-wrap">
      <div class="header-logo">  
           <router-link :to="'Iindex'"></router-link>
       </div>
           <ul class="header-nav">
          <li class="">
            <router-link :to="'Iindex'">首页</router-link>
            <span></span>
          </li>
          <li class="">
            <a href="javascript:;">目的地</a>
            <span></span>
          </li>
          <li class="">
            <a href="javascript:;">旅游攻略</a>
            <span></span>
          </li>
          <li class="header-cc">
            <a href="javascript:;">去旅行
              <i class="header-icon-down"></i>
            </a>
            <span></span>
            <div class="header-down-menu pl-3">
              <ul class="header-cc_bb">
                <li><a href="javascript:;">自由行<i class="header-hot">hot</i></a></li>
                <li><a href="javascript:;">跟团游</a></li>
                <li><a href="javascript:;">当地游</a></li>
                <li><a href="javascript:;">邮轮</a></li>
                <li><a href="javascript:;">签证</a></li>
              </ul>
            </div>
          </li>
          <li class="">
            <a href="">机票火车票</a>
            <span></span>
            <i class="header-aa pl-1">特价</i>
          </li>
          <li class="">
            <a href="">订酒店</a>
            <span></span>
          </li>
          <li class="">
            <a href="">社区 <i class="header-icon-down"></i></a>
            <div>
              <ul class="float-left ml-3">
               <li> <a href="javascript:;" style="color:#ff9d00;">问答<i class="header-hot header-bb">hot</i></a></li>
               <li> <a href="javascript:;">马蜂窝周边<i class="header-hot">new</i></a></li>
               <li> <a href="javascript:;">蜂首俱乐部</a></li>
               <li> <a href="javascript:;">结伴</a></li>
              </ul>
              <ul class="float-left ml-6 mt-3 ">
                <li><a href="javascript:;">小组论坛</a></li>
                <li><a href="javascript:;">分舵同城</a></li>
                <li><a href="javascript:;">马蜂窝拍卖行</a></li>
                <li><a href="javascript:;">照片PK</a></li>
                <li><a href="javascript:;">真人兽</a></li>
                <li><a href="javascript:;">道具商店</a></li>
              </ul>
            </div>
          </li>
          <li class="">
            <a href=""></a>
            <span></span>
          </li>
       </ul>
         <div class="header-search">
         <input type="text">
         <a href="javascrip:;"></a>
       </div>
       <div v-show="!isLogin" class="float-left header_login">
         <a  class="header_wai ml-3" href="javascript:;"></a>
         <a class="header_wai" href="javascript:;"></a>
         <a class="header_wai" href="javascript:;"></a>
        <a href="javascript:;" class="text-f9" @click="toLogin(1)">登录</a>
          <a href="javascript:;" class="text-f9">|</a>
          <a href="javascript:;" @click="toLogin(2)" class="text-f9">注册</a>
       </div>
       <div  v-show="isLogin" class="header-info ml-4">
        <div class="m-auto"><a href="javascript:;" class="text-none">打卡</a></div>
        <div class="m-auto ">
          <a href="javascript:;" class="ml-2 text-none">消息
            <i class="header-icon-down"></i>
            <div  class="header-message">
              <ul class="pl-3 header-cc_bb">
                <li><a href="javascript:;">私信</a></li>
                <li><a href="javascript:;">小组消息</a></li>
                <li><a href="javascript:;">系统通知</a></li>
                <li><a href="javascript:;">问答消息</a></li>
                <li><a href="javascript:;">回复消息</a></li>
                <li><a href="javascript:;">喜欢与收藏</a></li>
                <li><a href="javascript:;">好友动态</a></li>
              </ul>
            </div>
          </a></div>
        <div  class="m-auto pl-2 position-relative" id="cc"><router-link :to="'Me'" class="position-relative"><img :src="touxiang?getURL+touxiang:'/img/hy/myHeader/login.png'" alt="" class="mt-2" /><i class="header-icon-down mt-2"></i></router-link>
          <div class="header-lolo">
            <div class="pl-3 text-white"><a href="javascript:;" class="text-white">蜂蜜0</a>/<a href="javascript:;" class="text-white">金币0</a></div>
            <ul class="pl-3 header-cc_bb">
              <li><i></i><a href="javascript:;">我的马蜂窝 <span>LV.1</span></a></li>
              <li><i></i><a href="javascript:;">写游记</a></li>
              <li><i></i><a href="javascript:;">预约游记</a></li>
              <li><i></i><a href="javascript:;">我的足迹</a></li>
              <li><i></i><a href="javascript:;">我的问答</a></li>
              <li><i></i><a href="javascript:;">我的好友</a></li>
              <li><i></i><a href="javascript:;">我的收藏</a></li>
              <li><i></i><a href="javascript:;">我的路线</a></li>
              <li><i></i><a href="javascript:;">我的订单</a></li>
              <li><i></i><a href="javascript:;">我的优惠券</a></li>
              <li><i></i><a href="javascript:;">我的创作者开放平台</a></li>
              <li><i></i><a href="javascript:;">设置</a></li>
              <li><i></i><a href="javascript:;" @click="signout()">退出</a></li>
            </ul>
          </div>
        </div>
      </div>
   </div>
</header>
</template>

<script>
import {getURL} from '../baseurl'
export default {
  data(){
    return {
      isLogin:false,//是否登录
      touxiang:'',//头像图片的显示
      getURL:'',
    }
  },
   created() {
     this.getURL=getURL()
     //查询显示什么
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
    //退出登录
    signout(){
      this.axios.get('/user/sig').then(res=>{
        if(res.data.code==200){  
          this.$store.commit('setUserInfo',res.data.userInfo);
          sessionStorage.setItem('userInfo','');
          sessionStorage.uid='';
          sessionStorage.touxiang='';
          this.isLogin=false;
          }
      }).catch(err=>{
        console.log(err)
        return
      })
    },
  },
}
</script>

<style>
.header_login{
  height:68px;
  line-height: 68px;
}
.header_wai{
  display: inline-block;
  width:26px;
  height:26px;
  background-image: url('/img/hy/myheader/header-sprites15@2x.png');
  background-size: 200px;
  vertical-align:middle;
}
.header_login>a:nth-child(1){
  background-position: 0px -50px;
}
.header_login>a:nth-child(2){
  background-position: -30px -80px;
}
.header_login>a:nth-child(3){
  background-position: 0 -165px;
}
.header_login>a+a{
  margin-left:10px;
}
header{
  height:68px;
  max-width: 1440px;
  margin:0 auto;
}
header>div.header-wrap{
  width:1220px;
  margin:0 auto;
  height:68px;
  border-bottom: 1px solid #eee;
}
.header-logo{
  padding:13px 0;
  height:68px;
  width: 136px;
  float:left;
}
.header-logo a{
  display: block;
  width:136px;
  height:40px;
  background: url(/img/hy/myheader/header-small-sprites3.png) no-repeat 3px -28px;
  background-size: 140px;
}
.header-nav{
  float:left;
  line-height: 68px;
  padding: 0 10px 0 25px;
}
.header-nav>li{
  justify-content: space-between;
  float: left;
  padding:0 16px;
  position: relative;
}
.header-nav>li a{
  color:#333;
  font-size: 14px;
  text-decoration: none;
  box-sizing: border-box;
}
.header-nav>li span{
  display: none;
  position: absolute;
  width:100%;
  height: 2px;
  background-color: #ffd900;
}
.header-nav>li:not(.header-cc) span{
  top:66px;
  left:0px;
}
.header-nav>li.header-cc span{
  top:0px;
  left:0px;
}
.header-nav>li.header-cc:hover{
  border: 1px solid #ddd;
  border-bottom: 0;
}
.header-nav>li:hover span{
  display: block;
}
.header-icon-down{
  display: inline-block;
  line-height: 32;
  width:10px;
  height: 10px;
  background: url(/img/hy/myheader/daosanjiao.png) no-repeat;
  background-size: 10px;
}
.header-down-menu{
  display:none;
  position: absolute;
  top:67px;
  left:0px;
  width:140px;
  background: #fefefe;
  z-index: 20;
}
.header-down-menu>ul>li{
  line-height: 40px;
  height:40px;
  color:#666;
}
.header-cc:hover>.header-down-menu{
  display: block;
}
.header-hot,.header-aa{
  position: absolute;
    margin: 3px 0 0 8px;
    background-color: #f46240;
    color: #fff;
    padding: 0 4px 0 3px;
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    font-style: normal;
}
.header-down-menu>ul>li>a>i{
    top:22px;
    left:60px;
}
.header-nav>li:nth-child(5) i{
  height: 16px;
  line-height: 16px;
  font-size: 11px;
  font-family: PingFangSC-Semibold;
  font-weight: bold;
  margin:0;
  display: block;
  width:33px;
  border-radius: 4px 0 4px 0;
  top:7px;
  left:80px;
}
.header-nav>li:nth-child(7)>div{
  display: none;
  position: absolute;
  width: 300px;
  top:68px;
  left:0px;
  background: #fefefe;
  z-index: 20;
}
.header-nav>li:nth-child(7)>div>ul:first-child>li{
  font-size: 16px;
  height:75px;
  line-height: 75px;
}
.header-hot:after{
  content: '';
    position: absolute;
    left: -7px;
    top: 0;
    width: 0;
    height: 0;
    border-right: 7px solid #f46240;
    border-top: 7px solid transparent;
    border-bottom: 7px dashed transparent;
    overflow: hidden;
    line-height: 0;
}
.header-nav>li:nth-child(7)>div>ul:first-child>li:first-child>a>i{
  top:27px;
  left:45px;
}
.header-nav>li:nth-child(7)>div>ul:first-child>li:nth-child(2)>a>i{
  background-color: #1ec896;
  top:102px;
  left:89px;
}
.ml-6{
  margin-left:75px;
}
.header-nav>li:nth-child(7)>div>ul:last-child>li{
  color:#666;
  font-size: 14px;
  height:32px;
  line-height: 32px;
}
.header-nav>li:nth-child(7):hover>div{
  display: block;
}
.header-nav>li:last-child{
  display: block;
  width: 110px;
  height: 58px;
  background: url("/img/hy/myheader/mfwzx.png") no-repeat center;
  background-size: 75px 30px;
}
.header-search{
  float:left;
  width:130px;
  height:68px;
  position: relative;
  line-height: 68px;
}
.header-search>input{
  border: 1px solid #efefef;
  background-color: #efefef;
  width: 130px;
  height:34px;
  line-height:34px;
  color: #666;
  border-radius: 4px;
  padding:0 10px;
  font-size: 14px;
}
.header-search>a{
    z-index: 20;
    position: absolute;
    top: 25px;
    right: 8px;
    width: 20px;
    height: 20px;
    background: url(/img/hy/myheader/header-sprites15.png) no-repeat -30px -110px;
  }
.header-info{
  float: left;
   display: flex;
  justify-content: space-between;
  height:68px;
}
.header-info>div:first-child>a{
  display: block;
  height: 20px;
    background-color: #1493e3;
    text-align: center;
    line-height: 20px;
    color: #fff;
    border-radius: 4px;
    overflow: hidden;
    font-size: 12px;
    width:50px;
}
.header-info>div:nth-child(2)>a{
  display: block;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: #666;
  overflow: hidden;
  font-size: 14px;
  width:50px;
  position: relative;
}
.header-info>div:nth-child(3)>a>img{
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%; 
  border: 2px solid #fff;
}
.header-info>div:nth-child(3)>a:hover>img{
  border: 2px solid #ffd900;
}
.header-info>div:nth-child(3)>a>i{
  position: absolute;
  top:11px;
  left:34px;
}
.header-nav>li:hover>a{
  color:#ffd900;
}
.header-message{
  position: absolute;
  top:68px;
  left:1050px;
  width:200px;
  display: none;
  background: #fefefe;
  z-index: 50;
}
.header-message>ul{
  margin-top: -50px;
}
.header-message>ul>li{
  height:30px;
  line-height: 30px;
}
.header-message>ul>li>a{
  text-decoration: none;
  font-size: 14px;
  color:#666;
}
.header-info>div:nth-child(2):hover .header-message{
  display: block;
}
.header-lolo{
  position: absolute;
  width:200px;
  top:62px;
  left:-100px;
  font-size: 14px;
  display: none;
  background: #fefefe;
  z-index: 20;
}
.header-lolo>ul>li{
  height: 30px;
  line-height: 30px;
  text-indent: 40px;
  position: relative;
}
.header-lolo>ul>li>i{
  display: block;
  position: absolute;
  top:3px;
  width:20px;
  height: 20px;
  background: url(/img/hy/myheader/header-sprites15@2x.png) no-repeat;
  background-size: 200px;
}
.header-lolo>ul>li:nth-child(1)>i{
  background-position: -87px -47px;
}
.header-lolo>ul>li:nth-child(2)>i{
  background-position: -116px -47px;
}
.header-lolo>ul>li:nth-child(3)>i{
  background-position: -146px -108px;
}
.header-lolo>ul>li:nth-child(4)>i{
  background-position: -146px -47px;
}
.header-lolo>ul>li:nth-child(5)>i{
  background-position: -176px -47px;
}
.header-lolo>ul>li:nth-child(6)>i{
  background-position: -87px -78px;
}
.header-lolo>ul>li:nth-child(7)>i{
  background-position: -117px -77px;
}
.header-lolo>ul>li:nth-child(8)>i{
  background-position: -177px -108px;
}
.header-lolo>ul>li:nth-child(9)>i{
  background-position: -147px -77px;
}
.header-lolo>ul>li:nth-child(10)>i{
  background-position: -177px -77px;
}
.header-lolo>ul>li:nth-child(11)>i{
  background-position: -117px -138px;
}
.header-lolo>ul>li:nth-child(12)>i{
  background-position: -88px -107px;
}
.header-lolo>ul>li:nth-child(13)>i{
  background-position: -117px -107px;
}
.header-lolo>ul>li>a{
  text-decoration: none;
  color:#666;
}
.header-lolo>div{
  height: 40px;
  background: #ff9d00;
  line-height: 40px;
}
.header-info>div:nth-child(3){
  height:58px;
}
.header-info>div:nth-child(3):hover>.header-lolo{
  display: block;
}
.header-cc_bb>li:hover{
  background: #e9e9e9;
}
#cc:hover>.header-logo{
  display: block;
}

</style>