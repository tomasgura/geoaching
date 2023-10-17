(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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


	function cislo(pole) {
		return pole.reduce((prev, value) => prev * 10 + value, 0);
	}

exports.ciferace = ciferace;
exports.cislo = cislo;

exports.cif2 = function (a) {
		return a
	}


//module.exports = ciferace();
//exports.ciferace = ciferace;


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmdW5rY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIGNpZmVyYWNlKGEpIHtcblx0XHRsZXQgY2Vsa2VtID0gWy4uLmEudG9TdHJpbmcoKV0ucmVkdWNlKCAoc3VtYSxjaXNsbykgPT4ge1xuXHRcdFx0c3VtYSArPSBwYXJzZUludChjaXNsbyk7XG5cdFx0XHRyZXR1cm4gc3VtYTtcblx0XHR9LDApXG5cdFx0aWYgKGNlbGtlbT45KSB7XG5cdFx0XHRjZWxrZW0gPSBjaWZlcmFjZShjZWxrZW0pO1xuXHRcdH1cblx0XHRyZXR1cm4gY2Vsa2VtO1xuXHR9XG5cblxuXHRmdW5jdGlvbiBjaXNsbyhwb2xlKSB7XG5cdFx0cmV0dXJuIHBvbGUucmVkdWNlKChwcmV2LCB2YWx1ZSkgPT4gcHJldiAqIDEwICsgdmFsdWUsIDApO1xuXHR9XG5cbmV4cG9ydHMuY2lmZXJhY2UgPSBjaWZlcmFjZTtcbmV4cG9ydHMuY2lzbG8gPSBjaXNsbztcblxuZXhwb3J0cy5jaWYyID0gZnVuY3Rpb24gKGEpIHtcblx0XHRyZXR1cm4gYVxuXHR9XG5cblxuLy9tb2R1bGUuZXhwb3J0cyA9IGNpZmVyYWNlKCk7XG4vL2V4cG9ydHMuY2lmZXJhY2UgPSBjaWZlcmFjZTtcblxuIl19
