var advancesModule = angular.module('angularjsApp.advances', [
    'ui.router'
]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider
        .state('angularjsApp.advances', {
            url: '/advances',
            views: {
                "content@angularjsApp": {
                    controller: 'advancesCtrl',
                    templateUrl: 'modules/advances/advance_list/advance_list.html'
                }
            },
            data: {
                title: 'Credit'
            }
        });
}]);
