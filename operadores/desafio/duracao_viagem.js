/**
Ler a duração de dias e horas.
Calcule e informe a duração total da viagem em número de horas.

Exemplo: 
Numero de dias: 2
Numero de horas: 4
Total de horas: 52
*/

const prompt = require('prompt-sync')();

console.log("Número de dias da viagem: ");
let nDias = Number(prompt()); //3 * 24

console.log("Número de horas da viagem: ");
let nHoras = Number(prompt());// +5

let totalViagemHoras = nDias * 24 + nHoras;

console.log("Total da viagem: ");
console.log(totalViagemHoras + " horas");