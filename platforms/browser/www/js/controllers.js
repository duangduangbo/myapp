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
var point = new BMap.Point(116.331398,39.897445);
map.centerAndZoom(point,12);

//var map = new BMap.Map("allmap");    // 创建Map实例
//
//map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);  // 初始化地图,设置中心点坐标和地图级别
//map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
//map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
//map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
//console.log(map);
//document.getElementById("getPosition").addEventListener("click", getPosition); 　　//引用手机GPS定位
//function getPosition() {
//  var options = {
//    enableHighAccuracy: true,
//    maximumAge: 3600000
//  }
//   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
//    function onSuccess(position) {
//      var lat = position.coords.latitude;
//      var long = position.coords.longitude
//      alert('Latitude: ' + position.coords.latitude + '\n'+
//        'Longitude: ' + position.coords.longitude +'\n');
//      map.centerAndZoom(new BMap.Point(lat, long), 7);
//    };
//    function onError(error) {
//      alert('无法获取地理位置');
//    }
//  }
//var geolocation = new BMap.Geolocation();
//geolocation.getCurrentPosition(function(r){
//	if(this.getStatus() == BMAP_STATUS_SUCCESS){
//		var mk = new BMap.Marker(r.point);
//		map.addOverlay(mk);
//		map.panTo(r.point);
//		alert('您的位置：'+r.point.lng+','+r.point.lat);
//	}
//	else {
//		alert('failed'+this.getStatus());
//	}
//});
var geolocation = new BMap.Geolocation();
// 开启SDK辅助定位
geolocation.enableSDKLocation();
geolocation.getCurrentPosition(function(r){
	if(this.getStatus() == BMAP_STATUS_SUCCESS){
		var mk = new BMap.Marker(r.point);
		map.addOverlay(mk);
		map.panTo(r.point);
		alert('您的位置：'+r.point.lng+','+r.point.lat);
	}
	else {
		alert('failed'+this.getStatus());
	}
});
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
 