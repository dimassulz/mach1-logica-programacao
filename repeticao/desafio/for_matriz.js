/**
 * Montar um programa onde o usuario informa o número de linhas e colunas e exibir a matriz conforme
 * o exemplo abaixo:
 * [1, 1] [1, 2]
 * [2, 1] [2, 2]
 * [3, 1] [3, 2]
 * [4, 1] [4, 2]
 */
const prompt = require('prompt-sync')();
console.log("Linhas: ")
let usuarioLinha = Number(prompt())
console.log("Colunas: ")
let usuarioColuna = Number(prompt())

let mostrarSaida = '';
for (let linha = 1; linha <= usuarioLinha; linha++) {
    let mostrarLinha = '';
    for (let colunas = 1; colunas <= usuarioColuna; colunas++) {
        mostrarLinha += `[${linha}, ${colunas}]`;
    }
    mostrarSaida += mostrarLinha + '\n';
}
console.log("------------SAIDA DE DADOS------------");
console.log(mostrarSaida);