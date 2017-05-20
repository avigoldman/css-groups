'use strict';

const toArray = function(obj) {
  let arr = [];
  for(var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(obj[prop]);
    }
  }

  return arr;
}

const variant = function() {
  return `(-${anyof.apply(this, arguments)})?`;
};

const prefix = function() {
  return `(${anyof.apply(this, arguments)}-)?`;
}


const anyof = function() {
  let args = toArray(arguments);

  args = args.length > 0 ? args : ['[^-\\s]+'];

  return `(${args.join('|')})`;
}

const join = function() {
  return toArray(arguments).join('');
}

const match = function() {
  const p = join.apply(this, arguments);



  return new RegExp(`^${prefix('-webkit', '-moz', '-o', '-ms')}${p}$`, 'i')
};

module.exports = { match, join, anyof, variant, prefix };