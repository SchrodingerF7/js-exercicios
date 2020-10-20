		/* 10. Ler a velocidade máxima permitida em uma avenida e a velocidade com que o motorista estava dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são pagos: */

		var velMaxima = parseFloat(prompt('Digite a velocidade máxima permitida na avenida:'));
		var vVeiculo = parseFloat(prompt('Digite a velocidade do veículo:'));

		// calculo para gerar um numero limitante para relacionar ao valor da multa.

		var contadorVelocidade = vVeiculo - velMaxima;

		if (contadorVelocidade > 0 && contadorVelocidade <= 10) {

			document.write('O valor da multa será de 50,00 R$.');

		} else if (contadorVelocidade >= 11 && contadorVelocidade <= 30) {

			document.write('O valor da multa será de 100,00 R$.');

		} else if (contadorVelocidade > 30) {

			document.write('O valor da multa será de 200,00 R$.');

		} else {

			document.write('Não há multa para a velocidade informada.');

		} 
