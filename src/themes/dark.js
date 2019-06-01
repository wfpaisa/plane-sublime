const $ = require('./color')

const common = {
  accent: $`007EFF`,
  bg: $.base`2F333D`,
  fg: $`F8F8F2`,
  ui: $`818798`,
  editor: $`1F2228`
}

const syntax = {
  tag: $`FF87BF`,       // Pink
  func: $`71F2C3`,      // Green
  entity: $`A0DFFF`,    // Blue
  string: $`FFF6B2`,    // Yellow
  regexp: $`B59DDB`,    // Purple
  markup: $`A0DFFF`,    // Blue
  keyword: $`FF87BF`,   // Pink
  special: $`B59DDB`,   // Purple
  comment: $`69767D`,   // Comment
  constant: $`FFEE99`,  // Yellow
  operator: $`F29668`,  // Orange
  error: $`F8456F`,     // Red
  dif:  $`F8F8F2`       // Fg
}

const ui = {
  panel: {
    bg: common.ui.fade7,
    bglighten: common.ui.fade20,
    shadow: common.bg.darken60,
    shadowlight: common.bg.darken20,
    border: common.bg.darken80,
    row: common.ui.fade20
  },
  icon: common.ui.fade55,
  scrollbar: { puck: $`FFFFFF` },
  separator: common.bg.darken36,
  minimap: common.fg.darken50,
  opacity: 1.0
}

const editor = {
  line: common.bg.darken16,
  gutter: common.ui.fade40,
  selection: {
    bg: common.fg.fade5,
    inactive: common.fg.fade2,
    border: common.fg.fade5
  },
  guide: {
    stack: common.ui.fade30,
    active: common.ui.fade70,
    normal: common.ui.fade30
  },
}

module.exports = {
  theme: 'dark',
  common,
  syntax,
  ui,
  editor
}
