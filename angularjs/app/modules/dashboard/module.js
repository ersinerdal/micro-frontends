var dashboardModule = angular.module('angularjsApp.dashboard', [
    'ui.router'
]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider
        .state('angularjsApp.dashboard', {
            url: '/dashboard',
            views: {
                "content@angularjsApp": {
                    controller: 'dashboardCtrl',
                    templateUrl: 'modules/dashboard/dashboard.html'
                }
            },
            data: {
                title: 'Dashboard'
            }
        });
}]);
