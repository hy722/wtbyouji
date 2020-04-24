<template>
<div>
  <my-header></my-header>
  <toolbar :scrollTopfa="scrollTopfa"></toolbar>
   <div id="banner">
      <div id="demoo" class="carousel" data-ride="carousel">
        <!-- 图片 -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/hy/iindex/banner1.png" alt="" class="w-100">
          <div class="iindex-date">
            <p><span class="h3">1</span><span class="h4">/Mar.2020</span></p>
            <p class="h4">【纽约】大王带你跟着电影走遍大苹果－电影美剧取景地打卡，八个博物馆，两部话剧，无数的瞬间</p>
          </div>
          <p>图片来自于<a href="javascript:;">纽约</a>，此目的地共收藏了<a href="javascript:;">169458</a>张<a href="javascript:;">纽约</a>图片。本片由<a href="javascript:;">我是你大王</a>荣誉出品</p>
        </div>
        <div  class="carousel-item">
          <img src="/img/hy/iindex/banner2.png" alt=""  class="w-100">
          <div class="iindex-date">
            <p><span class="h2">29<span class="h3">/Feb.2020</span></span></p>
            <p class="h3">打了鸡血的非洲7国85天流浪探险之旅【附全套攻略】</p>
          </div>
          <p>图片来自于<a href="javascript:;">纳米比亚</a>，此目的地共收藏了<a href="javascript:;">14417</a>张<a href="javascript:;">纳米比亚</a>图片。本片由<a href="javascript:;">RosieFores</a>荣誉出品</p>
        </div>
        <div  class="carousel-item">
          <img src="/img/hy/iindex/banner3.png" alt=""  class="w-100">
          <div class="iindex-date">
            <p><span class="h2">28<span class="h3">/Feb.2020</span></span></p>
            <p class="h3">念你如尘，爱你如风｜青岛6月生活日志（附最全景点&amp;咖啡探店）</p>
          </div>
          <p>图片来自于<a href="javascript:;">青岛</a>，此目的地共收藏了<a href="javascript:;">859458</a>张<a href="javascript:;">青岛</a>图片。本片由<a href="javascript:;">小菜与生活</a>荣誉出品</p>
        </div>
        <div  class="carousel-item">
          <img src="/img/hy/iindex/banner4.png" alt=""  class="w-100">
          <div class="iindex-date">
            <p><span class="h2">27<span class="h3">/Feb.2020</span></span></p>
            <p class="h3">柬埔寨 | 带着汉服去吴哥窟，徜徉在这曼妙的光影世界</p>
          </div>
          <p>图片来自于<a href="javascript:;">柬埔寨</a>，此目的地共收藏了<a href="javascript:;">169458</a>张<a href="javascript:;">柬埔寨</a>图片。本片由<a href="javascript:;">筱莲</a>荣誉出品</p>
        </div>
        <div  class="carousel-item">
          <img src="/img/hy/iindex/banner5.png" alt=""  class="w-100">
          <div class="iindex-date">
            <p><span class="h2">26<span class="h3">/Feb.2020</span></span></p>
            <p class="h3">带娃穿越岁月沉淀的波斯帝国|亲子环球之旅</p>
          </div>
          <p>图片来自于<a href="javascript:;">厦门</a>，此目的地共收藏了<a href="javascript:;">192814</a>张<a href="javascript:;">厦门</a>图片。本片由<a href="javascript:;">你说太阳好吃嘛</a>荣誉出品</p>
        </div>
      </div>
      <ul class="carousel-indicators">
        <li data-target="#demoo" data-slide-to="0" class="active mb-2"><img src="/img/hy/iindex/banner-1.png" alt=""></li>
        <li data-target="#demoo" data-slide-to="1" class="mb-2"><img src="/img/hy/iindex/banner-2.png" alt="" class="w-100"></li>
        <li data-target="#demoo" data-slide-to="2" class="mb-2"><img src="/img/hy/iindex/banner-3.png" alt="" class="w-100"></li>
        <li data-target="#demoo" data-slide-to="3" class="mb-2"><img src="/img/hy/iindex/banner-4.png" alt="" class="w-100"></li>
        <li data-target="#demoo" data-slide-to="4" class="mb-2"><img src="/img/hy/iindex/banner-5.png" alt="" class="w-100"></li>
        <li class=""><a href="javascript:;"></a></li>
      </ul>
      </div>
     <div class="iindex-search-group">
         <ul class="nav nav-tabs border-0">
           <li class="nav-item"><a href="#tab1" data-toggle="tab" class="nav-link active"><i></i>全部</a></li>
           <li class="nav-item"><a href="#tab2" data-toggle="tab" class="nav-link"><i></i>酒店</a></li>
           <li class="nav-item"><a href="#tab3" data-toggle="tab" class="nav-link"><i></i>目的地</a></li>
           <li class="nav-item"><a href="#tab4" data-toggle="tab" class="nav-link"><i></i>去旅行</a></li>
           <li class="nav-item"><a href="#tab5" data-toggle="tab" class="nav-link"><i></i>机票</a></li>
         </ul>
         <div class="tab-content mt-2">
           <div id="tab1" class="tab-pane active"><input type="text" placeholder="搜目的地/攻略/酒店/旅行特价"><a href="javascript:;"><i></i></a></div>
           <div id="tab2" class="tab-pane"><input type="text" placeholder="请输入国家、地区、城市名称"><input type="date" placeholder="未定"><input type="date" placeholder="未定"><a href="javascript:;"><i></i></a></div>
           <div id="tab3" class="tab-pane"><input type="text" placeholder="我要去"><a href="javascript:;"><i></i></a></div>
           <div id="tab4" class="tab-pane"><input type="text" placeholder="重庆"><a href="javascript:;"><i></i></a></div>
           <div id="tab5" class="tab-pane"><input type="text" placeholder="重庆"><input type="text" placeholder="到达城市"><input type="date" placeholder="未定"><a href="javascript:;"><i></i></a></div>
         </div>
     </div>
  </div>
  <div class="iindex-mfw-container">
    <div class="iindex-sales">
      <a href="javascript:;"><p class="font-weight-bold">自由行</p><p>旅游就要更自在</p></a>
      <a href="javascript:;"><p class="font-weight-bold">跟团游</p><p>行程透明省心</p></a>
      <a href="javascript:;"><p class="font-weight-bold">当地游</p><p>最地道的玩法体验</p></a>
      <a href="javascript:;"><p class="font-weight-bold">机票</p><p>特惠一折起</p></a>
      <a href="javascript:;"><p class="font-weight-bold">订酒店</p><p>一键全网比价</p></a>
      <a href="javascript:;"><p class="font-weight-bold">签证</p><p>出签率高服务佳</p></a>
      <a href="javascript:;"><p class="font-weight-bold">邮轮</p><p>移动的海上城堡</p></a>
    </div>
    <div class="iindex-mfw-left float-left">
      <a href="javascript:;" class="iindex-asidebox aside"><img src="/img/hy/iindex/index-link.png" class="w-100"></a>
      <div class="aside" >
        <div class="iindex-asidebox-hd">
          <h2 class="hd-title">旅行家专栏</h2>
          <a href="javascript:" class="hd-right">专栏首页</a>
      </div>
      <div class="iindex-asidebox-bd">
        <div id="asidebox" class="carousel asidebox" data-ride="carousel">
          <!-- 轮播图片 -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <a href="javascript:;">
                <img src="/img/hy/iindex/asidebox1.jpeg" class="w-100">
                <span>夏木尼，小王子的玫瑰城市</span>
                <i>夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。</i>
              </a>
            </div>
            <div class="carousel-item ">
              <a href="javascript:;">
                <img src="/img/hy/iindex/asidebox3.jpeg" class="w-100">
                <span>夏木尼，小王子的玫瑰城市</span>
                <i>夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。</i>
              </a>
            </div>
            <div class="carousel-item ">
              <a href="javascript:;">
                <img src="/img/hy/iindex/asidebox4.jpeg" class="w-100">
                <span>暹粒油淋鱼</span>
                <i>默默等待，鱼上桌，迅速夹一口塞在嘴里——我就像个戒烟多日的老烟枪终于抽上了烟，心里的空洞瞬间被填满了</i>
              </a>
            </div>
            <div class="carousel-item ">
              <a href="javascript:;">
                <img src="/img/hy/iindex/asidebox5.jpeg" class="w-100">
                <span>西安：旧长安的画皮</span>
                <i>西安这座曾经的13朝古都，在今天更像旧长安的画皮，城墙完整绵延，一切就像一张唐画的影印本。</i>
              </a>
            </div>
            <div class="carousel-item ">
              <a href="javascript:;">
                <img src="/img/hy/iindex/asidebox2.jpeg" class="w-100">
                <span>漫山岛</span>
                <i>夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。</i>
              </a>
            </div>
          </div>
          <ul class="carousel-indicators">
            <li data-target="#asidebox" data-slide-to="0" class="active "></li>
            <li data-target="#asidebox" data-slide-to="1" class=" "></li>
            <li data-target="#asidebox" data-slide-to="2" class=" "></li>
            <li data-target="#asidebox" data-slide-to="3" class=" "></li>
            <li data-target="#asidebox" data-slide-to="4" class=" "></li>
          </ul>
        </div>
      </div>
      </div>
      <!--  -->
      <div class="iindex-asidebox-hd">
        <h2 class="hd-title">旅游攻略推荐</h2>
        <a href="javascript:" class="hd-right">更多</a>
    </div>
    <div class="iindex-asidebox-gonglv aside">
      <a href="javascript:;"><img src="/img/hy/iindex/gonglue.jpeg" alt=""></a>
      <a href="javascript:;" class="iindex-item">新加波尽有四个动物园，首选亲子游目的地了解</a>
    </div>
    <!-- 最新活动 -->
    <div class="aside">
      <div class="iindex-asidebox-hd">
        <h2 class="hd-title">最新活动</h2>
        <a href="javascript:" class="hd-right">查看全部</a>
    </div>
    <div class="iindex-asidebox-bd">
      <div id="activity" class="carousel asidebox" data-ride="carousel">
        <!-- 轮播图片 -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="javascript:;">
              <img src="/img/hy/iindex/activity1.jpg" class="w-100">
              <span>打卡2000英尺「爱情博物馆」</span>
              <i>赢东京晴空塔浪漫之旅！</i>
            </a>
          </div>
          <div class="carousel-item ">
            <a href="javascript:;">
              <img src="/img/hy/iindex/activity2.jpg" class="w-100">
              <span>去韩国，遇见不一样的你！</span>
              <i>>>马上启程出发</i>
            </a>
          </div>
          <div class="carousel-item ">
            <a href="javascript:;">
              <img src="/img/hy/iindex/activity3.jpg" class="w-100">
              <span>大航海时代2.0， 解锁西澳秘境</span>
              <i>大航海时代2.0， 解锁西澳秘境</i>
            </a>
          </div>
          <div class="carousel-item ">
            <a href="javascript:;">
              <img src="/img/hy/iindex/activity4.jpeg" class="w-100">
              <span>马蜂窝拍卖行</span>
              <i>每周二：拍精美实物奖品！</i>
            </a>
          </div>
        </div>
        <ul class="carousel-indicators" style="top:155px">
          <li data-target="#activity" data-slide-to="0" class="active "></li>
          <li data-target="#activity" data-slide-to="1" class=" "></li>
          <li data-target="#activity" data-slide-to="2" class=" "></li>
          <li data-target="#activity" data-slide-to="3" class=" "></li>
        </ul>
      </div>
    </div>
    </div>
    <div class="iindex-asidebox-hd">
      <h2 class="hd-title">未知旅行实验室</h2>
      <a href="javascript:" class="hd-right">查看更多</a>
  </div>
  <div class="iindex-asidebox-gonglv aside">
    <a href="javascript:;"><img src="/img/hy/iindex/unknownTravel181120.png" alt=""></a>
  </div>
  <div class="iindex-asidebox-hd">
    <h2 class="hd-title">加入马蜂窝</h2>
    <a href="javascript:" class="hd-right">了解详情</a>
</div>
<div class="iindex-asidebox-gonglv aside">
  <a href="javascript:;"><img src="/img/hy/iindex/join.jpeg" alt="" class="w-100"></a>
</div>
      <div class="iindex-news">
        <p class="aside">马蜂窝旅游网最新资讯</p>
        <ul class="p-0 m-0">
          <li>09月28日<a href="javascript:;">马蜂窝国庆白领出游偏好调查：超7成在旅途中工作</a></li>
          <li>09月25日<a href="javascript:;">九寨沟部分景区试开放引关注，马蜂窝提醒游客文明出行</a></li>
          <li>09月25日<a href="javascript:;">马蜂窝：发起“点亮全球计划” 将挑战吉尼斯记录</a></li>
          <li>09月21日<a href="javascript:;">中国掀起“南极热”：有人一年去5次，有人一次花费100万</a></li>
          <li>09月18日<a href="javascript:;">马蜂窝：“十一”自驾游走俏 贵州皖南线成新弱点</a></li>
          <li>09月11日<a href="javascript:;">马蜂窝发布“十大森林旅游目的地”，体育、养生、等</a></li>
        </ul>
      </div>
    </div>
    <!-- 右边 -->
    <div class="iindex-mfw-right float-right mt-2">
      <div class="iindex-navbar">
        <ul class="">
          <li><a href="javascript:;" class="text-c3">热门游记</a><span><i></i>筛选</span></li>
          <li class="ml-4 border-0"><a href="javascript:;" class="text-c3">最新发表</a></li>
        </ul>
        <div class="float-right"><router-link to="Travels"><i></i>写游记</router-link>></div>
      </div>
      <!-- 热门游记 -->
      <div ref="tobook" class="iindex-tn-list" >

        <div @click=toBoo(item.aid,item.uid) class="iindex-th" v-for="(item,i) of list" :key="i">
          <div class="iindex-tn-img"><a href="javascript:;"> <img :src="item.opusimg?getURL+item.opusimg:'/img/hy/iindex/moren.jpg'" alt=""></a></div>
          <div class="iindex-tn-wrapper ">
            <a href="javascript:;" class="acc">{{item.works?item.works:'春天，多么美好的季节,我喜欢秋天'}}</a>
            <a href="JavaScript:;" v-html="item.synopsis"></a>
            <div class="iindex-tn-extra mt-3">
              <span><i class="iindex-i"></i><a href="javascript:;" class="acc">{{item.place?item.place:'大千世界'}}</a>，by</span>
              <span class="ml-2"><a href="javascript:;" class="text-f9"><img :src="item.unamesm?getURL+item.unamesm:'/img/hy/iindex/erke.jpeg'" alt="">{{item.uname}}</a></span>
              <span class="ml-3"><i class="iindex-i"></i>{{item.cc}}/{{item.bb}}</span>
              <span><i>{{item.zan}}</i><a href="javascript:;" @click="zan(i)"></a></span>
            </div>
          </div>
        </div>

    </div>
    <!-- 底部分页条 -->
    <div class="iindex-count">
      <span class="pr-2">共23页/268条</span>
      <a href="javascript:;" class="text-info" style="background-color: #ff9d00;">上一页 </a>
      <a href="javascript:;" class="iindex-box">1</a>
      <a href="javascript:;" class="iindex-ccdd">2</a>
      <a href="javascript:;" class="iindex-ccdd">3</a>
      <a href="javascript:;" class="iindex-ccdd">4</a>
      <a href="javascript:;" class="iindex-ccdd">5</a>
      <a href="javascript:;" class="iindex-ccdd">6</a>
      <a href="javascript:;" class="iindex-ccdd">7</a>
      <a href="javascript:;" class="iindex-ccdd">8</a>
      <a href="javascript:;" class="iindex-ccdd">9</a>
      <a href="javascript:;" class="text-info" style="background-color: #ff9d00;">下一页>></a>
    </div>
    
  </div> <!-- 右边-->
  </div>
  <my-footer></my-footer>
  </div>
</template>

<script>
import {getURL} from "../components/baseurl"
import MyHeader from '../components/hy/MyHeader';
import MyFooter from '../components/hy/MyFooter'
import ToolBar from '../components/hy/Tooblar'
export default {
  components:{
    "my-header":MyHeader,//页头
    "my-footer":MyFooter,
    "toolbar":ToolBar
  },
  data(){
    return {
      list:[],
      getURL:"",
      scrollTopfa:0,
      pageNum:1,
    }
  },
  created(){
    this.getURL=getURL();
    this.morepp();
  },
  methods:{
    //
    toBoo(i,k){
      this.$router.push({
        name:'Book',
        query:{
          aid:i,
          uid:k
        }
      })
    },
    //页面加载时获得游记的列表对象
    morepp(){
      var url="/iindex/Index";
    this.axios.get(url).then(res=>{
      if(res.data.code==1){
      var rows=this.list.concat(res.data.data);
      this.list=rows;
      }
    })
    },
    zan(i){
       var zan=parseInt(this.list[i].zan);
       var aid=this.list[i].aid;
      this.list[i].zan++;
      var obj={aid:aid,zan:zan++};
      var url="/iindex/zan"
      this.axios.get(url,{params:obj}).then(res=>{
    })
      
    }
  },
  mounted() {
    window.onscroll=()=>{
      let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
      this.scrollTopfa=scrollTop;
    }
   //通过冒泡事件跳转到book页面
   this.$refs.tobook.addEventListener("click",(e)=>{
      if(e.target.className=='iindex-th'){
    }
   })
  // this.$refs.tobook.onclick=(e)=>{
  //   // e.preventDefault()
  //   // console.log(e)
  //   if(e.target.className=='iindex-th'){
  //     console.log(e)
  //   }
  // }
  },
 
}
</script>>

<style>
#banner{
  height:506px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
#demoo ul.carousel-indicators{
  position: absolute;
   top:10%;
   left:75%;
    width: 110px;
    z-index: 2;
    display: block;
}
#demoo ul.carousel-indicators>li{
  display: block;
  width:110px;
  height:62px;
}
#demoo ul.carousel-indicators>li>img{
  display: block;
  width:110px;
  height:62px;
}
#demoo ul.carousel-indicators>li.active>img{
  border: 2px solid #ff9d00;
}
#demoo ul.carousel-indicators>li:last-child{
  height:35px;
  overflow: hidden;
  border-radius: 18px;
}
#demoo ul.carousel-indicators>li>a{
  display: block;
  width:110px;
  height:35px;
  background: url(/img/hy/iindex/index-sprites8@2x.png) -60px -50px no-repeat;
  background-size: 200px;
  overflow: hidden;
}
.iindex-date{
  position: absolute;
  z-index: 10;
  top:6%;
  left:18%;
}
.iindex-date+p{
  position: absolute;
    left: 50%;
    bottom: 20px;
    margin-left: -320px;
    min-width: 630px;
    font-size: 14px;
    color: #fff;
    text-shadow: 1px 1px 0 rgba(0,0,0,.4);
    text-align: left;
    white-space: nowrap;
    z-index: 15;
}
.iindex-date+p>a{
  color:#ff9d00
}
.iindex-search-group{
  width:632px;
  position: absolute;
    bottom: 45px;
    left: 50%;
    margin-left: -320px;
    width: 632px;
    z-index: 15;
    padding: 10px;
    background-color: rgba(0,0,0,.6);
    border-radius: 4px;
}
.iindex-search-group>ul>li>a>i{
  margin-top: 3px;
  margin-right: 5px;
  display: block;
 float: left;
    width: 16px;
    height: 16px;
    background: url(/img/hy/iindex/header-sprites13@2x.png) -60px -110px no-repeat;
    background-size: 200px;
}
.iindex-search-group>ul>li>a.active>i{
  background: url(/img/hy/iindex/header-sprites13@2x.png) -60px -140px no-repeat;
  background-size: 200px;
}
.iindex-search-group>ul>li>a{
  padding:0 20px 0 0;
  width:90px;
  font-size: 14px;
  color:#fff;
}
.iindex-search-group>ul>li>a.active{
  background-color:rgba(0, 0, 0,0) !important;
  border: 0;
  color: #fff !important;
}
.iindex-search-group>ul>li>a:hover{
  border: 0;
}
.tab-pane>input{
  height:46px;
  border: 0 none;
  margin:0;
  line-height: 46px;
  font-size: 16px;
  color:#666;
  border-radius: 4px;
  padding: 0 21px;
  float: left;
  margin-right: 5px;
}
.tab-content>div:nth-child(1)>input{
  width:546px; 
}
.tab-content>div:nth-child(2)>input:nth-child(1){
  width: 256px;
  margin-right: 8px;
}
.tab-content>div:nth-child(2)>input+input{
  width:140px;
  padding: 0 10px;
}
.tab-content>div:nth-child(3)>input{
  width:546px; 
}
.tab-content>div:nth-child(4)>input{
  width:546px; 
}
.tab-content>div:nth-child(5)>input:nth-child(1){
  width: 256px;
  margin-right: 8px;
}
.tab-content>div:nth-child(5)>input+input{
  width:140px;
  padding: 0 10px;
}
.tab-pane>a{
  display: block;
  float: left;
  width:46px;
    height: 46px;
    background-color: #ff9d00;
    border-radius: 4px;
}
.tab-pane>a>i{
  display: block;
  height:24px;
  width:24px;
  background: url(/img/hy/iindex/header-sprites13@2x.png) 0 -110px;
  background-size: 200px;
  margin:10px auto;
}
.iindex-mfw-container{
  width:1000px;
  margin:0 auto;
  margin-top: 20px;
}
.iindex-mfw-container>.iindex-sales{
  width: 100%;
  margin-bottom: 19px;
}
.iindex-mfw-container>.iindex-sales>a{
  width: 136px;
  height: 56px;
  margin-left: 3px;
  padding-top: 8px;
  padding-left: 7px;
  display: inline-block;
  border-radius: 3px;
  font-family: PingFangSC-Semibold;
  border: 1px solid #e5e5e5;
  color: #333;
}
.iindex-mfw-container>.iindex-sales>a:nth-child(1){
  background: url(/img/hy/iindex/wKg.png) 59px -651px no-repeat;
  background-size: 104px;
  margin: 0;
}
.iindex-mfw-container>.iindex-sales>a:nth-child(2){
  background: url(/img/hy/iindex/wKg.png) 59px -24px no-repeat;
  background-size: 104px;
}
.iindex-mfw-container>.iindex-sales>a:nth-child(3){
  background: url(/img/hy/iindex/wKg.png) 59px -129px no-repeat;
  background-size: 104px;
}
.iindex-mfw-container>.iindex-sales>a:nth-child(4){
  background: url(/img/hy/iindex/wKg.png) 59px -441px no-repeat;
  background-size: 104px;
}
.iindex-mfw-container>.iindex-sales>a:nth-child(5){
  background: url(/img/hy/iindex/wKg.png) 59px -546px no-repeat;
  background-size: 104px;
}
.iindex-mfw-container>.iindex-sales>a:nth-child(6){
  background: url(/img/hy/iindex/wKg.png) 59px -335px no-repeat;
  background-size: 104px;
}
.iindex-mfw-container>.iindex-sales>a:nth-child(7){
  background: url(/img/hy/iindex/wKg.png) 59px -233px no-repeat;
  background-size: 104px;
}
.iindex-mfw-container>.iindex-sales>a>p+p{
  font-size: 11px;
  color: #9d9d9d;
}
.iindex-mfw-container>.iindex-mfw-left{
  width:260px;
}
.aside{
  margin-bottom: 30px;
}
.iindex-mfw-container>.iindex-mfw-left>a.iindex-asidebox{
  display:block;
  width:100%;
  height:31px;
  margin-top:5px;
}
.iindex-asidebox-hd {
  height: 35px;
  line-height: 35px;
  margin-bottom: 12px;
}
.iindex-asidebox-hd>.hd-title{
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.iindex-asidebox-hd>.hd-right{
  float: right;
    color: #999;
    font-size: 12px;
}
.iindex-asidebox-bd{
  width:100%;
  
}
.asidebox{
  position: relative;
}
.asidebox .carousel-indicators{
  position: absolute;
  top:118px;
  right: -0px;
  width: 100px;
  margin-left: 120px;
}
.asidebox .carousel-indicators>li{
  width:15px;
  height:8px;
  border-radius: 4px;
  background-color: #fff;
}
.asidebox .carousel-indicators>li.active{
  background-color: #ff9d00;
}
.asidebox .carousel-item>a>span{
  display: block;
  width:100%;
  margin: 10px 0 5px;
  height: 26px;
  font-size: 16px;
  color: #ff9d00;
  font-weight: normal;
  line-height: 26px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.asidebox .carousel-item>a>i{
  height: 60px;
  font-size: 14px;
    line-height: 20px;
    font-size: 14px;
    overflow: hidden;
    color: #333;
}
.iindex-asidebox-gonglv{
  width:100%;
  position: relative;
}
.iindex-item{
  display: block;
  margin: 10px 0 5px;
  width: 260px;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333;
}
.iindex-item:hover{
  color: #ff9d00;
}
.iindex-news>p{
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.iindex-news>ul>li{
  height: 30px;
  width: 260px;
  color: #666;
  font-size: 12px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.iindex-news>ul>li>a{
  color: #666;
  margin-left: 5px;
}
.iindex-mfw-right{
  width:700px;
}
.iindex-navbar{
  margin-bottom: 20px;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e4e4;
}
.iindex-navbar>ul>li{
  float: left;
    border-bottom: 3px solid #ff9d00;
    position: relative;
    font-size: 18px;
}

.iindex-navbar>ul>li>span:hover{
  color: #fff;
  background-color: #ff9d00;
}
.iindex-navbar>ul>li>a:hover{
  color: #ff9d00;
}
.iindex-navbar>ul>li>span{
  display: inline-block;
  margin:0 8px;
  line-height: 20px;
  border: 1px solid #e5e5e5;
  color: #666;
  font-size: 12px;
  padding: 0 10px 0 8px;
  cursor: pointer;
  vertical-align: 2px;
}
.iindex-navbar>ul>li>span>i{
display: inline-block;
    margin: 6px 5px 0 0;
    width: 11px;
    height: 8px;
    background: url(/img/hy/iindex/index-sprites9.png) no-repeat 0 -130px;
}
.iindex-navbar>div>a{
  display: block;
  width: 140px;
    height: 36px;
    background-color: #ff9d00;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    line-height: 36px;
}
.iindex-navbar>div>a>i{
  display: inline-block;
  margin-right: 5px;
  width: 18px;
  height: 17px;
  background-position: 0 0;
  overflow: hidden;
  vertical-align: -3px;
  background: url(/img/hy/iindex/index-sprites9.png) no-repeat;
  background-size: 200px;
}
.iindex-th{
  padding: 15px 0;
  height: 180px;
}
.iindex-th:hover{
  background-color: #efefef;
}
.iindex-th>.iindex-tn-img{
  float: left;
  width: 220px;
  height: 150px;
  position: relative;
}
.iindex-th>.iindex-tn-img img{
  width: 220px;
  height: 150px;
}
.iindex-tn-wrapper{
  float: right;
  width: 455px;
  height: 150px;
}
.iindex-tn-wrapper>a:nth-child(1){
  width: 420px;
    height: 26px;
    display: block;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 26px;
  color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.iindex-tn-wrapper>a:nth-child(2){
  height: 70px;
  width:450px;
  line-height: 20px;
  display: block;
  color: #666;
  font-size: 14px;
  line-clamp: 3;
  overflow: hidden;
}
.iindex-tn-extra{
  height: 33px;
  overflow: hidden;
  line-height: 33px;
  clear: both;
  position: relative;
}
.iindex-tn-extra>span{
  display: inline-block;
  color: #666;
  font-size: 12px;
}
.iindex-i{
  display: block;
  float: left;
    margin: 8px 5px 0 0;
    width: 18px;
    height: 16px;
    overflow: hidden;
}
.iindex-tn-extra>span:nth-child(1)>i{
    background: url(/img/hy/iindex/index-sprites9.png) 0 -50px no-repeat;  
}
.iindex-tn-extra>span:nth-child(1)>a{
   color: #666;
}
.iindex-tn-extra>span:nth-child(2)>a>img{
  margin-right: 5px;
    width: 16px;
    height: 16px;
    overflow: hidden;
    border-radius: 50%;
    vertical-align: -3px;
}
.iindex-tn-extra>span:nth-child(3){
  font-size: 14px;
  color: #999;
}
.iindex-tn-extra>span:nth-child(3)>i{
  background: url(/img/hy/iindex/index-sprites9.png) -30px -50px no-repeat;  
}
.iindex-tn-extra>span:nth-child(4){
  position: absolute;
  display: block;
  height:33px;
  color: #ff9d00;
  font-size: 14px;
  width: 100px;
  text-align: right;
  line-height: 33px;
  bottom: 0px;
  right:0px;
}
.iindex-tn-extra>span:nth-child(4)>a{
  display: inline-block;
  margin-left: 8px;
  width: 38px;
  height: 33px;
  background: url(/img/hy/iindex/index-sprites9.png) -60px 0 no-repeat;
  overflow: hidden;
}
.iindex-count{
  height:65px;
  width:100%;
  padding: 20px 5px;
    line-height: 24px;
    text-align: right;
    font-size: 12px;
    color: #999;
}
.iindex-count>a{
  display: inline-block;
  margin-right: 1px;
  margin-left: 1px;
  padding: 0 7px;
  border: 0 none;
  border-radius: 4px; 
  vertical-align: middle;
}
.iindex-box{
  background-color: #ff9d00;
  color: #fff;
}
.iindex-ccdd{
  background: 0;
  color: #666;
}
.iindex-ccdd:hover{
  background-color: #efefef;
}












</style>