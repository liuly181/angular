/*function func($http,$rootScope,$location){
	function getData(data){
		console.log(data)//Object {name: "ljx", sex: "男"}
		var str="",arr=[];
		for(i in data){
			str=i+"="+data[i];
			arr.push(str);
		}
		str1=arr.join("&");
		return str1;
	} 
	this.getInfo=function(url,data,method){
		method=method.toUpperCase();
		if(method=="GET"){
			var data=getData(data);
			$http.get(""+url+"?"+data+"");
		}else{
			$http.post(url);
		}
	}
}
angular.module("myapp").service("apiService",func)*/

angular.module("myapp").service("apiService",function($rootScope,$http,$location){
	this.getInfo = function(url , data ,method){
		method = method.toUpperCase();
		var str = "";
		var arr = [];
		for(i in data){
			str+=i+"="+data[i];
			arr.push(str);
		}
		data = arr.join("&");
		//请求
		if(method = "GET"){
			return $http.get(url+"?"+data);
		}
		else{
			return $htto.post(url+"?"+data);
		}
	}
})