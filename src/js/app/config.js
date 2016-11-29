function config($stateProvider,$urlRouterProvider){
	//stateProvider 设置状态机制
	//urlRouteProvider  设置url地址
	//otherwise 设置初始页面地址
	//state   设置每个url的配置
	//先设置初始页的url
	$urlRouterProvider.otherwise('/content/detailindex');
	//设置状态机制
	$stateProvider
		.state("content",{
			url:"/content",
			templateUrl:"views/content.html",
			resolve:{
                loacPligin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                             {files:["css/make/content.css"]}
                          ])
                     }
            	}
		})
		.state("content.detailindex",{
			url:"/detailindex",
			templateUrl:"views/detailindex.html",
			resolve:{
                loacPligin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                             {files:["css/make/detailindex.css"]}
                          ])
                     }
            	}
		})
		.state("content.detail1",{
			url:"/detail1",
			templateUrl:"views/detail1.html",
			resolve:{
                loacPligin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                             {files:["css/make/x_detail1.css"]}
                          ])
                     }
            	}
		})
		.state("content.detail2",{
			url:"/detail2",
			templateUrl:"views/detail2.html",
			resolve:{
                loacPligin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                             {files:["css/make/x_detail2.css"]}
                          ])
                     }
            	},
            controller:detail2
		})
		.state("content.ysn",{
			url:"/ysn",
			templateUrl:"views/ysn.html",//模板地址
			//链接css样式
			resolve:{
				loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('css/make/ysn.css')
				}]
			}
		})
		.state("content.ysn2",{
			url:"/ysn2",
			templateUrl:"views/ysn2.html",//模板地址
			//链接css样式
			resolve:{
				loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('css/make/ysn2.css')
				}]
			}
		})
		.state("content.ysn3",{
			url:"/ysn3",
			templateUrl:"views/ysn3.html",//模板地址
			//链接css样式
			resolve:{
				loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('css/make/ysn3.css')
				}]
			}
		})
		.state('content.blog',{
		url:'/blog',
		templateUrl:'views/blog.html',//模板地址
		resolve:{
					loacPligin:function($ocLazyLoad){
						return $ocLazyLoad.load([
								{files:['css/make/blog.css']}
						    ])
						}
				}
	})
	.state('content.typicalpage',{
		url:'/typicalpage',
		templateUrl:'views/typicalpage.html',//模板地址
		resolve:{
					loacPligin:function($ocLazyLoad){
						return $ocLazyLoad.load([
								{files:['css/make/typicalpage.css']}
						    ])
						}
					}
	})
	.state('content.singlepost',{
		url:'/singlepost',
		templateUrl:'views/singlepost.html',
		resolve:{
					loacPligin:function($ocLazyLoad){
						return $ocLazyLoad.load([
								{files:['css/make/singlepost.css']}
						    ])
						}
				}
	})
	.state("content.check",{
			url:"/check",
			templateUrl:"views/x_check.html",
			resolve:{
                loacPligin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                             {files:["css/make/x_check.css"]}
                          ])
                     }
            	}
		})



}
angular.module("myapp")
		.config(config)