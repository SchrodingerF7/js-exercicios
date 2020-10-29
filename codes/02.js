 
		/* 02. Calcular a média final (usando a ponderação da UFRN) dadas as notas das 3 provas e produzir uma saída com a média e a situação do aluno de acordo com os critérios previstos no regulamento de graduação (CONSULTE O REGULAMENTO NA INTERNET - http://www.sistemas.ufrn.br/download/sigaa/public/regulamento_dos_cursos_de_graduacao.pdf). */

		var nota1 = parseFloat(prompt('Informe a nota da primeira unidade: '));
		var nota2 = parseFloat(prompt('Informe a nota da segunda unidade: '));
		var nota3 = parseFloat(prompt('Informe a nota da terceira unidade: '));


		// lógica para obter resposta de acordo com média final

		if (mediaFinal() >= 5 && mediaFinal() < 7) {

			console.log('Nota: ' + mediaFinal().toFixed(2) + '. - Aprovado por nota!');

		} else if (mediaFinal() >= 7) {

			console.log('Nota: ' + mediaFinal().toFixed(2) + '. - Aprovado!');

		} else {

			console.log('Nota: ' + mediaFinal().toFixed(2) + '. - Reprovado!');

		}


		// função calculo das notas

		function mediaFinal () {

			return ((nota1 + nota2 + nota3)/3);

		}
	
