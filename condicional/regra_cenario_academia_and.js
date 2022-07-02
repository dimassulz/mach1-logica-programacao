/**
 * Cenário usando o E (AND)
 * Cenário 1
 * Porém, hoje só vou à academia
 * se eu estiver disposto e não estiver chovendo.
 */

let minhaCondicao1 = 'disposto';
let minhaCondicao2 = 'está chovendo';

//para eu ir a academia eu devo estar DISPOSTO e NÃO ESTAR CHOVENDO
//disposto V
//esta chovendo F
if (minhaCondicao1 == 'disposto' && minhaCondicao2 == 'não está chovendo') { //F
    console.log("Devo ir a academia!");
}else{
    console.log("Não vou a academia!"); 
}

