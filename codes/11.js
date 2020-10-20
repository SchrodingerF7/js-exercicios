		/* 11. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo usuário). */

		var qntCobre = parseFloat(prompt('Digite a quantidade de Cobre em gramas:'));
		var qntZinco = parseFloat(prompt('Digite a quantidade de Zinco em gramas:'));

		// calculo gerado para obter o total de matéria e utilizar na fórmula melhor de 3.

		var totalInformado = qntZinco + qntCobre;

		var porcentCobre = ((qntZinco * 100)/totalInformado);
		var porcentZinco = ((qntCobre * 100)/totalInformado);

		// .toFixed(n) = usado para informar a quantidade de casas décimais desejadas após a virgula.

		document.write('A porcentagem de cada material é de ' + porcentZinco.toFixed(2) + '% de Zinco e ' + porcentCobre.toFixed(2) + '% de Cobre.');
