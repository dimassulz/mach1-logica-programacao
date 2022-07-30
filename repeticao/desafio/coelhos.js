/**
 * Suponha que o numero de coelhos de um criador quadriplica a cada ano após o primeiro ano
 * Elaborar um programa que leia o numero inicial de coelhos e a quantidade de anos
 * O programa ira exibir ano a ano o numero medio previsto de coelhos.
 * Verificar inicialmente se os campos são numeros validos e o numero inicial tem que ser maior ou igual a 2
 * Exemplo de saida.
 * Usuario entrou com numero de coelhos: 10 e numero de anos 4
 * 
 * Ano 1: 10
 * Ano 2: 40
 * Ano 3: 160
 * Ano 4: 640
 */

const prompt = require('prompt-sync')();

console.log('#### PROGRAMA COELHOS ####');
let numeroInicialCoelhos = Number(prompt('Número inicial coelhos: '));
//validacao se e maior ou igual a 2 o numero inicial de coelhos
if (isNaN(numeroInicialCoelhos) || numeroInicialCoelhos < 2) {
    return console.log("Digite o numero de coelhos maior ou igual a 2"); 
}

const quantidadeAnos = Number(prompt('Quantidade anos: '));

if (isNaN(quantidadeAnos)) {
    return console.log("Digite o valor da quantidade de anos corretamente!");
}

const MULTIPLICADOR_COELHOS = 4; //constante do quadriplicar os coelhos

for (let ano = 1; ano <= quantidadeAnos; ano++) { // itera a quantidade de anos
    console.log(`Ano ${ano}: ${numeroInicialCoelhos}`);
    numeroInicialCoelhos *= MULTIPLICADOR_COELHOS; // multiplicado para quadriplicar o numero de coelhos
}