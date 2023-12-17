import {parse} from "ts-jest";

export function ciferace(a:number):number {
		let celkem = [...a.toString()].reduce( (suma,cislo) => {
			suma += parseInt(cislo);
			return suma;
		},0)
		if (celkem>9) {
			celkem = ciferace(celkem);
		}
		return celkem;
	}


export function cislo(pole:number[]):number {
		return pole.reduce((prev, value) => prev * 10 + value, 0);
	}

export function cifSoucet(a:number):number {
	return [...a.toString()].reduce((suma, cislo) => {
		suma += parseInt(cislo);
		return suma;
	}, 0);
}

export function numberFromString(s:string):number {
	//console.log(s);
	//console.log([...s]);
	return [...s].reduce((prev:number, value) => {
		//console.log(prev);
		//console.log(value);
		const cislo = parseInt(value) ??  0;
		//console.log(`prev ${prev} value ${value} cislo	${cislo} `);
		if (isNaN(cislo)) {
			return prev;
		}

		return prev * 10 + cislo;//( cislo == NaN ? 0 : cislo);
	},0);
	//return parseInt(s);
}

