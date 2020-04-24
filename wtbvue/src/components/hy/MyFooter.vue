<template>
  <div id="iindex-footer" class="sudd">
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
</template>

<script>
export default {

}
</script>

<style>
#iindex-footer{
  background-color: #3c3c3c;
    color: #c2c2c2;
    font-size: 12px;
    width:100%;
    z-index: 20;
    padding:0 200px;
    overflow: hidden;
}
.sudd{
  height:124px !important;
}
#iindex-footer>.ft-content{
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
</style>