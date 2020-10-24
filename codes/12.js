 
		/* 12. Ler 2 números inteiros do teclado. Se o segundo for diferente de zero, calcular e imprimir o quociente do primeiro pelo segundo. Caso contrário, imprimir a mensagem: "DIVISÃO POR ZERO". */

		var num1 = parseInt(prompt('Digite o número que será dividido: '));
		var num2 = parseInt(prompt('Digite o número que será o divisor: '));

		if (num2 != 0) {

			var result = (num1/num2);
			document.write('O quociente é: ' + result + '.');

		} else {

			document.write('DIVISÃO POR ZERO');

		}
