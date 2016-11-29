function detail2($scope){
	/*点击切换*/
	$scope.menuState1={show: true}
	$scope.toggleMenu1=function(){
		$scope.menuState1={show:false}
		$scope.toggleMenu1=function(){$scope.menuState1.show=!$scope.menuState1.show}
	}
	$scope.toggleMenu2=function(){
		$scope.menuState2={show:false}
		$scope.toggleMenu2=function(){$scope.menuState2.show=!$scope.menuState2.show}
	}
	$scope.toggleMenu3=function(){
		$scope.menuState3={show:false}
		$scope.toggleMenu3=function(){$scope.menuState3.show=!$scope.menuState3.show}
	}
	//表单提交
	$scope.data={};
	$scope.getData=function(){
		var newdl='<dl class="row x_des_redl">'
				+'<dt class="col-md-2 col-sm-2 col-xs-2">'
					+'<img src="img/x_user1.png" alt="" class="col-md-12 col-sm-12 col-xs-12">'
				+'</dt>'
				+'<dd class="col-md-10 col-sm-10 col-xs-10 x_des_redd">'
					+'<div class="row">'
						+'<b class="col-md-4">'+$scope.data.name+'</b>'
						+'<span class="col-md-8">Feb 16th,2015 10:14 am</span>'
					+'</div>'
					+'<p><span class="staron1">★</span><span class="staron1">★</span><span class="staron1">★</span><span>★</span><span>★</span></p>'
					+'<p>'+$scope.data.message+'</p>'
				+'</dd>'
			+'</dl>';
		$("#dl_mes").append(newdl);
		$scope.data={};
	}
}

function x_index($scope,$http){
	$http.get("data/product.json").success(function(response){
		$scope.product=response.product;
		$scope.product2=response.product2;
		$scope.product3=response.product3;
	});
	
}
function render_1($scope,$location){
	$scope.jsonLeft=[
				{
				"img":"img/ban1.png",
				"title":"Brand new theme released one",
				"list":["Feb 11, 2015","By admin","Design , Web","4 Comments"],
				"paragraph":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				}
				,
				{
				"img":"img/ban2.png",
				"title":"Brand new theme released two",
				"list":["Feb 11, 2015","By admin","Design , Web","4 Comments"],
				"paragraph":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				},
				{
				"img":"img/ban3.png",
				"title":"Brand new theme released three",
				"list":["Feb 11, 2015","By admin","Design , Web","4 Comments"],
				"paragraph":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				}
	]		
	$scope.jsonRight=[
				{
					"title":"About our company",
					"content":["First Topic Link1","Second Topic Link","Third Topic Link"]	
				}/*,
				{
					"title":"Our Mission & Vision",
					"content":["First Topic Link2","Second Topic Link","Third Topic Link"]
				},
				{
					"title":"Clients and case studies",
					"content":["First Topic Link3","Second Topic Link","Third Topic Link"]
				}*/
	]
	$scope.jsonDl=[
		{
			"img":"img/r1.png",
			"title":"New blog post",
			"time":"10 comments"
		},
		{
			"img":"img/r2.png",
			"title":"New blog post",
			"time":"10 comments"
		},
		{
			"img":"img/r3.png",
			"title":"New blog post",
			"time":"10 comments"
		}
	]
	$scope.flag=false;
         $scope.showOl=function(){
         	  // e.preventDefault();
         	  //获取当前点击的元素
         	  /*var idx=$('.ulList>li').index();
         	  console.log(idx)
         	  $(this).find('ol').css('display','block');*/
              $scope.flag=!$scope.flag;
         }	
    $scope.your_name=function(name){
    	
    	//console.log(name)
    }
   $scope.your_email=function(email){
    	//console.log(email)
    }
   $scope.your_msg=function(msg){
    	//console.log(msg)
   }
   $scope.msg_sub=function(){
   		if(!$scope.name || !$scope.email || !$scope.msg){
   			return false
   		}else{
   			var newDl='<dl>'+
							'<dt>'+
								'<img src="img/r4.png">'+
							'</dt>'+
							'<dd>'+
								'<b>'+$scope.name+'</b>'+
								'<p>'+$scope.msg+'</p>'+
								'<span>Feb 26th, 2015 12:25 am</span>'+
							'</dd>'+
					  '</dl>'
			$(".comments").append($(newDl));
   		}		
   }
}
angular.module("myapp")
	    .controller('render_1',render_1)//控制器
	    .controller("detail2",detail2)
		.controller("x_index",x_index)
		