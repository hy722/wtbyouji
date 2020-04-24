<template>
  <div class="book">
    <myheader></myheader>
    <div class="book_read">
      <!-- 头部图片 -->
      <div class="book_titImg po_re">
        <img  :src="textH.opusimg?getURL+textH.opusimg:'/img/hy/iindex/banner4.png'" alt="">
        <p>{{textH.works}}</p>
        <div>
          <a class="m-auto" href="javascript:;"></a>
          <span class="mt-1" >66</span>
        </div>
      </div>
      <!-- title -->
      <div class="book_title m-auto po_re d-flex ">
        <a class="book_tou" href="javascript:;">
          <img class="book_tou" :src="user.touxiang?getURL+user.touxiang:'/img/hy/myHeader/login.png'" alt="">
        </a>
        <div class="book_mingzi mt-3">
           <strong>
            <a class="text-f9 h7" href="javascript:;">
              {{user.uname}}<span>（{{user.city}}）</span><span class="h8">Lv.22</span>
            </a>
          </strong>
          <a class="ml-2" href="javascript:;"><img src="/img/hy/book/btn_sfollow.gif" width="38" height="13" alt=""></a>
        </div>
        <div class="h8 text-ac mt-3 ml-3">
          <span>{{textH.worksTime | times}}</span>
          <span class="ml-3"><i class="book_yan mr-2"></i>2762/33</span>
        </div>
        <div class="book_bgm d-flex">
          <div class="book_music ">
            <a href="javascript:;" class="mt-3"></a>
          </div>
          <div class="book_shouC">
            <a href="javascript:;" class="book_xing mt-3">
              <i></i>
              <span>19</span><strong>收藏</strong>
            </a>
          </div>
           <div class="book_shouC">
            <a href="javascript:;" class="book_fen mt-3">
              <i></i>
              <span>19</span><strong>分享</strong>
            </a>
          </div>
        </div>
      </div>
      <!-- 中间正文 -->
      <div class="clearfix book_container mt-5">
        <!-- 中间游记正文 -->
        <div class="float-left book_zhengwen"  >
          <div class="mb-3" v-html="textH.synopsis"></div>
          <div class="" v-html="textH.textHtml"></div>
        </div>
        <!-- 右边相关景点 -->
        <div class="float-right">
          <!-- 相关目的地 -->
          <div class="book_xiangG h7 text-c6">相关目的地：
            <a href="javascript:;" class="text-f9 ">天堂</a>
            <a href="javascript:;" class="text-f9 ml-2">乌托邦</a>
            <a href="javascript:;" class="text-f9 ml-2">小山村</a>
          </div>
          <!-- 相关目的地第一站 -->
          <div class="book_xG mt-2 po_re">
            <strong>中国</strong>
            <img src="img/hy/book/zhongguo.jpeg"  alt="" title="中国">
          </div>
          <!-- 有多少张相关照片 -->
          <div class="book_titP text-c6 h7 po_re">
            有 <strong class="h4 font-weight-bold">201202</strong>张照片
            <a href="javascript:;" class="mt-1"></a>  
          </div>
          <!-- 星级纪念 -->
          <div class="book_artic">
            <a href="javascript:;" class="po_re">
              <img src="/img/hy/book/duo.jpg" alt="">
              <i title="星级纪念"></i>
            </a>
            <a href="javascript:;" class="h7 text-c6">星级纪念</a>
          </div>
          <!-- 相关攻略 -->
          <div class="book_goN po_re">
            <p class="text-c6 mb-2">相关攻略</p>
            <img src="/img/hy/book/cao.jpeg" alt="">
            <span class="h8"><i></i> 70444</span>
            <h3>国内12个颜值最高的大草原，盘点清单在这里</h3>
          </div>
          <!-- 相关游记 -->
          <div class="book_goN po_re mt-5">
           <p class="text-c6 mb-2">相关游记</p>
            <img src="/img/hy/book/qiu.jpg" alt="">
             <span class="h8"><i></i> 1022</span>
             <h3>#我的20119【走过万水千山，还是简单醉美；眸里有芬芳，馨香缘自魅】</h3>
          </div>
          <!-- 游记目录 -->
          <div class="book_mulu text-c6 mt-4" :class="muulu?'book_muluu':''">
            <p class="mb-2">游记目录</p>
            <div class="mt-3">
              <ul v-html="textH.catalog">
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>  
    <tooblar :scrollTopfa="scrollTopfa"></tooblar>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '../components/hy/MyHeader'
import MyFooter from '../components/hy/MyFooter'
import {getURL} from '../components/baseurl'
import Tooblar from '../components/hy/Tooblar'
export default {
  components:{
    'myheader':MyHeader,
    "my-footer":MyFooter,
    'tooblar':Tooblar,
  },
  data(){
    return {
      getURL:'',//图片基础路径
      user:{},//用户基本信息
      textH:{},//正文所需要的内容
      muulu:false,//目录变为绝对定位
      scrollTopfa:0,//向子组件toolbar传入当前页面的值
    }
  },
  filters:{
    times(va){
      let val=new Date(parseInt(va));
      let YY=val.getFullYear()+'-';
      let MM=(val.getMonth() + 1 < 10 ? '0' + (val.getMonth() + 1) : val.getMonth() + 1) + '-';
       var DD = (val.getDate() < 10 ? '0' + (val.getDate()) : val.getDate());
       var hh = (val.getHours() < 10 ? '0' + val.getHours() : val.getHours()) + ':';
  var mm = (val.getMinutes() < 10 ? '0' + val.getMinutes() : val.getMinutes()) ;
       return YY + MM + DD +" "+hh + mm ;
    }
  },
  created() {
    this.getURL=getURL();
   let aid= this.$route.query.aid
   let uid= this.$route.query.uid 
    this.getContainer(aid,uid);
     window.onscroll=()=>{
       var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
       this.scrollTopfa=scrollTop
       if(scrollTop<=1442){
         this.muulu=false;
       }else{
         this.muulu=true;
       }
    }
  },
  methods: {
    getContainer(aid,uid){
      let obj={aid:aid,uid:uid}
      this.axios.get('/iindex/container',{params:obj}).then(res=>{
        this.user=res.data.data[0];
        this.textH=res.data.resul[0];
      }).catch(err=>{
        console.log(err)
      })
    }
  },
}
</script>

<style>
  .book_muluu{
    position: fixed;
    top:100px;
    left:80%px;
  }
  .book_read{
  width:1519px;
  margin:0 auto;
}
.book_titImg>img{
  width:1519px;
  height:506px;
}
.book_titImg>p{
  position: absolute;
  display: inline-block;
  font-size:26px;
  left:28%;
  bottom: 6%;
  font-weight: 700;
}
.book_titImg>div{
  position: absolute;
  width:70px;
  height: 56px;
  bottom:6%;
  left: 80%;
  text-align: center;
}
.book_titImg>div>a{
  display: block;
  width:37px;
  height:33px;
  line-height: 32px;
  background: url(/img/hy/iindex/index-sprites9.png) -60px 0 no-repeat;
}
.book_title{
  width:1000px;
  height: 81px;
}
.book_title>a.book_tou{
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  top:-80px;
  left:0;
  z-index: 20;
}
.book_tou{
  width:120px;
  height:120px;
}
.book_mingzi{
  margin-left:150px;
}
.book_mingzi>a{
  display: inline-block;
}
.book_yan{
  display: inline-block;
  width:18px;
  height: 14px;
  vertical-align: middle;
  background: url(/img/hy/iindex/index-sprites9.png) -30px -50px no-repeat;
}
.book_bgm{
  margin-left: 80px;
}
.book_bgm>div{
  width:120px;
  height: 81px;
  border-right:1px solid #e8e8e6;
  text-align: center;
}
.book_music>a{
  display: inline-block;
  width:44px;
  height:44px;
  background: url(/img/hy/me/nn_sprite_v23.png) -354px -241px no-repeat;
}
.book_shouC>a{
  display: block;
  width:auto;
  line-height: 24px;
  font-size:14px;
  color:#666;
}
.book_shouC>a>i{
  display: block;
  width:25px;
  height: 24px;
  background-image:url(/img/hy/book/notes-share-collect@2x.png) ;
  margin: 0 auto;
  background-size: 100px;
}
.book_xing>i{
  background-position: 0px 0px;
}
.book_fen>i{
  background-position: -60px 0px;
}
.book_container{
  width:1000px;
  margin:0 auto;
  overflow: hidden;
}
.book_container>div:last-child{
  width:240px;
}
.book_xG>img{
  width:240px;
  height:160px;
  z-index: 1;
}
.book_xG>strong{
  position: absolute;
  left: 10px;
  bottom:10px;
      font-size: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 20;
    font-weight: normal;
}
.book_titP{
  margin:20px 0 20px 0;
  line-height: 26px !important;
} 
.book_titP>a{
  float:right;
  width:20px;
  width:20px;
  height: 20px;
  background: url(/img/hy/book/nn_sprite_v22.png) -413px -257px no-repeat;
}
.book_artic{
      padding: 4px 4px 0;
    border: 1px solid #d6d6d6;
    margin: 40px 0 22px;
    font-size: 14px;
    box-shadow: 0 2px 0 rgba(0,0,0,.08);
}
.book_artic>a:first-child>img{
  width:230px;
  height:142px;
}
.book_artic>a:first-child>i{
  position: absolute;
    left: 3px;
    top: -70px;
    width: 44px;
    height: 46px;
    background: url(/img/hy/book/notes-medal3.png) -50px 0;
}
.book_artic>a:last-child{
 line-height: 48px;
}
.book_goN>img{
  width:240px;
  height:160px;
}
.book_goN>span{
  position: absolute;
  left:5px;
  top:40px;
}
.book_goN>span>i{
  display: inline-block;
  margin-right: 5px;
    width: 21px;
    height: 16px;
    background: url(/img/hy/book/icon-view-white.png) no-repeat 0 0;
    vertical-align: middle;
}
.book_goN>h3{
  position: absolute;
  left: 7px;
    right: 7px;
    bottom: 5px;
    font-size: 16px;
    line-height: 20px;
}
.book_zhengwen{
  width:680px;
}
.book_zhengwen{
  color:#444;
  font-size:15px;
}
.book_zhengwen p{
  font-size: 24px;
  color:#222;
  margin:20px 0 20px 0;
}
.book_zhengwen span{
  margin-bottom: 15px;
}
.book_zhengwen img{
  margin-bottom: 20px;
  max-width: 680px;
}
.book_mulu>div{
  max-height: 300px;
  overflow-y:auto ;
}
.book_mulu>div li+li{
  margin-top:10px;
}
.book_mulu>div a{
  font-size: 14px;
  color:#999
}
</style>