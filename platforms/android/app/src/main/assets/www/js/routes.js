angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/add',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
//    abstract:true
  })

  .state('page2', {
    url: '/show',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/show',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page4', {
    url: '/shezhi',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

$urlRouterProvider.otherwise('/add')


});