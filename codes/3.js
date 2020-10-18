// 3. Calcular o valor gasto em cigarros:

        var tempoFumante = parseInt(prompt('Há quantos anos você fuma?'));
		var cigDia = parseInt(prompt('Quantos cigarros você fuma por dia?'));
		var precoCig = parseInt(prompt('Qual o preço da carteira de cigarro?'));


		function calculoCig (tempoFumante, cigDia, precoCig) {

			var totalDias = tempoFumante * 365;
			var totalCigDias = cigDia * totalDias;
			var result = ((totalCigDias/20) * precoCig);

			return result;
		}

		document.write(calculoCig(tempoFumante, cigDia, precoCig));
