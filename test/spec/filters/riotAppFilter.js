'use strict';

describe('Filter: riotAppFilter', function () {

  // load the filter's module
  beforeEach(module('riotApp'));

  // initialize a new instance of the filter before each test
  var riotAppFilter;
  beforeEach(inject(function ($filter) {
    riotAppFilter = $filter('riotAppFilter');
  }));

  it('should return the input prefixed with "riotAppFilter filter:"', function () {
    var text = 'angularjs';
    expect(riotAppFilter(text)).toBe('riotAppFilter filter: ' + text);
  });

});
