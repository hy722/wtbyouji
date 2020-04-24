const express=require('express');
const pool=require('../pool.js');
 router =express.Router();
module.exports=router;
//挂载路由  
router.get("/Index",(req,res,next)=>{
  //3:创建sql语句
  var sql = "SELECT * FROM mfw_opus";
  //4:发送sql语句并且将查询结果返回脚手架
  pool.query(sql,(err,result)=>{
      if(err){next(err);return};
      res.send({code:1,msg:"查询成功",data:result});
  })
});
//赞
router.get("/zan",(req,res,next)=>{
  //3:创建sql语句
  var aid=req.query.aid;
  var zan=req.query.zan;
  var sql = `UPDATE mfw_opus SET zan=${zan} WHERE aid=${aid}`;
  //4:发送sql语句并且将查询结果返回脚手架
  pool.query(sql,(err,result)=>{
      if(err){next(err);return};
      if(result.length==0){
          res.send({code:-1,msg:"修改点赞错误"});
      }else{
          res.send({code:1,msg:"修改点赞成功"})
  }}) 
});

//获取用户的文章
router.get('/container',(req,res,next)=>{
	let aid=req.query.aid;
	let uid=req.query.uid;
	if(!aid){
		let output={
			code:400,
			msg:'asid require'
		}
		res.send(output)
		return
	}
	if(!uid){
		let output={
			code:400,
			msg:'uid require'
		}
		res.send(output)
		return
	}
	let sql1="SELECT touxiang,city,uname FROM mfw_user WHERE uid=?"
	pool.query(sql1,uid,(err,result)=>{
		if(err){
			next(err);
			return
		}
		if(result.length === 0){		//根据phone没有查询到记录
			let output = {
				code: 401,
				msg: 'non-exists-sql1'
			}
			res.send(output)
		}else{
			let data1=result;
			let sql2="SELECT opusimg,works,synopsis,place,worksTime,textHtml,catalog,zan FROM mfw_opus WHERE aid=?"
			pool.query(sql2,aid,(err,result)=>{
				if(err){
					next(err);
					return
				}
				if(result.length===0){
					let output={
						code:401,
						msg:'non-exists'
					}
					res.send(output)
				}else{
					let output={
						code:200,
						data:data1,
						resul:result
					}
					res.send(output)
				}
			})
		}
	})
})


//导出路由器
