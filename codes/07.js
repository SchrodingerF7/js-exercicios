// 7. Ler 3 números reais do teclado e verificar se o primeiro é maior que a soma dos outros dois.

		var q = parseInt(prompt('Digite o primeiro numero:'));
		var w = parseInt(prompt('Digite o segundo numero:'));
		var e = parseInt(prompt('Digite o terceiro numero:'));


		if (q > w + e) {

			document.write('O primeiro número eh maior que a soma dos outros');
		
		} else {

			document.write('O primeiro número eh menor que a soma dos outros');

		}
