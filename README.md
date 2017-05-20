# CSS groups

### A JavaScript object of regular expressions that match CSS properties grouped by category.

## Usage

```bash
npm i css-groups --save
```

```js
const groups = require('css-groups');

console.log(groups); // do your thang
```

## The groups

#### `groups.margin`
`margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`

#### `groups.padding`
`padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`

#### `groups.border`
`border`, `border-style`, `border-color`, `border-width`, `border-top`, `border-top-style`, `border-top-color`, `border-top-width`, `border-right`, `border-right-style`, `border-right-color`, `border-right-width`, `border-bottom`, `border-bottom-style`, `border-bottom-color`, `border-bottom-width`, `border-left`, `border-left-style`, `border-left-color`, `border-left-width`

#### `groups.borderImage`
`border-image`, `border-image-outset`, `border-image-repeat`, `border-image-slice`, `border-image-source`, `border-image-width`

#### `groups.borderRadius`
`border-radius`, `border-top-left-radius`, `border-top-right-radius`, `border-bottom-right-radius`, `border-bottom-left-radius`

#### `groups.background`
`background(-*)?`

#### `groups.position`
`position`, `top`, `right`, `bottom`, `left`, `z-index`

#### `groups.display`
`display`, `visibility`

#### `groups.width`
`width`, `max-width`, `min-width`

#### `groups.height`
`height`, `max-height`, `min-height`

#### `groups.overflow`
`overflow`, `overflow-x`, `overflow-y`

#### `groups.box`
`box-*(-*)?`

#### `groups.float`
`float`, `clear`

#### `groups.grid`
`grid(-*)?(-*)?`

#### `groups.flex`
`align`, `align-content`, `align-items`, `align-self`, `flex(-*)?`, `order`

#### `groups.flexParent`
`align`, `align-content`, `align-items`, `flex-direction`, `flex-flow`, `flex-wrap`, `flex-content`, `justify-content`

#### `groups.flexChild`
`flex`, `flex-basis`, `flex-grow`, `flex-shrink`, `align-self`, `order`

#### `groups.text`
`text(-*)?(-*)?`, `word-break`, `word-spacing`, `word-wrap`, `line-break`, `line-height`, `hanging-punctuation`, `hyphens`, `letter-spacing`, `overflow-wrap`, `tab-size`, `white-space`, `initial-letter`, `vertical-align`, `color`

#### `groups.font`
`font(-*)?(-*)?`

#### `groups.writing`
`direction`, `text-orientation`, `text-combine-upright`, `unicode-bidi`, `user-select`, `writing-mode`

#### `groups.column`
`break-after`, `break-before`, `break-inside`, `column-break-after`, `column-break-before`, `column-break-inside`, `page-break-after`, `page-break-before`, `page-break-inside`, `columns(-*)?`, `columns`, `windows`

#### `groups.table`
`border-collapse`, `border-spacing`, `caption-side`, `empty-cells`, `table-layout`

#### `groups.list`
`list-style`, `list-style-image`, `list-style-position`, `list-style-type`, `counter-increment`, `counter-reset`

#### `groups.image`
`image-orientation`, `image-rendering`, `image-resolution`, `object-fit`, `object-position`

#### `groups.svg`
`stroke(-*)?`, `fill`

#### `groups.transform`
`transform`, `transform-origin`, `transform-style`, `backface-visibility`, `perspective`, `perspective-origin`

#### `groups.blending`
`isolation`, `mix-blend-mode`

#### `groups.filter`
`filter`, `opacity`

#### `groups.clip`
`clip`, `clip-path`

#### `groups.mask`
`mask`, `mask-type`

#### `groups.transition`
`transition`, `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`

#### `groups.animation`
`offset-distance`, `offset-path`, `offset-rotation`, `motion-distance`, `motion-path`, `motion-rotation`, `will-change`, `animation`

#### `groups.pseudo`
`content`, `initial-letter`

#### `groups.print`
`break-after`, `break-before`, `break-inside`, `column-break-after`, `column-break-before`, `column-break-inside`, `page-break-after`, `page-break-before`, `page-break-inside`, `orphans`, `widows`, `marks`, `bleed`, `quotes`

#### `groups.all`
`all`

#### `groups.appearance`
`appearance`

#### `groups.other`
all other styles (`*`)

(This list was generated via `npm run docs`)