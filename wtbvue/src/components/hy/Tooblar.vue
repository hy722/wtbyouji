<template>
  <div>
    <div class="iindex-mfw-tooblar ">
      <div class="iindex-gotop tooblar-db" v-show="showTb">
        <a href="javascript:;" ><i></i></a>
        <a href="javascript:;" class="h8 p-2 tooblar-dc " @click="toTop()">返回顶部</a>
      </div>
      <div class="iindex-feedbox tooblar-db">
        <a href="javascript:;"><i></i></a>
         <a href="javascript:;" class="h8 p-2 tooblar-dc ">意见反馈</a>
      </div>
      <div class="iindex-code abb">
        <a href="javascript:;"><i></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["scrollTopfa"],
  data(){
    return{
      showTb:true,
    }
  },
  created(){

  },
  watch: {
    scrollTopfa(){
      if(this.scrollTopfa<520){this.showTb=false}else{this.showTb=true};
   
    }
  },
  methods: {
    toTop(){
     window.scrollTo(0,0)
    }
  },
}
</script>

<style>
.iindex-mfw-tooblar{
  position: fixed;
  width:45px;
  /* height: 135px; */
  background-color: #fff;
  bottom:200px;
  right:200px;
  text-align: center;
  z-index: 1;
}

.iindex-gotop{
  height:45px;
  border: 1px solid #e5e5e5;
  position: relative;
}
/* .iindex-gotop>a:last-child{
  display: none;
} */
.tooblar-db:hover>a:last-child{
  display: block !important;
}
/* .iindex-feedbox>a:last-child{
  display: none;
} */
.iindex-gotop>a>i{
  width: 21px;
  height: 12px;
  margin-top: 16px;
  background: url(/img/hy/iindex/header-sprites9.png) -60px -165px no-repeat;
  display: block;
  margin-left: 10px;
}
.tooblar-dc{
  display: none;
  width:45px;
  height: 45px;
  position: absolute;
  top:0px;
  left:0px;
  background-color:#999;
}
.iindex-feedbox{
  height: 45px;
  border: 1px solid #e5e5e5;
  position: relative;
}
.iindex-feedbox>a>i{
  width: 18px;
  height: 18px;
  margin-top: 13px;
  background: url(/img/hy/iindex/header-sprites9.png) -90px -165px no-repeat;
  display: block;
  margin-left: 10px;
}
.iindex-code{
  height: 45px;
  border: 1px solid #e5e5e5;
  position: relative;
}
.iindex-code>a>i{
  width: 19px;
  height: 19px;
  margin-top: 13px;
  background: url(/img/hy/iindex/header-sprites9.png) -120px -165px no-repeat;
  display: block;
  margin-left: 10px;
}
/***************************************************************** */

.tra_steHeaderImg{
  width:162px;
  height:34px;
  background-color: rgba(0,0,0,.7);
  position: absolute;
  z-index: 25;
  top:74%;
  left:20%;
}
.tra_steHeaderImg>a{
  display: inline-block;
  width:162px;
  height:34px;
  line-height: 34px;
}
.tra_steHeaderImg>a>span{
  display: inline-block;
  vertical-align: middle;
  margin-right:5px;
  width:20px;
  height:20px;
      background: url(/img/hy/travels/sprite_v35.png) -83px -630px no-repeat;
}
.tra_steHeaderImg>ul{
  position: absolute;
  width:162px;
  font-size: 14px;
  text-align: center;
  top:34px;
  left:0;
  background-color: rgba(0,0,0,.7);
  display: none;
}
.tra_steHeaderImg:hover>ul{
  display: block;
}
.tra_steHeaderImg>ul>li>a>span{
      width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url('/img/hy/travels/sprite_v35.png');
    vertical-align: middle;
}
.tra_steHeaderImg>ul>li:nth-child(1){
  position: relative;
}
.tra_steHeaderImg>ul>li:nth-child(1)>a>input{
  display: inline-block;
  width:162px;
  height:30px;
  position: absolute;
  top:0px;
  left:0px;
  opacity: 0;
}
.tra_steHeaderImg>ul>li:nth-child(1)>a>span{
  background-position: -108px -608px;
}
.tra_steHeaderImg>ul>li:nth-child(2)>a>span{
  background-position: -108px -608px;
}
.tra_steHeaderImg>ul>li:nth-child(3)>a>span{
  background-position: -131px -607px;
}
</style>