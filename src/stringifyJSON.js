// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
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
    var objBrace = '{';
    for (var i = 0; i < objKeys.length; i++) {
      if (obj[objKeys[i]] === undefined || objKeys[i] === 'undefined' || typeof obj[objKeys[i]] === 'function') {
        continue;
      }
      if (((objKeys.length === 1) || (i === objKeys.length - 1)) && objKeys[i] !== undefined) {
        objBrace += stringifyJSON(objKeys[i]) + ':' + stringifyJSON(obj[objKeys[i]]);
      } else {
        objBrace += stringifyJSON(objKeys[i]) + ':' + stringifyJSON(obj[objKeys[i]]) + ',';
      }
    }
    return objBrace + '}';
  }
};
