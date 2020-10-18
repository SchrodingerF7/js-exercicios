/* 8. Ler 2 números inteiros do teclado (A e B),  verificar e imprimir qual deles é o maior, ou a mensagem "A=B" caso sejam iguais.*/

		var A = parseInt(prompt('Digite o número A:'));
		var B = parseInt(prompt('Digite o número B:'));

		if (A > B) {

			document.write('A eh maior que B');

		} else if (A < B) {

			document.write('A eh menor que B');

		} else {

			document.write('A eh igual a B');

		}
