'use strict';

const _ = require('lodash');

const addPiece = (piece, results) => {
  return _.map(results, (result) => {
    return `${result}${piece}`;
  });
}

const expand = function(args) {
  let results = [''];

  _.each(args, (piece) => {
    if (_.isString(piece)) {
      results = addPiece(piece, results);
    }

    if (_.isArray(piece) || _.isObject(piece)) {
      let pieces = _.toArray(piece);
      let newResults = [];

      _.each(results, (result) => {
        _.each(pieces, (piece) => {
          newResults.push(`${result}${piece}`);
        });
      });

      results = newResults;
    }
  });

  return results;
}

const match = function() {
  const args = _.toArray(arguments);

  if (args.length === 1 && _.isArray(args[0])) {
    return args[0];
  }

  return expand(args);
} 

const anyof = function() {
  const args = _.toArray(arguments);
  
  if (args.length === 0) {
    return ['*'];
  }

  return _.toArray(arguments);
};

const variant = function() {
  const args = _.toArray(arguments);
  
  if (args.length === 0) {
    return ['(-*)?'];
  }

  const variants = _.map(args, (val) => {
    return `-${val}`;
  });

  variants.unshift(''); // add a blank one since its optional

  return variants;
};

const prefix = function() {
  const args = _.toArray(arguments);
  
  if (args.length === 0) {
    return ['(*-)?'];
  }

  const prefixes = _.map(args, (val) => {
    return `${val}-`;
  });

  prefixes.unshift('');  // add a blank one since its optional

  return prefixes;
};

const join = function() {
  return expand(_.toArray(arguments));
}

module.exports = { match, join, anyof, variant, prefix };
