/**
 * Criar um programa onde possa cadastrar muitas pessoas com caracteristicas diferentes (adicionar objetos a um array)
 * A pessoa deve ser um objeto que deve aceitar nome, cpf, cep
 * Assim que as caracteristicas da pessoa forem preenchidas mostrar a msg: Deseja inserir outra pessoa ? S / N
 * Se o usuario digitar S ele volta ao inicio do fluxo
 * Se o usuario digitar N ele o programa encerra
 * No final do mostrar a seguinte saida:
 * 1 | Fernanda Ferreira | 12345678910 | 72001500
 * 2 | Gabriel Fernandes | 12345678911 | 72001500
 * 3 | Maicon Figueira | 12345678912 | 72001503
 */

const prompt = require('prompt-sync')();
let inserirOutroUsuario = 'S';
let listaUsuario = [];
while (inserirOutroUsuario === 'S') {

    let nome = prompt("Digite o nome: ");
    if (nome === "") {
        return console.log("Informe o nome!");
    }
    let cpf = prompt("Digite o CPF: ");
    if (cpf === "") {
        return console.log("Informe o CPF!");
    }
    let cep = prompt("Digite o CEP: ");
    if (cep === "") {
        return console.log("Informe o CEP!");
    }
    let usuario = {
        nome,
        cpf,
        cep
    };
    listaUsuario.push(usuario);
    inserirOutroUsuario = prompt("Deseja inserir outro usuario? S/N ");
}
listaUsuario.forEach(function(usuario, indice){
    console.log(`${++indice} | ${usuario.nome} | ${usuario.cpf} | ${usuario.cep}`);
});
