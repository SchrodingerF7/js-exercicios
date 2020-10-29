/* 17. Ler 4 números inteiros e calcular a soma dos que forem par. */


		var q = parseInt(prompt('Digite o primeiro número: '));
		var w = parseInt(prompt('Digite o segundo número: '));
		var e = parseInt(prompt('Digite o terceiro número: '));
		var r = parseInt(prompt('Digite o quarto número: '));
		
		var soma;

		document.write('A soma dos números pares é: ' + isEven());


		/* função para verificar se o número é par e adicionar na variável soma*/

		function isEven () {

			soma = 0;

			if (q % 2 == 0) {

				soma = soma + q;

			}

			if (w % 2 == 0) {

				soma = soma + w;

			}

			if (e % 2 == 0) {

				soma = soma + e;

			}

			if (r % 2 == 0) {

				soma = soma + r;

			}

			return soma;

		} 
