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
 