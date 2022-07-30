/**
 * Ler um número e apresentar a tabuada desse numero
 * Regra 1 = O numero informado dever ser inteiro e estar entre 1 e 100 //Number.isInteger(numero)
 * caso a regra 1 não seja obedecida, informar "Insira um número inteiro entre 1 e 100"
 * A saída do codigo deve apresentar a tabuada do numero inserido
 * Ex.: Número informado: 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * 3 x 3 = 9
 * 3 x 4 = 12
 * 3 x 5 = 15
 * 3 x 6 = 18
 * 3 x 7 = 21
 * 3 x 8 = 24
 * 3 x 9 = 27
 * 3 x 10 = 30
 */

const prompt = require('prompt-sync')();

console.log('#### PROGRAMA TABUADA ####');
let numeroTabuada = Number(prompt('Número informado: '));

if (isNaN(numeroTabuada) || numeroTabuada < 1 || numeroTabuada > 100) {
    return console.log("Insira um número inteiro entre 1 e 100");
}

if (!Number.isInteger(numeroTabuada)) {
    return console.log("Insira um número inteiro");
}

const LIMITE_TABUADA = 10; 

for (let numero = 1; numero <= LIMITE_TABUADA; numero++) { // itera os 10 itens da calculadora
    console.log(`${numeroTabuada} x ${numero} = ${numeroTabuada*numero}`);
}