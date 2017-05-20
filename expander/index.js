'use strict';

const _ = require('lodash');
const proxyquire = require('proxyquire');

// move any nested styles to the top array
const flatten = function(groups) {
  return _.mapValues(groups, (group) => {
    let newGroup = [];
    
    _.each(group, (prop, index) => {
      if (_.isArray(prop)) {
        newGroup = newGroup.concat(prop)
      } 
      else {
        newGroup.push(prop);
      }
    });

    return newGroup;
  });
}


const groups = flatten(proxyquire('../groups', {
  './lib/regex': _.assign(require('../lib/regex'), require('./regex'))
}));

let output = '';

_.each(groups, (props, key) => {
  output += `#### \`groups.${key}\`\n`;
  output += _.map(props, (prop) => `\`${prop}\``).join(', ');
  output += '\n\n';
});

require('fs').writeFileSync('./all.md', output);