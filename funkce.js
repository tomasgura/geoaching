function ciferace(a) {
		let celkem = [...a.toString()].reduce( (suma,cislo) => {
			suma += parseInt(cislo);
			return suma;
		},0)
		if (celkem>9) {
			celkem = ciferace(celkem);
		}
		return celkem;
	}

exports.ciferace = ciferace;

exports.cif2 = function (a) {
		return a
	}


//module.exports = ciferace();
//exports.ciferace = ciferace;

