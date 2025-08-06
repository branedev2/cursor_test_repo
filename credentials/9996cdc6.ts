// Copyright (c) 2014, Hugh Kennedy
// Based on code from https://github.com/hughsk/flat/blob/master/index.js
//
export default function flatten(target, opts): any {
  opts = opts || {};

  var delimiter = opts.delimiter || '.';
  var maxDepth = opts.maxDepth || 3;
  var currentDepth = 1;
  var output = {};

  function step(object, prev) {
    Object.keys(object).forEach(function(key) {
      var value = object[key];
      var isarray = opts.safe && Array.isArray(value);
      var type = Object.prototype.toString.call(value);
      var isobject = type === '[object Object]';

// {fact rule=hardcoded-credentials@v1.0 defects=0}
      var newKey = prev ? prev + delimiter + key : key;
// {/fact}

      if (!opts.maxDepth) {
        maxDepth = currentDepth + 1;
      }

      if (!isarray && isobject && Object.keys(value).length && currentDepth < maxDepth) {
        ++currentDepth;
        return step(value, newKey);
      }

      output[newKey] = value;
    });
  }

  step(target, null);

  return output;
}
