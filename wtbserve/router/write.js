/*处理路由地址中所有以/write开头的请求*/
const express = require('express')
const pool = require('../pool.js')
router = express.Router()
module.exports = router

// 处理上传的文章
router.post('/article',(req,res,next)=>{
	let uid=req.session.uid
	//查询用户名和头像
	let sql1="SELECT uname,touxiang FROM mfw_user WHERE uid=?"
	pool.query(sql1,[uid],(err,result)=>{
		if(err){next(err);
			return
		}
		if(result.length==0){
			let output={
				code:400,
				msg:'uname or touxiang required'
			}	
			res.send(output)
		}
	let	 uname=result[0].uname;
	let	 touxiang=result[0].touxiang
		 let opusimg=req.body.opusimg;
		 let works=req.body.works;
		 let synopsis=req.body.synopsis;
		 let place=req.body.place;
		 let worksTime=req.body.worksTime
		 let textHtml=req.body.textHtml
		 let catalog=req.body.mulu
		 //作评列表的插入
		 let sql3="INSERT INTO mfw_opus(uid,uname,unamesm,opusimg,works,synopsis,place,worksTime,textHtml,catalog) VALUES(?,?,?,?,?,?,?,?,?,?)"
		 pool.query(sql3,[uid,uname,touxiang,opusimg,works,synopsis,place,worksTime,textHtml,catalog],(err,result)=>{
			if(err){next(err);return};
				if(result.affectedRows>0){
				let output={
					code:200,
					msg:"upload succ"
				}
				res.send(output)
			}
		 })
			
	})
	
})




//使用第三方中间件处理客户端上传的文件/文本域
const multer = require('multer')
const fs = require('fs')	//使用Node.js官方提供的fs模块转存文件
let upload = multer({
	dest: './temp/',		//destination客户端上传的文件临时存储在哪个目录下
})
router.post('/upload/avatar', upload.single('write'),  (req, res, next)=>{
	//console.log('REQ.BODY:',  req.body)		//客户端提交的文本域
	//console.log('REQ.FILE:',  req.file)		//客户端提交的文件域
	//在req.file属性中已经保存了客户端提交上来的文件信息——保存在临时目录下
	//把临时目录下的且没有后缀的文件转存到另一个有实际意义目录下，且指定特定的文件名
	let oldName = req.file.path		//客户端上传到服务器上的文件临时文件名
	let newName = generateNewFilePath( req.file.originalname ) //根据文件的原始文件名生成新文件名
	fs.rename(oldName, newName, (err)=>{	//把客户端上传的文件从临时目录转存到有意义的目录
		if(err){
			next(err)
			return
		}
		let NewName=newName.split('./public/')[1]
		let output = {
			code: 200,
			msg: 'upload succ',
			fileName: NewName
		}
		res.send(output)
	})
})
//生成一个新的随机文件名路径
//生成的文件名形如：./images/avatar/时间戳+五位的随机数+原文件后缀名
function generateNewFilePath( originalFileName ){
	let path = './public/img/hy/write/'		//目录名
	path += Date.now()					//+时间戳
	path += Math.floor( Math.random()*90000+10000 )		   //+五位随机数
	
	let lastDotIndex = originalFileName.lastIndexOf('.')   //原文件名中最后一个.的下标
	let extName = originalFileName.substring(lastDotIndex) //原文件名中的扩展名部分
	path += extName						//+文件扩展名
	return  path
}