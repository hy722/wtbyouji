<template>
 <div class="app-container">
    <!--显示组件容器-->
    <router-view></router-view>
 </div>
</template>
<style>
body{
  margin: 0 auto;
  min-width: 1140px;
  background-color: #fff;
  color: #fff;
  box-sizing: border-box !important;
  font-family: Arial,"Lucida Grande","Microsoft Yahei","Hiragino Sans GB","Hiragino Sans GB W3" !important;
  overflow-x: hidden;
}
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
  margin: 0;
  padding: 0;
}
a{
 text-decoration: none;
 color:#eee
}
a:hover {text-decoration:underline;text-decoration: none;	}
.text-none{
  text-decoration: none !important; 
}
ul,li{
 list-style: none;
 padding: 0;
 margin: 0;
}
.center{
	    display:flex;
		justify-content:center;
		align-items:center;
	    }

.acc:hover{
  color: #ff9d00;
}
.abb:hover{
  background-color: #ff9d00;
}
.text-c3{
  color:#333;
}
.text-f9{
  color: #ff9d00;
}
.text-c3{
  color:#333
}
.text-c6{
  color: #666;
}
.text-c9{
  color: #999;
}
.text-ac{
  color: #acacac;
}
.h7{
  font-size: 14px;
}
.h8{
  font-size: 12px;
}
.bg-f6{
  background-color: #f6f6f6;
}
.po_re{
  position: relative;
}
/**************************************************/
.me_yy p{
  line-height: 24px;

}
.me_dk>span>i{
      background-image: url(/img/hy/me/twice_ico_sprite_v9.png);
    background-size: 220px;
    display: inline-block;
        width: 18px;
    height: 16px;
    margin-right:4px;
}
.me_dk>span:first-child>i{
  background-position: -102px -152px;
}
.me_dk>span:nth-child(2)>i{
  background-position: -123px -151px;
}
.me_kg{
  position: relative;
  left: 150px;
  font-size:18px;
}
</style>
