"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funkce_1 = require("./funkce");
//console.log(funkce);
test('cifirace ', () => {
    expect((0, funkce_1.ciferace)(0)).toBe(0);
    expect((0, funkce_1.ciferace)(1)).toBe(1);
    expect((0, funkce_1.ciferace)(2)).toBe(2);
    expect((0, funkce_1.ciferace)(3)).toBe(3);
    expect((0, funkce_1.ciferace)(4)).toBe(4);
    expect((0, funkce_1.ciferace)(5)).toBe(5);
    expect((0, funkce_1.ciferace)(6)).toBe(6);
    expect((0, funkce_1.ciferace)(7)).toBe(7);
    expect((0, funkce_1.ciferace)(8)).toBe(8);
    expect((0, funkce_1.ciferace)(9)).toBe(9);
    expect((0, funkce_1.ciferace)(10)).toBe(1);
    expect((0, funkce_1.ciferace)(33)).toBe(6);
    expect((0, funkce_1.ciferace)(39)).toBe(3);
    expect((0, funkce_1.ciferace)(399)).toBe(3);
    expect((0, funkce_1.ciferace)(3999)).toBe(3);
    expect((0, funkce_1.ciferace)(39999)).toBe(3);
    expect((0, funkce_1.ciferace)(399999)).toBe(3);
    expect((0, funkce_1.ciferace)(3999999)).toBe(3);
    expect((0, funkce_1.ciferace)(39999999)).toBe(3);
});
test('cislo', () => {
    expect((0, funkce_1.cislo)([0])).toBe(0);
    expect((0, funkce_1.cislo)([1])).toBe(1);
    expect((0, funkce_1.cislo)([0, 1])).toBe(1);
    expect((0, funkce_1.cislo)([1, 0])).toBe(10);
    expect((0, funkce_1.cislo)([1, 2, 3])).toBe(123);
});
test('Ciferny soucet', () => {
    expect((0, funkce_1.cifSoucet)(1)).toBe(1);
    expect((0, funkce_1.cifSoucet)(10)).toBe(1);
    expect((0, funkce_1.cifSoucet)(11)).toBe(2);
    expect((0, funkce_1.cifSoucet)(111)).toBe(3);
});
