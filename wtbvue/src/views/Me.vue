<template>
  <div :class="meBg">
    <hheader class="me-header"></hheader>
    <div class="me-map">
      <img :src="zhongguo?zgImg:sjImg" alt="">
      <div class="me-default">
        <div class="me-mark">
          <p><strong class="h4">0</strong> 国家 <i></i> <strong class="h4">0</strong> 足迹 <i></i><strong class="h4">0</strong> 点评</p>
        </div>
        <div class="m-auto text-center me-start">
          <i class=""></i>
          <a href="javascript:;" class="bb-cc-aa"><i></i>开始添加足迹</a>
        </div>
        <div class="me-mapp pt-5 d-flex justify-content-between ">
          <div >
            <a href="javascript:;" @click="zhongguo=!zhongguo">
              <i></i>
              <img :src="zhongguo?sjImg:zgImg" alt="" >
            </a>
          </div>
          <div >
            <i class="iconfont icon-xiangji ml-4"></i>
            切回照片封面
          </div>
        </div> 
      </div>
    </div>
    <div class="me-tags-bar">
      <div class="me-tags">
        <div>
          <ul>  
            <li class="active"><a href="javascript:;">我的窝</a><i></i></li>
            <li><a href="javascript:;">我的游记</a><i></i></li>
            <li><a href="javascript:;">我的问答</a><i></i></li>
            <li><a href="javascript:;">我的足迹</a><i></i></li>
            <li><a href="javascript:;">我的点评</a><i></i></li>
            <li><a href="javascript:;">我的结伴</a><i></i></li>
            <li><a href="javascript:;">更多</a><i></i><span class="MDown"></span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="me-side clearfix"  >
      <div class="float-left me-side-bar" style="color:#666">
        <a href="javascript:;" class="me-ava">
          <img  :src="user.touxiang?getURL+user.touxiang:'/img/hy/me/me.png'" alt="" class="">
          <input type="file" @change="upAvatar($event)" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" />
        </a>
        <div class="me-name px-3">{{user.uname?user.uname:'mms名字太长会有傻子跟着念'}}<i class="ml-3" :class="user.sex==1?{me_girl}:{me_boy}"></i></div>
        <div class="d-flex my-3 justify-content-center me-its">
          <a href="javascript:;" class="me-vip"></a>
          <a href="javascript:;" class="me-duo"></a>
          <a href="javascript:;" class="me-zhilu"></a>
        </div>
         <div class="me-info  pl-3 ">
          <span>等级:</span>
          <span class=""><a href="javascript:;" class="font-weight-bold"> Lv:1</a></span><span>|</span>
          <span>现居:</span>
          <span>{{user.city?user.city:'天下为家'}}</span><span>|</span>
          <span><a href="javascript:;" class="me-shezhi ml-3"></a></span>
      </div>
      <div class="me-addBtn text-center mt-4 ">
        <a href="javascript:;" class="bb-cc-aa">填写个人简介</a>
      </div>
      <div class="me-more text-center pt-2 d-flex row">
        <div class="col-4">
          <strong>7</strong>
          <p>关注</p>
        </div>
        <div  class="col-4">
          <strong>0</strong>
          <p>粉丝</p>
        </div>
        <div  class="col-4">
          <strong>0</strong>
          <p>蜂蜜</p>
        </div>
      </div>
       <div class="me-main bg-f6 py-3 h8">
          <div class="text-center ">获得的特权</div>
          <!-- 获得的特权，轮播图 Carousel 走马灯 -->
          <div class="me-privilege"></div>
        </div>
        <div class="me-follow">
          <!-- 我的关注，需要动态添加内容 延迟，不用轮播图 -->
        </div>
        <!-- 留言板 -->
        <div class="me-messageBoard text-center">
          <div class="me-MguTitle">
            留言板
            <div class="me-boxcc h8">
              <el-tooltip class="item" effect="dark" content="关闭我的留言板 (不让其他人留言)" placement="right">
               <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
               </el-tooltip>   
            </div>
          </div>
          <!-- 留言板的留言 -->
          <div class="me-MguInput mt-3 mb-5 text-center">
            <textarea  class="bg-f6 p-3" placeholder="说点什么吧..."></textarea>
            <a href="javascript:;" class="h7 mt-2 abb">留言</a>
          </div>
        </div>
        <!-- 音乐播放器 -->
        <div id="me-music" :class="meMusic?'me-music':'me-music-cc'">
          <div></div>
          <div class="d-flex">
            <div class="d-flex px-3">
              <a href="javascript:;"></a>
              <a href="javascript:;" class="mx-1"></a>
              <a href="javascript:;"></a>
            </div>
            <div class="h8 pl-4 ">
              来自<a href="javascript:;" class="text-f9">暂无</a>
            </div>
          </div>
        </div>
      </div>
<!-- 右边部分 -->
      <!-- 弹出模板 背景和头像设置 -->
      <div id="me-ShowSet" :class="{meShowSetH:meDrawer}">
          <div class="m-auto clearfix">
            <a href="javascript:;" @click="meDrawer=!meDrawer"></a>
              <div class="float-left">
                <p>地图模板设置</p>
                <div class="d-flex mt-3  me-b-r">
                 <div class="text-center">
                   <a href="javascript:;" >
                     <img src="/img/hy/me/m1.gif" alt="">
                     <p class="text-center mt-2 text-c9" >经典</p>
                   </a>
                 </div>
                 <div class="text-center ml-3">
                   <a href="javascript:;" >
                     <img src="/img/hy/me/m2.gif" alt="">
                     <p class="text-center mt-2 text-c9">跃入蓝色星球</p>
                   </a>
                 </div>
                 <div class="text-center  ml-3">
                   <a href="javascript:;">
                     <img src="/img/hy/me/m3.gif" alt="">
                     <p class="text-center mt-2 text-c9">旅行让世界有光</p>
                   </a>
                 </div>
                 <div class="text-center  ml-3">
                   <a href="javascript:;" >
                     <img src="/img/hy/me/m4.gif" alt="">
                     <p class="text-center mt-2 text-c9">大航海时代</p>
                   </a>
                 </div>
                 <div class="text-center  ml-3">
                   <a href="javascript:;">
                     <img src="/img/hy/me/m5.gif" alt="">
                     <p class="text-center mt-2 text-c9">PINK PUNK</p>
                   </a>
                 </div>
                </div>
                <div class="me-ditu text-center mt-2">
                  <p class="h7 text-f9"><i></i>地图模式显示</p>
                </div>
                <div class="me-bkChoose mt-3">
                  <span>页面背景选择</span>
                  <a  @click="meBga(1)" class="ml-3" href="javascript:;"><i></i></a>
                  <a  @click="meBga(2)" class="ml-3" href="javascript:;"><img src="/img/hy/me/b2.png" alt=""></a>
                  <a  @click="meBga(3)" class="ml-3" href="javascript:;"><img src="/img/hy/me/b3.png" alt=""></a>
                  <a  @click="meBga(4)" class="ml-3" href="javascript:;"><img src="/img/hy/me/b4.png" alt=""></a>
                  <a  @click="meBga(5)" class="ml-3" href="javascript:;"><img src="/img/hy/me/b5.png" alt=""></a>
                </div>
              </div>
              <div class="float-right text-center ">
                <p>个性头图设置</p>
                <div class="mt-3">
                  <a href="javascript:;" class="me-shangC"><i class="mt-3"></i></a>
                  <p class="text-c9 mt-1">(头像封面宽度不低于1350px)</p>
                </div>
                <div class="me-ditu me-ditu-cc mt-2">
                  <p ><i></i>头像模式显示</p>
                </div>
                <div class="me-btn-tx text-center mt-3">
                  <a href="javascript:; " class="mr-2">取消</a>
                  <a href="javascript:;" @click=setBg()>确认</a>
                </div>
              </div>
          </div>
      </div>
      <!-- 弹出版结尾 -->
      <div class="float-right" id="me-flt2">
        <!-- 游记导航 -->
        <div class="me-commonbar mt-3">
         <a href="javascript:;" @click="meDrawer=!meDrawer"></a>
          <ul class="clearfix">
            <li>
              <a @click="toTra()" href="javascript:;" class="acc">
                <i></i>
                <div>写游记</div>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="acc">
                <i></i>
                <div>问达人</div>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="acc">
                <i></i>
                <div>添加足迹</div>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="acc">
                <i></i>
                <div>发布结伴</div>
              </a>
            </li>
          </ul>
        </div>
         <!-- 窝 -->
        <div class="me-commonBlock me-commonWo  mt-3">
          <div>
              <strong class="h6 text-f9">{{user.uname?user.uname:'mms名字太长会有傻子跟着念'}}</strong>
              <span class="h7 text-c3">，这里是你的【窝】</span>
              <p class="h7 text-c3 mt-1">是记录你的旅行记忆，结交各路豪杰的地盘儿。现在开启马蜂窝旅程！</p>
          </div>
          <div class="d-flex me-person mt-3 text-center ">
            <div class=" mr-3">
              <div class="pt-2"><i></i></div>
              <p class="h7">做一个有“脸面”的人</p>
              <p class="h7 mb-4">上传头像，完善资料!</p>
              <a href="javascript:;">完善个人资料</a>
            </div>
            <div class=" mr-3">
              <div><i></i></div>
              <p class="h7">这儿潜伏着哪些旅行大神？</p>
              <p class="h7 mb-4">他们都怎么玩儿？</p>
              <a href="javascript:;">看大神去</a>
            </div>
            <div class=" mr-3">
              <div><i></i></div>
              <p class="h7">马蜂窝会员升级有礼包。</p>
              <p class="h7 mb-4">第一步，从打卡开始。</p>
              <a href="javascript:;">打卡赚取蜂蜜</a>
            </div>
          </div>
        </div>
      <!-- 窝结尾 -->
      <!-- 写游记 -->
      <div class="me-commonBlock me-travels" >
        <div class="text-c3 h5 me-title">我的游记
           <a @click="toTra()" href="javascript:;">
            <i></i>
            写游记
          </a>
        </div>
        <div  class="pb-5">
          <a v-show="!youji" href="javascript:;"> </a>
          <div v-show="youji" class="me_yy mb-3" v-for="(item,i) of youji" :key=i>
            <img :src="item.opusimg?getURL+item.opusimg:'img/hy/me/default.jpg'" alt="">
            <p  class="mt-3 px-3"><a  class="text-f9 font-weight-blod" href="javascript:;">{{item.works?item.works:'好可惜，我还没有写标题'}}</a></p>
            <div class="me_dk px-3 text-c9 mt-2" >
              <span><i></i><em>2/0</em></span>
              <span class="ml-3"><i></i> <em>2</em></span>
              <span>{{item.worksTime}}</span>
            </div>
            <div class="px-3">  <span class="mb-2 text-c9 h7 px-3 me-tek">{{item.synopsis}}</span></div>
          </div>
        </div>
         <div class="p-4">
          <a href="javascript:;" class="text-c9 h7">
            <i class=""></i>
            已删除游记
          </a>
          <a v-show="youji" class="me_kg text-c9" href="javascript:;">共<strong class="text-f9 px-2">{{youji.length}}</strong>篇游记</a>
         </div>
      </div>
      <!-- 写游记结尾 -->
       <!-- 我的回答 -->
      <div class="me-commonBlock me-answer pb-3">
        <div class="text-c3 h5 me-title">我的回答</div>
        <div>
          <i></i>
           <div class="text-c9">
             <p>马蜂窝问答是一个所有人帮所有人的平台，<br>用你的旅行经验，去帮助其他蜂蜂。</p>
           </div>
        </div>
      </div>
      <!-- 回答结尾 -->
      <div class="me-commonBlock me-answer me-comment pb-3">
        <div class="text-c3 h5 me-title">我的点评</div>
        <div>
          <i></i>
           <div class="text-c9">
             <p>
点评，不仅是旅途记忆，<br>更是帮助他人的宝贵财富。</p>
           </div>
        </div>
      </div>
      </div>
     
<!-- 右边部分结尾 -->
     
     
    </div>
    <tooblar :scrollTopfa="scrollTopfa"></tooblar>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Hheader from '../components/hy/header'
import MyFooter from '../components/hy/MyFooter'
import Tooblar from '../components/hy/Tooblar'
import {getURL} from '../components/baseurl'
export default {
  components:{
    "hheader":Hheader,
    "my-footer":MyFooter,
    "tooblar":Tooblar
  },
  data(){
    return {
      value:true,//留言板
      meMusic:false,//音乐板定位
      zgImg:"img/hy/me/zhongguo.jpg",//头部背景图片
      sjImg:"img/hy/me/shijie.jpg",//头部背景图片
      zhongguo:true,
      meDrawer:false, //背景弹出框
      meBg:{ //背景的状态
        meBg1:true,
        meBg2:false,
        meBg3:false,
        meBg4:false,
        meBg5:false,
      },
      scrollTopfa:0,//向子组件toolbar传入当前页面的值
      user:{},//本页面用户的基本信息
      me_girl:true,
      me_boy:true,
      getURL:'',
      youji:'',//加载页面时获得的游记
    }
  },
  created() {
    this.getURL=getURL();
    // 背景音乐版的高度设置
    window.onscroll=()=>{
       var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
       this.scrollTopfa=scrollTop
       if(scrollTop>=1042){
         this.meMusic=false;
       }else{
         this.meMusic=true;
       }
    }
  this.axios.get('/user/author').then(res=>{
    if(res.data.code==200){
     this.user=res.data.userInfo;
    }else{
      console.log(res)
    }
  }).catch(err=>{
    console.log(err)
  })
  this.axios.get('/user/youji').then(res=>{
    if(res.data.code==200){
      this.youji=res.data.data
    }
  }).catch(err=>{
    console.log(err)
  })
  },
  methods: {  
   // 跳转到写游记的页面
    toTra(){
      if(sessionStorage.uid){
        this.$router.push('/Travels')
      }else{
         this.$confirm('还没登录，是否去登陆?', '提示', {
          confirmButtonText: '去登陆',
          cancelButtonText: '取消',
        }).then(() => {
            this.$router.push({
        name:'Login',
        params:{
          sta:1
        }
      })
        }).catch(() => {
                   
        });
      }
    },
    //更改页面背景图像
    setBg(){
      let i=0;
      let c=0;
      for(let key in this.meBg){
        i++
        if(this.meBg[key]){
          c=i;
        }
      }
      this.axios.get('/user/bj',{params:{bj:c}}).then(res=>{
      }).catch(err=>{
        console.log(err);
      })
    },
    //上传头像
    upAvatar(e){
        let data = new FormData()  //表单数据
			data.append('desc',  '这是我的头像文件')	//将要提交给服务器的字符数据
			data.append('avatar', e.target.files[0])  //将要提交给服务器的文件数据
			
			let config = {	//包含文件上传字段的HTTP请求消息，内容类型必需是:
				headers: {'Content-Type':'multipart/form-data'}
			}
			this.axios.post('/user/upload/avatar', data, config).then(res=>{
        if(res.data.code==200){
          this.user.touxiang=res.data.fileName;
        }
			}).catch(err=>{
				console.log(err)
			})
    },
    //调整背景图片的选择
   meBga(i){
     let c=0;
     for(let key in this.meBg){
       c++;
       if(i==c){
         this.meBg[key]=true;
       }else{this.meBg[key]=false}
     }
    
   }
  },
  watch: {
    //加载页面时更改背景
    user(){
       let i=0;
      let c=parseInt(this.user.beijing)
      for(let key in this.meBg){
        i++;
        if(i==c){
          this.meBg[key]=true;
        }else{
          this.meBg[key]=false
        }
      }
    }
  },


}
</script>

<style>
.me_yy img{
  width:680px;
  height:400px;
}
.me-ava>input{
  display: inline-block;
  width:120px;
  height:120px;
  position:absolute;
  top:0px;
  left:0px;
  opacity: 0;
  cursor: pointer;
}
.me_girl{
  background-position: -195px -210px !important;
}
.me_boy{
  background-position: -174px -210px !important;
}
.me-header{
  position: fixed;
  top:0;
  z-index: 50;
}
.me-map{
  height:480px;
  width:100%;
  position: relative;
  z-index: 10;
}
.me-map>img{
  height: 480px;
  width:100%;

}
.me-default{
  width:980px;
  margin:0 auto;
  padding-top:50px;
  position: absolute;
  top:0px;
  left:20%;
}
.me-commonBlock{
      margin-bottom: 18px;
    background-color: #fff;
    border: #e2e2e2 1px solid;
    box-shadow: 0 0 2px rgba(0,0,0,0.05);
}
.me-mark>p{
  text-align: right;
  font-size: 20px;
}
.me-mark>p>i{
  width:10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff9d00;
  margin:0 10px;
}
.me-start>i{
   margin:150px auto 0;
  display: block;
  width:400px;
  height:32px;
  background:url('/img/hy/me/maps-black-sprites.png') no-repeat 0 0;
}
.me-start>a{
 display: block;
 border: 2px solid #ffa800;
    height: 36px;
    line-height: 36px;
    width:200px;
    margin:20px auto;
    border-radius: 18px;
}
.me-start>a>i{
      display: inline-block;
    margin-left: 15px;
    width: 20px;
    height: 20px;
    background: url(/img/hy/me/path-sprite27.png) no-repeat -420px -140px;
    overflow: hidden;
    vertical-align: -5px;
}
.me-mapp>div:first-child>a{
  display: block;
  width:142px;
  height:70px;
  border-right:2px solid #ffa800;
  border-bottom:2px solid #ffa800;
  position: relative;
}
.me-mapp>div:first-child>a>img {
   width:140px;
  height:68px;
  border: 1px dashed  #ffa800;;
}
.me-mapp>div:first-child>a>i{
  position: absolute;
  width:20px; height:20px;
  top:0;
  left: 120px;
  background:url(/img/hy/me/maps-black-sprites.png) no-repeat -55px -35px
}
.me-mapp>div:last-child{
  width:165px;
  height:36px;
  background-color: rgba(34,35,36,0.8);
  margin-top:15px;
  border-radius: 5px;
  line-height: 36px;
  display: none;
}
.me-map:hover .me-mapp>div:last-child{
  display: block;
}
.me-tags-bar{
  height:58px;
  width:100%;
  border-bottom: #d6d6d6 1px solid;
    box-shadow: 0 2px 5px rgba(0,0,0,0.12);
    background-color: rgba(255,255,255,0.95);
}
.me-tags{
  width:980px;
  margin:0 auto;
}
.me-tags>div{
  float: right;
}
.me-tags>div>ul>li{
  float: left;
  height: 58px;
  line-height: 58px;
  padding:0 15px;
  position: relative;
}
.me-tags>div>ul>li>a{
   color:#444;
   font-size: 18px;
}
.me-tags>div>ul>li:hover>a{
  color: #ff8a00;
}
.me-tags>div>ul>li>i{
  position: absolute;
  width:100%;
  height:3px;
  background-color: #ff8a00;
  left: 0;
  bottom: 0;
  display: none;
}
.me-tags>div>ul>li.active>i{
  display: block;
}
.MDown{
  width: 12px;
    height: 7px;
    display: inline-block;
    background: url(/img/hy/me/ico_sprite_v8.png) no-repeat -93px -60px;
    margin-left: 5px;
    vertical-align: middle;
}
.me-side{
  width:980px;
  margin:0 auto;
}
.me-side-bar{
  width:280px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0,0,0,0.05);
  position: relative;
}
.me-ava{
 display: block;
 position: absolute;
 width:120px;
 height:120px;
 border-radius: 50%; 
 top:-50px;
 left:30%;
}
.me-ava>img{
  width:120px;
  height: 120px;
  border-radius: 50%;
}
.me-name{
  font-size: 22px;
  line-height: 22px;
  margin-top:90px;
  color:#666;
  text-align: center;
}
.me-name>i{
  display: inline-block;
  background-image: url(/img/hy/me/twice_ico_sprite_v9.png);
  height:20px;
  width:20px;
  background-size: 220px;
 background-position: -174px -210px;
 position: relative;
 top:4px;
}
.me-its>a{
  height:20px;
    margin:0 8px;
    border-radius: 10px;
    background-image: url(/img/hy/me/home_sprite_v15.png)
}
.me-vip{
  width: 40px;
  background-position:  0 -460px;
}
.me-duo{
      width: 30px;
    background-position: -41px -460px;
}
.me-zhilu{
  width: 40px;
    background-position: -71px -460px;
}
.me-info{
  color:#666;
  font-size:14px;
}
.me-info>span{
  margin:0 4px;
}
.me-info>span>a{
  color:#ea3c1a;
  font-size:16px;
}
.me-shezhi{
    width: 17px;
    height: 17px;
    background-image: url(/img/hy/me/ico_sprite_v8.png);
    background-position: -108px -146px;
    display: inline-block;
    vertical-align: middle;
}
.me-addBtn>a{
  display: block;
  margin:0 auto;
  width:240px;
  height:30px;
  line-height:30px;
  color:#666;
  border-radius: 3px;
  background-color: #efefef;
  transition: background-color .3s ease-out 0s;
}
a.bb-cc-aa:hover{
  color:#fff;
  background-color: #ff8a00; ;
}
.me-more{
  margin: 20px auto 0 !important;
  height:62.4px;
  color:#666;
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
  width:280px;
}
.me-more>div+div{
  border-left:1px solid #ddd ;
}
.me-privilege{
  height:180px;
}
.me-follow{
  padding:45px 30px 0;
  width:100%;
}
.me-messageBoard{
  width:100%;
  padding:45px 15px 0px;
  position: relative;
}
.me-MguTitle>div{
  position: absolute;
  top:45px;
  right:15px;
}
.me-MguInput>textarea{
  width:250px;
  line-height: 20px;
    color: #999;
    border-style: none;
    display: block;
    border: #efefef 1px solid;
    font-size: 14px;
    resize: none;
}
.me-MguInput>a{
  display: block;
  width:100;
  height: 30px;
  border-radius: 5px;
  background-color: #ccc;
  line-height: 30px;
}
.me-music{
  width:280px;
  position: fixed;
  bottom:0px;
}
.me-music-cc{
  width:280px;
}
#me-music>div:first-child{
 height:4px;
 background-color: #dfddda;
}
#me-music>div:last-child{
  height:64px;
  background-color: #fff;
}
#me-music>div:last-child>div:first-child{
  width:40%;  
}
#me-music>div:last-child>div:first-child>a:first-child{
    align-self: center;
      width: 15px;
    height: 16px;
    background-image: url(/img/hy/me/ico_sprite_v8.png);
    background-position: -74px -123px;
}
#me-music>div:last-child>div:first-child>a:nth-child(2){
    align-self: center;
      width: 46px;
    height: 44px;
    display: block;
    background: url(/img/hy/me/nn_sprite_v23.png) -354px -241px no-repeat;
}
#me-music>div:last-child>div:first-child>a:nth-child(3){
  align-self: center;
  width: 15px;
    height: 16px;
    background-image: url(/img/hy/me/ico_sprite_v8.png);
    background-position: -87px -123px;
}
#me-music>div:last-child>div:last-child{
  align-self: center;
  width:60%;
}
#me-flt2{
  width:682px; 
}
#me-flt2 .me-commonbar{
  padding:20px 0;
  background-color: #fff;
  position: relative;
}
.me-commonbar>a{
  top:0px;
  right:0px;
      width: 40px;
    height: 40%;
    background-image: url(/img/hy/me/home_sprite_v15.png);
    background-position: -138px -243px;
    position: absolute;
    overflow: hidden;
    display: block;
    z-index: 2;
}
.me-commonbar>ul>li{
  float:left;
  width:170px;
  height:75px;
  text-align: center;
}
.me-commonbar>ul>li+li{
  border-left:1px solid #e5e5e5;
}
.me-commonbar>ul>li>a{
  color: #999;
}
.me-commonbar>ul>li>a>i{
      width: 56px;
    height: 49px;
    background-image: url(/img/hy/me/home_sprite_v15.png);
    display: inline-block;
}
.me-commonbar>ul>li:nth-child(1)>a>i{
      background-position: -202px -425px;
}
.me-commonbar>ul>li:nth-child(2)>a>i{
  background-position: -260px -427px;
}
.me-commonbar>ul>li:nth-child(3)>a>i{
    background-position: -317px -422px;
}
.me-commonbar>ul>li:nth-child(4)>a>i{
      background-position: -379px -424px;
}
#me-flt2 .me-commonWo{
    background-color: #f5dc52;
    box-shadow: 2px 3px 0 #dfca58;
    padding: 28px 30px 30px;
    margin-bottom: 30px;
}
.me-person>div{
  padding:15px 0px 30px;
  background-color: #fff;
  color:#666;
  width:33.3%;
}
.me-person>div>div{
  height:105px;
  display: inline-block;
  vertical-align: middle;
}
.me-person>div>p{
      word-wrap: break-word;
          line-height: 24px;
}
.me-person>div>div>i{
  margin:0 auto;
    display:block;
    background-image: url(/img/hy/me/default_sprite_v6.png);
}
.me-person>div>a{
  width: 124px;
    background-color: #f1744f;
    font-size: 14px;
    display: inline-block;
    color: #fff;
    line-height: 36px;
    border-radius: 36px;
}
.me-person>div:first-child>div>i{
    width: 59px;
    height: 71px;
   background-position: -1px -256px;
}
.me-person>div:nth-child(2)>div>i{
  width: 72px;
    height: 76px;
    background-position: -67px -256px;
}
.me-person>div:nth-child(3)>div>i{
      width: 71px;
    height: 81px;
    background-position: -147px -255px;
}
.me-title{
      padding: 25px 30px;
    line-height: 30px;
    position: relative;
}
.me-travels>div:first-child>a{
      display: block;
    width: 140px;
    height: 40px;
    border-radius: 4px;
    background-color: #ff9e00;
    position: absolute;
    right: 30px;
    top: 18px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 40px;
}
.me-travels>div:first-child>a>i{
      display: inline-block;
    width: 18px;
    height: 18px;
    background: url(/img/hy/me/home_sprite_v15.png) -228px -325px no-repeat;
    margin-right: 5px;
    vertical-align: middle;
}
.me-travels>div:nth-child(2)>a{
  display: block;
      width: 100%;
    height: 320px;
    background: url(/img/hy/me/noyj_v2.jpg) no-repeat;
}
.me-travels>div:nth-child(3)>a>i{
  display: inline-block;
  margin: 0 5px 0 0;
    width: 17px;
    height: 17px;
    background-image: url(/img/hy/me/ico_sprite_v8.png);
    background-position: -50px -215px;
}
.me-answer>div:nth-child(2){
  position: relative;
      padding: 5px 0 50px 365px;
}
.me-answer>div:nth-child(2)>i{
  display: block;
  background-image: url(/img/hy/me/default_sprite_v6.png);
    width: 176px;
    height: 183px;
    background-position: -227px -65px;
}
.me-answer>div:nth-child(2)>div{
  position: absolute;
  top:20px;
      left: 140px;
    width: 220px;
}
.me-comment>div:nth-child(2){
  padding: 5px 0 50px 130px;
}
.me-comment>div:nth-child(2)>i{
      width: 199px;
    height: 177px;
    background-position: -409px -66px;
}
.me-comment>div:nth-child(2)>div{
  left: 325px;
    top: 90px;
}
#me-ShowSet{
  height:318px;
  width: 100%;
  background-color: rgba(0,0,0,0.9);
  padding: 22px 0 30px;
  position: fixed;
  bottom:-318px;
  left: 0;
  z-index: 50;
  transition: bottom .4s ease-in-out 0s;
  overflow: hidden;
}
.meShowSetH{
  bottom:0px!important ;
}
#me-ShowSet>div{
  width:980px;
  position: relative;
}
#me-ShowSet>div>a{
  width: 20px;
    height: 20px;
    background-image: url(/img/hy/me/home_sprite_v15.png);
    background-position: -269px -325px;
    position: absolute;
    right: 0;
    top: 0;
}
#me-ShowSet>div>div:first-child{
  width:630px;
}
#me-ShowSet>div>div:last-child{
  width:350px;
}
.me-b-r{
  border-right: 1px solid #555;
}
.me-ditu>p>i{
      display: inline-block;
      width: 18px;
    height: 18px;
    position: relative;
    margin-right: 12px;
    border-radius: 18px;
    background-color: #ff9d00;
        vertical-align: middle;
}
.me-ditu-cc>p>i{
  background-color:#999;
}
.me-ditu>p>i::before{
  content: '';
  display: inline-block;
  position: absolute;
  top:2px;
  left:2px;
    width: 14px;
    height: 14px;
    border: 2px solid #3d4040;
    border-radius: 14px;
}
.me-ditu>p>i::before{
  border-color: #fff  ;
}
.me-bkChoose>a>img{
  width:48px;
  height: 48px;
  border-radius: 50%;
}
.me-bkChoose>a>i{
  display: inline-block;
  width:48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
  vertical-align: middle;
}
.me-shangC{
display: inline-block;
  width:166px;
  height:100px;
  background-color: #d8d8d8;
  position: relative;
  margin:0 auto;
}
.me-shangC>i{
  display: inline-block;
  width:65px;
  height:64px;
  background: url(/img/hy/me/home_sprite_v15.png) no-repeat -251px 0;
}
.me-btn-tx>a{
  display:inline-block ;
  width:84px;
  height:32px;
  border-radius: 5px;
  line-height: 32px;
}
.me-btn-tx>a:first-child{
      background-color: #ccc;
}
.me-btn-tx>a:last-child{
  background-color: #ff9d00;
}
.meBg1{
  background-color: #eee;
}
.meBg2{
      background: url(/img/hy/me/bg2.jpg) repeat;

    position: relative;
}
.meBg2::before{
  position: absolute;
      content: '';
      display: block;
    width: 106px;
    height: 90px;
    background-image: url(/img/hy/me/bg2_ico1.png);
    left: 197px;
    top: 670px;
    z-index: 10;
}
.meBg3{
      background:url(/img/hy/me/bg3.jpg) repeat;
}
.meBg3::before{
      content: '';
      position: absolute;
      display: block;
    width: 1265px;
    height: 1561px;
    background:url(/img/hy/me/bg3_ico.png) no-repeat 0 650px;
    left: 131px;
    top:0px;
}
.meBg4{
  background: url(/img/hy/me/bg4_v2.gif) repeat-y center 0;
    background-color: #fff;
}
.meBg4::before{
  position: absolute;
  content: '';
    width: 1474px;
    height: 352px;
    background-image: url(/img/hy/me/bg4_ico.png);
    left:1%;
    top: 810px;
}
.meBg5{
      background-image: url(/img/hy/me/bg1.jpg);
    background-attachment: fixed;
    background-position: center 0;
    background-color: #f8f7f3;
}

</style>