// 5. Informe a área e o volume de um cilindro.

        var r = parseInt(prompt('Digite o raio do cilindro:'));
		var h = parseInt(prompt('Digite a altura do cilindro:'));

		function aCilindro (r, h) {

			// ATcilindro = 2 (aBase) + aLateral
			// ATcilindro = 2 (Pi * raio²) + 2(pi * raio * altura)

			return (2 *( 3.14 * (r * r))) + (2 * 3.14 * r * h);

		}

		document.write('A área do cilindro eh ' + aCilindro(r, h));

		document.write('<br>')

		function vCilindro (v, h) {

			// Vcilindro = aBase * h
			// Vcilindro = pi * (r²) * h

			return (3.14 * (r * r) * h);

		}

		document.write('O volume do cilindro eh ' + vCilindro(r, h));
