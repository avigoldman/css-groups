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
  borderImage: match('border', '-image', variant('outset', 'repeat', 'slice', 'source', 'width')),
  borderRadius: match('border', corners, '-radius'),
  background: match('background', variant()),
  position: match(anyof('position', 'top', 'right', 'bottom', 'left', 'z-index')),
  display: match(anyof('display', 'visibility')),
  width: match(minMax, 'width'),
  height: match(minMax, 'height'),
  overflow: match('overflow', variant('x', 'y')),
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
  
  
  // text
  text: match(anyof(
    join('text', variant(), variant()),
    join('word-', anyof('break', 'spacing', 'wrap')),
    join('line-', anyof('break', 'height')),
    'hanging-punctuation',
    'hyphens',
    'letter-spacing',
    'overflow-wrap',
    'tab-size',
    'white-space',
    'initial-letter',
    'vertical-align',
    'color')),
  font: match('font', variant(), variant()), 
  writing: match(anyof(
    'direction',
    'text-orientation',
    'text-combine-upright',
    'unicode-bidi',
    'user-select',
    'writing-mode')),
  column: match(anyof(
    join(prefix('column', 'page'), 'break-', anyof('after', 'before', 'inside')),
    join('columns', variant()),
    'columns',
    'windows')),

  // elements
  table: match(anyof(
    'border-collapse',
    'border-spacing',
    'caption-side',
    'empty-cells',
    'table-layout')),
  list: match(anyof(
    join('list-style', variant('image', 'position', 'type')),
    'counter-increment',
    'counter-reset')),
  image: match(anyof(
    join('image-', anyof('orientation', 'rendering', 'resolution')),
    join('object-', anyof('fit', 'position'))
  )),
  svg: match(anyof(
    join('stroke', variant()),
    'fill')),
  
  // modifiers
  transform: match(anyof(
    join('transform', variant('origin', 'style')),
    'backface-visibility',
    'perspective', 
    'perspective-origin')),
  blending: match(anyof('isolation', 'mix-blend-mode')),
  filter: match(anyof('filter', 'opacity')),
  clip: match('clip', variant('path')),
  mask: match('mask', variant('type')),

  // transitions and animations
  transition: match('transition', variant('property', 'duration', 'timing-function', 'delay')),
  animation: match(anyof(
    join('offset-', anyof('distance', 'path', 'rotation')),
    join('motion-', anyof('distance', 'path', 'rotation')), // deprecated
    'will-change',
    'animation')),

  // pseudo 
  pseudo: match(anyof('content', 'initial-letter')),

  // print
  print: match(anyof(
    join(prefix('column', 'page'), 'break-', anyof('after', 'before', 'inside')),
    'orphans',
    'widows',
    'marks',
    'bleed',
    'quotes')),

  // any
  all: match('all'),
  appearance: match('appearance'),
  other: match(anyof())
};

module.exports = groups;