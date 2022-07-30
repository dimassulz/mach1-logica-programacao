const numeros = [10,11,12,13,14,15,16,17,18,19,20];

const prompt = require('prompt-sync')();

console.log("Pesquisa de um numero maior ou igual a 15 e menor que 20");

const pesquisa = Number(prompt("Pesquise um valor entre 10 e 20: "));

const resultadoPesquisa = numeros.find(function (numero) {
    return numero >= 15 && numero === pesquisa
});


if (resultadoPesquisa === undefined) {
    console.log("Número invalido");
}else{
    console.log("Número digitado é 15 ou maior");
}
