import { cislo, ciferace } from "./funkce"
const funkce = require('./funkce');
//import {funkce} from './funkce'
//console.log(funkce);

//var ciferace = funkce.ciferace;
//var cislo = funkce.cislo;

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

test ('cif2',() => {
	expect(funkce.cif2(1)).toBe(1);

})

test ('cislo', () => {
	expect(cislo([0])).toBe(0);
	expect(cislo([1])).toBe(1);
	expect(cislo([0,1])).toBe(1);
	expect(cislo([1,0])).toBe(10);
	expect(cislo([1,2,3])).toBe(123);
});