// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // console.log('obj is', obj);
  // console.log('typeof obj is', typeof obj);

  if (obj === undefined || typeof obj === 'function') {
    return undefined;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return (obj === true) ? 'true' : 'false';
  }
  if (typeof obj === 'number') {
    return '' + obj + '';
  }
  if (typeof obj === 'string') {
    var result = '\"' + obj + '\"';
    // console.log('result is', result, 'JSON.stringified is', JSON.stringify(obj));
    return result;
  }
  if (Array.isArray(obj)) {
    var result = '[';
    for (var i = 0; i < obj.length; i++) {
      if (obj.length === 1 || (i === obj.length - 1)) {
        result += stringifyJSON(obj[i]);
      } else {
        result += stringifyJSON(obj[i]) + ',';
      }
    }
    return result + ']';
  }
  if (obj.constructor === Object) {
    var objKeys = Object.keys(obj);
    // console.log('objKeys is', objKeys);
    var objBrace = '{';
    for (var i = 0; i < objKeys.length; i++) {
      if (((objKeys.length === 1) || (i === objKeys.length - 1)) && objKeys[i] !== undefined) {
        objBrace += stringifyJSON(objKeys[i]) + ':' + stringifyJSON(obj[objKeys[i]]);
      } else {
        objBrace += stringifyJSON(objKeys[i]) + ':' + stringifyJSON(obj[objKeys[i]]) + ',';
      }
    }
    return objBrace + '}';
  }
};

// console.log('NULL');
// console.log('null stringified is', stringifyJSON(null), "and it is equal to JSON.stringify():", stringifyJSON(null) === JSON.stringify(null));
//
// console.log('******************');
//
// console.log('BOOLEAN');
// console.log('true stringified is', stringifyJSON(true), "and it is equal to JSON.stringify():", stringifyJSON(true) === JSON.stringify(true));
// console.log('false stringified is', stringifyJSON(false), "and it is equal to JSON.stringify():", stringifyJSON(false) === JSON.stringify(false));
//
// console.log('******************');

// var word = 'this is "my" string';
// var word2 = "this is \"my\" string";
//
// console.log('word is', word);
// console.log('JSON.stringify of word is', JSON.stringify(word));
// console.log('word2 is', word2);
// console.log('JSON.stringify of word2 is', JSON.stringify(word2));
//
// console.log('STRINGS');
// console.log("1", stringifyJSON('hello') === JSON.stringify('hello'));
// console.log("2", stringifyJSON('"hello"') === JSON.stringify('"hello"')); //RETURNS FALSE: edge case for special characters as JSON doesn't recognize the outer single or double quotation marks, but needs to escape out of the inner double quotation marks.
// console.log("3", stringifyJSON("hello") === JSON.stringify("hello"));
// console.log("4", stringifyJSON("'hello'") === JSON.stringify("'hello'"));

console.log('******************');

console.log('OBJECTS');
console.log('Object1', stringifyJSON({a: 1, b: 2}) === JSON.stringify({a: 1, b: 2}));
console.log('Object1', stringifyJSON({undefined}) === JSON.stringify({undefined}));

var objectt = { undefined: undefined, functions: function (a, b) {
  return a * b;
}};

var objectt2 = { undefined: undefined};

var love = function(a, b) {
  return a * b;
};
