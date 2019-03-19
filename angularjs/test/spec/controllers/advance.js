describe('Advance Controller', function () {

    var scope, ctrl,httpBackend,ENV,DEF,customersService,advancesService,$stateParams;

    beforeEach(module('mateliApp'));

    beforeEach(inject(function (_$rootScope_, $controller,$q, _$timeout_,$injector,_ENV_,_DEF_,_$window_,_$stateParams_) {

        _customersService = jasmine.createSpyObj('customersService', ['getCustomer','card','cardUpdate']);
        _advancesService = jasmine.createSpyObj('advancesService', ['getAdvance','bankDetails','getAdvanceStatus','getTransactions','updateAdvanceStatus','addTransactions']);

        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $timeout = _$timeout_;
        $httpBackend  = $injector.get('$httpBackend');
        DEF = _DEF_;
        $window = _$window_;
        $stateParams = _$stateParams_

        jasmine.getJSONFixtures().fixturesPath='base/test/mock';

        _advancesService.getAdvance.and.returnValue($q.when(getJSONFixture('advance.json')));
        _advancesService.bankDetails.and.returnValue($q.when(getJSONFixture('bank.json')));
        _advancesService.getAdvanceStatus.and.returnValue($q.when(getJSONFixture('advance_status.json')));
        _advancesService.getTransactions.and.returnValue($q.when(getJSONFixture('transactions.json')));

        _customersService.getCustomer.and.returnValue($q.when(getJSONFixture('user.json')));
        _customersService.card.and.returnValue($q.when(getJSONFixture('card.json')));

        ctrl = $controller('advanceCtrl', {
            $scope: $scope,
            customersService: _customersService,
            advancesService:_advancesService
        });

        $httpBackend.when('GET', 'modules/authorization/login/login.html').respond(function() {
            return [200, ""];
        });

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation ();
    });

    it('should set variables', function() {
        expect($scope.advance).toEqual(false);
        expect($scope.card).toEqual(false);
        expect($scope.bank).toEqual(false);
        expect($scope.isAdvanceExist).toEqual(false);
        expect($scope.loading).toEqual(true);
        expect($scope.adding).toEqual(false);
        expect($scope.updating).toEqual(false);
    });

    //it('should have a AdminCtrl controller', function() {
    //    expect('mateliApp.AdminCtrl').toBeDefined();
    //});
    //
    //it('should get user list', function() {
    //    scope.getUser(scope.currentPage);
    //    $timeout.flush();
    //    expect(scope.gridOptions.data.length).toEqual(5);
    //});
    //
    //it('should create a new user', function() {
    //    scope.createUserFormData = { role: 'cam', status: 'active', fullname:'ersin', username:"ersin.erdal@mateli.com"};
    //    scope.createUser();
    //    $timeout.flush();
    //    expect(scope.creating).toEqual(false);
    //});
    //
    //it('should update user', function() {
    //    scope.updateUser();
    //    $timeout.flush();
    //    expect(scope.updating).toEqual(false);
    //});
    //
    //it('should do filter', function() {
    //    spyOn(scope, "getUser");
    //    scope.doFilter();
    //    $timeout.flush();
    //    expect(scope.getUser).toHaveBeenCalled();
    //});
    //
    //it('should clear filter', function() {
    //    spyOn(scope, "getUser");
    //    scope.clearFilter();
    //    $timeout.flush();
    //    expect(scope.formData).toEqual({});
    //    expect(scope.getUser).toHaveBeenCalled();
    //});
    //
    //it('should resend password', function() {
    //    spyOn($, "SmartMessageBox").and.returnValue("Yes");
    //    scope.resendPassword();
    //    $timeout.flush();
    //    expect($.SmartMessageBox).toHaveBeenCalled();
    //});
    //
    //it('should open modal', function() {
    //    spyOn($.fn, "modal")
    //    scope.openModal();
    //    $timeout.flush();
    //    expect($('#modal_uptade_user').modal).toHaveBeenCalled();
    //});

});
