const center = require('../scripts/centerYourself.js')

describe("Tests suite", function() {
  test('Should give " a " ', function() {
    expect(center("a", 3, ' ')).toEqual(" a ");
  });
  test('Should give "___" ', function() {
    expect(center("", 3, '_')).toEqual("___");
  });
  test('Should give "____abc___" ', function() {
    expect(center("abc", 10, '_')).toEqual("____abc___");
  });
  test('Should give "____abc___" ', function() {
    expect(center("____abc___", 10, '_')).toEqual("____abc___");
  });
  test('Should give "abcdefg" ', function() {
    expect(center("abcdefg", 2, ' ')).toEqual("abcdefg");
  });
});