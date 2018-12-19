angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.question', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/question.html',
        controller: 'questionCtrl'
      }
    }
  })

  .state('tabsController.movement', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/movement.html',
        controller: 'movementCtrl'
      }
    }
  })

  .state('tabsController.admin', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/admin.html',
        controller: 'adminCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});