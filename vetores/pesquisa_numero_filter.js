const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const prompt = require('prompt-sync')();

console.log("Pesquisa de um numero maior ou igual a 15");

const resultadoPesquisa = numeros.filter(function (numero) {
    return numero >= 15
});

console.log(resultadoPesquisa);