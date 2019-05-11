(function() {

    var app = angular.module('DashChat',['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $location) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'pages/dashboard/Dashboard.html',
            controller: 'DashController',
            controllerAs : 'DashCtrl'
        }).when('/chat', {
            templateUrl: 'pages/chat.html',
            controller: 'ChatController',
            controllerAs : 'chatCtrl'
        }).otherwise({
            redirectTo: '/chat'
        });
    }]);

})
