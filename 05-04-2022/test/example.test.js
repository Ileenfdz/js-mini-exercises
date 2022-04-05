const exampleFunction = require('../scripts/example.js')

describe('Example Test', function() {
 test('Should give true', function() {
    expect(exampleFunction()).toEqual(true);
  });
});