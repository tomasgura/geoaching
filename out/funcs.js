"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suma = suma;
exports.suma2 = void 0;

// tohle funguje v prohlizeci
function suma(a, b) {
  console.log('volam suma');
  return a + b;
}

var suma2 = function suma2(a, b) {
  return a + b;
}; //export podle es6


exports.suma2 = suma2;
//# sourceMappingURL=funcs.js.map