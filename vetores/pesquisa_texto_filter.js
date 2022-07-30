const carros = ["Gol", "Palio", "Kwid", "Sentra", "Siena", "Onix", "Kombi", "Fit", "Polo", "Civic"]; // 10 itens

const prompt = require('prompt-sync')();

const pesquisa = prompt("Pesquise um nome de um carro: ");

const resultadoPesquisa = carros.filter(function (nomeCarro) { //filtra o array de carros
    return nomeCarro.includes(pesquisa); // verificando a string dentro do nome do carro (true ou false)
});

console.log(resultadoPesquisa);