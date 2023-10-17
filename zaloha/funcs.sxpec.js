const funkce = require('./funcs');
//import {funkce} from './funkce'
console.log(funkce);

test ('sum ', ()=>{
	expect(funkce.suma(1,2)).toBe(3);
	//expect(funkce.ciferace(10)).toBe(1);
})

test ('cif2',() => {
	expect(funkce.suma2(1,2)).toBe(3);

})
