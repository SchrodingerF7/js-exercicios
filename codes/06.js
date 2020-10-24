// 6. soma, produto e quociente de 2 números reais:

		var x = parseFloat(prompt('Digite o primeiro numero:'));
		var y = parseFloat(prompt('Digite o segundo numero:'));
		

		// soma

		function soma (x, y) {

			return (x + y);

		}

		document.write(soma(x,y));

        // quebra de linha

		document.write('<br>');


		// produto

		function produto (x, y) {

			return (x * y);

		}

		document.write(produto(x,y));

		document.write('<br>');


		// divisao

		function divisao (x, y) {

			return (x / y);

		}

		document.write(divisao(x,y));
