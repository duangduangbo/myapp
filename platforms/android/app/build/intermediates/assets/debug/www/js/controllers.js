angular.module('app.controllers', [])
  
.controller('page1Ctrl', ['$scope', '$stateParams' ,'$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
console.log('page1');
$scope.onTrack=function(){
    $state.go("page4");
    console.log('page1');
}
var map = new BMap.Map("allmap");

initMap();


function initMap(){
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,11);//初始化地图
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
			BMAP_NORMAL_MAP,
			BMAP_HYBRID_MAP
		]}));	//地图类型
		map.addControl(new BMap.NavigationControl());//平移缩放控件
		map.addControl(new BMap.ScaleControl());    //比例尺
		map.addControl(new BMap.OverviewMapControl()); //缩略地图
		map.addControl(new BMap.GeolocationControl()); //定位
		

//sdk定位
var geolocation = new BMap.Geolocation();
geolocation.enableSDKLocation();// 开启SDK辅助定位
geolocation.getCurrentPosition(function(r){
	console.log(r.coords);
	if(this.getStatus() == BMAP_STATUS_SUCCESS){
		var mk = new BMap.Marker(r.point);
		map.addOverlay(mk);//设置覆盖物
		map.panTo(r.point);//设置这个点为地图中心
		// alert('您的位置：'+r.point.lng+','+r.point.lat);
		
		var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
		var gc = new BMap.Geocoder();
		gc.getLocation(point, function(rs){
		   var addComp = rs.addressComponents;
		    console.log(rs.address);//地址信息
		   alert(rs.address);//弹出所在地址
		});
	}
	else {
		alert('failed'+this.getStatus());
	}        
},{enableHighAccuracy: true});
}
}])
   
.controller('page2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
console.log('page2');

}])
   
.controller('page3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

console.log('page3');
}])
   
.controller('page4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
console.log('page4');

}])
 