var sharedModule = angular.module('angularjsApp.shared', [
    'ui.router'
]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('angularjsApp', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'modules/shared/layout.html',
                    controller: 'MainCtrl'
                }
            }
        })
    $urlRouterProvider.otherwise('/dashboard');
}]);
