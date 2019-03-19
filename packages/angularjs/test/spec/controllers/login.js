describe('Login Controller', function () {

    var scope, ctrl,httpBackend,ENV,DEF,_authorizationService,window,state;

    beforeEach(module('mateliApp'));

    beforeEach(inject(function (_$rootScope_, $controller,$q, _$timeout_,$injector,_ENV_,_DEF_,_$window_,_$state_) {
        _authorizationService = jasmine.createSpyObj('authorizationService', ['login']);
        state = jasmine.createSpyObj('$state', ['go']);

        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $timeout = _$timeout_;
        httpBackend  = $injector.get('$httpBackend');
        ENV = _ENV_;
        DEF = _DEF_;
        window = _$window_;

        jasmine.getJSONFixtures().fixturesPath='base/test/mock';

        _authorizationService.login.and.returnValue($q.when(
            getJSONFixture('user.json')
        ));

        ctrl = $controller('loginCtrl', {
            $scope: scope,
            $state:state,
            authorizationService: _authorizationService
        });

        httpBackend.when('GET', 'modules/authorization/login/login.html').respond(function() {
            return [200, ""];
        });
        httpBackend.when('GET', 'modules/shared/layout.html').respond(function() {
            return [200, ""];
        });

    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation ();
    });


    it('should have a loginCtrl controller', function() {
        expect('mateliApp.loginCtrl').toBeDefined();
    });

    it('should logs a user in and redirect', function() {
        scope.doLogin();
        $timeout.flush();
        var user = angular.fromJson(window.localStorage.getItem('user'));
        expect(user.CustomerId).toBe(2);
        expect(state.go).toHaveBeenCalled();
    });

});
