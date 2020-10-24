// 4. Mostrar quociente e resto de divisão 

        var x = parseInt(prompt('Digite o primeiro numero:'));
		var y = parseInt(prompt('Digite o segundo numero:'));
		
		function quociente (x, y) {

			return (x/y); 
		}

		document.write(quociente(x,y));
        
        // quebra de linha

		document.write('<br>');


		function resto (x, y) {

			return (x%y);
		}

		document.write(resto(x,y));
