/**
 * Montar um programa onde deve verificar o array de idades informado, 
 * criar uma condicional verificando se existe idade maior do que 18 anos.
 * a saida do programa sera verdadeiro se existir e falso senão existir.
 */

const idades = [12, 18, 15, 17, 14];

let resultadoFind = idades.find(function(value){
    return value > 18; //maior que
});
//find
console.log(resultadoFind); // se encontrar, retorna o primeiro valor encontrado, senao encontrar retorna undefined

//INCLUDES NÃO USAR PARA PESQUISA COM OPERADORES >, >=, <, <=
let resultadoIncludes = idades.includes(22); //valor fixo
//includes (true ou false)
console.log(resultadoIncludes); // se encontrar, retorna true, senao encontrar retorna false

let resultadoSome = idades.some(function(value){
    return value > 18; //maior que
});
//some (true ou false)
console.log(resultadoSome); // se encontrar, retorna true, senao encontrar retorna false