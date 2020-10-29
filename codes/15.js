 // 15. Ler os três coeficientes de uma equação de segundo grau e determinar suas raízes.

		var a = parseInt(prompt('Digite o número na posição a: '));
		var b = parseInt(prompt('Digite o número na posição b: '));
		var c = parseInt(prompt('Digite o número na posição c: '));

		// atribuição da raiz quadrada de Báskara em variável
		
		var raizBaskara = Math.sqrt(calcularBaskara());


		// lógica para mostrar resultado

		
		if (calcularBaskara() > 0) {

			document.write('As raizes são: ' + raizXI() + ' e ' + raizXII());

		} else if (calcularBaskara() < 0) {

			document.write('Como delta é negativo, não há raízes.');

		} else {

			document.write('Delta é zero. As raizes são iguais: ' + raizXI() + ' e ' + raizXII());

		}


		//funções para cálculos

		function calcularBaskara () {

			return ((b * b) - (4 * a * c));

		}

		function raizXI () {

			return ((-b) + raizBaskara) / (2 * a);

		}

		function raizXII () {

			return ((-b) - raizBaskara) / (2 * a);

		}
