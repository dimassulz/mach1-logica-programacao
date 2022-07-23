/**
 1 - Itere todos os itens do array e exiba posição e valor de todas no console.log
 2 - Escreva um comando para remover o "Danilo"
 do array.
 3 - Escreva um comando para remover o "James"
 do array.
 4 - Escreva um comando para adicionar o "Mateus"
 na primeira posição do array.
 5 - Escreva um comando para adicionar o seu nome no final do array.
 6 - Itere todos os itens do array e exiba posição e valor no console.log mas quando chegar na "Maria" saia da iteração.
 7 - Escreva o comando que mostra o indexOf que a "Maria"
 está localizada.
 8 - Escreva o comando que mostra o indexOf que o "Tony"
 está localizado(deve retornar - 1).
 9 - Crie uma nova variável chamada olaBob e defina ela igual o array de pessoas concatenada com "Bob".
 */

let pessoas = ["Danilo", "Maria", "Denis", "James"];

for(let ind = 0; ind < pessoas.length; ind++){
    console.log(`${ind} - ${pessoas[ind]}`); //1
}

pessoas.shift(); //2
//pessoas.splice(0, 1); //2

pessoas.pop() //3
//pessoas.splice(2, 1); //3

pessoas.unshift("Mateus"); //4

pessoas.push("Dimas"); //5