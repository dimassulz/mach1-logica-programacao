/**
 * Dados: let valor1 = 20; let valor2 = 55
 * Montar um algoritmo com o que vimos até o momento para a troca de posições
 * No console apresentar valor1 = 55 e valor2 = 20
 */
let valor1 = 20;
let valor2 = 55;

/* INICIO */
let valorAux = valor1;
valor1 = valor2;
valor2 = valorAux;

//solucao usando o proprio JS
//[valor1, valor2] = [valor2, valor1];

/* FIM */

console.log(valor1);
console.log(valor2);