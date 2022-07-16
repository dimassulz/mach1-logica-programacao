/**
 * Ler um número e apresentar os numeros decrescentes entre esse número até o número 1
 * Regra 1 = O numero informado dever ser inteiro e estar entre 1 e 1000 //Number.isInteger(numero)
 * caso a regra 1 não seja obedecida, informar "Insira um número inteiro entre 1 e 1000"
 * A saída do codigo deve apresentar o exemplo abaixo:
 * Entre os números 1 e 10: 1,2,3,4,5,6,7,8,9,10 
 *
 */

const prompt = require('prompt-sync')();

console.log("Digite um número inteiro: ");
let valorUsuario = Number(prompt()); //converte o dado em numerico (se não for numerico o dado ele vai colocar NaN)

//Verificacao se ele é um número inteiro
if (!Number.isInteger(valorUsuario)) {
    return console.log("Esse número não é um numero válido!!!!!");
}

// verificar se o numero e menor q 1 e maior q 1000
if (valorUsuario < 1 || valorUsuario > 1000) {
    return console.log("Esse número não está entre o intervalo de 1 a 1000");
}

//algoritmo
let textoSaida = `Entre os números 1 e ${valorUsuario}: `;

for(let numero = 1; numero <= valorUsuario; numero++){
    textoSaida += `${numero},`;
}

console.log(textoSaida);