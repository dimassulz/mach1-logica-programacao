const carros = ["Gol", "Palio", "Kwid", "Sentra", "Siena", "Onix", "Kombi", "Fit", "Polo", "Civic"]; // 10 itens

const prompt = require('prompt-sync')();

const pesquisa = prompt("Pesquise um nome de um carro: ");

const resultadoPesquisa = carros.find(function (nomeCarro) {
    return nomeCarro === pesquisa
});


if (!resultadoPesquisa) {
    console.log("Nenhum resultado encontrado!");
} else {
    console.log("Encontramos o carro: "+resultadoPesquisa);
}