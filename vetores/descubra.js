const prompt = require('prompt-sync')();
const erros = [];
const numeroSorteado = Math.floor(Math.random() * 100) + 1;
const numeroChances = 5; //console.log(numeroChances)
let numeroChancesAtual;

console.log(" --- Descubra o numero ---");
do {
    let numero = Number(prompt("Digite um número de 1 a 100 (inteiro): "));

    if (isNaN(numero) || numero < 1 || numero > 100) {
        console.log("Informe um número válido!");
        continue;
    }

    if (numero === numeroSorteado) {
        console.log("Parabéns você acertou o número!");
        return console.log(`Número sorteado: ${numeroSorteado}!`);
    } else {
        if (erros.indexOf(numero) >= 0) {
            console.log(`Você já apostou esse número, tente outro número!`);
            continue;
        } else {
            erros.push(numero);
            let numeroErros = erros.length;
            numeroChancesAtual = numeroChances - numeroErros;
            console.log(`Restam ${numeroChancesAtual} chances`);
        }
    }
}
while (numeroChancesAtual > 0);
console.log("Suas chances acabaram!");
return console.log(`Game over!!!! Número sorteado: ${numeroSorteado}!`);