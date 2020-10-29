		/* 18. Que informe se um dado ano é ou não bissexto. Obs: um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100. */


		var ano = parseInt(prompt('Informe o ano que deseja verificar: '));

		/* lógica para verificar se o ano é bissexto de acordo com o resultado das funções */


		if (isBissexto() == true || isBissexto2() == true) {

			console.log('Ano Bissexto!');
		}

		else {

			console.log('O ano não é Bissexto');

		}


		// funções usadas para calcular se há resto nas divisões


		function isBissexto () {

			var div = (ano % 4 == 0) && (ano % 100 != 0);

			return div;

		}

		function isBissexto2 () {

			var div = (ano % 400 == 0);

			return div;

		}
 
