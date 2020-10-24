 /* 14. Ler três valores e colocá-los em ordem crescente. */
 
 
		var q = parseInt(prompt('Digite o primeiro número: '));
		var w = parseInt(prompt('Digite o segundo número: '));
		var e = parseInt(prompt('Digite o terceiro número: '));

		if (q <= w && w < e) {

			document.write(q + ' - ' + w + ' - ' + e);

		} else if (q <= e && e < w) {

			document.write(q + ' - ' + e + ' - ' + w);

		} else if (w <= q && q < e) {

			document.write(w + ' - ' + q + ' - ' + e);

		} else if (w <= e && e < q) {

			document.write(w + ' - ' + e + ' - ' + q);

		} else if (e <= q && q < w) {

			document.write(e + ' - ' + q + ' - ' + w);

		} else {

			document.write(e + ' - ' + w + '  - ' + q);

		}
