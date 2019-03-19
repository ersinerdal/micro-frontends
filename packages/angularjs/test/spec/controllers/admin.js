describe('Admin Controller', function () {

    var scope, ctrl,httpBackend,ENV,DEF,_adminService,window;

    beforeEach(module('mateliApp'));

    beforeEach(inject(function (_$rootScope_, $controller,$q, _$timeout_,$injector,_ENV_,_DEF_,_$window_) {

        _adminService = jasmine.createSpyObj('adminService', ['getUser','createUser','updateUser','resendPassword']);
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        $timeout = _$timeout_;
        httpBackend  = $injector.get('$httpBackend');
        DEF = _DEF_;
        window = _$window_;

        jasmine.getJSONFixtures().fixturesPath='base/test/mock';

        _adminService.getUser.and.returnValue($q.when(getJSONFixture('users.json')));
        _adminService.createUser.and.returnValue($q.when([200, ""]));
        _adminService.updateUser.and.returnValue($q.when([200, ""]));
        _adminService.resendPassword.and.returnValue($q.when([200, ""]));

        ctrl = $controller('AdminCtrl', {
            $scope: scope,
            adminService: _adminService
        });

        httpBackend.when('GET', 'modules/authorization/login/login.html').respond(function() {
            return [200, ""];
        });

    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation ();
    });

    it('should set variables', function() {
        expect(scope.gridOptions).toBeDefined();
        expect(scope.formData).toEqual({ startElement: 0, numElements: 20 });
        expect(scope.createUserFormData).toEqual({ role: 'cam', status: 'active' });
        expect(scope.updateUserFormData).toEqual({});
        expect(scope.currentPage).toEqual(1);
        expect(scope.pageSize).toEqual(DEF.pageSizes[0]);
    });

    it('should have a AdminCtrl controller', function() {
        expect('mateliApp.AdminCtrl').toBeDefined();
    });

    it('should get user list', function() {
        scope.getUser(scope.currentPage);
        $timeout.flush();
        expect(scope.gridOptions.data.length).toEqual(5);
    });

    it('should create a new user', function() {
        scope.createUserFormData = { role: 'cam', status: 'active', fullname:'ersin', username:"ersin.erdal@mateli.com"};
        scope.createUser();
        $timeout.flush();
        expect(scope.creating).toEqual(false);
    });

    it('should update user', function() {
        scope.updateUser();
        $timeout.flush();
        expect(scope.updating).toEqual(false);
    });

    it('should do filter', function() {
        spyOn(scope, "getUser");
        scope.doFilter();
        $timeout.flush();
        expect(scope.getUser).toHaveBeenCalled();
    });

    it('should clear filter', function() {
        spyOn(scope, "getUser");
        scope.clearFilter();
        $timeout.flush();
        expect(scope.formData).toEqual({});
        expect(scope.getUser).toHaveBeenCalled();
    });

    it('should resend password', function() {
        spyOn($, "SmartMessageBox").and.returnValue("Yes");
        scope.resendPassword();
        $timeout.flush();
        expect($.SmartMessageBox).toHaveBeenCalled();
    });

    it('should open modal', function() {
        spyOn($.fn, "modal")
        scope.openModal();
        $timeout.flush();
        expect($('#modal_uptade_user').modal).toHaveBeenCalled();
    });

});
