'use strict';

const _ = require('lodash');

const variant = function() {
  return `(-${anyof.apply(this, arguments)})?`;
};

const prefix = function() {
  return `(${anyof.apply(this, arguments)}-)?`;
}


const anyof = function() {
  let args = _.toArray(arguments);

  args = args.length > 0 ? args : ['[^-\\s]+'];

  return `(${_.join(args, '|')})`;
}

const join = function() {
  return _.join(_.toArray(arguments), '');
}

const match = function() {
  const p = join.apply(this, arguments);



  return new RegExp(`^${prefix('-webkit', '-moz', '-o', '-ms')}${p}$`, 'i')
};

module.exports = { match, join, anyof, variant, prefix };