import {describe, expect, test} from '@jest/globals';
import {cislo, ciferace, cifSoucet, numberFromString} from './funkce'
//console.log(funkce);

test ('cifirace ', ()=>{
	expect(ciferace(0)).toBe(0);
	expect(ciferace(1)).toBe(1);
	expect(ciferace(2)).toBe(2);
	expect(ciferace(3)).toBe(3);
	expect(ciferace(4)).toBe(4);
	expect(ciferace(5)).toBe(5);
	expect(ciferace(6)).toBe(6);
	expect(ciferace(7)).toBe(7);
	expect(ciferace(8)).toBe(8);
	expect(ciferace(9)).toBe(9);
	expect(ciferace(10)).toBe(1);
	expect(ciferace(33)).toBe(6);
	expect(ciferace(39)).toBe(3);
	expect(ciferace(399)).toBe(3);
	expect(ciferace(3999)).toBe(3);
	expect(ciferace(39999)).toBe(3);
	expect(ciferace(399999)).toBe(3);
	expect(ciferace(3999999)).toBe(3);
	expect(ciferace(39999999)).toBe(3);
})


test ('cislo', () => {
	expect(cislo([0])).toBe(0);
	expect(cislo([1])).toBe(1);
	expect(cislo([0,1])).toBe(1);
	expect(cislo([1,0])).toBe(10);
	expect(cislo([1,2,3])).toBe(123);
});

test ('Ciferny soucet', () => {
	expect(cifSoucet(1)).toBe(1);
	expect(cifSoucet(10)).toBe(1);
	expect(cifSoucet(11)).toBe(2);
	expect(cifSoucet(111)).toBe(3);
});

test('Number from string', () => {
	expect(numberFromString('123')).toBe(123);
	expect(numberFromString('123a')).toBe(123);
	expect(numberFromString('a123')).toBe(123);
	expect(numberFromString('a123a')).toBe(123);
	expect(numberFromString('N 50°05.485')).toBe(5005485);
})