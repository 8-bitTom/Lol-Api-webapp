'use strict';

describe('Controller: AllchampsCtrl', function () {

  // load the controller's module
  beforeEach(module('riotApp'));

  var AllchampsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllchampsCtrl = $controller('AllchampsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
