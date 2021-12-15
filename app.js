
const monitor = document.querySelector('.display-result');
const btnSubmit = document.querySelector('#btnSubmit');
const nome = document.querySelector('#nome').value;
// const idade = document.querySelector('#idade').value;
const altura = document.querySelector('#altura').value;
const peso = document.querySelector('#peso').value;

btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();

    console.log(peso)
    console.log(altura)
    
    const valorIMC = (peso / (altura * altura));
    
    console.log(`Olá ${nome}, o seu IMC é de ${valorIMC}.`);


})


