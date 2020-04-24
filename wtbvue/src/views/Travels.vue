<template>
  <div>
    <myheader></myheader>
    <div id="travels-TBg">
      <div class="travels-setBg">
        <img ref="traTitleImg" v-if="titleImg" :src="getURL+titleImg" alt="">
        <div v-show="titleImg" class="tra_steHeaderImg text-center"><a href="javascript:;" class="text-f9 h7"><span></span> 设置头图</a>
          <ul>
            <li class="mt-2"><a class="acc"  href="javascript:;"><span></span>重新上传头图<input type="file" @change="upTitleImg($event)" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" /></a></li>
            <li class="mt-3"><a class="acc" href="javascript:;"><span></span> 重新编辑头图</a></li>
            <li class="mt-3"><a class="acc" href="javascript:;"><span></span> 添加头图视频</a></li>
          </ul>
        </div>
        <div class="tra_place"><input v-model="traPlace" type="text" placeholder="本次游记地点"></div>
      </div>
      <div class="travels-setPage d-flex">
        <div>
          <a href="javascript:;"><input type="file" @change="upTitleImg($event)" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" /></a>
        </div>
        <div>
          <p class="h4 text-c3">设置游记头图</p>
          <p class="text-c6 mt-2">图片建议选择尺寸大于1680px的高清大图，如相机原图</p>
        </div>
      </div>
      <!-- 填写游记标题 -->
      <div>

        <input ref="travelsRemind" id="cc" type="text" placeholder="请填写游记标题" maxlength="20" onfocus='Titremind=true' onblur="Titremind=false">
        <span ref="" class="text-c9 h8" v-show="Titremind">一共可输入<strong>20字</strong></span>
      </div>
    </div>  
    <!-- 下半部分 准备写正文 -->
    <div class="clearfix m-auto pt-5 " id="travelsCtr" style="position:relative">
      <div class="float-left" id="tras_text" >
        <div class="tras-footer">
          <a href="javascript:;">预览</a>
          <a href="javascript:;" @click="tijiao">发表游记</a>
        </div>
        <div>
          <div ref="tras_ttc" class="tras_area" contenteditable="true" data-text="从这里开始游记..."></div>
        </div>
        <div id="tras_cc1" ref="trasPic"></div>
        <div style="height:300px;"></div>
         </div>
       <!-- 右边部分 -->
      <div class="travels-addBtn" :class="tras_toolbar">
        <div class="tra_insertImg">
          <a href="javascript:;" @click="imBc=!imBc" class="h6 text-c3 acc">
            <i class="mr-2"></i>插入图片
             <input class="tra_insertImg" type="file" @change="indertImg($event)" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" />  
          </a>
        </div>
        <div class="mt-3"> 
          <a href="javascript:;" class="h6 text-c3 acc" ><i class="mr-2"></i>插入表情</a>
        </div>
        <div class="mt-3">
          <a href="javascript:;" class="h6 text-c3 acc" ><i class="mr-2"></i>插入视频</a>
        </div>
        <div class="mt-3">
          <a href="javascript:;"  @click="imBd=!imBd" class="h6 text-c3 acc" ><i class="mr-2"></i>插入段落标题</a>
           <div class="tras-inner h6 center " v-show="imBd" >
            <input type="text" v-focus placeholder="请输入段落名称" v-model="duanluo" >
            <a href="javascript:;" @click="addPgp()">确定</a>
            <span class="h8">可输入<em>20字</em></span>
          </div>
          <div class="tras-inner h6 center " v-show="imBda"  >
            <input type="text" v-focus placeholder="请输入段落名称" v-model="duanluo" >
            <a href="javascript:;" @click="modifyTit()">确定</a>
            <span class="h8">请输入要修改的标题</span>
          </div>
        </div>
        <div class="mt-3">
          <a href="javascript:;" class="h6 text-c3 acc" ><i class="mr-2"></i>添加游记音乐</a>
         
        </div>
        <div class="tras-bbtnSave h7 mt-5">
          <a href="javascript:;" class="text-f9" ><i class="mt-2"></i>保存草稿目录</a>
        </div>
        <div class="tras-mu mt-4 mb-3">
          <span>游记目录</span>
          <ul ref="tra_mulu">
            <li v-for="(index ,i) of duanTit" :key="i" ><span>{{i+1}}/</span><a :href="'#'+duanTit[i].id">{{duanTit[i].text}}</a></li>
          </ul>
        </div>
      </div>
    </div>
   <toolbar :scrollTopfa="scrollTopfa"></toolbar>
    <myfooter></myfooter>
  </div>
</template>

<script>
import MyHeader from '../components/hy/MyHeader'
import MyFooter from '../components/hy/MyFooter'
import ToolBar from '../components/hy/Tooblar'
import CalcHeight from '../components/Height' //让文本域自适应高度
import {getURL} from '../components/baseurl'
export default {
  components:{
    "myheader":MyHeader,
    "myfooter":MyFooter,
    "toolbar":ToolBar
  },
  data() {
    return {
      Titremind:false, //标记提示是否显示
      // imBl:"",//图片区域类容
      // imBll:false,//放大镜是否显示
      // imBc:[false,false,false,false,false]
      imBc:'', //正文图片暂存地址
      imBd:false, //添加段落区域是否显示
      textarea2:'',//输入的文本
      duanluo:'',//确定段落的value
      dc:2,//动态添加的段落
       delete:0,//段落监听 获取删除段落时要获得的i
      iimg:0,//图片监听
      tras_toolbar:{ //右边工具栏，当长度超过一定长度时就变为绝对定位
        float:true,
        posit:false
      },
      imBda:false,//修改段落标题
      scrollTopfa:0,//向子组件toolbar传入当前页面的值
      duanId:'',//修改段落时需要的id
      duanTit:[],//段落标题导航bar
      titleImg:'',//标题图片地址
      getURL:"",
      pid:1,//段落的id//为锚点做准备
      traPlace:'',//游记地点
      mulu:1,//指向段落的锚点
    }
  }, 
  created() {
    this.getURL=getURL();
    if(!sessionStorage.getItem('userInfo')){
       this.$confirm('还没有登录，请先登录', '提示', {
          confirmButtonText: '去登录',
          cancelButtonText: '先看看其他的',
        }).then(() => {
          this.$router.push({
        name:'Login',
        params:{
          sta:1
        }
      })
        }).catch(() => {
          this.$router.push('/Iindex')        
        });
    }
    //
    //监听文本域的高度 右边工具栏，当长度超过一定长度时就变为绝对定位
     
     //删除图片
//利用冒泡事件，为图片赋值事件并删除
// this.$refs.tras_cc1.onclick=function(e){
//   if(e.target.nodeName=="IMG"){
//       console.log(11)
//      }
// }

  },
  methods: {
    //插入头部图片
  upTitleImg(e){
    let data = new FormData()  //表单数据
			data.append('desc',  '这是我的头像文件')	//将要提交给服务器的字符数据
			data.append('write', e.target.files[0])  //将要提交给服务器的文件数据
			
			let config = {	//包含文件上传字段的HTTP请求消息，内容类型必需是:
				headers: {'Content-Type':'multipart/form-data'}
			}
			this.axios.post('/write/upload/avatar', data, config).then(res=>{
        if(res.data.code==200){
          this.titleImg=res.data.fileName;
        }
			}).catch(err=>{
				console.log(err)
			})
  },
    //插入图片 插入标题等使其呈现方式为手风琴方式 /现不能实现
    // cha(k){
    //  for(var i=0;i<this.imBc.length;i++ ){
    //    if(i==k){this.imBc[i]=!this.imBc[i];console.log(this.imBc[0]);console.log(typeof(this.imBc[0]))}else{
    //      this.imBc[i]==false
    //    }
    //  }
    // },
    traAa(ii){
      this.imBl='/img/hy/travels/'+ii
    },
    //修改段落标题
    modifyTit(){
       let bianji=document.getElementById(this.duanId).firstElementChild;
      bianji.innerHTML=this.duanluo;
      this.duanluo='';
      this.imBda=false;
    },
    //向游记正文中添加段落
    addPgp(){
      var text=document.getElementById("tras_cc1")
      text.innerHTML+=`<div style="position:relative" class="tras_wenben tras_tk" id="tras_cc${this.dc}">
           <p>${this.duanluo}</p>
           <div class="tras_ct">
            <a href="javascript:;" name="bianji"  title="编辑"></a><a class="tras_kk" name="shanchu" title="删除" href="javascript:;"></a>
           </div>
          </div>
           <div  class="tras_area tras_tk" contenteditable="true"></div>`
     
     this.duanTit.push({id:`tras_cc${this.dc}`,text:this.duanluo})
      this.dc+=1;
     this.imBd=false;
     this.duanluo="";
    //  this.delete+=1; //添加一个数字告诉监听函数有新的段落添加并为其添加删除和修改函数
    },
        //向文章中添加图片
    indertImg(e){
      let data = new FormData()  //表单数据
			data.append('desc',  '这是我的头像文件')	//将要提交给服务器的字符数据
			data.append('write', e.target.files[0])  //将要提交给服务器的文件数据
			
			let config = {	//包含文件上传字段的HTTP请求消息，内容类型必需是:
				headers: {'Content-Type':'multipart/form-data'}
			}
			this.axios.post('/write/upload/avatar', data, config).then(res=>{
        if(res.data.code==200){
          var text=document.getElementById("tras_cc1")
      text.innerHTML+=`<div  class="py-4 tras_tu tras_tk" style="position:relative;">
        <img src="${this.getURL+res.data.fileName}" />
        <div>
          <a href="javascript:;" name="shanchu" title="删除"></a>
        </div>
      </div>
      <div  class="tras_area tras_tk" contenteditable="true"></div>`
      this.dc+=1;
      this.iimg+=1;    
        }
			}).catch(err=>{
				console.log(err)
			})
    },
    //保持文本域的换行格式
    tijiao(){
     //var cc=document.getElementById("textarea").innerHTML
     // var des = cc.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' '); //转换文本域的格式
    //  var cc=document.getElementsByClassName("tras_area")
    //  for(let i=0;i<cc.length;i++){
    //    console.log(cc[0].innerHTML)
    //   var des = cc[i].innerHTML.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ');
    //   }
     let title=this.$refs.travelsRemind.value;
     //主标题为空，弹出message提示框
     if(title==""){
       this.tras_open();
       return;
     }
      //保存文章的html片段
     let html=``;
     //获取title 图片的src
    // let src=this.$refs.traTitleImg.src;
     //第一个段落的内容,并用正则保持文本格式
     let text1=this.$refs.tras_ttc.innerHTML.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ');
    //  if(text1!=''){html+=`<div><span>${text1}</span></div>`}
     //获取 第一个段落下的所有正文
    let tras_tk=document.getElementsByClassName('tras_tk');
    // console.log(tras_tk[0].firstElementChild.nodeName)
   for(let i=0;i<tras_tk.length;i++){
      let lala=tras_tk[i];
      if(lala.innerHTML!=""){
        if(lala.firstElementChild){
        if(lala.firstElementChild.nodeName=='IMG'){
        //  let icimg=lala.firstElementChild.src.split("img/hy/travels/")[1];
         let icimg=lala.firstElementChild.src;
         html+=`<div><img src="${icimg}" /></div>`
        }else if(lala.firstElementChild.nodeName=='P'){
          let daP=lala.firstElementChild.innerHTML;
          html+=`<div><p id="tra${this.pid}">${daP}</p></div>`
          this.pid++;
        }
        }else{
          let textarea=lala.innerHTML.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ');
          html+=`<div><span>${textarea}</span></div>`
        }
      }
    }
    //导航文章所需要的内容
     let userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
      let uname=userInfo.uname;
      let unamesm=userInfo.touxiang;
      let opusimg=this.titleImg;
      let works=title;
      let synopsis=text1
      let place=this.traPlace;
      //正文所需要的内容
      let worksTime=(new Date()).getTime();//当前时间戳
      //获取段落导航
      let muli=``;
      let mulus= this.$refs.tra_mulu.children
      for(let i=0;i<mulus.length;i++){
        muli+=`<li><a href="#tra${this.mulu}">${mulus[i].innerText}</a></li>`
        this.mulu++
      }
      //开始向 服务器提交内容
      let objput={
        uname:uname,
        opusimg:opusimg, //等于titleImg
        works:works, //等于worksnmae
        synopsis:synopsis, //等于catalog
        place:place,
        worksTime:worksTime,
        textHtml:html,
        mulu:muli
      }
      this.axios.post('/write/article',objput).then(res=>{
        if(res.data.code==200){
            this.$message({
          message: '恭喜你，上传成功',
          type: 'success'
        });
        this.$router.push('/Me')
        }else{
            this.$message('服务器走神了，重新传一次吧');
        }
      }).catch(err=>{
        console.log(err)
      })
    },

    
    //主标题未填弹出提示框
     tras_open() {
        this.$alert('请输入文章的主标题', '主标题不能为空', {
          confirmButtonText: '让我去填啊',
          // callback: action => {
          //   this.$message({
          //     type: 'info',
          //     message: `action: ${ action }`
          //   });
          // }
        });
      }
  },
  mounted() {
    //让放大镜里面的图片跟随鼠标的移动而变化
     this.$refs.travelsRemind.onfocus=()=>{
       this.Titremind=true;
    }
     this.$refs.travelsRemind.onblur=()=>{
       this.Titremind=false;
    }
    //利用冒泡事件删除图片和标题删除标题数组的相对应的
    this.$refs.trasPic.onclick=(e)=>{
      if(e.target.nodeName=="A"&&e.target.name=="shanchu"){
        //获取标题数组，利用循环获取要删除的数组的i，然后删除导航栏数组里面相应的数据
         var duanI= document.getElementsByClassName("tras_kk")
       for(let i=0;i<duanI.length;i++){
         if(duanI[i]==e.target){
           this.duanTit.splice(i,1)
         }
       }
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
      }else if(e.target.nodeName=="A" && e.target.name=="bianji"){
        //利用冒泡事件修改标题
        this.imBda=true;
       this.duanluo= e.target.parentNode.previousElementSibling.innerHTML
        this.duanId=e.target.parentNode.parentNode.id;
      }
    }

   

//监听滚轮y轴的高度 
    window.onscroll=(()=>{
       var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
       this.scrollTopfa=scrollTop
       if(scrollTop>542){
         this.tras_toolbar={
           posit:true,
           float:false
         }
       }else{
         this.tras_toolbar={
           posit:false,
           float:true
         }
       }
     })
    
  },
  watch: {

  },
 

}
</script>

<style>
.tra_place{
  position: absolute;
  top:102%;
  left:63%;
  z-index: 20;
}
.tra_place>input{
  border: 0;
  background: #eee;
  width:100px;
  height: 30px;
}
/* .tra_insertImg{
  display: inline-block;
  width:100px;
  height: 29px;
  position: absolute;
  top:0px;
  left:0px;
  opacity: 0;
} */
#travels-TBg{
  height:506px;
  width:100%;
  background: url(/img/hy/travels/page_bg.jpg) center 0 no-repeat;
    background-size: cover;
    position: relative;
    z-index: 10;
}
#travels-TBg>.travels-setBg{
  width:100%;
  height:100%;
}
#travels-TBg>.travels-setBg>img{
  top:0px;
  left:0px;
  height:506px;
  width:100%;
  position: absolute;
  z-index: 15;
}
#travels-TBg>.travels-setPage{
  height:67px;
  width:705px;
  position: absolute;
  top:40%;
  left:35%;
}
.travels-setPage>div:first-child>a{
  display: block;
      width: 67px;
    height: 67px;
    margin-right: 20px;
    background: url(/img/hy/travels/nn_sprite_v29.png) -10px 0 no-repeat;
}
.travels-setPage>div:first-child>a>input{
  display: block;
    width: 67px;
    height: 67px;
    opacity: 0;
    cursor: pointer;
}
#travels-TBg>div:nth-child(3){
  position: absolute;
      width: 938px;
    padding: 20px 20px;
    height: 62px;
    background: #fff;
    border: 1px solid #fff;
    line-height: 20px;
    bottom: 25px;
    z-index: 20;
    left: 20%;
    box-shadow: 0 2px 2px rgba(110,98,85,.5);
}
#travels-TBg>div:nth-child(3)>input{
  width:868px;
  height:20px;
  border:0;
  line-height: 20px;
  vertical-align: middle;
  outline: none;
}
#travels-TBg>div:nth-child(3)>span{
  display: inline-block;
  position: absolute;
  right:20px;
  top:30%;
}
#travelsCtr{
  width:980px;
}
#travelsCtr>div:last-child{
  width:240px;
}
.travels-addBtn>div>a>i{
  background-image: url(/img/hy/travels/n_publish4@2x.png);
  background-size: 200px auto;
  background-repeat: no-repeat;
  display: inline-block;
  width:28px;
  height:28px;
  vertical-align: middle;
}
.travels-addBtn>div>a{
  position: relative;
  display: inline-block;
  line-height: 28px;
  font-weight: 600;
}
.travels-addBtn>div{
  position: relative;
}
.travels-addBtn>div:first-child>a>i{
  background-position: 0 0;
}
.travels-addBtn>div:first-child>a:hover>i{
  background-position: 0 -30px;
}
.travels-addBtn>div:nth-child(2)>a>i{
  background-position: -90px 0;
}
.travels-addBtn>div:nth-child(2)>a:hover>i{
  background-position: -90px -30px;
}
.travels-addBtn>div:nth-child(3)>a>i{
  background-position: -30px 0;
}
.travels-addBtn>div:nth-child(3)>a:hover>i{
  background-position: -30px -30px;
}
.travels-addBtn>div:nth-child(4)>a>i{
  background-position: -60px 0;
}
.travels-addBtn>div:nth-child(4)>a:hover>i{
  background-position: -60px -30px;
}
.travels-addBtn>div:nth-child(5)>a>i{
  background-position: -120px 0;
}
.travels-addBtn>div:nth-child(5)>a:hover>i{
  background-position: -120px -30px;
}
.travels-addBtn>div>div{
  position: absolute;
  border:1px solid #ccc;
  z-index: 10;
}
.travels-addBtn>div:nth-child(1)>div{
  width:360px;
  right:260px;
  top:0;
  padding: 10px 10px;
  box-shadow: 2px 2px 3px 3px #ddd ;
}
.travels-addBtn>div:nth-child(1)>div>img{
  height:60px;
  width:60px;
  border-radius: 4px;
  margin-left: 7px;
  margin-top:5px;
}
.travels-addBtn>div:nth-child(1)>div>div{
  position: absolute;
  width:400px;
  height:300px;
  top:0px;
  right:-420px;
  background-color: #ccc;
  z-index: 5;
}
.travels-addBtn>div:nth-child(1)>div>div>img{
  width:400px;
  height:300px;
}
.tras-inner{
  padding:40px 35px;
  position: absolute;
  top:0px;
  left:-661px;
  z-index: 50 !important;
  background-color: #fff;
  box-shadow: 2px 2px 2px 2px #eee;
}
.tras-inner>input{
  width:460px;
  height:60px;
  padding:19px 20px;
      background-color: #efefef;
    border: 1px solid #efefef;
    line-height: 20px;
    color: #333;
    border-radius: 30px;
    transition: all .2s linear;
}
.tras-inner>input:focus{
      outline: 0;
    background-color: #fff;
    border-color: #ff9d00;
    box-shadow: 0 0 2px rgba(255,157,0,.5);
}
.tras-inner>span{
  position: absolute;
  right: 155px;
    top: 41px;
    color: #999;
    line-height: 60px;
}
.tras-inner>a{
  float: right;
    margin-left: 8px;
    line-height: 58px;
    width: 98px;
    border: 1px solid #ff9d00;
    text-align: center;
    font-size: 20px;
    color: #ff9d00;
    border-radius: 30px;
    transition: all .2s linear;
}
.tras-inner>a:hover{
  background-color:  #ff9d00;
  color: #fff;
}
.tras-bbtnSave>a{
  display:inline-block;
    width: 138px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #e6e6e6;
    text-align: center;
    font-size: 14px;
    border-radius: 16px;
    vertical-align: middle;
    transition: all .1s linear;
}
.tras-bbtnSave>a>i{
  background: url(/img/hy/travels/n_publish4@2x.png) no-repeat -180px -60px;
    background-size: 200px auto;
    display: inline-block;
    width: 14px;
    height: 16px;
    vertical-align: middle;
}
.tras-mu{
  color:#000;
  height: 100px;
  overflow-y: auto;
}
.tras-mu>ul>li{
  color:#aaa;
  font-size: 14px;
  margin-top:5px;
  height:20px;
  line-height: 20px;
}
.tras-mu>ul>li>a{
  display: inline-block;
  width:150px;
  margin-left:15px ;
  color:#000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#tras_text{
  width:680px;
  z-index: 1;
  color:#333
}
#tras_text textarea{
 width:100%;
    display: block;
    border:0 !important ;
    line-height: 1.8;
    padding: 0;
    overflow-y:visible ;
    resize: none !important;
}
.tras_trea{
  width:100%;
  min-height: 26px;
    display: block;
    border: 0;
    resize: none;
    line-height: 1.8;
    padding: 0;
    overflow: hidden;
    word-wrap: break-word;
    
}
#tras_text p{
  padding:10px 5px;
  font-size: 25px;
  color:000;
}
#tras_text img{
  max-width: 680px;
}
.tras-footer{
  position: absolute;
  margin: 0 auto;
  bottom:20px;
  left:30%;
}
.tras-footer>a{
   display: inline-block;
  font-size: 20px;
  line-height: 60px;
  padding: 0 55px;
    height: 60px;
    text-align: center;
    box-shadow: 0 0 7px rgba(0,0,0,0.15);
    border-radius: 30px;
}
.tras-footer>a:first-child{
  background: #fff;
    color: #ff9d00;  
    margin-right: 25px; 
}
.tras-footer>a:last-child{
  background-color: #ff9d00;
  color:#fff;
}

 #tras_text .tras_area{
            width: 100%;
            min-height: 26px;
            outline: 0;
            font-size: 16px;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-user-modify: read-write-plaintext-only;
        }
        [contentEditable=true]:empty:not(:focus):before {
            content: attr(data-text);
        }
#tras_text .tras_area:focus{
  border:1px solid #ff9d00;
}
.tras_ct{
  position: absolute;
  top:20px;
  right:0px;
  display: none;
}
.tras_wenben:hover .tras_ct{
  display: block;
} 
.tras_ct>a{
  display: inline-block;
  width:30px;
  height: 30px;
  background-image:url("/img/hy/travels/n_publish4@2x.png") ;
  background-size: 200px;
}
.tras_ct>a:first-child{
  background-position:-148px 67px ;
}
.tras_ct>a:last-child{
  background-position:-148px 96px ;
}
.tras_tu a{
  display: inline-block;
  position: absolute;
  width:22px;
  height:22px;
  border-radius: 50%;
  top:25px;
  left:0px;
  background:url("/img/hy/travels/n_publish4@2x.png") no-repeat -117px -57px;
  background-size: 200px;
  background-color: rgba(110,98,85,.5);
  display: none;
}
.tras_tu:hover a{
  display: inline-block;
}
.posit{
  position: fixed;
  right:317px;
  top:127px;
}
.float{
  float:left;
}
.tra_insertImg>a>input{
  display: inline-block;
  width:100px;
  height:29px;
  position: absolute;
  top:0px;
  left:0px;
  opacity: 0;
}
</style>