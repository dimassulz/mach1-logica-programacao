/**
 * Construa um programa para uma revenda de veículos, 
 * onde essa só financia o veículo com 50 % de entrada 
 * a cada 12 meses os juros são de 14.64 % , ou seja, 1, 22 % ao mês, esse programa deve ler:
 * Marca, modelo e valor de venda.
 * Apresentar como resposta o valor da entrada, marca e nome do veículo e o saldo em 12 x incluindo os juros na parcela.
 * 
 * Valor do carro: R$ 200000
 * Mercedez Benz C - 180
 * Entrada: R$ 100.000
 * Parcelas: +12 x de R$ 9.553, 33
 * 
 */

const prompt = require('prompt-sync')();

console.log('Digite a marca do veículo');
let marca = prompt();

console.log('Digite o modelo do veículo');
let modelo = prompt();

console.log('Digite o valor veículo');
let valorVeiculo = Number(prompt());

if (isNaN(valorVeiculo)) {
    console.log('Digite um valor numérico para o valor do veículo');
    return;
}

console.log('Digite o valor de parcelas desejadas');
let quantidadeParcela = Number(prompt());

if (isNaN(quantidadeParcela)) {
    console.log('Digite um valor numérico para a quantidade de parcelas');
    return;
}

let entrada = valorVeiculo * 0.5;
let financiamento = valorVeiculo * 0.5;
let jurosMensal = financiamento * 0.0122;
let parcelaMensal =
    (financiamento + jurosMensal * quantidadeParcela) / quantidadeParcela;

console.log('Valor do carro: R$ ' + valorVeiculo);
console.log(`${marca} ${modelo}`);
console.log('Entrada: R$ ' + entrada);
console.log('Parcelas: ' + quantidadeParcela + 'x de R$ ' + parcelaMensal.toFixed(2));