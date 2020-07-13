export const Symbols = {
  dflt: {sym: '', txt: '', math: ''},
  mult: {sym: '\xD7', txt: '\xD7', math: '*'},
  div:  {sym: '\xF7', txt: '\xF7', math: '/'},
  add:  {sym: '+', txt: '+', math: '+'},
  sub:  {sym: '-', txt: '-', math: '-'},
  equal:  {sym: '=', txt: '=', math: '='},
  ans:  {sym: 'ans', txt: 'ans', math: 'ans'},
  exp: {sym: '\xD710^', txt: '\xD710^', math: 'e'},
  sqrt: {sym: '^{2}\u221A', txt: '\u221A(', math: 'sqrt('},
  square: {sym: 'x^{2}', txt: '^2', math: '^2'},
  pwr: {sym: 'a^{x}', txt: '^', math: '^', shift: 'logyx'},
  logyx: {multipleCount: 3, sym: "log_{a}(x)", txt: ["log(", ",", ")"], math: ["log(", ",", ")"]},
  openP: {sym: '(', txt: '(', math: '('},
  closeP: {sym: ')', txt: ')', math: ')'},
  cos: {sym: 'cos(', txt: 'cos(', math: 'cos(', shift: 'acos'},
  sin: {sym: 'sin(', txt: 'sin(', math: 'sin(', shift: 'asin'},
  tan: {sym: 'tan(', txt: 'tan(', math: 'tan(', shift: 'atan'},
  acos: {sym: 'cos^{-1}(', txt: 'acos(', math: 'acos(', shift: 'cos'},
  asin: {sym: 'sin^{-1}(', txt: 'asin(', math: 'asin(', shift: 'sin'},
  atan: {sym: 'tan^{-1}(', txt: 'atan(', math: 'atan(', shift: 'tan'},
  log: {sym: 'log(', txt: 'log(', math: 'log('},
  log10: {multipleCount: 2, sym: "log_{10}(", txt: ["log(", ",10)"], math: ["log(", ",10)"]},
  pi: {sym: '\u03C0', txt: '\u03C0', math: 'pi'},
  e: {sym: 'e', txt: 'e', math: 'e'},
  i: {sym: 'i', txt: 'i', math: 'i'},
  fact: {sym: '!', txt: '!', math: '!'},
  // tonum: {sym: '.toNum', txt: '.toNumber()', math: '.toNumber()'},
  sum: {sym: 'sum(', txt: 'sum(', math: 'sum('},
  mean: {sym: 'mean(', txt: 'mean(', math: 'mean('},
  std: {sym: 'std(', txt: 'std(', math: 'std('},
  var: {sym: 'var(', txt: 'var(', math: 'variance('},
  shift: {sym: '\u21A5', txt: 'shift', math: 'shift', shift: 'shiftshift'},
  shiftshift: {sym: '\u21A7', txt: 'shift', math: 'shift', shift: 'shift'},
  comma: {sym: ',', txt: ',', math: ','},
}

// https://www.toptal.com/designers/htmlarrows/math/
