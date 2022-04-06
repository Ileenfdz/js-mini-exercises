const monkeyCount = require('../scripts/countMonkey.js')

describe('Example Test', function() {
 test('Should give true', function() {
    expect((monkeyCount(5))).toEqual([1, 2, 3, 4, 5]);
  });
  test('Should give true', function() {
    expect((monkeyCount(3))).toEqual([1, 2, 3]);
  });
  test('Should give true', function() {
    expect((monkeyCount(9))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('Should give true', function() {
    expect((monkeyCount(10))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('Should give true', function() {
    expect((monkeyCount(20))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});