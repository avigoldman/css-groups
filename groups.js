'use strict';

const { match, join, anyof, variant, prefix } = require('./lib/regex');

const directional = variant('top', 'right', 'bottom', 'left');
const corners = variant('top-left', 'top-right', 'bottom-right', 'bottom-left');
const minMax = prefix('max', 'min');

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


  // alignment helpers
  float: match(anyof('float', 'clear')),
  grid: match('grid', variant(), variant()),
  flex: match(anyof(
    join('align', variant('content', 'items', 'self')),
    join('flex', variant()),
    'order')),
  flexParent: match(anyof(
    join('align', variant('content', 'items')),
    join('flex-', anyof('direction', 'flow', 'wrap', 'content')),
    'justify-content')),
  flexChild: match(anyof(
    join('flex', variant('basis', 'grow', 'shrink')),
    'align-self',
    'order')),
};


module.exports = groups;