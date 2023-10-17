"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cifSoucet = exports.cislo = exports.ciferace = void 0;
function ciferace(a) {
    let celkem = [...a.toString()].reduce((suma, cislo) => {
        suma += parseInt(cislo);
        return suma;
    }, 0);
    if (celkem > 9) {
        celkem = ciferace(celkem);
    }
    return celkem;
}
exports.ciferace = ciferace;
function cislo(pole) {
    return pole.reduce((prev, value) => prev * 10 + value, 0);
}
exports.cislo = cislo;
function cifSoucet(a) {
    return [...a.toString()].reduce((suma, cislo) => {
        suma += parseInt(cislo);
        return suma;
    }, 0);
}
exports.cifSoucet = cifSoucet;
//exports.ciferace = ciferace;
//exports.cislo = cislo;
//exports.cif2 = function (a:number):number {
//return a
//}
//module.exports = ciferace();
//exports.ciferace = ciferace;
