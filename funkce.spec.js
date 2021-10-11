const funkce = require('./funkce');
//import {funkce} from './funkce'
//console.log(funkce);

test ('cifirace ', ()=>{
	expect(funkce.ciferace(0)).toBe(0);
	expect(funkce.ciferace(1)).toBe(1);
	expect(funkce.ciferace(2)).toBe(2);
	expect(funkce.ciferace(3)).toBe(3);
	expect(funkce.ciferace(4)).toBe(4);
	expect(funkce.ciferace(5)).toBe(5);
	expect(funkce.ciferace(6)).toBe(6);
	expect(funkce.ciferace(7)).toBe(7);
	expect(funkce.ciferace(8)).toBe(8);
	expect(funkce.ciferace(9)).toBe(9);
	expect(funkce.ciferace(10)).toBe(1);
	expect(funkce.ciferace(33)).toBe(6);
	expect(funkce.ciferace(39)).toBe(3);
	expect(funkce.ciferace(399)).toBe(3);
	expect(funkce.ciferace(3999)).toBe(3);
	expect(funkce.ciferace(39999)).toBe(3);
	expect(funkce.ciferace(399999)).toBe(3);
	expect(funkce.ciferace(3999999)).toBe(3);
	expect(funkce.ciferace(39999999)).toBe(3);
})

test ('cif2',() => {
	expect(funkce.cif2(1)).toBe(1);

})
