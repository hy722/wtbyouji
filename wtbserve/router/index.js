const express=require('express');
const pool=require('../pool.js');
let router =express.Router();

//挂载路由
//功能一 进入 首页1
router.get("/",(req,res,next)=>{
  var sql = "SELECT * FROM mfw_star";
  //4:发送sql语句并且将查询结果返回脚手架
  pool.query(sql,(err,result)=>{
      if(err){next(err);return};
      res.send({code:1,msg:"查询成功",data:result});
  })
});

router.get("/cc",(req,res,next)=>{
  //3:创建sql语句
  var sql = "SELECT * FROM mfw_bbb";
  //4:发送sql语句并且将查询结果返回脚手架
  pool.query(sql,(err,result)=>{
    if(err){next(err);return};
      res.send({code:1,msg:"查询成功",data:result});
  })
});

//导出路由器
module.exports=router;