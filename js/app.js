window.addEventListener('load', function () {
	const btnSubmit = document.querySelector('#btnSubmit');
	const btnReseta = document.getElementById('reset-values');
	const monitor = document.querySelector('.display-result');

	btnSubmit.addEventListener('click', function (e) {
		e.preventDefault();
		const nome = document.getElementById('nome').value;
		const altura = document.getElementById('altura').value;
		const peso = document.getElementById('peso').value;

		// faz o cálculo de IMC
		const valorIMC = (peso / Math.pow(altura, 2)).toFixed(2);

		// checa se o resultado do cálculo é do tipo infinity
		if (valorIMC === Infinity)
			return (monitor.textContent = 'Valor indeterminado. Tente novamente.');

		// classifica com base no resultado do cálculo de IMC
		const classificacao = classificar(valorIMC);

		// verifica se os campos de valor e se classificação foi bem sucedida,
		// caso contrário exibe mensagens de erro no monitor.
		if (valorIMC === NaN || classificacao === undefined)
			return (monitor.textContent =
				'Campo vazio detectado. Preencha devidamente os campos.');
		return (monitor.textContent = `Olá ${nome}, o seu IMC é de ${valorIMC} e está ${classificacao}`);
	});

	// limpa os campos do formulário
	btnReseta.addEventListener('click', () => {
		monitor.textContent = '';
	});

	// cria as mensagens para o monitor
	function classificar(valorIMC) {
		// mensagens a serem exibidas no monitor
		const classificacao = [
			'abaixo do peso.',
			'com peso ideal. Continue assim!',
			'levente acima do peso.',
			'com obesidade de grau I.',
			'com obesidade de grau II.',
			'com obesidade grau III. Cuidado!',
		];

		// condições em que cada mensagem será exibida no monitor.
		if (valorIMC < 18.5) return classificacao[0];

		if (valorIMC < 25) return classificacao[1];

		if (valorIMC < 30) return classificacao[2];

		if (valorIMC < 35) return classificacao[3];

		if (valorIMC <= 40) return classificacao[4];

		if (valorIMC > 40) return classificacao[5];
	}
});
