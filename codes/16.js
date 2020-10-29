/* 16. Ler do teclado as posições de três pontos on plano e dizer se eles formam um triângulo. Caso afirmativo, dizer seu tipo (equilátero, isósceles ou escaleno). */

		var lado1 = parseInt(prompt('Digite as medidas do lado 1: '));
		var lado2 = parseInt(prompt('Digite as medidas do lado 2: '));
		var lado3 = parseInt(prompt('Digite as medidas do lado 3: '));


		// lógica equilatero 

		if (lado1 == lado2 && lado1 == lado3) {

			document.write('Equilatero');

		} // lógica Escaleno  

		else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {

			document.write('Escaleno');

		} 

		// lógica isosceles 

		else if (lado1 != lado2 && lado2 == lado3) {

			document.write('Isosceles');

		} else if (lado1 == lado2 && lado2 != lado3) {

			document.write('Isosceles');

		} else if (lado1 != lado3 && lado3 == lado2) {

			document.write('Isosceles');

		} else if (lado1 == lado3 && lado3 != lado2){

			document.write('Isosceles');

		} 
