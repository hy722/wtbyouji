/*处理路由地址中所有以/user开头的请求*/
const express = require('express')
const pool = require('../pool.js')
router = express.Router()
module.exports = router

//注册
router.post('/register',(req,res,next)=>{
  //1.接收客户端提交的请求数据
	let uname = req.body.uname
	if(!uname){
		let output = {
			code: 401,
			msg: 'uname required'
		}
		res.send(output)
		return
	}
	let upwd = req.body.upwd
	if(!upwd){
		let output = {
			code: 402,
			msg: 'upwd required'
		}
		res.send(output)
		return
	}
	let phone = req.body.phone
	if(!phone){
		let output = {
			code: 403,
			msg: 'phone required'
		}
		res.send(output)
		return
  }
  let sql1='SELECT uid FROM mfw_user WHERE uphone=?'
  pool.query(sql1,[phone],(err,result)=>{
    if(err){
      next(err);return
    }
    if(result.length>0){
      let output={
        code:400,
        msg: 'uname or phone already  taken'
      }
      res.send(output)
			return 
    }
    let sql2= "INSERT INTO mfw_user(uname,upwd,uphone) VALUES(?,?,?)";
    pool.query(sql2, [uname,upwd, phone], (err, result)=>{
			if(err){
				next(err)
				return
      }
      let output = {
				code: 200,
				msg: 'register succ',
				uid: result.insertId		//新插入的用户在数据库中的自增编号
      }
      res.send(output)
    })
  })
})

//检测电话号码是否已经被注册
router.get('/checkphone', (req, res, next)=>{
	//1.读取客户端提交的请求数据——服务器端验证
	let phone = req.query.phone
	if(!phone){				//如果客户端未提交phone
		let output = {
			code: 400,
			msg: 'phone required'
		}
		res.send(output)  	//发送错误提示
		return				//终止请求的处理
	}
	//2.执行数据库查询操作
	let sql = 'SELECT uid FROM mfw_user WHERE uphone=?'
	pool.query(sql, phone, (err, result)=>{
		if(err){
		   next( err )		//把所有的错误都交给下一个“错误处理中间件”来处理
		   return			//手工终止当前的路由处理过程
		}
		//3.向客户端输出响应消息			
		if(result.length === 0){		//根据phone没有查询到记录
			let output = {
				code: 401,
				msg: 'non-exists'
			}
			res.send(output)
		}else {							//根据phone查询到了记录
			let output = {
				code: 200,
				msg: 'exists'
			}
			res.send(output)
		}
	})
})
//登录
router.post('/login',(req,res,next)=>{
  //1.接收客户端提交的请求数据
	let uphone = req.body.phone
	if(!uphone){
		let output = {
			code: 401,
			msg: 'uphone required'
		}
		res.send(output)
		return
	}
	let upwd = req.body.upwd
	if(!upwd){
		let output = {
			code: 402,
			msg: 'upwd required'
		}
		res.send(output)
		return
	}
  let sql='SELECT * FROM mfw_user WHERE uphone=? AND upwd=?'
	pool.query(sql, [uphone, upwd], (err, result)=>{
		if(err){
			next(err)
			return
		}
		if(result.length === 0){	//根据uname和upwd没查询到数据
			let output = {
				code: 400,
				msg: 'uphone or upwd error'
			}
			res.send(output)
		}else {						//根据uname和upwd查询到了相关用户信息
			let output = {
				code: 200,
				msg: 'login succ',
				userInfo: result[0]		//登录成功后，把当前用户的信息返回给客户端
			}
			res.send(output)
			// 在当前客户端保存在服务器上的session空间内存储自己的数据
			req.session.userInfo = result[0]
			req.session.uid=result[0].uid
			req.session.save()	//手工保存session中数据的修改
		}
	})
})
//退出登录
router.get('/sig', (req, res, next)=>{
	req.session.userInfo = '';
	req.session.uid='';
	req.session.save()	//手工保存session中数据的修改
	let output={
		code:200,
		msg:'Sign out',
		userInfo:''
	}
	res.send(output)
})
//更改背景图片
router.get('/bj',(req,res,next)=>{
	let uid=req.session.uid;
	if(!uid){
		let output = {
			code: 402,
			msg: 'uid required'
		}
		res.send(output)
		return
	}
	let bjt=req.query.bj;
	if(!bjt){
		let output = {
			code: 402,
			msg: 'bjt required'
		}
		res.send(output)
		return
	}
	let sql="UPDATE mfw_user SET beijing=? WHERE uid=?"
	pool.query(sql,[bjt,uid],(err,result)=>{
		if(err){
			next(err);
			return;
		}
		if(!result.affectedRows>0){
			let output={
				code:400,
				msg:'set fail'
			}
			res.send(output);
			return;
		}else{
			let output={
				code:200,
				msg:'setbj scc'
			}
			res.send(output)
		}
	})
})

//获得用户的基本信息
router.get('/author',(req,res,next)=>{
	let uid=req.session.uid;
	if(!uid){
		let output = {
			code: 401,
			msg: 'uid required'
		}
		res.send(output)
		return
	}
	let sql='SELECT uname,sex,city,touxiang,beijing FROM mfw_user WHERE uid=?'
	pool.query(sql,[uid],(err,result)=>{
		if(err){
			next(err);
			return;
		}
		if(result.length === 0){	//根据uid没查询到数据
			let output = {
				code: 400,
				msg: 'uid error'
			}
			res.send(output)
		}else {						//根据uname和upwd查询到了相关用户信息
			let output = {
				code: 200,
				msg: 'author succ',
				userInfo: result[0]		//登录成功后，把当前用户的信息返回给客户端
			}
			res.send(output)
		}
	})
})
//在我的主页中获取游记
router.get('/youji',(req,res,next)=>{
	let uid=req.session.uid;
	if(!uid){
		let output={
			code:400,
			msg:'请登录'
		}
		res.send(output);
		return
	}
	let sql="SELECT * FROM mfw_opus WHERE uid=?"
	pool.query(sql,uid,(err,result)=>{
		if(err){
			next(err);
			return
		}
		if(result.length==0){
				res.send({code:400,data:result})
		}else{
		res.send({code:200,data:result})
	}
	})
})


//使用第三方中间件处理客户端上传的文件/文本域
const multer = require('multer')
const fs = require('fs')	//使用Node.js官方提供的fs模块转存文件
let upload = multer({
	dest: './temp/',		//destination客户端上传的文件临时存储在哪个目录下
})
router.post('/upload/avatar', upload.single('avatar'),  (req, res, next)=>{
	//console.log('REQ.BODY:',  req.body)		//客户端提交的文本域
	//console.log('REQ.FILE:',  req.file)		//客户端提交的文件域
	//在req.file属性中已经保存了客户端提交上来的文件信息——保存在临时目录下
	//把临时目录下的且没有后缀的文件转存到另一个有实际意义目录下，且指定特定的文件名
	let oldName = req.file.path		//客户端上传到服务器上的文件临时文件名
	let newName = generateNewFilePath( req.file.originalname ) //根据文件的原始文件名生成新文件名
	let uid=req.session.uid;
	if(!uid){
		let output={
			code:400,
			msg:'uid required'
		}
		res.send(output)
		return
	}
	fs.rename(oldName, newName, (err)=>{	//把客户端上传的文件从临时目录转存到有意义的目录
		if(err){
			next(err)
			return
		}
		let sql="UPDATE mfw_user SET touxiang=? WHERE uid=?"
		let NewName=newName.split('./public/')[1]
		let output = {
			code: 200,
			msg: 'upload succ',
			fileName: NewName
		}
		pool.query(sql,[NewName,uid],(err,result)=>{
			if(err){next(err);return}
			if(!result.affectedRows>0){
				let output={
					code:400,
					msg:'upload fail'
				}
				res.send(output);
				return;
			}
		})
		res.send(output)
	})
})

//生成一个新的随机文件名路径
//生成的文件名形如：./images/avatar/时间戳+五位的随机数+原文件后缀名
function generateNewFilePath( originalFileName ){
	let path = './public/img/hy/avatar/'		//目录名
	path += Date.now()					//+时间戳
	path += Math.floor( Math.random()*90000+10000 )		   //+五位随机数
	
	let lastDotIndex = originalFileName.lastIndexOf('.')   //原文件名中最后一个.的下标
	let extName = originalFileName.substring(lastDotIndex) //原文件名中的扩展名部分
	path += extName						//+文件扩展名
	return  path
}