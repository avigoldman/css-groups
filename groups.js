'use strict';

const { match, join, anyof, variant, prefix } = require('./lib/regex');

const directional = variant('top', 'right', 'bottom', 'left');
const corners = variant('top-left', 'top-right', 'bottom-right', 'bottom-left');

const groups = {
  // boxes
  margin: match('margin', directional),
  padding: match('padding', directional),
  border: match('border', directional, variant('style', 'color', 'width')),
  border: match('border-top', variant('style', 'color', 'width')),
  borderImage: match('border', '-image', variant('outset', 'repeat', 'slice', 'source', 'width')),
  borderRadius: match('border', corners, '-radius'),
  background: match('background', variant()),
  position: match(anyof('position', 'top', 'right', 'bottom', 'left', 'z-index')),
  display: match(anyof('display', 'visibility')),
  width: match(minMax, 'width'),
  height: match(minMax, 'height'),
  overflow: match('overflow', variant('x', 'y')),
  shadow: match(prefix('box', 'text'), 'shadow'),
  box: match('box-', anyof(), variant()),
};


module.exports = groups;