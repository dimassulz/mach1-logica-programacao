const carros = ["Gol", "Kombi", "Kwid", "Sentra", "Siena", "Onix", "Kombi", "Fit"]; // 8 itens

console.log("Tamanho do array");
console.log(carros.length);

console.log("Transforma o array em string separado por ,");
console.log(carros.toString());

console.log("Transforma o array em string e voce tem a possiblidade escolher o separador");
console.log(carros.join(" # "));

console.log("Verifica se um valor esta incluso no array");
console.log(carros.includes("Kwid")); //pesquisa se o valor esta no array
console.log(carros.includes("Kwid", 3)); //pesquisa se o valor esta no array iniciando do indice 3

console.log("Adiciona um ou mais elementos ao final de um array e retorna o novo tamanho desse array.");
console.log(carros.push("City", "HRV")); //Adicionar o City o HRV depois do Fit no array carros
//console.log(carros.push("City")); //Adicionar o City depois do Fit no array carros
//console.log(carros.push("HRV")); //Adicionar o HRV depois do City no array carros
console.table(carros);

console.log("Adiciona um ou mais elementos no início de um array e retorna o número de elementos");
console.log(carros.unshift("Ka", "Cruze"));
//console.log(carros.unshift("Ka")); //Adicionar o Ka no inicio do array
//console.log(carros.unshift("Cruze")); //Adicionar o Cruze no inicio do array
console.table(carros);

console.log("Remove o ultimo elemento do array");
console.log(carros.pop()); // o valor do item removido
console.table(carros);

console.log("Remove o primeiro elemento do array");
console.log(carros.shift()); // o valor do item removido
console.table(carros);

console.log("remove elementos dentro de array");
console.log(carros.splice(4, 1)); // indice do array, quantidade de itens a ser removido na posicão
console.table(carros);

console.log("retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna - 1 caso o mesmo não esteja presente ");
console.log(carros.indexOf("Kombi"));

console.log("retorna o ultimo índice que um certo elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.");
console.log(carros.lastIndexOf("Kombi"));

console.log("A ordenação é feita em ordem alfabética crescente");
carros.sort();
console.table(carros);

console.log("A ordenação é feita em ordem alfabética decrescente");
carros.reverse();
console.table(carros);