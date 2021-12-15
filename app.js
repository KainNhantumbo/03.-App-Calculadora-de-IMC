window.addEventListener('load', function () {
    const btnSubmit = document.querySelector('#btnSubmit');
    const btnReseta = document.getElementById('reset-values');
    const monitor = document.querySelector('.display-result');

    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const altura = document.getElementById('altura').value;
        const peso = document.getElementById('peso').value;
        
        

        const valorIMC = (peso / Math.pow(altura,2)).toFixed(2);
        const classificacao = classificar(valorIMC);

        if (valorIMC === NaN || classificacao === undefined)
        return monitor.textContent = 'Campo vazio detectado. Preencha devidamente os campos.';
        return monitor.textContent = `Olá ${nome}, o seu IMC é de ${valorIMC} e está ${classificacao}.`;
    });

    btnReseta.addEventListener('click', () => {
        monitor.textContent = '';
    });

    function classificar (valorIMC) {
        let classificacao = [
            'abaixo do peso',
            'com peso ideal. Continue assim!',
            'levente acima do peso',
            'com obesidade de grau I',
            'com obesidade de grau II',
            'com obesidade grau III. Cuidado!'
        ];

        if (valorIMC < 18.5)
        return classificacao[0];

        if (valorIMC < 25)
        return classificacao[1];

        if (valorIMC < 30)
        return classificacao[2];
        
        if (valorIMC < 35)
        return classificacao[3];

        if (valorIMC <= 40)
        return classificacao[4];

        if (valorIMC > 40)
        return classificacao[5];
    }
});