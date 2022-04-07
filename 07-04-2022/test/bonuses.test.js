const bonus = require('../scripts/bonuses.js')

describe('Example Test', function() {
 test('Should give true', function() {
    expect((bonus([22, 3, 15], 18228))).toEqual([1860, 13640, 2728]);
  });
  test('Should give true', function() {
    expect((bonus([8, 14, 11], 23541))).toEqual([10241, 5852, 7448]);
  });
  test('Should give true', function() {
    expect((bonus([8, 20, 17], 25281))).toEqual([13515, 5406, 6360]);
  });
  test('Should give true', function() {
    expect((bonus([25, 22, 15, 22, 22], 5213))).toEqual([858, 975, 1430, 975, 975]);
  });
  test('Should give true', function() {
    expect((bonus([10, 11, 30, 12, 17, 23, 30, 11, 17, 10], 1788210))).toEqual([258060, 234600, 86020, 215050, 151800, 112200, 86020, 234600, 151800, 258060]);
  });
});