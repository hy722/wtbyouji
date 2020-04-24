<template>
  <div>
    <my-header></my-header>
    <div id="index-bg">
      <div class="index-logo">
        <img src="/img/hy/index/logo.png" alt="" class="w-100 ">
      </div>
      <div class="index-mouse">
        <img src="/img/hy/index/mouse.png" alt="">
        <p class="h8 text-white mt-1">向下滑动鼠标</p>
      </div>
      <div class="index-fp-nav">
        <ul>
          <li><a href="#page1"></a></li>
          <li><a href="#page2"></a></li>
          <li><a href="#page3"></a></li>
          <li><a href="#page4"></a></li>
        </ul>
      </div>
    </div>

    <div id="index-wrap">
      <div class="index-nav" :class="nava">
        <ul id="daohang">
          <li><a href="#page1" class="index-page">明星旅行家</a><span></span></li>
          <li><a href="javascript:;" class="index-dian"></a></li>
          <li><a href="#page2" class="index-page">旅行家作品</a>
            <span></span></li>
          <li> <a href="javascript:;" class="index-dian"></a></li>
          <li> <a href="#page3" class="index-page">更多旅行家</a>
            <span></span></li>
          <li> <a href="javascript:;" class="index-dian"></a></li>
          <li><a href="#page4" class="index-page">旅行家专栏</a>
            <span></span></li>
          <li><a href="javascript:;" class="index-dian"></a></li>
          <li> <a href="#page4" class="index-page">成为旅行家</a>
            <span></span></li>
        </ul>
      </div>
      <div class="index-box" id="page1">
        <ul>
          <li v-for="(item,i) of list" :key="i" @click="showstar(i)">
            <div>
            <img :src="getURL+item.starimg" alt="">
            <div>
              <p class="h3 p-0">travller</p>
              <p class="h2">旅行家</p>
              <p class="h1">{{item.uname}}</p>
            </div>
            <div class="index-box-hover text-white h2 pl-2">查看更多<img src="/img/hy/index/bofang.png" alt="" style="width: 40px;" class="ml-3"></div>
          </div>
          <div class="index-introbox" v-show="st[i].show" >
            <div class="px-3 py-4 index-box-bb"><img :src="getURL+item.starimg" alt="" class="w-100"></div>
            <div class="px-4 pl-2 py-4 pr-3 index-box-cc" :class="{succ:succ}" >
              <a href="javascript:;" class="index-cha" @click="starclose(i)">×</a>
              <a href="javascript:;" class="index-name">{{item.uname}}</a>
              <a href="javascript:;" class="index-guanzhu">+ 关注</a>
              <div class="index-zxzp">
                <div class="index-zx">
                  <p class="font-weight-bold">《自叙》</p>
                 {{item.preface}}
                </div>
                <div class="mt-4">
                  <p>《作品集》</p>
                  <a href="javascript:;" class="a text-white">{{item.works1}}</a><br>
                  <a href="javascript:;" class="a text-white">{{item.works2}}</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        
        </ul>
      </div>
    </div>
    
    <div class="placeBox px-2 py-2" id="page2">
      <div class="float-left index-place"><a href="javascript:;">
        <img src="/img/hy/index/zuop-1.jpeg" alt="" class="w-100">
        <div class="index-writer">
          <img src="/img/hy/index/writer-1.jpeg" alt="" >
          <span>肥肥安小姐</span><br>
          <p class="h7 pt-3">作为一个对旅行这事儿还算有行动力的人，2015年6月，在这个岛国的环岛之旅就按照期望的那样，在日不落的季节里，开始了。</p>
        </div>
      </a></div>
      <div class="float-left">
        <div class="position-relative index-place"><a href="javascript:;" class="placeBox-center">
          <img src="/img/hy/index/zuop-2.jpeg" alt="" class="w-100">
        <div class="index-writer">
          <img src="/img/hy/index/writer-2.jpeg" alt="" >
          <span>锦字</span><br>
          <p class="h7 pt-3">我看过珠峰的日出，纳木棤的日落，茶卡浩瀚的星河，在冰沟煮过泡面，在沙漠中央扎营，看过好多好多风景。旅行中，你的人际关系被简化到极致。不论你过去经历过什么，也不管你是怎样的人，一切都可以在上路的瞬间重新开始。</p>
        </div>
        </a></div>
        <div class="position-relative mt-10 index-place"><a href="javascript:;">
          <img src="/img/hy/index/zuop-3.jpeg" alt="" class="w-100">
          <div class="index-writer">
            <img src="/img/hy/index/writer-3.jpeg" alt="" >
            <span>南山Nathan</span><br>
            <p class="h7 pt-3">曾几何时，我被一张杜布罗夫尼克深入亚得里亚海中的完美古城墙的照片而吸引，也为罗维尼那夜幕下的半岛景色所着迷。所以，我内心知道，克罗地亚，其实距离我不会遥远！因为有了这个向往，我总有一天会踏足那里。只是，没有想到，这一天会来的如此之快！</p>
          </div>
        </a></div>
      </div>
      <div class="index-place"><a href="javascript:;">
        <img src="/img/hy/index/zuop-4.jpeg" alt="" class="w-100">
        <div class="index-writer">
          <img src="/img/hy/index/writer-4.jpeg" alt="" >
          <span>白宇</span><br>
          <p class="h7 pt-3">那些日子里，周围的世界是荒凉的，寂静的，大部分时间都在独处，自言自语，内心的欲望也跟高海拔的空气一样稀薄……</p>
        </div>
      </a></div>
    </div>
    <div id="page3">
      <div class="index-sec4Box">
        <div>
          <div id="democ" class="carousel" data-ride="carousel">
            <!-- 轮播图片 -->
            <div class="carousel-inner">

              <div class="carousel-item active">
                <div >
                  <div class="mb-3" v-for="(item,i) of author.slice(0,10)" :key="i">
                    <a href="javascript:;">
                     <img :src="getURL+item.headshot" alt="">
                      <p class="pt-2 text-white">{{item.authorname}}</p>
                    </a>
                    <a href="javascript:;">
                      <span>+ 关注</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div >
                  <div class="mb-3" v-for="(item,i) of author.slice(10,20)" :key="i">
                    <a href="javascript:;">
                     <img :src="getURL+item.headshot" alt="">
                      <p class="pt-2 text-white">{{item.authorname}}</p>
                    </a>
                    <a href="javascript:;">
                      <span>+ 关注</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div >
                  <div class="mb-3" v-for="(item,i) of author.slice(20,30)" :key="i">
                    <a href="javascript:;">
                     <img :src="getURL+item.headshot" alt="">
                      <p class="pt-2 text-white">{{item.authorname}}</p>
                    </a>
                    <a href="javascript:;">
                      <span>+ 关注</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div >
                  <div class="mb-3" v-for="(item,i) of author.slice(30,40)" :key="i">
                    <a href="javascript:;">
                     <img :src="getURL+item.headshot" alt="">
                      <p class="pt-2 text-white">{{item.authorname}}</p>
                    </a>
                    <a href="javascript:;">
                      <span>+ 关注</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 左右箭头 -->
            <a data-slide="next" class="carousel-control-next" href="#democ">
              <!-- <span class="carousel-control-next-icon"></span> -->
          </a>
          <a data-slide="prev" class="carousel-control-prev" href="#democ">
              <!-- <span class="carousel-control-prev-icon"></span> -->
          </a>
          </div>
        </div>
      </div>
    </div>
    <div id="index-footer" :class="{sudd}">
      <div class="ft-content">
        <div class="py-3">
          <a href="javascript:;"><i class="mt-mfw-logo"></i></a>
          <p>@2020 Mafengwo.cn
            <a href="javascript:;">京ICP备11015476号</a>
            <a href="javascript:;"><img src="/img/hy/footer/police_record.png" alt="">京公网安备11010502013401号</a>
            <a href="javascript:;">京ICP证110318号</a>
            <span class="ml-3">违法和不良信息举报电话: 010-83416877 举报邮箱: mfwjubao@mafengwo.com</span>
          </p>
          <p class="mt-2">
            <a href="javascript:;" class="ml-2">网络出版服务许可证 </a>
            <a href="javascript:;" class="ml-2">增值电信业务经营许可证</a>
            <a href="javascript:;" class="ml-2">营业执照</a>
            <a href="javascript:;" class="ml-2">广播电视节目制作经营许可证 </a>
            <a href="javascript:;" class="ml-2">帮助中心</a>
            <span class="ml-3">马蜂窝客服：国内</span>
            <span class="" style="color:#ff9d00">4006-345-678</span>
            <span class="ml-2">海外</span>
            <span class="" style="color:#ff9d00">+86-10-8341-6888</span>
          </p>
        </div>
        <div class="ft-safe mt-2">
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/hy/MyHeader'
import {getURL} from "../components/baseurl"

export default {
  components:{
    "my-header":MyHeader,//页头
  },
  data(){
    return {
      list:[],
      author:[],
      // more:[],
       getURL:'',
     st:[
       {show:false},
       {show:false},
       {show:false},
       {show:false},
       {show:false}
     ],
     succ:false,
     sudd:false,
     nava:{
       suaa:false,
       subb:false,
     },
    }
  },
  created(){
   
    this.getURL=getURL();
    this.loadMore();
  window.onscroll=(()=>{
     var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    //  console.log(scrollTop)
     scrollTop>=2050?this.sudd=true:this.sudd=false;
     if(scrollTop<677){
       this.nava={suaa:false,subb:false};    
     }else if(scrollTop>=667&&scrollTop<1472){
       this.nava={suaa:true,subb:false};
     }else if(scrollTop>=1472){
       this.nava={suaa:false,subb:true};
     }
  })
  },
methods:{
  loadMore(){
    var url="/index/";
    this.axios.get(url).then(res=>{
      var rows=this.list.concat(res.data.data);
      this.list=rows;
    })
    var cc="/index/cc";
    this.axios.get(cc).then(res=>{
      var rows=this.author.concat(res.data.data);
      this.author=rows;
    })
  },
  showstar(i){
   this.st[i].show==false?this.st[i].show=true:this.st[i].show=false
  requestAnimationFrame(()=>{
    this.succ==false?this.succ=true:this.succ=false
  })
    
  },
  starclose(i){
   this.showstar(i)
  },
},

}
</script>

<style>
  
#index-bg{
  height:674px;
  background: url(/img/hy/index/bg_v2.jpg) center center no-repeat;
  width:100%;
  background-size: 100% 100%;
  position: relative;
}
#index-bg>.index-logo{
  position: absolute;
  left:37%;
  top: 10%;
  width:400px;
}
#index-bg>.index-mouse{
  width: 80px;
  height: 56px;
  position: absolute;
  left: 50%;
  top:70%;
}
#index-bg>.index-mouse>img{
  width: 18px;
    height: 36px;
    margin-left: 20px;
}
#index-bg>.index-fp-nav{
  position: fixed;
  top: 40%;
  right: 2%;
  opacity: 1;
  z-index: 15;
}
#index-bg>.index-fp-nav>ul>li>a{
  display: block;
  position: relative;
  z-index: 1;
  width: 10px;
  height: 10px;
  cursor: pointer;
border:1px solid #000;
  border-radius: 50%;
  margin-bottom: 8px;
}
#index-wrap{
  position: relative;
}
#index-wrap>.index-nav{
  height:60px;
  width:100%;
  line-height: 60px;
  font-size: 22px;
  padding:0 250px;
background-color: rgba(0,0,0,.7);
position: absolute;
top:-62px;
z-index: 20;
}
.suaa{
  top:662px !important;
}
.subb{
  top:1372px !important;
}
#index-wrap>.index-nav>ul{
  display: flex;
  justify-content: space-around;
  position: relative;
}

#index-wrap>.index-nav>ul>li>span{
  position: absolute;
  display: block;
  background: #ff9900;
  width:135px;
  height:6px;
  top:58px;
}
#index-wrap>.index-nav>ul>li>a{
  color:#fff;
  text-decoration: none;
  padding-left: 15px;
}
#index-wrap>.index-nav>ul>li>a.index-dian{
  display: block;
  height:5px;
  width:5px;
  background: #fff;
  border-radius: 50%;
  margin-top: 30px;
}

#index-wrap>.index-box>ul{
  display: flex;
  justify-content: space-between;
}
#index-wrap>.index-box>ul>li{
  position: relative;
  width:357px;
  height:662px;
  cursor:pointer
}
#index-wrap>.index-box>ul>li>div>img{
  width:357px;
  height:662px;
}
#index-wrap>.index-box>ul>li>div:nth-child(1)>div:nth-child(2){
  position: absolute;
  width: 300px;
  height:165.2px;
  left: 3%;
  bottom: 70px;
  text-shadow: 2px 2px 8px #666;
  color:#fff;
  z-index: 5;
}
.index-box-hover{
  position: absolute;
  width:100%;
  height: 0px;
  line-height: 80px;
  background: #ff9900;
  top:662px;
  z-index: 10;
  overflow: hidden;
 transition: all 0.4s ease-out;
}
#index-wrap>.index-box>ul>li:hover .index-box-hover{
  height: 80px;
  top:582px;
}
.index-introbox{
  position: absolute;
  z-index: 20;
 min-width: 1540px;
  height:662px;
  background-color: rgba(0,0,0,.7);
  top:-1px;
}

div.index-box>ul>li:nth-child(2)>div:nth-child(2){
  left:-357px;
 }
 div.index-box>ul>li:nth-child(3)>div:nth-child(2){
  left:-714px;
 }
 div.index-box>ul>li:nth-child(4)>div:nth-child(2){
 
  left:-1071px;
 }
 div.index-box>ul>li:nth-child(5)>div:nth-child(2){
  
  left:-1428px;
 }
.index-box-bb{
  width:368px;
  height:662px;
  float:left;
  background-color: #ff9900;
}
.index-box-cc{
 overflow: hidden;
  width:0px;
  height: 662px;
   float:left;
   background-color: #ff9900;
   position: relative;
   transition:all 1s ease-out 1s; 
}
.succ{
  width:295px;
}
div.index-box>ul>li:nth-child(2)>div:nth-child(2)>div:nth-child(1){
  margin-left:357px;
}
div.index-box>ul>li:nth-child(3)>div:nth-child(2)>div:nth-child(1){
  margin-left:714px;
}
div.index-box>ul>li:nth-child(4)>div:nth-child(2)>div:nth-child(1){
  margin-left:1071px;
}
div.index-box>ul>li:nth-child(5)>div:nth-child(2)>div:nth-child(1){
  margin-left:1428px;
}
.index-cha{
  display: block;
  height: 28px;
  width: 28px;
  background-color: #fff;
  position: absolute;
  border-radius: 50%;
  font-size: 30px;
  color: #ff9900;
  text-align: center;
  line-height: 31px;
  right:22px;
  text-decoration: none;
}
.index-name{
  font-size: 24px;
  line-height: 116px;
  padding-top: 28px;
  width: 220px;
  height: 116px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  color:#fffcf7;
}
.index-guanzhu{
  display: block;
  width: 66px;
  height: 30px;
  border: 1px solid #fff;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  position: absolute;
  background-color: #ff9900;
  color:#fffcf7;
  text-decoration: none;
  top:67px;
  right:22px;
}
.index-zxzp{
  overflow: hidden;
  height:470px;
  width:245px;
  color:#fffcf7;
  font-size: 14px;
  line-height: 30px;
  margin-top: 25px;
  overflow-y: auto;
}
.a{
  text-decoration: underline;
}
#page2{
  margin-top: 60px;
  height:662px;
  width:100%;
  position: relative;
}

#page2>div:nth-child(1){
  height:642px;
  width:469px;
  position: relative;
 
}
#page2>div:nth-child(2){
  height:642px;
  width:662px;
  margin-left: 10px;
}
#page2>div:nth-child(3){
  height:642px;
  width:469px;
  position: absolute;
  right:-110px;
  top:8px;
}
.index-place{
  overflow: hidden;
}
.index-place>a>img{
  transition: all 0.4s;
}
 .index-place:hover>a>img{
  transform:scale(1.1)
}
.index-writer{
  padding: 30px 10px;
  position: absolute;
  height:184px;
  width: 100%;
  left: 0;
  bottom: 0;
  color: #fff;
}
.index-writer>img{
  display: block;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    margin-right: 6px;
    float: left;
}
.index-writer>span{
  float:left;
  font-size: 20px;
  margin-top: 15px;
}
.index-writer>p{
  clear: both;
}
#page2:after{
  content:"";
  display:block;
  clear:both;
}
.mt-10{
  margin-top: 11px;
}
#page3{
  height:674px;
  background: url(/img/hy/index/scrollBg_v2.jpg) center center no-repeat;
  background-size: 100%;
}
#page3>.index-sec4Box{
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.4);
}
#page3>.index-sec4Box>div{
  width: 1000px;
  height:500px;
  margin: 0 auto;
  position: relative;
  top:20%;
}
#democ .carousel-item>div{
  width: 1000px;
  height:500px;
  overflow: hidden;
}
#democ .carousel-item>div>div{
  float: left;
  height:214px;
  width:200px;
}
#democ .carousel-item>div>div>a:nth-child(1)>img{
  display: block;
  width: 148px;
  height: 148px;
  border-radius: 50%;
  margin: 0 auto;
}
#democ .carousel-item>div>div>a:nth-child(1)>p{
  font-size: 18px;
  text-align: center;
}
#democ .carousel-item>div>div>a:nth-child(2){
  display: block;
  width: 72px;
  height: 28px;
  margin: 0 auto;
  border-radius: 6px;
  background-color: #ff9900;
  text-align: center;
  line-height: 28px;
}
#democ .carousel-item>div>div>a:nth-child(2)>span{
  text-align: center;
    line-height: 28px;
}
#democ .carousel-control-next{
  display: block;
    width: 100px;
    height: 196px;
    background: url(/img/hy/index/arr.png) -100px 0px no-repeat;
    position: absolute;
    top: 160px;
    left:1000px;
}
#democ .carousel-control-prev{
  display: block;
    width: 100px;
    height: 196px;
    background: url(/img/hy/index/arr.png) 0px 0px no-repeat;
    position: absolute;
    top: 160px;
    left:-100px;
}
#index-footer{
  background-color: #3c3c3c;
    color: #c2c2c2;
    font-size: 12px;
    width:100%;
    height: 0px;
    position: absolute;
    bottom:-2150px;
    z-index: 20;
    padding:0 200px;
    overflow: hidden;
    transition: all 1s ease-out 0.5s;
}
.sudd{
  height:124px !important;
}
#index-footer>.ft-content{
  width:100%;
  height:100%;
}
.mt-mfw-logo{
  float: left;
    margin: 2px 20px 0 0;
    width: 136px;
    height: 39px;
    background: url(/img/hy/index/mfw-footer-sprite7.png) no-repeat 0 -30px;
    overflow: hidden;
}
.ft-content>div>p>a>img{
  height:12px;
  width: 12px;
}
.ft-content>div>p a{
  color: #c2c2c2;
  text-decoration: none;
}
.ft-safe{
  text-align: center;
}
.ft-safe>a{
  display: inline-block;
  margin-left: 10px;
  width: 90px;
  height: 30px;
  overflow: hidden;
}
.ft-safe>a:nth-child(1){
    background: url(/img/hy/footer/cc-0.png) no-repeat 0 -70px;
}
.ft-safe>a:nth-child(2){
  background: url(/img/hy/footer/cc-1.png) no-repeat ;
}
.ft-safe>a:nth-child(3){
  background: url(/img/hy/footer/cc-2.png) no-repeat;
}

/* ********************************************************** */

</style>