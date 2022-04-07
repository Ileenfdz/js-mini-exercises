const digitalRoot = require('../sumOfDigitsDigitalRoot.js')

describe('Example Test', function() {
 test('Should give true', function() {
    expect((digitalRoot(16))).toEqual(7);
  });
  test('Should give true', function() {
    expect((digitalRoot(456))).toEqual(6);
  });
});