/*
vue.config.js是整个Vue.js脚手架项目的基础配置文件
其内容是固定的，详细格式参考：https://cli.vuejs.org/config/
注意：此文件修改后，只有手工重启开发服务器才能生效
*/
module.exports = {
	//baseUrl: '',			//CLI3.3开始被publicPath取代
	publicPath: '/',		//为index.html中的BASE_URL变量赋值
	outputDir: 'dist',		//运行npm run build之后项目打包得到的文件输出目录
	assetsDir: '',			//运行npm run build之后项目静态文件文件输出目录
	indexPath: 'index.html',//运行npm run build之后项目index.html文件输出文件名
	pages: {
	    index: {
	      entry: 'src/main.js',				//当前SPA打包入口文件
	      template: 'public/index.html',	//当前SPA的首页文件的模板
	      filename: 'index.html',			//模板文件输出目标文件名
	      title: 'wtb游记网',				//index.html中的变量：htmlWebpackPlugin.options.title
	    },
		// admin: {
		// }
	 }
}