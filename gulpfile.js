var gulp = require("gulp");//连接gulp
var fs = require("fs");//操作本地文件模块
var connect = require("gulp-connect");//本地服务器模块
var respond = require("gulp-respond");//本地服务器编译响应
/*var uglify = require("gulp-uglify");//压缩js
var concat = require("gulp-concat");//合并js
var ngAnnotate = require("gulp-ng-annotate");//angular压缩
var ngmin = require("gulp-ngmin");//angular合并*/
var sass = require("gulp-ruby-sass");
//注册任务
gulp.task("connect",function(){
	var params="";
	//启动本地server
	connect.server({
		//需要访问的静态资源目录
		root:["src","bower_components"],
		//端口号
		port:8889,
		livereload:true,
		//本地server中间件 完成本地动态编译
		middleware:function(){
			return [function(req,res,next){
				//第一个参数响应体 第二个参数请求体 第三个参数回调函数
				console.log("开始操作");
				console.log(req)
				next();
			},function(req,res){
				//返回一个干净的地址 截取地址
				var path=req.url.split("?").shift();//例如得到的是www.badu.com
				path=path=="/"?"/index.html":path;
				console.log(path)
				url="src"+path;
				if(!fs.existsSync(url)){//看文件路径是否存在 如果不存在 在bower_components下载
					url="bower_components"+path;
				}
				gulp.src(url)//将最完整的url传给gulp去响应
					.pipe(respond(res))
			}]
		}

	})
})
//编译scss文件
gulp.task("sass",function(){
	return sass("src/css/app/*.scss").pipe(gulp.dest("src/css/make/"))
})
//刷新页面
gulp.task("reloadhtml",function(){
	gulp.src("src/index.html")
		.pipe(connect.reload())
})
//监听
var path=["src/css/app/*.scss","src/index.html"];
gulp.task("watch",function(){
	gulp.watch(path,["sass","reloadhtml"])
})

gulp.task("serve",["connect","watch"])