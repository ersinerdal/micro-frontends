var customersModule = angular.module('angularjsApp.customers', [
    'ui.router'
]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider
        .state('angularjsApp.customers', {
            url: '/customers',
            views: {
                "content@angularjsApp": {
                    controller: 'customersCtrl',
                    templateUrl: 'modules/customers/customer_list/customer_list.html?v=qwdwad'
                }
            },
            data: {
                title: 'Clients'
            }
        })
}]);
