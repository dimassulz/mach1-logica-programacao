/**
 * Ler um número e apresentar os numeros decrescentes entre esse número até o número 1
 * Regra 1 = O numero informado dever ser inteiro e estar entre 2 e 1000 //Number.isInteger(numero)
 * caso a regra 1 não seja obedecida, informar "Insira um número inteiro entre 2 e 1000"
 * A saída do codigo deve apresentar o exemplo abaixo:
 * Entre os números 10 e 1: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
 *
 */

const MSG_ERRO = 'Digite números inteiros entre 2 e 1000';
const QUESTAO = 'Insira um número inteiro entre 2 e 1000: ';

const prompt = require('prompt-sync')();

console.log(QUESTAO);
let valorUsuario = Number(prompt());
let mensagemSaida = `Entre os números ${valorUsuario} e 1: `;

if (Number.isInteger(valorUsuario) && valorUsuario >= 2 && valorUsuario <= 1000) {
    for (let n = valorUsuario; n >= 1; n--) {
        mensagemSaida += `${n},`;
    }
    return console.log(mensagemSaida);
} else {
    return console.log(MSG_ERRO);
}