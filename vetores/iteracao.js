//vetores
const carros = ["Gol", "Palio", "Kwid", "Sentra", "Siena", "Onix", "Kombi", "Fit", "Polo", "Civic"]; // 10 itens
console.log(carros.length); //tamanho do meu array quantidade de itens

//for classico
for (let posicao = 0; posicao < carros.length; posicao++) {
    console.log(`No índice ${posicao} o carro é ${carros[posicao]}`);
}

// for in
// SOMENTE O INDICE DOS ITENS DO ARRAY
console.log("For IN")
for (let posicao in carros) {
    console.log(posicao);
}


// for of
// SOMENTE O VALOR DOS ITENS DO ARRAY
console.log("For OF")
for (let carro of carros) {
    console.log(carro);
}

