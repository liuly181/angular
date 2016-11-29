/*刘佳欣*/
function hoverImg(){
	return{
		restrict:"AEC",
		link:function(scope,element){
			$(".carousel-item").on("mouseover",function(){
				$(this).find(".carousel-img").stop().animate({"opacity":0},200);
				$(this).find(".carousel-ol").stop().animate({"opacity":1},200)
			}).on("mouseout",function(){
				$(this).find(".carousel-img").stop().animate({"opacity":1},200)
				$(this).find(".carousel-ol").stop().animate({"opacity":0},200);
			});
			$(".carousel-ol").on("mouseover","li",function(){
				$(this).css("opacity",1)
			}).on("mouseout","li",function(){
				$(this).css("opacity",0.6)
			})
		}
	}
}
function seamLess(){
	return{
		restrict:'AEC',  //推荐使用A
		link:function(scope,element){
			console.log(element);
			//获取每张li的宽度
			
		}
	}

}
function tabImg(){
	return{
		restrict:"AEC",
		link:function(scope,element){
			$('#tabs').on("click","li",function(){
				index=$(this).index();
				$(".tab-content").find(".tab-pane").eq(index).addClass("active").removeClass("pane");
			})
		}
	}
	
}
//详细页点击小图换大图
function clickImg(){
	return{
		link:function(scope,element){
			liwidth=$(".slider-imgs>li").innerWidth();
			lg=3;
			$(".bx-prev").on("click",function(){
				$(".slider-imgs").stop(false,false).animate({"marginLeft":-lg*liwidth},500,function(){
					$(".slider-imgs>li").slice(0,lg).appendTo(".slider-imgs");
					$('.slider-imgs').css("marginLeft",0);
				})
			})
			$(".bx-next").on("click",function(){
				$(".slider-imgs").css("marginLeft",-lg*liwidth);
				$(".slider-imgs>li").slice(-lg).prependTo(".slider-imgs");
				$(".slider-imgs").stop(false,false).animate({"marginLeft":0},500)
			})

			$(".slider-imgs").on("click","li",function(){
				index=$(this).index();
				console.log(index)
				liw=$(".slider-bigimg>li").innerWidth();
				console.log(-index*liw)
				$(".slider-bigimg").animate({"marginLeft":-index*liw},500);
			})
		}
	}
}
//改变背景色
function addColor(){
	return{
		link:function(scope,element){
			$(element).on("click","i",function(){
				//获取当前的坐标
				index=$(this).index();
				//console.log(index)
				$(this).addClass("active");
				$(this).prevAll().addClass("active");	
				/*//获取当前的下标 如果当前的下标大于有class样式的长度
				len=$(element).find(".active").size();
				console.log(len)*/


			})
		}
	}
}
//购物车的效果
function shopPing(){
	return {
		link:function(scope,element){
			//获取单价  数量*单价=总价
			//加
			$(element).on("click",".add",function(){
				var pr=$(this).parents().find(".price").text().slice(1,5);
				num=$(this).prev().val();
				num++;
				if(num>5){
					num=5
				}
				//console.log(pr)
				$(this).prev().val(num)
				$(this).parents(".pro").find(".total").text("$"+num*pr*1+".00");
				total1=$(element).find(".total").eq(0).text().slice(1,5)*1;
				total2=$(element).find(".total").eq(1).text().slice(1,5)*1;
				total3=$(element).find(".total").eq(2).text().slice(1,5)*1;
				total=total1+total2+total3;
				$(element).find("#totalprice").text("$"+total+".00");
			})
			//减
			$(element).on("click",".reduce",function(){
				var pr=$(this).parents().find(".price").text().slice(1,5);
				num=$(this).next().val();
				num--;
				if(num<=1){
					num=1
				}
				$(this).next().val(num)
				$(this).parents(".pro").find(".total").text("$"+num*pr*1+".00");
				total1=$(element).find(".total").eq(0).text().slice(1,5)*1;
				total2=$(element).find(".total").eq(1).text().slice(1,5)*1;
				total3=$(element).find(".total").eq(2).text().slice(1,5)*1;
				total=total1+total2+total3;
				$(element).find("#totalprice").text("$"+total+".00");
			})
			//删除
			$(element).on('click',".del",function(){
				if(confirm("您确定要删除吗")){
					$(this).parents(".pro").remove();
				}
				total1=$(element).find(".total").eq(0).text().slice(1,5)*1;
				total2=$(element).find(".total").eq(1).text().slice(1,5)*1;
				total3=$(element).find(".total").eq(2).text().slice(1,5)*1;
				total=total1+total2+total3;
				$(element).find("#totalprice").text("$"+total+".00");
			})
			
		}
	}
}

function clickA(){
	return{
		link:function(scope,element){
			$(element).find("li").on("click",function(){
				$("#page").css("display","none")
				//alert("hjk")
				//$(element).css("display","none")
				$(".fea").css("display","none")
			})
		}
	}
}

/*袁赛楠*/
//滑过事件
function hoverLi(){
	return{
		link:function(scope,element){
			$("#ysn_uls").on("hover","li",function(){
				$(this).addClass("red").siblings().removeClass("red")
			})
			$(".hover").on("hover","li",function(){
				$(this).addClass("red").siblings().removeClass("red")
			})
			$("#page").on("hover","li",function(){
				$(this).addClass("color").siblings().removeClass("color")
			})
			$(".sign").on("hover","div",function(){
				$(this).addClass("sign_red").siblings().removeClass("sign_red")
			})
			$(".nav_p").on("mouseover",function(){
				$(this).addClass("on_red")
			}).on("mouseout",function(){
				$(this).removeClass("on_red")
			})
		}
	}
}

//点击事件
function clickLi(){
	return{
		link:function(scope,element){
			$(".tab_uls").on("click","li",function(){
				$(this).addClass("bor").siblings().removeClass("bor")
			})
			function pagMouse(name1,name2){
				$(name1)
				.hover(function(){
					$(name2).on("mouseover",function(){
						$(this).show();
					})
					$(name2).show();
				},function(){
					$(name2).hide();
					$(name2).on("mouseout",function(){
						$(this).hide();
					})
				})
			}
			pagMouse(".pag",".page");
			pagMouse(".feats",".fea");

			$(".fea").on("click","li",function(){
				$(this).parent(".fea").hide();
			})

			$(".sign div")
				.on("mouseover",function(){
					var idx=$(this).index();
					$(this).parent(".sign").next(".y_show").find("div").eq(idx).css({"display":"block","z-index":100000000});
					$(".y_show").find("div").eq(idx).on("mouseover",function(){
						$(this).css({"display":"block"})
					})
				})
				.on("mouseout",function(){
					var idx=$(this).index();
					$(this).parent(".sign").next(".y_show").find("div").eq(idx).css("display","none");
					$(".y_show").find("div").eq(idx).on("mouseout",function(){
						$(this).css("display","none")
					})
				})

		}
	}
}

//图片轮播
function slideLi(){
	return{
		link:function(scope,element){
			$("#slidershow").carousel({
				interval:2000
			})
			$("#slidershow a.left").click(function(){
				$(".carousel").carousel("prev");
			})
			$("#slidershow a.right").click(function(){
				$(".carousel").carousel("next");
			})

			 var length, 
   			 currentIndex = 0, 
             interval, 
             hasStarted = false, //是否已经开始轮播 
             t = 3000; //轮播时间间隔 
		  length = $('.slider-panel').length; 
		  //将除了第一张图片隐藏 
		  $('.slider-panel:not(:first)').hide(); 
		  //将第一个slider-item设为激活状态 
		  $('.slider-item:first').addClass('slider-item-selected'); 
		  //隐藏向前、向后翻按钮 
		  $('.slider-page').hide(); 
		  //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
		  $('.slider-panel, .slider-pre, .slider-next').hover(function() { 
		   stop(); 
		   $('.slider-page').show(); 
		  }, function() { 
		   $('.slider-page').hide(); 
		   start(); 
		  }); 
		  $('.slider-item').hover(function(e) { 
		   stop(); 
		   var preIndex = $(".slider-item").filter(".slider-item-selected").index(); 
		   currentIndex = $(this).index(); 
		   play(preIndex, currentIndex); 
		  }, function() { 
		   start(); 
		  }); 
		  $('.slider-pre').unbind('click'); 
		  $('.slider-pre').bind('click', function() { 
		   pre(); 
		  }); 
		  $('.slider-next').unbind('click'); 
		  $('.slider-next').bind('click', function() { 
		   next(); 
		  }); 
		  /** 
		   * 向前翻页 
		   */
		  function pre() { 
		   var preIndex = currentIndex; 
		   currentIndex = (--currentIndex + length) % length; 
		   play(preIndex, currentIndex); 
		  } 
		  /** 
		   * 向后翻页 
		   */
		  function next() { 
		   var preIndex = currentIndex; 
		   currentIndex = ++currentIndex % length; 
		   play(preIndex, currentIndex); 
		  } 
		  /** 
		   * 从preIndex页翻到currentIndex页 
		   * preIndex 整数，翻页的起始页 
		   * currentIndex 整数，翻到的那页 
		   */
		  function play(preIndex, currentIndex) { 
		   $('.slider-panel').eq(preIndex).fadeOut(500) 
		    .parent().children().eq(currentIndex).fadeIn(1000); 
		   $('.slider-item').removeClass('slider-item-selected'); 
		   $('.slider-item').eq(currentIndex).addClass('slider-item-selected'); 
		  } 
		  /** 
		   * 开始轮播 
		   */
		  function start() { 
		   if(!hasStarted) { 
		    hasStarted = true; 
		    interval = setInterval(next, t); 
		   } 
		  } 
		  /** 
		   * 停止轮播 
		   */
		  function stop() { 
		   clearInterval(interval); 
		   hasStarted = false; 
		  } 
		  //开始轮播 
		  start(); 
				}
			}
		}
//滚动事件
function scrollLi(){
	return{
		link:function(scope,element){
			//一张图片的宽度
			var imgw=$(".y_content ul li").first().innerWidth();
			//追加图片的数量
			var num=3;
			//追加图片的个数
			var len=$(".y_content ul li").length;
			//先运动再追加
			$("#y_right").click(function(){
				//向前运动，把运动的追加最后面
				$(".y_content ul").animate({"marginLeft":-imgw*num},300,function(){
					$(".y_content ul li").slice(0,3).appendTo(".y_content ul");
					$(".y_content ul").css({"marginLeft":"0"},300)

				})
			})
			//先追加，在运动
			$("#y_left").click(function(){
				$(".y_content ul").css("marginLeft",-imgw*num).find("li").slice(len-num)
				.prependTo(".y_content ul");
				$(".y_content ul").animate({"marginLeft":"0"},300);
			})
			
		}
		
	}
}


angular.module("myapp")
		.directive("hoverImg",hoverImg)
		.directive("seamLess",seamLess)
		.directive("tabImg",tabImg)
		.directive("hoverLi",hoverLi)
	   	.directive("clickLi",clickLi)
	   	.directive("slideLi",slideLi)
	   	.directive("scrollLi",scrollLi)
	   	.directive("addColor",addColor)
	   	.directive("shopPing",shopPing)
	   	.directive("clickA",clickA)
	   	.directive("clickImg",clickImg)

	   