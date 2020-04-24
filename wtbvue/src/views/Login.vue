<template>
  <div id="Login">
    <div class="login_bg">
      <img src="/img/hy/Login/5.jpg" alt="" >
    </div>
    <div class="login_zhuce ">
      <div class="d-flex">
        <div class="login_login">
          <div v-show="state==1" class="login_show" >
            <div class="login_tabs d-flex justify-content-around">
              <a :class="{login_ck:login_ck==0}" @click="login_ck=0" href="javascript:;">扫码登录</a>
              <a :class="{login_ck:login_ck==1}" @click="login_ck=1" href="javascript:;">密码登录</a>
            </div>
            <div v-if="login_ck==0" class="login_iinput text-center" >
              <p class="text-c9 h7 mt-4 text-center">打开 <a class="text-f9" href="javascript:;">马蜂窝APP</a> -V9.3.38及以上版本扫描二维码，免输入，更快更安全</p>
              <img style="width:150px;height:150px" class="mt-3" src="/img/hy/Login/erwei.jpg" alt="">
            </div>
            <div v-else class="login_iinput" text="密码登录">
              <input class="mt-5" type="text" placeholder="您的手机号" v-model="Louphone">
             <el-input class="mt-3" placeholder="请输入密码" v-model="Loupwd" show-password></el-input>
              <p class="login_miss h8 mt-2"><a class="text-c9 pr-4" href="javscript:;">忘记密码</a></p>
              <button class="login_btn mt-2" @click="login()">登录</button>
            </div>
          </div>
          <div class="login_form login_show" v-show="state==2">
            <input onblur="this.placeholder='手机号码不能为空'" class="mt-5" type="text" placeholder="请输入您的手机号" v-model="phone">
            <span style=" display: inline-block;" class="h8 text-f9" v-show="phoneMsg">{{phoneMsg}}</span>
            <input onblur="this.placeholder='用户名不能为空'" class="mt-3" type="text" placeholder="请输入您的用户名" v-model="uname">
            <span style=" display: inline-block;" class="h8 text-f9" v-show="unameMsg">{{unameMsg}}</span>
            <el-input onblur="this.placeholder='密码不能为空'" class="mt-3" v-model="upwd" placeholder="请输入密码"  show-password></el-input>
            <span style=" display: inline-block;" class="h8 text-f9" v-show="upwdMsg">{{upwdMsg}}</span>
            <el-input onblur="this.placeholder='确认密码不能为空'" class="mt-3" v-model="upwdC" placeholder="请确认您的密码"  show-password></el-input>
            <span style=" display: inline-block;" class="h8 text-f9" v-show="upwdCMsg">{{upwdCMsg}}</span>
            <button class="mt-3 login_btn" @click="registerUser()">立即注册</button>
            <p class="h8 mt-1"><span class="text-c9">注册视为同意</span><a class="text-muted  " href="javascript:;">《马蜂窝用户使用协议》</a></p>
          </div>
          <div class="login_connect">
            <p class="h7 text-c9">用合作网站账号直接登录</p>
            <div class="mt-3">
              <a href="javascript:;"></a>
              <a class="ml-4" href="javascript:;"></a>
              <a class="ml-4" href="javascript:;"></a>
            </div>
          </div>
        </div>
        <div>
          <img src="/img/hy/Login/img_download.png" alt="" class="w-100"  >
        </div>
      </div>
      <div class="login_link" v-show="state==2">
        已经注册？<a href="javascript:;" class="text-f9" @click="state=1">马上登录</a>
      </div>
      <div class="login_link" v-show="state==1">
        还没有账号？<a href="javascript:;" class="text-f9" @click="state=2">马上注册</a>
      </div>
     
    </div>
  </div>
</template>

<script>
import {getURL} from '../components/baseurl'
export default {
  data() {
    return {
      state:1,//登录或注册，1登录，2注册
      login_ck:1,//tabs下的小横条 1为密码登录，0为扫码登录
      phone:'',//电话的双向绑定
      phoneMsg:'',//电话提醒
      uname:'',//名字的双向绑定
      unameMsg:'',//名字的提醒
      upwd:'',//密码的双向绑定
      upwdMsg:'',//密码的提醒
      upwdC:'',//确认密码的双向绑定
      upwdCMsg:'',//确认密码提示
      actions:[false,false,false,false],//三个为true,则可以提交数据表单
      button:false,//提交button的disabled
      Louphone:'',//登录用户电话
      Loupwd:'',//用户登录密码
      getURL:'',//图片基础路径
    }
  },
  created() {
      this.getURL=getURL();
      if(this.$route.params.sta){
        this.state=parseInt(this.$route.params.sta)
      }
  },
  methods: {
    //登录
    login(){
      let obj={phone:this.Louphone,upwd:this.Loupwd}
      this.axios.post('/user/login',obj).then(res=>{
        if(res.data.code==200){
          this.$store.commit('setUserInfo',res.data.userInfo)
          sessionStorage.setItem('userInfo',JSON.stringify(res.data.userInfo));
          sessionStorage.uid=res.data.userInfo.uid
          sessionStorage.touxiang=res.data.userInfo.touxiang
          // var userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
          this.$router.push("/Me")
        }else{
          this.open5();
          return;
        }
      }).catch(err=>{
        console.log(err)
        return;
      })
    },
    //提交注册信息
    registerUser(){
      for(let i=0;i<this.actions.length;i++){
        if(this.actions[i]==false){
          this.open4();
          return
        }
      }
      let obj={phone:this.phone,uname:this.uname,upwd:this.upwd}
      this.axios.post('/user/register',obj)
      .then(res => {
       if(res.data.code==200){
         this.open2();
         this.state=1;
       }else{
         this.open3();
       }
      })
      .catch(err => {
        console.error(err);
        return 
      })
      
  },
  open2(){
    this.$message({
          message: '恭喜你，注册成功',
          type: 'success',
          duration:1000
        });
  },
   open4() {
        this.$message.error('请填写正确的注册信息');
      },
 open3() {
        this.$message({
          message: '注册失败，请重新注册',
          type: 'warning'
        });
      },
  open5() {
        this.$message({
          message: '登录失败，请重新登录',
          type: 'warning'
        });
      },
  },
  watch: {
    //验证电话号码
    phone(){
       let reg=/^1[3-8]\d{9}$/g;
      let bool=reg.test(this.phone);
     if(bool){
       //发请求验证电话号码是否有重复
      this.axios.get('/user/checkphone?phone='+this.phone).then(res=>{
        if(res.data.code==401){
             this.phoneMsg='';
          this.actions[0]=true
        }else{
          this.phoneMsg='电话号码已经注册，可直接登录';
          this.actions[0]=false;
          return
        }
      }).catch(err=>{
        console.log(err)
      })
     }else{
       this.phoneMsg='请输入正确的电话号码'
       this.actions[0]=false;
     }
    },
    //验证用户名
    uname(){
      let reg=/(^[^~`!@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'\<,\>\.\?\/0-9])[a-zA-Z0-9_\u4e00-\u9fa5]{3,6}$/;
      let bool=reg.test(this.uname);
      if(bool){
       this.unameMsg='';
       this.actions[1]=true;
      }else{
         this.unameMsg='不能有数字和符号,长度为4~7位'
         this.actions[1]=false;
      }
    },
    //验证密码
    upwd(){
      //必须包含一个大写和小写字母,长度为6~18位
      let reg = /^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*?]{8,12}$/;
      let bool=reg.test(this.upwd)
      if(bool){
        this.upwdMsg='';
         this.actions[2]=true;
      }else{
        this.upwdMsg='包含一个大写和小写字母,长度为8~12位'
        this.actions[2]=false;
      }
    },
    //验证确认密码
    upwdC(){
      let upwdC=this.upwdC;
      let upwd=this.upwd;
      if(upwd!=upwdC){
        this.upwdCMsg='密码不相同'
        this.actions[3]=false;
      }else{
        this.upwdCMsg='';
        this.actions[3]=true;
      }
    }
    
  },
}
</script>

<style>
  #Login{
    width:100%;
    height:100vh;
  overflow: hidden;
  position: relative;
}
.login_zhuce{
  position: absolute;
  width:730px;
  height:434px;
  top:50%;
  left:50%;
  margin:-217px 0 0 -365px;
  z-index: 10;
}
.login_zhuce{
  width: 730px;
    height: 434px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 3px rgba(0,0,0,.4);
}
.login_login{
     position: relative;
    width: 440px;
    height: 434px;
    
}
.login_show{
  height: 337px;
  padding: 0 58px 0 62px;
}
.login_login input{
  width: 300px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #f6f7f9;
    background: #f6f7f9;
    border-radius: 6px;
    font-size: 14px;
    color: #666;
    line-height: 28px;
    padding: 6px 0 6px 12px;
    box-shadow: 0 0 5px #fff;
    outline: 0;
    transition: box-shadow .25s linear 0s;
    font-family: PingFangSC-Medium,PingFang SC;

}
.login_login input:focus{
  border: 1px solid #ffa200;
    box-shadow: 0 0 5px #ffa200;
    transition: box-shadow .25s linear 0s;
}
.login_form span.el-input__suffix {
  right:20px!important;
}
.login_btn{
      width: 300px;
    height: 42px;
    border: 0;
        text-align: center;
    line-height: 40px;
    color: #fff;
        background: linear-gradient(135deg,rgba(255,149,0,1) 0,rgba(255,165,38,1) 100%);
    border-radius: 6px;
    font-size: 20px;
    font-weight: 500;
}
.login_connect{
  background: linear-gradient(270deg,rgba(246,247,249,0.3) 0,rgba(246,247,249,1) 100%);
  padding:0 41px;
  height:97px;
}
.login_connect>div>a{
  display: inline-block;  
  width:36px;
  height:36px;
  background-size: 34px;
}
.login_connect>div>a:first-child{
  background:url(/img/hy/Login/ic_weibo.png) no-repeat;
}
.login_connect>div>a:nth-child(2){
   background:url(/img/hy/Login/ic_qq.png) no-repeat;
}
.login_connect>div>a:nth-child(3){
   background:url(/img/hy/Login/ic_weixin.png) no-repeat;
}
.login_zhuce>div:first-child>div:last-child{
  width:290px;
  height:434px;
}
.login_link{
  width: 144px;
    margin: 10px auto;
    border-radius: 15px;
    background-color: rgba(0,0,0,.4);
    text-align: center;
    font-size: 12px;
    color: #fff;
    padding: 4px 0;
    text-shadow: 1px 1px 1px rgba(0,0,0,.4);
}
.login_tabs{
  padding: 0 40px;
    border-bottom: 1px solid #f6f7f9;
    display: flex;
}
.login_tabs>a{
  display: inline-block;
  text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(113,115,118,1);
    line-height: 25px;
    padding: 40px 0 12px;
    position: relative;
}
.login_tabs>a.login_ck:after{
  content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -25px;
    width: 50px;
    height: 4px;
    background: rgba(255,149,0,1);
    border-radius: 3px;
}
.login_iinput{
  width:100%;
  height:254px;
}
.login_iinput input{
  height:42px ;
  line-height: 42px;
}
.login_iinput .el-input span.el-input__suffix{
  right:20px;
}
.login_miss{
  text-align: right;  
}
</style>