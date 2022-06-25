/**
 * As vendas do mercado PATATI no setor de higine, estão cada dia piores, para melhorar
 * o mercado resolveu dar um desconto de 50% para um item na compra de 3 unidades do mesmo produto.
 * Ler a descricao do produto e valor
 * Após apresente as mensagens indicando a promoção.
 * Exemplo:
 * Produto: Creme Dental Boldate
 * Preço R$: 8.00
 * Saída Esperada => 
 * Creme Dental Boldate: Promoção leve 3 por R$ 20.00
 * A 3a unidade do Creme Dental Boldate saí por R$ 4.00
 */

const prompt = require('prompt-sync')();
console.log("Digite o nome do produto: ");
let nomeProduto = prompt();

console.log("Digite o preço do produto: ");
let precoProduto = Number(prompt());

let precoUltimoItem = precoProduto * 0.5;

let calculoPromocaoItem = precoProduto * 2 + precoUltimoItem;

console.log(nomeProduto + ": Promoção leve 3 por R$ " + calculoPromocaoItem.toFixed(2));
console.log("A 3a unidade do "+nomeProduto+" saí por R$ " + precoUltimoItem.toFixed(2));

//console.log(`${nomeProduto}: Promoção leve 3 por R$ ${calculoPromocaoItem.toFixed(2)}`);
