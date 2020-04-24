const express=require("express"); //服务器模块
const session=require("express-session"); //session 模块
const cors=require("cors"); //跨域
const history=require("connect-history-api-fallback")
// const history=require('connect-history-api-fallback');//history 路径模块


let port=5050; //x新浪云只支持5050
let app=express();

app.listen(port,()=>{
  console.log('server listening',port)
}) 
app.use(history())
/*一、请求正式处理前的"前置中间件"*/
// 1.请求主体的处理中间件
let bodyParser = require('body-parser')
app.use(bodyParser.json())	//处理请求主体中的JSON数据，保存到req.body属性中
//  app.use(history());
//配置跨域模块
app.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080","http://localhost:5050","http://127.0.0.1:5050","http://wtbyjqdd.applinzi.com"],
  credentials:true 
}));
//指定静态资源目录 public
app.use(express.static("public"));
//配置session 对象
app.use(session({
  secret:"mfwsecret123",//加密条件
  resave:true,//每次请求更新数据
  saveUninitialized:true,//保存初始化数据
}));

// //引入路由器
const indexRouter=require('./router/index.js');
const iindexRouter=require('./router/iindex.js');
const userRouter=require('./router/user.js');
//引入登录检查中间件
const loginCheckMiddleware = require('./middleware/loginCheck.js')
app.use('/write',loginCheckMiddleware);
const writeRouter=require('./router/write.js')




// //挂载路由器
app.use("/index",indexRouter);
app.use("/iindex",iindexRouter);
app.use("/user",userRouter);
app.use('/write',writeRouter);


// // 2.异常处理中间件 —— 处理路由执行过程中出现的所有错误
app.use((err, req, res, next)=>{		//第一个形参是err的中间件就是“错误处理中间件”
	res.status(500)						//修改响应消息状态码
	let output = {
		code: 500,
		msg: 'Error occoured during server running',
		err: err
	}
	res.send(output)
})




