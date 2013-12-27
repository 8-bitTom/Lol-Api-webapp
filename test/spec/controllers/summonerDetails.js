'use strict';

describe('Controller: SummonerdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('riotApp'));

  var SummonerdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummonerdetailsCtrl = $controller('SummonerdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
