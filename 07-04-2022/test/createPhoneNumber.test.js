const createPhoneNumber = require('../scripts/createPhoneNumber.js')

describe('Example Test', function() {
 test('Should give true', function() {
    expect((createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))).toEqual("(123) 456-7890");
  });
  test('Should give true', function() {
    expect((createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))).toEqual("(111) 111-1111");
  });
  test('Should give true', function() {
    expect((createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))).toEqual("(123) 456-7890");
  });
});