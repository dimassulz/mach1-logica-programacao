/**
 * Criar um programa onde possa cadastrar muitos carros com caracteristicas diferentes (adicionar objetos a um array)
 * O carro deve ser um objeto que deve aceitar nome, marca, cor e preco
 * Assim que as caracteristicas do carro forem preenchidas mostrar a msg: Deseja inserir outro carro ? S / N
 * Se o usuario digitar S ele volta ao inicio do fluxo
 * Se o usuario digitar N o programa encerra
 * No final do programa mostrar no console.table() o resultado do array de objetos criado.
 */

const prompt = require('prompt-sync')();

let arrCarros = []; //array
let novoCarro = 'S';
