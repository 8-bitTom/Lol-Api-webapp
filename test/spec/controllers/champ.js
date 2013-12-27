'use strict';

describe('Controller: ChampCtrl', function () {

  // load the controller's module
  beforeEach(module('riotApp'));

  var ChampCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChampCtrl = $controller('ChampCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
