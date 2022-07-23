//vetores
const carros = ["Gol", "Palio", "Kwid", "Sentra", "Siena", "Onix", , "Fit"]; // 8 itens
// a ultima posicao (indice) do array e o tamanho - 1;
//const carros = new Array();
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3]);
console.log(carros[4]);
console.log(carros[5]);
console.log(carros[6]); // undefined (não definido)
console.log(carros[7]);
console.log(carros[12]); // nao encontra a posicao 12 -> undefined


console.log("Construindo um array a partir de um array vazio");
const marcas = []; // inicio um array vazio

//construindo as posições do array
marcas[0] = "BMW";
marcas[1] = "FIAT";
marcas[2] = "VW";
marcas[3] = "Tesla";

console.log(marcas);