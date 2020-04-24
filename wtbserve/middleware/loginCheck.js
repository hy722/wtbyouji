/*登录检查中间件：如果客户端尚未登录（即req.session.userInfo不存在），则输出一个提示响应消息，并结束请求处理过程；否则，在req添加一个新的属性：req.uid，供后续的请求处理路由来使用*/

module.exports = function(req, res, next){
	if(!req.session){
		let output = {
			code: 599,
			msg: 'Server Err: session middleware required'
		}
		res.send(output)
		return
	}
	if(!req.session.userInfo){
		let output = {
			code: 499,
			msg: 'login required'
		}
		res.send(output)
		return
	}
	//客户端已经完成登录了
	req.uid = req.session.userInfo.uid
	next()		//中间件检查之后放行，继续执行后续的中间件或路由
}