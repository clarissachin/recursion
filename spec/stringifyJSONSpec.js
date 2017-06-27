// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      console.log('test is', test);
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      console.log('obj is', obj);
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
});
